import { createSignal, Show } from "solid-js";
import { HapticButton } from "../src/components/haptic-button";
import { HapticInput } from "../src/components/haptic-input";
import { MainButton } from "../src/components/main-button";

export function MainButtonPage() {
  const [showMainButton, setShowMainButton] = createSignal(false);
  const [mainButtonLabel, setMainButtonLabel] = createSignal<string | null>(
    null
  );

  return (
    <div class="flex flex-col space-y-2">
      <div class="form-control">
        <div class="input-group">
          <HapticInput
            type="text"
            onInput={(e) => setMainButtonLabel(e.target.value)}
          />
          <Show when={mainButtonLabel() != null}>
            <HapticButton class="btn" onClick={() => setMainButtonLabel(null)}>
              Clear
            </HapticButton>
          </Show>
        </div>
      </div>

      <HapticButton
        class="btn btn-primary w-full"
        onClick={() => setShowMainButton((x) => !x)}
      >
        {showMainButton ? "Hide main button" : "Show main button"}
      </HapticButton>

      <Show when={showMainButton}>
        <MainButton
          text={mainButtonLabel()}
          onClick={() => setShowMainButton(false)}
        />
      </Show>
    </div>
  );
}
