import { createSignal, Show } from 'solid-js'
import { BackButton } from '../src'
import { HapticButton } from '../src/components/haptic-button'
import { HapticInput } from '../src/components/haptic-input'
import { MainButton } from '../src/components/main-button'
import { createHapticImpactSignal } from '../src/signals/haptic'
import { logger } from './logger'

export function MainBackButtonPage() {
  const [showMainButton, setShowMainButton] = createSignal(false)
  const [mainButtonLabel, setMainButtonLabel] = createSignal<string | null>(
    null,
  )
  const [mainButtonActive, setMainButtonActive] = createSignal(true)
  const [
    mainButtonProgressVisible,
    setMainButtonProgressVisible,
  ] = createSignal(false)

  const [mainButtonHapticForce, setMainButtonHapticForce] = createSignal(true)
  const hapticSignal = createHapticImpactSignal('medium')

  const [showBackButton, setShowBackButton] = createSignal(false)

  return (
    <div class="flex flex-col space-y-2">
      <div class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Main Button</div>
        <div class="collapse-content">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Change the main button's label</span>
            </label>
            <div class="input-group">
              <HapticInput
                type="text"
                class="input input-bordered w-full"
                value={mainButtonLabel()}
                onInput={(e) => setMainButtonLabel(e.currentTarget.value)}
              />
              <HapticButton
                class="btn btn-primary btn-outline"
                onClick={() => setMainButtonLabel(null)}
              >
                Clear
              </HapticButton>
            </div>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">
                Use haptic feedback on the main button
              </span>
              <input
                type="checkbox"
                class="toggle toggle-primary"
                onChange={(e) => {
                  if (e.currentTarget.checked) {
                    hapticSignal()
                  }
                  setMainButtonHapticForce(e.currentTarget.checked)
                }}
                checked={mainButtonHapticForce()}
              />
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Main button is in progress</span>
              <input
                type="checkbox"
                class="toggle toggle-primary"
                onChange={(e) => {
                  if (e.currentTarget.checked) {
                    hapticSignal()
                  }
                  setMainButtonProgressVisible(e.currentTarget.checked)
                }}
                checked={mainButtonProgressVisible()}
              />
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Main button is active</span>
              <input
                type="checkbox"
                class="toggle toggle-primary"
                onChange={(e) => {
                  if (e.currentTarget.checked) {
                    hapticSignal()
                  }
                  setMainButtonActive(e.currentTarget.checked)
                }}
                checked={mainButtonActive()}
              />
            </label>
          </div>
          <HapticButton
            class="btn btn-primary w-full"
            onClick={() => setShowMainButton((x) => !x)}
          >
            {showMainButton() ? 'Hide main button' : 'Show main button'}
          </HapticButton>
          <Show when={showMainButton()}>
            <MainButton
              active={mainButtonActive()}
              progressVisible={mainButtonProgressVisible()}
              hapticForce={mainButtonHapticForce() ? 'medium' : null}
              text={mainButtonLabel()}
              onClick={() => {
                logger.log('Main button clicked')
                setShowMainButton(false)
              }}
            />
          </Show>
        </div>
      </div>

      <div class="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <input type="checkbox" />
        <div class="collapse-title text-xl font-medium">Back Button</div>
        <div class="collapse-content">
          <HapticButton
            class="btn btn-primary w-full"
            onClick={() => setShowBackButton((x) => !x)}
          >
            {showBackButton() ? 'Hide back button' : 'Show back button'}
          </HapticButton>
          <Show when={showBackButton()}>
            <BackButton
              onClick={() => {
                logger.log('Back button clicked')
                setShowBackButton(false)
              }}
            />
          </Show>
        </div>
      </div>
    </div>
  )
}
