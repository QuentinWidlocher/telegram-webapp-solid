import { Component, createSignal, Show } from "solid-js";
import { BackButton } from "../src/components/back-button";
import { HapticButton } from "../src/components/haptic-button";
import { HapticInput } from "../src/components/haptic-input";
import { MainButton } from "../src/components/main-button";
import { StableContainer } from "../src/components/stable-container";
import { createExpandSignal } from "../src/signals/expand";
import { createThemeSignal } from "../src/signals/theme";
import hexToHsl from "hex-to-hsl";
import {
  createViewportHeightSignal,
  createViewportStableHeightSignal,
} from "../src/signals/viewport";

function hexToCssHsl(hex: string) {
  const hsl = hexToHsl(hex);
  return `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
}

const App: Component = () => {
  const [showMainButton, setShowMainButton] = createSignal(true);
  const [showBackButton, setShowBackButton] = createSignal(false);

  let viewportHeight = createViewportHeightSignal();
  let viewportStableHeight = createViewportStableHeightSignal();
  let viewPortDebug = () =>
    JSON.stringify(
      {
        viewportHeight: viewportHeight(),
        viewportStableHeight: viewportStableHeight(),
      },
      null,
      2
    );

  let [expanded, expand] = createExpandSignal();

  const theme = createThemeSignal();
  let themeDebug = () => JSON.stringify(theme(), null, 2);

  const [mainBtnText, setMainBtnText] = createSignal("Let's go");

  return (
    <>
      <Show when={showBackButton}>
        <BackButton onClick={() => console.log("backbutton")} />
      </Show>
      <StableContainer
        class="flex flex-col space-y-5 p-5"
        classList={{ dark: theme().colorScheme == "dark" }}
        style={{
          "--p": hexToCssHsl(theme().themeParams.button_color),
          "--pc": hexToCssHsl(theme().themeParams.button_text_color),
          "--n": hexToCssHsl(theme().themeParams.bg_color),
          "--nc": hexToCssHsl(theme().themeParams.text_color),
        }}
      >
        <HapticButton
          class="btn btn-primary"
          onClick={() => setShowBackButton((x) => !x)}
        >
          Toggle back button
        </HapticButton>
        <HapticButton
          class="btn btn-primary"
          onClick={() => setShowMainButton((x) => !x)}
        >
          Toggle main button
        </HapticButton>
        <HapticButton
          hapticForce="heavy"
          class="btn btn-primary"
          disabled={expanded()}
          onClick={() => expand()}
        >
          Expand
        </HapticButton>
        <HapticButton class="btn">Test</HapticButton>
        <HapticInput
          type="text"
          class="input w-full"
          onInput={(e) => setMainBtnText(e.target.value)}
        />
        <div class="collapse border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            Viewport debug values
          </div>
          <div class="collapse-content">
            <pre>{viewPortDebug()}</pre>
          </div>
        </div>
        <div class="collapse border border-base-300 bg-base-100 rounded-box">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            Theme debug values
          </div>
          <div class="collapse-content">
            <pre>{themeDebug()}</pre>
          </div>
        </div>
      </StableContainer>
      <Show when={showMainButton()}>
        <MainButton
          text={mainBtnText()}
          onClick={() => window.Telegram.WebApp.close()}
        />
      </Show>
    </>
  );
};

export default App;
