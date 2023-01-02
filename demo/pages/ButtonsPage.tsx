import { createSignal, Show } from 'solid-js'
import {
  createHapticImpactSignal,
  HapticInput,
  HapticButton,
  MainButton,
  BackButton,
  createVersionSignal,
} from '../../src'
import { Collapse } from '../components/collapse'
import { logger } from '../logger'

export function ButtonsPage() {
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

  const { checkIfAvailable } = createVersionSignal()

  return (
    <div class="flex flex-col space-y-2">
      <Collapse title="Main Button">
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
      </Collapse>

      <Collapse title="Back Button">
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
      </Collapse>

      <Show when={checkIfAvailable('HapticFeedback')}>
        <Collapse title="Haptic buttons">
          <div class="space-y-2">
            <div class="flex gap-2">
              <HapticButton class="btn btn-primary flex-1" hapticForce="heavy">
                Heavy force
              </HapticButton>
              <HapticButton class="btn btn-primary flex-1" hapticForce="light">
                Light force
              </HapticButton>
              <HapticButton class="btn btn-primary flex-1" hapticForce="medium">
                Medium force
              </HapticButton>
            </div>
            <div class="flex gap-2">
              <HapticButton class="btn btn-primary flex-1" hapticForce="rigid">
                Rigid force
              </HapticButton>
              <HapticButton class="btn btn-primary flex-1" hapticForce="soft">
                Soft force
              </HapticButton>
            </div>
          </div>
        </Collapse>
      </Show>
    </div>
  )
}
