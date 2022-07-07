import { Component, createSignal, Show } from "solid-js";
import { BackButton } from "../src/components/back-button";
import { MainButton } from "../src/components/main-button";

const App: Component = () => {
  const [showMainButton, setShowMainButton] = createSignal(true);

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
