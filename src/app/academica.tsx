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

const formacoes = [
  {
    codigo: "ACA-01",
    meta: "5º PERÍODO",
    titulo: "Ciência da Computação",
    descricao:
      "Universidade Católica de Pernambuco (UNICAP) · Formação acadêmica.",
  },
  {
    codigo: "ACA-02",
    meta: "2023",
    titulo: "Técnico em Redes de Computadores",
    descricao:
      "ETE Pastor Isaac Martins Rodrigues · Ensino médio técnico.",
  },
];

const atividades = [
  {
    codigo: "EXT-01",
    titulo: "Palestra — Lógica de Programação",
    descricao:
      "Participação na Jornada de Tecnologia UNICAP 2026, com foco nos fundamentos necessários para o desenvolvimento de boas práticas de programação.",
  },
  {
    codigo: "EXT-02",
    titulo: "Minicurso Introdução à Linguagem C",
    descricao:
      "Participação em minicurso sobre os fundamentos e conceitos básicos da linguagem C, durante a Jornada de Tecnologia UNICAP 2026.",
  },
  {
    codigo: "EXT-03",
    titulo: "Palestra — Pré-programação",
    descricao:
      "Participação em palestra sobre estruturação do raciocínio lógico e planejamento de soluções antes da implementação do código.",
  },
];

type CardProps = {
  codigo: string;
  titulo: string;
  descricao: string;
  meta?: string;
};

function Card({ codigo, titulo, descricao, meta }: CardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.codigo}>{codigo}</Text>
        {meta && <Text style={styles.meta}>{meta}</Text>}
      </View>

      <Text style={styles.cardTitulo}>{titulo}</Text>
      <Text style={styles.cardDescricao}>{descricao}</Text>
    </View>
  );
}

export default function AcademicaScreen() {
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
        <Text style={styles.etiqueta}>02 / FORMAÇÃO</Text>
        <Text style={styles.titulo}>
          Experiência Acadêmica
        </Text>

        <Text style={styles.introducao}>
          Minha trajetória acadêmica reúne conhecimentos
          em Ciência da Computação, redes de computadores
          e atividades complementares de tecnologia.
        </Text>

        <View style={styles.divisor} />

        <Text style={styles.numeroSecao}>01 — FORMAÇÃO</Text>
        <Text style={styles.subtitulo}>Educação</Text>

        {formacoes.map((item) => (
          <Card key={item.codigo} {...item} />
        ))}

        <View style={styles.divisor} />

        <Text style={styles.numeroSecao}>
          02 — ATIVIDADES COMPLEMENTARES
        </Text>
        <Text style={styles.subtitulo}>
          Extracurriculares
        </Text>

        {atividades.map((item) => (
          <Card key={item.codigo} {...item} />
        ))}

        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("/profissional")}
        >
          <Text style={styles.botaoTexto}>
            Ver experiência profissional →
          </Text>
        </TouchableOpacity>

        <Text style={styles.rodape}>
          Marcos Dalyson · Ciência da Computação
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: C.line,
  },
  logo: {
    width: 40,
    height: 40,
    borderWidth: 1.5,
    borderColor: C.ink,
    justifyContent: "center",
    alignItems: "center",
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
    letterSpacing: 1,
    color: C.accent,
    marginBottom: 14,
  },
  titulo: {
    fontFamily: "serif",
    fontSize: 39,
    lineHeight: 46,
    color: C.ink,
    marginBottom: 20,
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
  card: {
    backgroundColor: C.paper,
    borderWidth: 1,
    borderColor: C.line,
    padding: 22,
    marginBottom: 14,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    gap: 10,
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
  botao: {
    backgroundColor: C.ink,
    padding: 16,
    alignItems: "center",
    marginTop: 20,
  },
  botaoTexto: {
    fontSize: 13,
    fontWeight: "600",
    color: "#ffffff",
  },
  rodape: {
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: 10,
    color: C.muted,
    marginTop: 35,
  },
});
