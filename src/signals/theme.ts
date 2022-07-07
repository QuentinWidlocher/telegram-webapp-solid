import { createSignal, onCleanup } from "solid-js";

const [theme, setTheme] = createSignal({
  themeParams: window.Telegram.WebApp.themeParams,
  colorScheme: window.Telegram.WebApp.colorScheme,
});

export function createThemeSignal() {
  function updateTheme() {
    setTheme({
      themeParams: window.Telegram.WebApp.themeParams,
      colorScheme: window.Telegram.WebApp.colorScheme,
    });
  }

  window.Telegram.WebApp.onEvent("themeChanged", updateTheme);

  onCleanup(() => {
    window.Telegram.WebApp.offEvent("themeChanged", updateTheme);
  });

  return theme;
}
