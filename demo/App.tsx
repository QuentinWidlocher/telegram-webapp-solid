import hexToHsl from "hex-to-hsl";
import { Component, createSignal, Match, Switch } from "solid-js";
import { MainButton } from "../src/components/main-button";
import { StableContainer } from "../src/components/stable-container";
import { createThemeSignal } from "../src/signals/theme";
import { MainButtonPage } from "./MainButtonPage";

function hexToCssHsl(hex: string) {
  const [h, s, l] = hexToHsl(hex);
  return `${h} ${s}% ${l}%`;
}

function hexToDarkerCssHsl(hex: string) {
  const [h, s, l] = hexToHsl(hex);
  return `${h} ${s}% ${l * 0.8}%`;
}

const App: Component = () => {
  const theme = createThemeSignal();

  const [selectedTab, setSelectedTab] = createSignal("home");

  return (
    <StableContainer
      class="flex flex-col p-5"
      data-mode={theme().colorScheme}
      style={{
        "--p": hexToCssHsl(theme().themeParams.button_color),
        "--pf": hexToDarkerCssHsl(theme().themeParams.button_color),
        "--pc": hexToCssHsl(theme().themeParams.button_text_color),
        "--n": hexToCssHsl(theme().themeParams.bg_color),
        "--nf": hexToDarkerCssHsl(theme().themeParams.bg_color),
        "--nc": hexToCssHsl(theme().themeParams.text_color),
      }}
    >
      <section class="flex-1 flex flex-col">
        <Switch
          fallback={
            <span
              class="my-auto"
              style={{ color: "var(--tg-theme-hint-color)" }}
            >
              Select a tab to browse through examples.
            </span>
          }
        >
          <Match when={selectedTab() == "main-button"}>
            <MainButtonPage />
          </Match>
        </Switch>
      </section>

      <div class="btm-nav">
        <button
          onClick={() => setSelectedTab("home")}
          classList={{ active: selectedTab() == "home" }}
        >
          <span class="btm-nav-label">Home</span>
        </button>
        <button
          onClick={() => setSelectedTab("main-button")}
          classList={{ active: selectedTab() == "main-button" }}
        >
          <span class="btm-nav-label">Main Button</span>
        </button>
      </div>
    </StableContainer>
  );
};

export default App;
