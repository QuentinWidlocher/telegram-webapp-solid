import { createSignal, Show } from "solid-js";
import { HapticButton } from "../src/components/haptic-button";
import { BackButton } from "../src/components/back-button";

export function BackButtonPage() {
  const [showBackButton, setShowBackButton] = createSignal(false);

  return (
    <div class="flex flex-col space-y-2">
      <HapticButton
        class="btn btn-primary w-full"
        onClick={() => setShowBackButton((x) => !x)}
      >
        {showBackButton() ? "Hide back button" : "Show back button"}
      </HapticButton>

      <Show when={showBackButton()}>
        <BackButton onClick={() => setShowBackButton(false)} />
      </Show>
    </div>
  );
}
