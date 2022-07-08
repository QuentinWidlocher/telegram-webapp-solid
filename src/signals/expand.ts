import { Accessor, createSignal, onCleanup } from "solid-js";

const [expanded, setExpanded] = createSignal(window.Telegram.WebApp.isExpanded);

function updateViewport(isStable: boolean) {
  if (isStable) {
    setExpanded(window.Telegram.WebApp.isExpanded);
  }
}

window.Telegram.WebApp.onEvent("viewportChanged", updateViewport);

export function createExpandSignal(): [
  expanded: Accessor<boolean>,
  expand: () => void
] {
  const expand = () => window.Telegram.WebApp.expand();
  return [expanded, expand];
}
