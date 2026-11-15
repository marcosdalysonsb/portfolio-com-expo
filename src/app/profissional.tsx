
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

export default function ProfissionalScreen() {
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
        <Text style={styles.etiqueta}>
          03 / CARREIRA
        </Text>

        <Text style={styles.titulo}>
          Experiência Profissional
        </Text>

        <Text style={styles.introducao}>
          Estou construindo minha trajetória na área de
          tecnologia, buscando oportunidades para aplicar
          os conhecimentos adquiridos durante minha formação.
        </Text>

        <View style={styles.divisor} />

        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.codigo}>PRO-01</Text>
            <Text style={styles.meta}>EM ABERTO</Text>
          </View>

          <Text style={styles.cardTitulo}>
            Em busca da primeira oportunidade
          </Text>

          <Text style={styles.cardDescricao}>
            Atualmente, busco minha primeira oportunidade
            profissional na área de tecnologia, com o objetivo
            de desenvolver minhas habilidades, aprender com
            outros profissionais e contribuir com projetos reais.
          </Text>

          <View style={styles.linhaInterna} />

          <Text style={styles.grupoTitulo}>
            ÁREAS DE INTERESSE
          </Text>

          <View style={styles.tags}>
            {[
              "Desenvolvimento Web",
              "Software",
              "Programação",
              "Cibersegurança",
            ].map((item) => (
              <View key={item} style={styles.tag}>
                <Text style={styles.tagTexto}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.push("/projetos")}
        >
          <Text style={styles.botaoTexto}>
            Conhecer meus projetos →
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
    flexGrow: 1,
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
    fontSize: 39,
    lineHeight: 46,
    color: C.ink,
    marginBottom: 20,
  },
  introducao: {
    color: C.muted,
    fontSize: 15,
    lineHeight: 25,
  },
  divisor: {
    borderTopWidth: 1,
    borderTopColor: C.line,
    marginTop: 30,
    marginBottom: 25,
  },
  card: {
    backgroundColor: C.paper,
    borderWidth: 1,
    borderColor: C.line,
    padding: 22,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    gap: 10,
  },
  codigo: {
    fontFamily: "monospace",
    fontWeight: "bold",
    fontSize: 11,
    color: C.accent,
  },
  meta: {
    fontFamily: "monospace",
    fontSize: 10,
    color: C.muted,
  },
  cardTitulo: {
    fontFamily: "serif",
    fontSize: 23,
    lineHeight: 30,
    color: C.ink,
    marginBottom: 12,
  },
  cardDescricao: {
    color: C.muted,
    fontSize: 14,
    lineHeight: 23,
  },
  linhaInterna: {
    borderTopWidth: 1,
    borderTopColor: C.line,
    marginTop: 22,
    marginBottom: 18,
  },
  grupoTitulo: {
    fontFamily: "monospace",
    fontSize: 11,
    letterSpacing: 1,
    color: C.muted,
    marginBottom: 12,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: C.bg,
    borderWidth: 1,
    borderColor: C.line,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  tagTexto: {
    fontFamily: "monospace",
    fontSize: 11,
    color: C.ink,
  },
  botao: {
    marginTop: 24,
    padding: 16,
    alignItems: "center",
    backgroundColor: C.ink,
  },
  botaoTexto: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "600",
  },
  rodape: {
    marginTop: 35,
    textAlign: "center",
    fontFamily: "monospace",
    fontSize: 10,
    color: C.muted,
  },
});
