import { createSignal, onCleanup } from "solid-js";

const [viewport, setViewport] = createSignal({
  height: window.Telegram.WebApp.viewportHeight,
  stableHeight: window.Telegram.WebApp.viewportStableHeight,
});

export function createViewportSignal() {
  function updateViewport() {
    setViewport({
      height: window.Telegram.WebApp.viewportHeight,
      stableHeight: window.Telegram.WebApp.viewportStableHeight,
    });
  }

  window.Telegram.WebApp.onEvent("viewportChanged", updateViewport);

  onCleanup(() => {
    window.Telegram.WebApp.offEvent("viewportChanged", updateViewport);
  });

  return viewport;
}
