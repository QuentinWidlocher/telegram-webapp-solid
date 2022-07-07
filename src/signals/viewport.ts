import { createSignal, onCleanup } from "solid-js";

const [viewportHeight, setViewportHeight] = createSignal(window.Telegram.WebApp.viewportHeight);
const [viewportStableHeight, setViewportStableHeight] = createSignal(window.Telegram.WebApp.viewportStableHeight);

function updateViewport(isStable: boolean) {
  if (isStable) {
    setViewportStableHeight(window.Telegram.WebApp.viewportStableHeight);
  }

  setViewportHeight(window.Telegram.WebApp.viewportHeight);
}

window.Telegram.WebApp.onEvent("viewportChanged", updateViewport);

onCleanup(() => {
  window.Telegram.WebApp.offEvent("viewportChanged", updateViewport);
});

export function createViewportHeightSignal() {
  return viewportHeight;
}

export function createViewportStableHeightSignal() {
  return viewportStableHeight;
}
