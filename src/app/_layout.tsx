import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="sobre" />
      <Stack.Screen name="academica" />
      <Stack.Screen name="profissional" />
      <Stack.Screen name="projetos" />
      <Stack.Screen name="jogo" />
    </Stack>
  );
}