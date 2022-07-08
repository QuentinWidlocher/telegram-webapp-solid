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
        <label class="label">
          <span class="label-text">Change the main button's label</span>
        </label>
        <div class="input-group">
          <HapticInput
            type="text"
            class="input input-bordered w-full"
            value={mainButtonLabel()}
            onInput={(e) => setMainButtonLabel(e.target.value)}
          />
          <HapticButton
            class="btn btn-primary btn-outline"
            onClick={() => setMainButtonLabel(null)}
          >
            Clear
          </HapticButton>
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
