import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const C = {
  bg: "#f4f2ed",
  paper: "#fbfaf7",
  ink: "#111111",
  muted: "#6b6b66",
  line: "#d9d6cc",
  accent: "#2340ff",
};

type Projeto = {
  codigo: string;
  titulo: string;
  descricao: string;
  tech: string;
  link?: string;
  label?: string;
};

const projetos: Projeto[] = [
  {
    codigo: "PRJ-01",
    titulo: "Sistema de Biblioteca",
    descricao:
      "Sistema de biblioteca desenvolvido em Java, aplicando classes e objetos, encapsulamento, herança e polimorfismo.",
    tech: "Java · POO",
    link: "https://github.com/NextCoffeeJ/sistema_biblioteca",
    label: "Repositório",
  },
  {
    codigo: "PRJ-02",
    titulo: "Next Car",
    descricao:
      "Sistema para gerenciamento e venda de carros seminovos, desenvolvido com arquitetura moderna, padrões de projeto e testes automatizados.",
    tech: "Java · Spring Boot · MySQL · Postman",
    link: "https://github.com/NextCar-Project/projeto-next-car",
    label: "Repositório",
  },
  {
    codigo: "PRJ-03",
    titulo: "Chat UDP",
    descricao:
      "Chat desenvolvido com UDP, com confirmação de entrega, simulação de perda de pacotes e retransmissão manual de mensagens.",
    tech: "Python · UDP · Redes de Computadores",
    link: "https://github.com/marcosdalysonsb/Atividade_Redes_Chat",
    label: "Repositório",
  },
  {
    codigo: "PRJ-04",
    titulo: "Jogo de Dados",
    descricao:
      "Jogo interativo desenvolvido com JavaScript, utilizando lógica de programação e geração de resultados aleatórios.",
    tech: "JavaScript · HTML · CSS",
    link: "https://programacao-web-mobile-rxnn.vercel.app/",
    label: "Abrir projeto Web",
  },
  {
    codigo: "PRJ-05",
    titulo: "Extrator de PDF — 5º CTA",
    descricao:
      "Projeto acadêmico desenvolvido em Python para o 5º CTA do Exército Brasileiro, voltado à leitura e extração de dados em arquivos PDF, com uma interface para facilitar a utilização do sistema.",
    tech: "Python",
    label: "Projeto acadêmico",
  },
  {
    codigo: "PRJ-06",
    titulo: "Andador Inteligente",
    descricao:
      "Sistema desenvolvido para monitoramento e segurança do usuário, integrando sensores, câmera, GPS e visão computacional para identificação de quedas e acompanhamento em tempo real.",
    tech: "Python · Raspberry Pi · Flask · SQLite · YOLO · GPS · MPU6050 · Telegram",
    label: "Projeto acadêmico",
  },
  {
    codigo: "PRJ-07",
    titulo: "Next Fit — Sistema de Academia",
    descricao:
      "Projeto de modelagem de banco de dados para uma academia, estruturando informações de alunos, planos, instrutores, treinos e pagamentos, com definição de relacionamentos, chaves e organização das tabelas.",
    tech: "SQL · MER · DER · Modelagem de Dados",
    label: "Projeto acadêmico",
  },
];

function abrirLink(url: string) {
  Linking.openURL(url).catch(() => {
    console.warn("Não foi possível abrir o link:", url);
  });
}

function CardProjeto({ projeto }: { projeto: Projeto }) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={projeto.link ? 0.7 : 1}
      disabled={!projeto.link}
      onPress={() => {
        if (projeto.link) {
          abrirLink(projeto.link);
        }
      }}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.codigo}>{projeto.codigo}</Text>
        <Text style={styles.meta}>
          {projeto.label}
          {projeto.link ? " ↗" : ""}
        </Text>
      </View>

      <Text style={styles.cardTitulo}>{projeto.titulo}</Text>

      <Text style={styles.cardDescricao}>
        {projeto.descricao}
      </Text>

      <Text style={styles.cardTech}>{projeto.tech}</Text>
    </TouchableOpacity>
  );
}

export default function ProjetosScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.logo}
          onPress={() => router.navigate("/")}
        >
          <Text style={styles.logoText}>MD</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.navigate("/")}>
          <Text style={styles.voltar}>← Voltar ao início</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.etiqueta}>04 / PORTFÓLIO</Text>

        <Text style={styles.titulo}>Projetos</Text>

        <Text style={styles.introducao}>
          Uma seleção de projetos acadêmicos e práticos
          desenvolvidos durante minha trajetória de estudos.
        </Text>

        <View style={styles.divisor} />

        {projetos.map((projeto) => (
          <CardProjeto key={projeto.codigo} projeto={projeto} />
        ))}

        <View style={styles.divisor} />

        <Text style={styles.etiqueta}>05 / JOGO NATIVO</Text>

        <Text style={styles.subtitulo}>Jogo da Forca</Text>

        <Text style={styles.introducao}>
          Além dos projetos apresentados, este aplicativo
          inclui uma versão nativa do Jogo da Forca,
          desenvolvida com React Native.
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("/jogo")}
        >
          <Text style={styles.botaoTexto}>
            Jogar Forca →
          </Text>
        </TouchableOpacity>

        <Text style={styles.rodape}>
          © 2026 · Marcos Dalyson
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: C.bg,
  },
  header: {
    height: 66,
    paddingHorizontal: 22,
    borderBottomWidth: 1,
    borderBottomColor: C.line,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 40,
    height: 40,
    borderWidth: 1.5,
    borderColor: C.ink,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontFamily: "monospace",
    fontSize: 14,
    fontWeight: "bold",
    color: C.ink,
  },
  voltar: {
    fontFamily: "monospace",
    fontSize: 11,
    color: C.muted,
  },
  content: {
    paddingHorizontal: 22,
    paddingTop: 35,
    paddingBottom: 40,
  },
  etiqueta: {
    fontFamily: "monospace",
    fontSize: 11,
    color: C.accent,
    letterSpacing: 1,
    marginBottom: 14,
  },
  titulo: {
    fontFamily: "serif",
    fontSize: 43,
    color: C.ink,
    marginBottom: 20,
  },
  subtitulo: {
    fontFamily: "serif",
    fontSize: 28,
    color: C.ink,
    marginBottom: 14,
  },
  introducao: {
    fontSize: 15,
    lineHeight: 25,
    color: C.muted,
  },
  divisor: {
    borderTopWidth: 1,
    borderTopColor: C.line,
    marginTop: 30,
    marginBottom: 25,
  },
  card: {
    backgroundColor: C.paper,
    padding: 22,
    borderWidth: 1,
    borderColor: C.line,
    marginBottom: 14,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },
  codigo: {
    fontFamily: "monospace",
    fontSize: 11,
    fontWeight: "bold",
    color: C.accent,
  },
  meta: {
    fontFamily: "monospace",
    fontSize: 10,
    color: C.muted,
    flexShrink: 1,
    textAlign: "right",
  },
  cardTitulo: {
    fontFamily: "serif",
    fontSize: 22,
    lineHeight: 28,
    color: C.ink,
    marginBottom: 10,
  },
  cardDescricao: {
    fontSize: 14,
    lineHeight: 23,
    color: C.muted,
  },
  cardTech: {
    fontFamily: "monospace",
    fontSize: 11,
    lineHeight: 19,
    color: C.accent,
    marginTop: 16,
  },
  botao: {
    marginTop: 22,
    backgroundColor: C.ink,
    padding: 16,
    alignItems: "center",
  },
  botaoTexto: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 13,
  },
  rodape: {
    marginTop: 35,
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: 10,
    color: C.muted,
  },
});
