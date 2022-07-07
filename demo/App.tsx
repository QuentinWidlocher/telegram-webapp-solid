import { Component, createSignal, Show } from "solid-js";
import { BackButton } from "../src/components/back-button";
import { MainButton } from "../src/components/main-button";
import { createViewportSignal } from "../src/signals/viewport";

const App: Component = () => {
  const [showMainButton, setShowMainButton] = createSignal(true);
  let viewport = createViewportSignal();
  let viewPortDebug = () => JSON.stringify(viewport(), null, 2);

  return (
    <>
      <BackButton onClick={() => console.log("backbutton")} />
      <main class="h-screen w-screen flex">
        <div
          class="m-auto text-5xl"
          onClick={() => setShowMainButton((x) => !x)}
        >
          ✈️
        </div>
        <pre>{viewPortDebug()}</pre>
      </main>
      <Show when={showMainButton()}>
        <MainButton
          text="Let's go"
          onClick={() => window.Telegram.WebApp.close()}
        />
      </Show>
    </>
  );
};

export default App;
