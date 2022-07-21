import { createSignal, onCleanup } from "solid-js";
import { ThemeParams } from "../types/telegram-webapp";

const [theme, setTheme] = createSignal<{
  themeParams: ThemeParams;
  colorScheme: typeof window.Telegram.WebApp.colorScheme;
  headerColor: string;
  backgroundColor: string;
}>({
  themeParams: window.Telegram.WebApp.themeParams,
  colorScheme: window.Telegram.WebApp.colorScheme,
  headerColor: window.Telegram.WebApp.headerColor,
  backgroundColor: window.Telegram.WebApp.backgroundColor,
});

export function createThemeSignal() {
  function updateTheme() {
    setTheme({
      themeParams: window.Telegram.WebApp.themeParams,
      colorScheme: window.Telegram.WebApp.colorScheme,
      headerColor: window.Telegram.WebApp.headerColor,
      backgroundColor: window.Telegram.WebApp.backgroundColor,
    });
  }

  window.Telegram.WebApp.onEvent("themeChanged", updateTheme);

  onCleanup(() => {
    window.Telegram.WebApp.offEvent("themeChanged", updateTheme);
  });

  return {
    theme,
    setHeaderColor: window.Telegram.WebApp.setHeaderColor,
    setBackgroundColor: window.Telegram.WebApp.setBackgroundColor,
  };
}
