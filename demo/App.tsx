import { Component, createSignal, Show } from "solid-js";
import { BackButton } from "../src/components/back-button";
import { HapticButton } from "../src/components/haptic-button";
import { MainButton } from "../src/components/main-button";
import { StableContainer } from "../src/components/stable-container";
import { createExpandSignal } from "../src/signals/expand";
import {
  createViewportHeightSignal,
  createViewportStableHeightSignal,
} from "../src/signals/viewport";

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

  const [mainBtnText, setMainBtnText] = createSignal("Let's go");

  return (
    <>
      <Show when={showBackButton}>
        <BackButton onClick={() => console.log("backbutton")} />
      </Show>
      <StableContainer class="flex flex-col space-y-5 p-5">
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
          class="btn btn-primary"
          disabled={expanded()}
          onClick={() => expand()}
        >
          Expand
        </HapticButton>
        <input
          type="text"
          class="input w-full max-w-xs"
          onInput={(e) => setMainBtnText(e.target.value)}
        />
        <pre>{viewPortDebug()}</pre>
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
