import { createSignal, Show } from "solid-js";
import { HapticButton } from "../src/components/haptic-button";
import { HapticInput } from "../src/components/haptic-input";
import { MainButton } from "../src/components/main-button";
import { createHapticImpactSignal } from "../src/signals/haptic";

export function MainButtonPage() {
  const [showMainButton, setShowMainButton] = createSignal(false);
  const [mainButtonLabel, setMainButtonLabel] = createSignal<string | null>(
    null
  );
  const [mainButtonHapticForce, setMainButtonHapticForce] = createSignal(true);
  const hapticSignal = createHapticImpactSignal("medium");

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
        {showMainButton() ? "Hide main button" : "Show main button"}
      </HapticButton>

      <div class="form-control">
        <label class="label cursor-pointer">
          <span class="label-text">Use haptic feedback on the main button</span>
          <input
            type="checkbox"
            class="toggle toggle-primary"
            onChange={(e) => {
              hapticSignal();
              setMainButtonHapticForce(e.target.checked);
            }}
            checked={mainButtonHapticForce()}
          />
        </label>
      </div>

      <Show when={showMainButton()}>
        <MainButton
          text={mainButtonLabel()}
          onClick={() => setShowMainButton(false)}
          hapticForce={mainButtonHapticForce() ? "medium" : null}
        />
      </Show>
    </div>
  );
}
