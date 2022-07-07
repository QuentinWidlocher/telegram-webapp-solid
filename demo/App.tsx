import type { Component } from "solid-js";
import { MainButton } from "../src/components/main-button";

const App: Component = () => {
  return (
    <>
      <main class="h-screen w-screen flex">
        <div class="m-auto text-5xl">✈️</div>
      </main>
      <MainButton
        text="Let's go"
        onClick={() => window.Telegram.WebApp.close()}
      />
    </>
  );
};

export default App;
