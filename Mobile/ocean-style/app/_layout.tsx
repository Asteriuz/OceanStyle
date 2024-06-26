import {
  WorkSans_400Regular,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
} from "@expo-google-fonts/work-sans";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import HomeScreen from ".";
import { COLORS } from "@/constants/Colors";
import ProgressBar from "@/components/ProgressBar";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
    WorkSans_400Regular,
    WorkSans_500Medium,
    WorkSans_600SemiBold,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: COLORS.white },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{
          title: "Login",
          animation: "slide_from_right",
          headerTitle: () => <ProgressBar progress={0.5} />,
        }}
      />
      <Stack.Screen
        name="resetPassword"
        options={{
          title: "Recuperar senha",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "Registre-se",
          animation: "slide_from_right",
          headerTitle: () => <ProgressBar progress={0.33} />,
        }}
      />
      <Stack.Screen
        name="register2"
        options={{
          title: "Registre-se",
          animation: "slide_from_right",
          headerTitle: () => <ProgressBar progress={0.66} />,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: "fade_from_bottom" }}
      />
    </Stack>
  );
}
