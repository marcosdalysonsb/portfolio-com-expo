import React, { useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const COLORS = {
  bg: "#f4f2ed",
  paper: "#fbfaf7",
  ink: "#111111",
  muted: "#6b6b66",
  line: "#d9d6cc",
  accent: "#2340ff",
  green: "#20b96a",
};

type SectionProps = {
  number: string;
  title: string;
  children: React.ReactNode;
};

type CardProps = {
  code: string;
  title: string;
  description: string;
  meta?: string;
  tech?: string;
  link?: string;
  label?: string;
};

type SkillProps = {
  title: string;
  code: string;
  items: string[];
};

function openLink(url: string) {
  Linking.openURL(url).catch(() => {
    console.warn("Não foi possível abrir o link:", url);
  });
}

function Section({ number, title, children }: SectionProps) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeading}>
        <Text style={styles.sectionNumber}>{number}</Text>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>

      {children}
    </View>
  );
}

function Card({
  code,
  title,
  description,
  meta,
  tech,
  link,
  label,
}: CardProps) {
  return (
    <TouchableOpacity
      activeOpacity={link ? 0.75 : 1}
      disabled={!link}
      onPress={() => link && openLink(link)}
      style={styles.card}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardCode}>{code}</Text>

        {meta && <Text style={styles.cardMeta}>{meta}</Text>}

        {label && (
          <Text style={styles.cardMeta}>
            {label} {link ? "↗" : ""}
          </Text>
        )}
      </View>

      <Text style={styles.cardTitle}>{title}</Text>

      <Text style={styles.cardDescription}>
        {description}
      </Text>

      {tech && (
        <Text style={styles.cardTech}>{tech}</Text>
      )}
    </TouchableOpacity>
  );
}

function SkillCard({ title, code, items }: SkillProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardCode}>{code}</Text>
      <Text style={[styles.cardTitle, { marginTop: 12 }]}>
        {title}
      </Text>

      <View style={styles.tagsContainer}>
        {items.map((item) => (
          <View style={styles.tag} key={item}>
            <Text style={styles.tagText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function Contact({
  icon,
  label,
  value,
  link,
}: {
  icon: string;
  label: string;
  value: string;
  link: string;
}) {
  return (
    <TouchableOpacity
      style={styles.contactRow}
      onPress={() => openLink(link)}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.contactLabel}>
          {icon} {label}
        </Text>

        <Text style={styles.contactValue}>
          {value}
        </Text>
      </View>

      <Text style={styles.contactArrow}>↗</Text>
    </TouchableOpacity>
  );
}

export default function HomeScreen() {
  const scrollRef = useRef<ScrollView>(null);

  const [positions, setPositions] = useState<
    Record<string, number>
  >({});

  function savePosition(section: string, y: number) {
    setPositions((old) => ({
      ...old,
      [section]: y,
    }));
  }

  function goTo(section: string) {
    scrollRef.current?.scrollTo({
      y: positions[section] ?? 0,
      animated: true,
    });
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.bg}
      />
      <View style={styles.navbar}>
        <TouchableOpacity
          style={styles.logo}
          onPress={() => goTo("inicio")}
        >
          <Text style={styles.logoText}>MD</Text>
        </TouchableOpacity>

        <Text style={styles.navTitle}>
          PORTFÓLIO / 2026
        </Text>

        <View style={styles.navIndicator} />
      </View>

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.page}
      >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.menuScroll}
          contentContainerStyle={styles.menu}
        >
          {[
            ["inicio", "Início"],
            ["experiencia", "Experiência"],
            ["habilidades", "Habilidades"],
            ["projetos", "Projetos"],
            ["extracurriculares", "Extras"],
            ["contato", "Contato"],
          ].map(([id, name]) => (
            <TouchableOpacity
              key={id}
              style={styles.menuItem}
              onPress={() => goTo(id)}
            >
              <Text style={styles.menuText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View
          style={styles.hero}
          onLayout={(event) =>
            savePosition("inicio", event.nativeEvent.layout.y)
          }
        >
          <View style={styles.status}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>
              Disponível para oportunidades
            </Text>
          </View>

          <Text style={styles.heroTitle}>
            Marcos{"\n"}Dalyson
          </Text>

          <Text style={styles.heroMeta}>
            CIÊNCIA DA COMPUTAÇÃO · UNICAP · 5º PERÍODO
          </Text>

          <Text style={styles.lead}>
            Estudante de Ciência da Computação, com
            interesse em desenvolvimento web, lógica de
            programação, resolução de problemas, além
            de curiosidade em Cibersegurança.
            {"\n\n"}
            Busco oportunidades para colocar meus
            conhecimentos em prática e continuar
            evoluindo profissionalmente.
          </Text>

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={() => goTo("projetos")}
            >
              <Text style={styles.primaryButtonText}>
                Ver projetos →
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() =>
                openLink("https://github.com/marcosdalysonsb")
              }
            >
              <Text style={styles.secondaryButtonText}>
                GitHub ↗
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.aboutList}>
            <View style={styles.aboutRow}>
              <Text style={styles.aboutLabel}>
                🎓 FORMAÇÃO
              </Text>
              <Text style={styles.aboutValue}>
                Ciência da Computação
              </Text>
            </View>

            <View style={styles.aboutRow}>
              <Text style={styles.aboutLabel}>
                💡 INTERESSES
              </Text>
              <Text style={styles.aboutValue}>
                Web, Software, Cibersegurança
              </Text>
            </View>

            <View style={styles.aboutRow}>
              <Text style={styles.aboutLabel}>
                🎯 OBJETIVO
              </Text>
              <Text style={styles.aboutValue}>
                Primeira oportunidade em tecnologia
              </Text>
            </View>
          </View>
        </View>
        <View
          onLayout={(event) =>
            savePosition(
              "experiencia",
              event.nativeEvent.layout.y
            )
          }
        >
          <Section number="01" title="Experiência">
            <Card
              code="ACA-01"
              meta="5º Período"
              title="Ciência da Computação"
              description="Universidade Católica de Pernambuco · Formação acadêmica"
            />

            <Card
              code="ACA-02"
              meta="2023"
              title="Técnico em Redes de Computadores"
              description="ETE Pastor Isaac Martins Rodrigues · Ensino médio técnico"
            />

            <Card
              code="PRO-01"
              meta="EM ABERTO"
              title="Experiência profissional"
              description="Buscando minha primeira oportunidade profissional na área de tecnologia."
            />
          </Section>
        </View>
        <View
          onLayout={(event) =>
            savePosition(
              "habilidades",
              event.nativeEvent.layout.y
            )
          }
        >
          <Section number="02" title="Habilidades">
            <SkillCard
              code="HAB-01"
              title="Frontend"
              items={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
              ]}
            />

            <SkillCard
              code="HAB-02"
              title="Programação"
              items={[
                "Python",
                "Java",
                "C",
                "Lógica de Programação",
                "POO",
              ]}
            />

            <SkillCard
              code="HAB-03"
              title="Redes"
              items={[
                "Redes de Computadores",
                "Cisco Packet Tracer",
              ]}
            />

            <SkillCard
              code="HAB-04"
              title="Ferramentas"
              items={[
                "Git",
                "GitHub",
                "VSCode",
                "VirtualBox",
                "Vercel",
              ]}
            />

            <SkillCard
              code="HAB-05"
              title="Banco de Dados"
              items={["SQL", "MySQL"]}
            />
          </Section>
        </View>
        <View
          onLayout={(event) =>
            savePosition("projetos", event.nativeEvent.layout.y)
          }
        >
          <Section number="03" title="Projetos">
            <Card
              code="PRJ-01"
              title="Sistema de Biblioteca"
              description="Sistema de biblioteca desenvolvido em Java, aplicando classes e objetos, encapsulamento, herança e polimorfismo."
              tech="Java · POO"
              label="Repositório"
              link="https://github.com/NextCoffeeJ/sistema_biblioteca"
            />

            <Card
              code="PRJ-02"
              title="Next Car"
              description="Sistema para gerenciamento e venda de carros seminovos, desenvolvido com arquitetura moderna, padrões de projeto e testes automatizados."
              tech="Java · Spring Boot · MySQL · Postman"
              label="Repositório"
              link="https://github.com/NextCar-Project/projeto-next-car"
            />

            <Card
              code="PRJ-03"
              title="Chat UDP"
              description="Chat desenvolvido com UDP, com confirmação de entrega, simulação de perda de pacotes e retransmissão manual de mensagens."
              tech="Python · UDP · Redes de Computadores"
              label="Repositório"
              link="https://github.com/marcosdalysonsb/Atividade_Redes_Chat"
            />

            <Card
              code="PRJ-04"
              title="Jogo de Dados"
              description="Jogo interativo desenvolvido com JavaScript, utilizando lógica de programação e geração de resultados aleatórios."
              tech="JavaScript · HTML · CSS"
              label="Jogar"
              link="https://programacao-web-mobile-rxnn.vercel.app/"
            />

            <Card
              code="PRJ-05"
              title="Extrator de PDF — 5º CTA"
              description="Projeto acadêmico desenvolvido em Python para o 5º CTA do Exército Brasileiro, voltado à leitura e extração de dados em arquivos PDF, com uma interface para facilitar a utilização do sistema."
              tech="Python"
              label="Projeto acadêmico"
            />

            <Card
              code="PRJ-06"
              title="Andador Inteligente"
              description="Sistema desenvolvido para monitoramento e segurança do usuário, integrando sensores, câmera, GPS e visão computacional para identificação de quedas e acompanhamento em tempo real."
              tech="Python · Raspberry Pi · Flask · SQLite · YOLO · GPS · MPU6050 · Telegram"
              label="Projeto acadêmico"
            />

            <Card
              code="PRJ-07"
              title="Next Fit — Sistema de Academia"
              description="Projeto de modelagem de banco de dados para uma academia, estruturando informações de alunos, planos, instrutores, treinos e pagamentos, com definição de relacionamentos, chaves e organização das tabelas."
              tech="SQL · MER · DER · Modelagem de Dados"
              label="Projeto acadêmico"
            />
          </Section>
        </View>

        {/* EXTRACURRICULARES */}
        <View
          onLayout={(event) =>
            savePosition(
              "extracurriculares",
              event.nativeEvent.layout.y
            )
          }
        >
          <Section number="04" title="Extracurriculares">
            <Card
              code="EXT-01"
              title="Palestra — Lógica de Programação"
              description="Participação na Jornada de Tecnologia UNICAP 2026, com foco nos fundamentos necessários para o desenvolvimento de boas práticas de programação."
            />

            <Card
              code="EXT-02"
              title="Minicurso Introdução à Linguagem C"
              description="Participação em minicurso sobre os fundamentos e conceitos básicos da linguagem C, durante a Jornada de Tecnologia UNICAP 2026."
            />

            <Card
              code="EXT-03"
              title="Palestra — Pré-programação"
              description="Participação em palestra sobre estruturação do raciocínio lógico e planejamento de soluções antes da implementação do código."
            />
          </Section>
        </View>
        <View
          onLayout={(event) =>
            savePosition("contato", event.nativeEvent.layout.y)
          }
        >
          <Section number="05" title="Contato">
            <Contact
              icon="🐙"
              label="GITHUB"
              value="github.com/marcosdalysonsb"
              link="https://github.com/marcosdalysonsb"
            />

            <Contact
              icon="💼"
              label="LINKEDIN"
              value="linkedin.com/in/marcos-dalyson"
              link="https://www.linkedin.com/in/marcos-dalyson-9457373b3/"
            />

            <Contact
              icon="📧"
              label="E-MAIL"
              value="marcosdalyson@gmail.com"
              link="mailto:marcosdalyson@gmail.com"
            />
          </Section>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Marcos Dalyson · Ciência da Computação
          </Text>

          <Text style={styles.footerText}>
            © 2026 · Desenvolvido com React Native + Expo
          </Text>

          <TouchableOpacity onPress={() => goTo("inicio")}>
            <Text style={styles.footerLink}>
              Voltar ao início ↑
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  page: {
    paddingHorizontal: 22,
    paddingBottom: 24,
  },

  navbar: {
    height: 66,
    paddingHorizontal: 22,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.bg,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
  },

  logo: {
    width: 40,
    height: 40,
    borderWidth: 1.5,
    borderColor: COLORS.ink,
    justifyContent: "center",
    alignItems: "center",
  },

  logoText: {
    fontFamily: "monospace",
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.ink,
  },

  navTitle: {
    fontFamily: "monospace",
    fontSize: 11,
    letterSpacing: 1.5,
    color: COLORS.muted,
  },

  navIndicator: {
    width: 8,
    height: 8,
    backgroundColor: COLORS.accent,
    borderRadius: 4,
  },

  menuScroll: {
    marginTop: 18,
    marginBottom: 25,
    flexGrow: 0,
  },

  menu: {
    gap: 10,
    paddingRight: 12,
  },

  menuItem: {
    borderWidth: 1,
    borderColor: COLORS.line,
    backgroundColor: COLORS.paper,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },

  menuText: {
    fontSize: 12,
    color: COLORS.ink,
    fontWeight: "500",
  },

  hero: {
    paddingTop: 35,
    paddingBottom: 55,
  },

  status: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    gap: 9,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 30,
    backgroundColor: COLORS.paper,
    marginBottom: 28,
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.green,
  },

  statusText: {
    fontSize: 12,
    color: COLORS.ink,
  },

  heroTitle: {
    fontFamily: "serif",
    fontSize: 58,
    lineHeight: 64,
    letterSpacing: -2,
    color: COLORS.ink,
  },

  heroMeta: {
    fontFamily: "monospace",
    fontSize: 11,
    lineHeight: 19,
    letterSpacing: 0.7,
    color: COLORS.accent,
    marginTop: 20,
  },

  lead: {
    fontSize: 15,
    lineHeight: 25,
    color: "#3d3d3a",
    marginTop: 24,
    marginBottom: 30,
  },

  actions: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 46,
  },

  primaryButton: {
    backgroundColor: COLORS.ink,
    paddingVertical: 15,
    paddingHorizontal: 22,
    alignItems: "center",
  },

  primaryButtonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 13,
  },

  secondaryButton: {
    borderWidth: 1,
    borderColor: COLORS.ink,
    paddingVertical: 14,
    paddingHorizontal: 22,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: COLORS.ink,
    fontWeight: "600",
    fontSize: 13,
  },

  aboutList: {
    borderTopWidth: 2,
    borderTopColor: COLORS.ink,
  },

  aboutRow: {
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.line,
  },

  aboutLabel: {
    fontFamily: "monospace",
    fontSize: 11,
    letterSpacing: 1,
    color: COLORS.muted,
    marginBottom: 6,
  },

  aboutValue: {
    fontSize: 16,
    color: COLORS.ink,
  },

  section: {
    paddingBottom: 48,
  },

  sectionHeading: {
    borderTopWidth: 1,
    borderTopColor: COLORS.line,
    paddingTop: 28,
    marginBottom: 24,
    flexDirection: "row",
    alignItems: "baseline",
    gap: 14,
  },

  sectionNumber: {
    fontFamily: "monospace",
    fontSize: 13,
    fontWeight: "bold",
    color: COLORS.accent,
  },

  sectionTitle: {
    fontFamily: "serif",
    fontSize: 29,
    color: COLORS.ink,
    flexShrink: 1,
  },

  card: {
    padding: 22,
    backgroundColor: COLORS.paper,
    borderWidth: 1,
    borderColor: COLORS.line,
    borderRadius: 3,
    marginBottom: 14,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 15,
  },

  cardCode: {
    fontFamily: "monospace",
    fontSize: 11,
    color: COLORS.accent,
    fontWeight: "bold",
  },

  cardMeta: {
    fontFamily: "monospace",
    fontSize: 10,
    color: COLORS.muted,
    flexShrink: 1,
    textAlign: "right",
  },

  cardTitle: {
    fontFamily: "serif",
    fontSize: 22,
    lineHeight: 28,
    color: COLORS.ink,
    marginBottom: 10,
  },

  cardDescription: {
    fontSize: 14,
    lineHeight: 23,
    color: COLORS.muted,
  },

  cardTech: {
    fontFamily: "monospace",
    fontSize: 11,
    lineHeight: 19,
    color: COLORS.accent,
    marginTop: 16,
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 10,
  },

  tag: {
    backgroundColor: COLORS.bg,
    borderWidth: 1,
    borderColor: COLORS.line,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  tagText: {
    fontFamily: "monospace",
    fontSize: 11,
    color: COLORS.ink,
  },

  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: COLORS.line,
    paddingVertical: 20,
    paddingHorizontal: 4,
    gap: 12,
  },

  contactLabel: {
    fontFamily: "monospace",
    fontSize: 11,
    color: COLORS.muted,
    letterSpacing: 1,
    marginBottom: 7,
  },

  contactValue: {
    fontSize: 14,
    color: COLORS.ink,
  },

  contactArrow: {
    fontSize: 20,
    color: COLORS.accent,
  },
  
  footer: {
    backgroundColor: COLORS.ink,
    marginHorizontal: -22,
    marginBottom: -24,
    paddingHorizontal: 24,
    paddingVertical: 35,
    gap: 10,
  },

  footerText: {
    fontFamily: "monospace",
    fontSize: 11,
    color: "#c9c7c0",
    lineHeight: 19,
  },

  footerLink: {
    fontFamily: "monospace",
    fontSize: 12,
    color: "#ffffff",
    marginTop: 14,
  },
});
