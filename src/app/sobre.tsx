import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
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

const habilidades = [
  {
    codigo: "HAB-01",
    titulo: "Frontend",
    itens: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    codigo: "HAB-02",
    titulo: "Programação",
    itens: ["Python", "Java", "C", "Lógica de Programação", "POO"],
  },
  {
    codigo: "HAB-03",
    titulo: "Redes",
    itens: ["Redes de Computadores", "Cisco Packet Tracer"],
  },
  {
    codigo: "HAB-04",
    titulo: "Ferramentas",
    itens: ["Git", "GitHub", "VSCode", "VirtualBox", "Vercel"],
  },
  {
    codigo: "HAB-05",
    titulo: "Banco de Dados",
    itens: ["SQL", "MySQL"],
  },
];

const tecnologiasApp = [
  {
    nome: "React Native",
    descricao: "Construção das interfaces nativas do aplicativo.",
  },
  {
    nome: "Expo",
    descricao: "Ambiente de desenvolvimento, execução e testes do app.",
  },
  {
    nome: "Expo Router",
    descricao: "Navegação entre as telas por meio de rotas.",
  },
  {
    nome: "TypeScript e TSX",
    descricao: "Tipagem, componentes e organização do código.",
  },
  {
    nome: "React Hooks",
    descricao: "Gerenciamento de estados e referências dos componentes.",
  },
  {
    nome: "StyleSheet",
    descricao: "Estilização das telas com recursos do React Native.",
  },
  {
    nome: "React Native Safe Area Context",
    descricao: "Ajuste do conteúdo às áreas seguras da tela do celular.",
  },
  {
    nome: "Linking",
    descricao: "Abertura de links externos, como GitHub e LinkedIn.",
  },
];

export default function SobreScreen() {
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
        <Text style={styles.etiqueta}>01 / PERFIL</Text>
        <Text style={styles.titulo}>Sobre mim</Text>

        <Text style={styles.introducao}>
          Sou estudante de Ciência da Computação na Universidade
          Católica de Pernambuco (UNICAP), atualmente no 5º período.
          Tenho interesse em desenvolvimento web, desenvolvimento
          de software, lógica de programação e cibersegurança.
        </Text>

        <Text style={styles.introducao}>
          Busco aprimorar meus conhecimentos por meio de projetos
          acadêmicos e atividades práticas, desenvolvendo minhas
          habilidades em programação e resolução de problemas.
        </Text>

        <View style={styles.divisor} />

        <Text style={styles.numeroSecao}>01 — CONHECIMENTOS</Text>
        <Text style={styles.subtitulo}>Habilidades técnicas</Text>

        {habilidades.map((grupo) => (
          <View key={grupo.codigo} style={styles.card}>
            <Text style={styles.codigo}>{grupo.codigo}</Text>
            <Text style={styles.cardTitulo}>{grupo.titulo}</Text>

            <View style={styles.tags}>
              {grupo.itens.map((item) => (
                <View key={item} style={styles.tag}>
                  <Text style={styles.tagText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        <View style={styles.divisor} />

        <Text style={styles.numeroSecao}>02 — DESENVOLVIMENTO</Text>
        <Text style={styles.subtitulo}>
          Tecnologias utilizadas neste aplicativo
        </Text>

        <Text style={styles.descricaoSecao}>
          Este portfólio foi adaptado de uma aplicação Web em
          Next.js para um aplicativo desenvolvido com React Native
          e Expo.
        </Text>

        {tecnologiasApp.map((item, index) => (
          <View key={item.nome} style={styles.card}>
            <Text style={styles.codigo}>
              APP-{String(index + 1).padStart(2, "0")}
            </Text>
            <Text style={styles.cardTitulo}>{item.nome}</Text>
            <Text style={styles.cardDescricao}>
              {item.descricao}
            </Text>
          </View>
        ))}

        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("/academica")}
        >
          <Text style={styles.botaoTexto}>
            Ver experiência acadêmica →
          </Text>
        </TouchableOpacity>

        <Text style={styles.rodape}>
          © 2026 · Portfólio React Native + Expo
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
    lineHeight: 50,
    color: C.ink,
    marginBottom: 20,
  },
  introducao: {
    fontSize: 15,
    lineHeight: 25,
    color: C.muted,
    marginBottom: 15,
  },
  divisor: {
    borderTopWidth: 1,
    borderTopColor: C.line,
    marginTop: 25,
    marginBottom: 28,
  },
  numeroSecao: {
    fontFamily: "monospace",
    fontSize: 11,
    color: C.accent,
    marginBottom: 10,
  },
  subtitulo: {
    fontFamily: "serif",
    fontSize: 27,
    color: C.ink,
    marginBottom: 20,
  },
  descricaoSecao: {
    color: C.muted,
    fontSize: 14,
    lineHeight: 23,
    marginBottom: 18,
  },
  card: {
    padding: 22,
    backgroundColor: C.paper,
    borderWidth: 1,
    borderColor: C.line,
    marginBottom: 14,
  },
  codigo: {
    fontFamily: "monospace",
    fontSize: 11,
    fontWeight: "bold",
    color: C.accent,
    marginBottom: 12,
  },
  cardTitulo: {
    fontFamily: "serif",
    fontSize: 22,
    color: C.ink,
    marginBottom: 10,
  },
  cardDescricao: {
    color: C.muted,
    fontSize: 14,
    lineHeight: 23,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 5,
  },
  tag: {
    backgroundColor: C.bg,
    borderWidth: 1,
    borderColor: C.line,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  tagText: {
    fontFamily: "monospace",
    fontSize: 11,
    color: C.ink,
  },
  botao: {
    backgroundColor: C.ink,
    padding: 16,
    alignItems: "center",
    marginTop: 20,
  },
  botaoTexto: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "600",
  },
  rodape: {
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: 10,
    color: C.muted,
    marginTop: 35,
  },
});
