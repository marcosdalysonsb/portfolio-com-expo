import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  StatusBar,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

// CORES DO PORTFÓLIO
const COLORS = {
  bg: "#f4f2ed",
  paper: "#fbfaf7",
  ink: "#111111",
  muted: "#6b6b66",
  line: "#d9d6cc",
  accent: "#2340ff",
  panel: "#ebe9e2",
  green: "#20a866",
  red: "#c83c3c",
};

// CATEGORIAS E PALAVRAS
const categorias = [
  {
    nome: "ANIMAIS",
    palavras: [
      "CACHORRO",
      "GATO",
      "ELEFANTE",
      "GIRAFA",
      "COELHO",
      "MACACO",
      "TARTARUGA",
      "CAVALO",
      "PAPAGAIO",
      "BORBOLETA",
    ],
  },
  {
    nome: "OBJETOS",
    palavras: [
      "CADEIRA",
      "TESOURA",
      "ESPELHO",
      "MOCHILA",
      "TRAVESSEIRO",
      "TELEFONE",
      "GELADEIRA",
      "RELOGIO",
      "CARTEIRA",
      "GUARDA CHUVA",
    ],
  },
  {
    nome: "COMIDAS",
    palavras: [
      "PIZZA",
      "LASANHA",
      "HAMBURGUER",
      "COXINHA",
      "PASTEL",
      "TAPIOCA",
      "CUSCUZ",
      "FEIJOADA",
      "BRIGADEIRO",
      "MACARRAO",
    ],
  },
];

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const MAX_ERROS = 6;

type Partida = {
  categoria: string;
  palavra: string;
};

// SORTEAR UMA PARTIDA
function sortearPartida(): Partida {
  const categoria =
    categorias[Math.floor(Math.random() * categorias.length)];

  const palavra =
    categoria.palavras[
      Math.floor(Math.random() * categoria.palavras.length)
    ];

  return {
    categoria: categoria.nome,
    palavra,
  };
}

// LINHAS DO DESENHO DA FORCA
type LinhaProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  espessura?: number;
};

function Linha({
  x1,
  y1,
  x2,
  y2,
  espessura = 4,
}: LinhaProps) {
  const comprimento = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
  );

  const angulo =
    (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

  return (
    <View
      style={{
        position: "absolute",
        left: (x1 + x2) / 2 - comprimento / 2,
        top: (y1 + y2) / 2 - espessura / 2,
        width: comprimento,
        height: espessura,
        backgroundColor: COLORS.ink,
        transform: [{ rotate: `${angulo}deg` }],
      }}
    />
  );
}

// DESENHO DA FORCA
function DesenhoForca({ erros }: { erros: number }) {
  return (
    <View style={styles.desenhoContainer}>
      <View style={styles.desenho}>
        {/* ESTRUTURA DA FORCA */}
        <Linha x1={25} y1={325} x2={235} y2={325} espessura={5} />

        <Linha x1={72} y1={325} x2={72} y2={45} espessura={5} />

        <Linha x1={72} y1={47} x2={217} y2={47} espessura={5} />

        <Linha x1={217} y1={47} x2={217} y2={90} />

        {/* PARTES DO BONECO */}
        {erros >= 1 && <View style={styles.cabeca} />}

        {erros >= 2 && (
          <Linha x1={217} y1={140} x2={217} y2={215} />
        )}

        {erros >= 3 && (
          <Linha x1={217} y1={155} x2={180} y2={195} />
        )}

        {erros >= 4 && (
          <Linha x1={217} y1={155} x2={254} y2={195} />
        )}

        {erros >= 5 && (
          <Linha x1={217} y1={215} x2={185} y2={265} />
        )}

        {erros >= 6 && (
          <Linha x1={217} y1={215} x2={249} y2={265} />
        )}
      </View>
    </View>
  );
}

// TELA PRINCIPAL DO JOGO
export default function JogoScreen() {
  const { width } = useWindowDimensions();

  const [partida, setPartida] = useState<Partida>(sortearPartida);

  const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);

  const palavra = partida.palavra;

  // LETRAS CORRETAS
  const letrasCorretas = letrasUsadas.filter((letra) =>
    palavra.includes(letra)
  );

  // LETRAS ERRADAS
  const letrasErradas = letrasUsadas.filter(
    (letra) => !palavra.includes(letra)
  );

  const erros = letrasErradas.length;

  const tentativasRestantes = MAX_ERROS - erros;

  // VERIFICAR VITÓRIA
  const venceu = palavra
    .split("")
    .filter((letra) => letra !== " ")
    .every((letra) => letrasUsadas.includes(letra));

  // VERIFICAR DERROTA
  const perdeu = erros >= MAX_ERROS;

  const jogoFinalizado = venceu || perdeu;

  // ESCOLHER LETRA
  function escolherLetra(letra: string) {
    if (jogoFinalizado || letrasUsadas.includes(letra)) {
      return;
    }

    setLetrasUsadas((atual) => [...atual, letra]);
  }

  // INICIAR NOVA PARTIDA
  function iniciarNovoJogo() {
    setPartida(sortearPartida());
    setLetrasUsadas([]);
  }

  // TECLADO RESPONSIVO
  const quantidadeColunas = width <= 360 ? 6 : 7;

  const larguraDisponivel = Math.min(width, 650) - 78;

  const larguraTecla =
    (larguraDisponivel - (quantidadeColunas - 1) * 6) /
    quantidadeColunas;

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <StatusBar barStyle="dark-content" />

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Pressable
          style={styles.logo}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.logoText}>MD</Text>
        </Pressable>

        <Pressable onPress={() => router.replace("/")}>
          <Text style={styles.voltar}>← Voltar ao portfólio</Text>
        </Pressable>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.conteudo}
        showsVerticalScrollIndicator={false}
      >
        {/* TÍTULO */}
        <View style={styles.tituloArea}>
          <View style={styles.etiqueta}>
            <Text style={styles.etiquetaText}>
              DESAFIO DE PALAVRAS
            </Text>
          </View>

          <Text style={styles.titulo}>
            Jogo da{" "}
            <Text style={styles.tituloAzul}>Forca</Text>
          </Text>

          <Text style={styles.subtitulo}>
            Descubra a palavra antes que suas tentativas acabem.
          </Text>
        </View>

        {/* TEMA */}
        <View style={styles.tema}>
          <Text style={styles.temaLabel}>TEMA</Text>

          <Text style={styles.temaValor}>
            {partida.categoria}
          </Text>
        </View>

        {/* ÁREA DO JOGO */}
        <View style={styles.jogo}>
          {/* PAINEL DA FORCA */}
          <View style={styles.painelForca}>
            <View style={styles.tentativas}>
              <Text style={styles.tentativasLabel}>
                TENTATIVAS RESTANTES
              </Text>

              <Text style={styles.tentativasNumero}>
                {tentativasRestantes}
              </Text>

              <Text style={styles.tentativasTotal}>
                de {MAX_ERROS}
              </Text>
            </View>

            <DesenhoForca erros={erros} />
          </View>

          {/* PAINEL DO JOGO */}
          <View style={styles.painelJogo}>
            {/* PALAVRA SECRETA */}
            <View style={styles.palavraContainer}>
              {palavra.split("").map((letra, index) => {
                if (letra === " ") {
                  return (
                    <View
                      key={`espaco-${index}`}
                      style={styles.espacoPalavra}
                    />
                  );
                }

                const revelada =
                  letrasUsadas.includes(letra) || perdeu;

                return (
                  <Text
                    key={`${letra}-${index}`}
                    style={[
                      styles.letraPalavra,
                      perdeu &&
                        !letrasUsadas.includes(letra) &&
                        styles.letraRevelada,
                    ]}
                  >
                    {revelada ? letra : "_"}
                  </Text>
                );
              })}
            </View>

            {/* INSTRUÇÃO */}
            {!jogoFinalizado && (
              <Text style={styles.instrucao}>
                ESCOLHA UMA LETRA:
              </Text>
            )}

            {/* VITÓRIA */}
            {venceu && (
              <View
                style={[
                  styles.resultado,
                  styles.resultadoVitoria,
                ]}
              >
                <View
                  style={[
                    styles.resultadoIcone,
                    { backgroundColor: COLORS.green },
                  ]}
                >
                  <Text style={styles.resultadoIconeTexto}>
                    ✓
                  </Text>
                </View>

                <View style={styles.resultadoConteudo}>
                  <Text style={styles.resultadoTitulo}>
                    Parabéns!
                  </Text>

                  <Text style={styles.resultadoDescricao}>
                    Você descobriu a palavra.
                  </Text>
                </View>
              </View>
            )}

            {/* DERROTA */}
            {perdeu && (
              <View
                style={[
                  styles.resultado,
                  styles.resultadoDerrota,
                ]}
              >
                <View
                  style={[
                    styles.resultadoIcone,
                    { backgroundColor: COLORS.red },
                  ]}
                >
                  <Text style={styles.resultadoIconeTexto}>
                    ×
                  </Text>
                </View>

                <View style={styles.resultadoConteudo}>
                  <Text style={styles.resultadoTitulo}>
                    Fim de jogo!
                  </Text>

                  <Text style={styles.resultadoDescricao}>
                    A palavra era {palavra}.
                  </Text>
                </View>
              </View>
            )}

            {/* TECLADO */}
            <View style={styles.teclado}>
              {alfabeto.map((letra) => {
                const usada = letrasUsadas.includes(letra);

                const correta =
                  usada && palavra.includes(letra);

                const errada =
                  usada && !palavra.includes(letra);

                return (
                  <Pressable
                    key={letra}
                    onPress={() => escolherLetra(letra)}
                    disabled={usada || jogoFinalizado}
                    accessibilityRole="button"
                    accessibilityLabel={`Letra ${letra}`}
                    accessibilityState={{
                      disabled: usada || jogoFinalizado,
                    }}
                    style={[
                      styles.tecla,
                      { width: larguraTecla },
                      correta && styles.teclaCorreta,
                      errada && styles.teclaErrada,
                    ]}
                  >
                    <Text
                      style={[
                        styles.teclaTexto,
                        usada && styles.teclaTextoUsada,
                      ]}
                    >
                      {letra}
                    </Text>
                  </Pressable>
                );
              })}
            </View>

            {/* LETRAS JÁ UTILIZADAS */}
            <View style={styles.usadas}>
              <View style={styles.grupoLetras}>
                <Text style={styles.grupoTitulo}>
                  LETRAS CORRETAS
                </Text>

                <View style={styles.listaLetras}>
                  {letrasCorretas.length === 0 ? (
                    <Text style={styles.nenhuma}>
                      Nenhuma
                    </Text>
                  ) : (
                    letrasCorretas.map((letra) => (
                      <View
                        key={letra}
                        style={styles.letraCorretaTag}
                      >
                        <Text style={styles.letraCorretaTexto}>
                          {letra}
                        </Text>
                      </View>
                    ))
                  )}
                </View>
              </View>

              <View style={styles.grupoLetras}>
                <Text style={styles.grupoTitulo}>
                  LETRAS ERRADAS
                </Text>

                <View style={styles.listaLetras}>
                  {letrasErradas.length === 0 ? (
                    <Text style={styles.nenhuma}>
                      Nenhuma
                    </Text>
                  ) : (
                    letrasErradas.map((letra) => (
                      <View
                        key={letra}
                        style={styles.letraErradaTag}
                      >
                        <Text style={styles.letraErradaTexto}>
                          {letra}
                        </Text>
                      </View>
                    ))
                  )}
                </View>
              </View>
            </View>

            {/* BOTÃO NOVA PARTIDA */}
            {jogoFinalizado && (
              <Pressable
                style={styles.novoJogo}
                onPress={iniciarNovoJogo}
              >
                <Text style={styles.novoJogoTexto}>
                  Nova palavra →
                </Text>
              </Pressable>
            )}
          </View>
        </View>

        {/* INFORMAÇÃO */}
        <View style={styles.informacao}>
          <Text style={styles.informacaoIcone}>💡</Text>

          <Text style={styles.informacaoTexto}>
            O tema funciona como a dica. Descubra a palavra
            usando as letras disponíveis.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ESTILOS REACT NATIVE
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  header: {
    height: 64,
    paddingHorizontal: 20,
    backgroundColor: COLORS.bg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo: {
    width: 38,
    height: 38,
    borderWidth: 1.5,
    borderColor: COLORS.ink,
    alignItems: "center",
    justifyContent: "center",
  },

  logoText: {
    fontFamily: "monospace",
    fontSize: 14,
    fontWeight: "700",
    color: COLORS.ink,
  },

  voltar: {
    fontFamily: "monospace",
    fontSize: 11,
    color: COLORS.muted,
  },

  scroll: {
    flex: 1,
  },

  conteudo: {
    width: "100%",
    maxWidth: 650,
    alignSelf: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
  },

  tituloArea: {
    marginBottom: 32,
  },

  etiqueta: {
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: COLORS.line,
    backgroundColor: COLORS.paper,
    marginBottom: 16,
  },

  etiquetaText: {
    fontFamily: "monospace",
    fontSize: 10,
    letterSpacing: 1,
    color: COLORS.accent,
  },

  titulo: {
    fontFamily: "serif",
    fontSize: 48,
    lineHeight: 54,
    letterSpacing: -1.5,
    color: COLORS.ink,
  },

  tituloAzul: {
    color: COLORS.accent,
  },

  subtitulo: {
    marginTop: 14,
    fontSize: 14,
    lineHeight: 22,
    color: COLORS.muted,
  },

  tema: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.ink,
    paddingHorizontal: 18,
    paddingVertical: 16,
  },

  temaLabel: {
    fontFamily: "monospace",
    fontSize: 11,
    letterSpacing: 1,
    color: "#aaaaaa",
  },

  temaValor: {
    fontFamily: "monospace",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#ffffff",
  },

  jogo: {
    backgroundColor: COLORS.paper,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderTopWidth: 0,
  },

  painelForca: {
    backgroundColor: COLORS.panel,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
  },

  tentativas: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 10,
  },

  tentativasLabel: {
    fontFamily: "monospace",
    fontSize: 10,
    letterSpacing: 0.5,
    color: COLORS.muted,
  },

  tentativasNumero: {
    fontFamily: "serif",
    fontSize: 32,
    color: COLORS.accent,
  },

  tentativasTotal: {
    fontFamily: "monospace",
    fontSize: 11,
    color: COLORS.muted,
  },

  desenhoContainer: {
    height: 290,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  desenho: {
    width: 280,
    height: 350,
    position: "relative",
    transform: [{ scale: 0.78 }],
  },

  cabeca: {
    position: "absolute",
    top: 90,
    left: 192,
    width: 50,
    height: 50,
    borderWidth: 4,
    borderColor: COLORS.ink,
    borderRadius: 25,
  },

  painelJogo: {
    paddingHorizontal: 18,
    paddingVertical: 28,
  },

  palavraContainer: {
    minHeight: 90,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 15,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
  },

  letraPalavra: {
    minWidth: 19,
    fontFamily: "monospace",
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.ink,
    textAlign: "center",
  },

  letraRevelada: {
    color: COLORS.red,
  },

  espacoPalavra: {
    width: 14,
  },

  instrucao: {
    marginTop: 25,
    marginBottom: 14,
    fontFamily: "monospace",
    fontSize: 11,
    letterSpacing: 1,
    color: COLORS.muted,
  },

  resultado: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    marginTop: 22,
    marginBottom: 12,
    padding: 15,
    borderWidth: 1,
  },

  resultadoVitoria: {
    borderColor: COLORS.green,
    backgroundColor: "#eef9f3",
  },

  resultadoDerrota: {
    borderColor: COLORS.red,
    backgroundColor: "#fff1f1",
  },

  resultadoIcone: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },

  resultadoIconeTexto: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffffff",
  },

  resultadoConteudo: {
    flex: 1,
  },

  resultadoTitulo: {
    fontFamily: "serif",
    fontSize: 19,
    fontWeight: "700",
    color: COLORS.ink,
  },

  resultadoDescricao: {
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.ink,
  },

  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 6,
    marginTop: 20,
  },

  tecla: {
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.line,
    backgroundColor: COLORS.bg,
  },

  teclaTexto: {
    fontFamily: "monospace",
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.ink,
  },

  teclaCorreta: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.green,
  },

  teclaErrada: {
    backgroundColor: COLORS.red,
    borderColor: COLORS.red,
  },

  teclaTextoUsada: {
    color: "#ffffff",
  },

  usadas: {
    marginTop: 30,
    paddingTop: 22,
    borderTopWidth: 1,
    borderTopColor: COLORS.line,
    gap: 20,
  },

  grupoLetras: {
    gap: 10,
  },

  grupoTitulo: {
    fontFamily: "monospace",
    fontSize: 10,
    letterSpacing: 1,
    color: COLORS.muted,
  },

  listaLetras: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 6,
    minHeight: 28,
  },

  nenhuma: {
    fontFamily: "monospace",
    fontSize: 12,
    color: "#aaaaaa",
  },

  letraCorretaTag: {
    minWidth: 28,
    height: 28,
    paddingHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e3f4eb",
  },

  letraCorretaTexto: {
    fontFamily: "monospace",
    fontSize: 12,
    fontWeight: "700",
    color: "#187d4b",
  },

  letraErradaTag: {
    minWidth: 28,
    height: 28,
    paddingHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8e3e3",
  },

  letraErradaTexto: {
    fontFamily: "monospace",
    fontSize: 12,
    fontWeight: "700",
    color: "#a92e2e",
  },

  novoJogo: {
    alignSelf: "flex-start",
    marginTop: 30,
    paddingHorizontal: 22,
    paddingVertical: 14,
    backgroundColor: COLORS.ink,
  },

  novoJogoTexto: {
    fontFamily: "monospace",
    fontSize: 12,
    fontWeight: "700",
    color: "#ffffff",
  },

  informacao: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.line,
    backgroundColor: COLORS.paper,
  },

  informacaoIcone: {
    fontSize: 20,
  },

  informacaoTexto: {
    flex: 1,
    fontSize: 13,
    lineHeight: 20,
    color: COLORS.ink,
  },
});
