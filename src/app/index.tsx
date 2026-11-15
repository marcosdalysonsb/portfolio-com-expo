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
  green: "#20b96a",
};

const menu = [
  { titulo: "Início", rota: "/" },
  { titulo: "Sobre", rota: "/sobre" },
  { titulo: "Acadêmica", rota: "/academica" },
  { titulo: "Profissional", rota: "/profissional" },
  { titulo: "Projetos", rota: "/projetos" },
  { titulo: "Jogo", rota: "/jogo" },
] as const;

const contatos = [
  {
    icone: "🐙",
    titulo: "GITHUB",
    valor: "github.com/marcosdalysonsb",
    url: "https://github.com/marcosdalysonsb",
  },
  {
    icone: "💼",
    titulo: "LINKEDIN",
    valor: "linkedin.com/in/marcos-dalyson",
    url: "https://www.linkedin.com/in/marcos-dalyson-9457373b3/",
  },
  {
    icone: "📧",
    titulo: "E-MAIL",
    valor: "marcosdalyson@gmail.com",
    url: "mailto:marcosdalyson@gmail.com",
  },
];

function abrirLink(url: string) {
  Linking.openURL(url).catch(() => {
    console.warn("Não foi possível abrir o link:", url);
  });
}

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoTexto}>MD</Text>
        </View>

        <Text style={styles.headerTitulo}>PORTFÓLIO / 2026</Text>

        <View style={styles.indicador} />
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.menuScroll}
          contentContainerStyle={styles.menu}
        >
          {menu.map((item) => (
            <TouchableOpacity
              key={item.rota}
              style={styles.menuItem}
              onPress={() => router.navigate(item.rota)}
            >
              <Text style={styles.menuTexto}>{item.titulo}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.status}>
          <View style={styles.statusDot} />
          <Text style={styles.statusTexto}>Disponível para oportunidades</Text>
        </View>

        <Text style={styles.titulo}>Marcos{"\n"}Dalyson</Text>

        <Text style={styles.meta}>
          CIÊNCIA DA COMPUTAÇÃO · UNICAP · 5º PERÍODO
        </Text>

        <Text style={styles.introducao}>
          Estudante de Ciência da Computação, com interesse em desenvolvimento
          web, lógica de programação, resolução de problemas, além de
          curiosidade em Cibersegurança.
          {"\n\n"}
          Busco oportunidades para colocar meus conhecimentos em prática e
          continuar evoluindo profissionalmente.
        </Text>

        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.botaoPrincipal}
            onPress={() => router.push("/projetos")}
          >
            <Text style={styles.botaoPrincipalTexto}>Ver projetos →</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoSecundario}
            onPress={() => abrirLink("https://github.com/marcosdalysonsb")}
          >
            <Text style={styles.botaoSecundarioTexto}>GitHub ↗</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resumo}>
          <View style={styles.resumoItem}>
            <Text style={styles.resumoLabel}>🎓 FORMAÇÃO</Text>
            <Text style={styles.resumoValor}>Ciência da Computação</Text>
          </View>

          <View style={styles.resumoItem}>
            <Text style={styles.resumoLabel}>💡 INTERESSES</Text>
            <Text style={styles.resumoValor}>
              Web, Software, Cibersegurança
            </Text>
          </View>

          <View style={styles.resumoItem}>
            <Text style={styles.resumoLabel}>🎯 OBJETIVO</Text>
            <Text style={styles.resumoValor}>
              Primeira oportunidade em tecnologia
            </Text>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoNumero}>01</Text>
          <Text style={styles.secaoTitulo}>Explorar portfólio</Text>
        </View>

        {menu
          .filter((item) => item.rota !== "/")
          .map((item) => (
            <TouchableOpacity
              key={item.rota}
              style={styles.linkTela}
              onPress={() => router.push(item.rota)}
            >
              <Text style={styles.linkTelaTexto}>{item.titulo}</Text>
              <Text style={styles.seta}>→</Text>
            </TouchableOpacity>
          ))}

        <View style={styles.secao}>
          <Text style={styles.secaoNumero}>02</Text>
          <Text style={styles.secaoTitulo}>Contato</Text>
        </View>

        {contatos.map((contato) => (
          <TouchableOpacity
            key={contato.titulo}
            style={styles.contato}
            onPress={() => abrirLink(contato.url)}
          >
            <View style={{ flex: 1 }}>
              <Text style={styles.contatoLabel}>
                {contato.icone} {contato.titulo}
              </Text>
              <Text style={styles.contatoValor}>{contato.valor}</Text>
            </View>
            <Text style={styles.seta}>↗</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerTexto}>
            Marcos Dalyson · Ciência da Computação
          </Text>
          <Text style={styles.footerTexto}>© 2026 · React Native + Expo</Text>
        </View>
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
    backgroundColor: C.bg,
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
  logoTexto: {
    fontFamily: "monospace",
    fontSize: 14,
    fontWeight: "bold",
    color: C.ink,
  },
  headerTitulo: {
    fontFamily: "monospace",
    fontSize: 11,
    letterSpacing: 1.5,
    color: C.muted,
  },
  indicador: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.accent,
  },
  content: {
    paddingHorizontal: 22,
    paddingBottom: 0,
  },
  menuScroll: {
    marginTop: 18,
    marginBottom: 45,
    flexGrow: 0,
  },
  menu: {
    gap: 10,
    paddingRight: 10,
  },
  menuItem: {
    borderWidth: 1,
    borderColor: C.line,
    backgroundColor: C.paper,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  menuTexto: {
    fontSize: 12,
    fontWeight: "500",
    color: C.ink,
  },
  status: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 9,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: C.paper,
    borderWidth: 1,
    borderColor: C.line,
    borderRadius: 30,
    marginBottom: 28,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: C.green,
  },
  statusTexto: {
    fontSize: 12,
    color: C.ink,
  },
  titulo: {
    fontFamily: "serif",
    fontSize: 58,
    lineHeight: 64,
    letterSpacing: -2,
    color: C.ink,
  },
  meta: {
    fontFamily: "monospace",
    fontSize: 11,
    lineHeight: 19,
    color: C.accent,
    marginTop: 20,
  },
  introducao: {
    fontSize: 15,
    lineHeight: 25,
    color: "#3d3d3a",
    marginTop: 24,
    marginBottom: 30,
  },
  botoes: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 46,
  },
  botaoPrincipal: {
    backgroundColor: C.ink,
    paddingVertical: 15,
    paddingHorizontal: 22,
  },
  botaoPrincipalTexto: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "600",
  },
  botaoSecundario: {
    borderWidth: 1,
    borderColor: C.ink,
    paddingVertical: 14,
    paddingHorizontal: 22,
  },
  botaoSecundarioTexto: {
    color: C.ink,
    fontSize: 13,
    fontWeight: "600",
  },
  resumo: {
    borderTopWidth: 2,
    borderTopColor: C.ink,
    marginBottom: 35,
  },
  resumoItem: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: C.line,
  },
  resumoLabel: {
    fontFamily: "monospace",
    fontSize: 11,
    color: C.muted,
    marginBottom: 6,
  },
  resumoValor: {
    color: C.ink,
    fontSize: 16,
  },
  secao: {
    borderTopWidth: 1,
    borderTopColor: C.line,
    paddingTop: 28,
    marginTop: 25,
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  secaoNumero: {
    fontFamily: "monospace",
    fontSize: 13,
    fontWeight: "bold",
    color: C.accent,
  },
  secaoTitulo: {
    fontFamily: "serif",
    fontSize: 29,
    color: C.ink,
  },
  linkTela: {
    backgroundColor: C.paper,
    borderWidth: 1,
    borderColor: C.line,
    padding: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linkTelaTexto: {
    fontFamily: "serif",
    fontSize: 20,
    color: C.ink,
  },
  seta: {
    fontSize: 20,
    color: C.accent,
  },
  contato: {
    borderTopWidth: 1,
    borderTopColor: C.line,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  contatoLabel: {
    fontFamily: "monospace",
    fontSize: 11,
    letterSpacing: 1,
    color: C.muted,
    marginBottom: 7,
  },
  contatoValor: {
    fontSize: 14,
    color: C.ink,
  },
  footer: {
    backgroundColor: C.ink,
    marginHorizontal: -22,
    paddingHorizontal: 24,
    paddingVertical: 35,
    marginTop: 35,
    gap: 10,
  },
  footerTexto: {
    fontFamily: "monospace",
    fontSize: 11,
    lineHeight: 19,
    color: "#c9c7c0",
  },
});
