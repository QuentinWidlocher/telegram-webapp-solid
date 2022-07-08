import hexToHsl from "hex-to-hsl";
import { Component, createSignal, Match, Show, Switch } from "solid-js";
import { HapticButton } from "../src/components/haptic-button";
import { MainButton } from "../src/components/main-button";
import { StableContainer } from "../src/components/stable-container";
import { createExpandSignal } from "../src/signals/expand";
import { createThemeSignal } from "../src/signals/theme";
import { createUserSignal } from "../src/signals/user";
import { BackButtonPage } from "./BackButtonPage";
import { MainButtonPage } from "./MainButtonPage";

function hexToCssHsl(hex: string) {
  if (!hex) return;
  const [h, s, l] = hexToHsl(hex);
  return `${h} ${s}% ${l}%`;
}

function hexToDarkerCssHsl(hex: string) {
  if (!hex) return;
  const [h, s, l] = hexToHsl(hex);
  return `${h} ${s}% ${l * 0.8}%`;
}

const App: Component = () => {
  const theme = createThemeSignal();
  const [selectedTab, setSelectedTab] = createSignal("home");
  const [expanded, expand] = createExpandSignal();
  const user = createUserSignal();

  return (
    <StableContainer
      class="flex flex-col p-5"
      data-theme={theme()?.colorScheme}
      style={{
        "--p": hexToCssHsl(theme()?.themeParams?.button_color),
        "--pf": hexToDarkerCssHsl(theme()?.themeParams?.button_color),
        "--pc": hexToCssHsl(theme()?.themeParams?.button_text_color),
        "--n": hexToCssHsl(theme()?.themeParams?.bg_color),
        "--nf": hexToDarkerCssHsl(theme()?.themeParams?.bg_color),
        "--nc": hexToCssHsl(theme()?.themeParams?.text_color),
      }}
    >
      <section class="flex-1 flex flex-col">
        <Switch
          fallback={
            <div class="my-auto flex flex-col">
              <p
                class="text-center w-full"
                style={{ color: "var(--tg-theme-hint-color)" }}
              >
                Hi {user.first_name}, welcome to the demo app. <br />
                Select a tab to browse through examples.
              </p>
              <Show when={!expanded()}>
                <HapticButton
                  class="btn btn-ghost w-full mt-5"
                  onClick={() => expand()}
                >
                  Expand to see the tabs
                </HapticButton>
              </Show>
            </div>
          }
        >
          <Match when={selectedTab() == "main-button"}>
            <MainButtonPage />
          </Match>
          <Match when={selectedTab() == "back-button"}>
            <BackButtonPage />
          </Match>
        </Switch>
      </section>

      <div class="btm-nav text-primary">
        <button
          onClick={() => setSelectedTab("main-button")}
          classList={{ active: selectedTab() == "main-button" }}
          style={{ "background-color": `hsl(var(--p)/0.2)` }}
        >
          <span class="btm-nav-label">Main Button</span>
        </button>
        <button
          onClick={() => setSelectedTab("back-button")}
          classList={{ active: selectedTab() == "back-button" }}
          style={{ "background-color": `hsl(var(--p)/0.2)` }}
        >
          <span class="btm-nav-label">Back Button</span>
        </button>
      </div>
    </StableContainer>
  );
};

export default App;
