import { createSignal, For } from 'solid-js'
import { PopupButton, AlertButton, ConfirmButton } from '../../src'
import type {
  OneToThree,
  PopupButton as PopupButtonType,
} from '../../src/types/telegram-webapp'
import { Collapse } from '../components/collapse'

const allButtonTypes = [
  'default',
  'ok',
  'close',
  'cancel',
  'destructive',
] as PopupButtonType['type'][]

export function PopupPage() {
  let [popupResult, setPopupResult] = createSignal<string | null>(null)
  let [popupTitle, setPopupTitle] = createSignal<string>('Wow, a popup!')
  let [popupMessage, setPopupMessage] = createSignal<string>(
    'Wow, this is a popup with a lot of buttons',
  )
  let [buttonTypes, setButtonTypes] = createSignal<PopupButtonType['type'][]>([
    'cancel',
    'default',
  ])

  let buttons = () =>
    allButtonTypes
      .filter((type) => buttonTypes().includes(type))
      .map((type) => ({
        id: type,
        text: `${type[0].toUpperCase()}${type.slice(1)}`,
        type,
      }))
      .slice(0, 3) as OneToThree<PopupButtonType>

  let buttonTypeDisabled = (type: PopupButtonType['type']) =>
    (buttonTypes().length == 1 && buttonTypes().includes(type)) ||
    (buttonTypes().length == 3 && !buttonTypes().includes(type))

  function handleButtonTypeCheck(type: PopupButtonType['type']) {
    setButtonTypes(
      buttonTypes().includes(type)
        ? buttonTypes().filter((t) => t != type)
        : [...buttonTypes(), type],
    )
  }

  let [alertMessage, setAlertMessage] = createSignal<string>(
    'Wow, you are alerted now',
  )

  let [confirmMessage, setConfirmMessage] = createSignal<string>(
    'Wow, are you sure ?',
  )
  let [confirmResult, setConfirmResult] = createSignal<string | null>(null)

  return (
    <div>
      <ul class="space-y-2">
        <li>
          <Collapse title="Popup">
            <div class="space-y-5">
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-bold">
                    Change the popup's buttons
                  </span>
                  <span class="label-text-alt">{buttonTypes().length}/3</span>
                </label>
                <For each={allButtonTypes}>
                  {(type) => (
                    <div class="form-control">
                      <label class="label cursor-pointer">
                        <span class="label-text">Show {type}</span>
                        <input
                          type="checkbox"
                          checked={buttonTypes().includes(type)}
                          onChange={() => handleButtonTypeCheck(type)}
                          disabled={buttonTypeDisabled(type)}
                          class="checkbox checkbox-primary"
                        />
                      </label>
                    </div>
                  )}
                </For>
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Change the popup's title</span>
                </label>
                <input
                  type="text"
                  class="input input-bordered w-full"
                  value={popupTitle()}
                  onInput={(e) => setPopupTitle(e.currentTarget.value)}
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Change the popup's message</span>
                </label>
                <input
                  type="text"
                  class="input input-bordered w-full"
                  value={popupMessage()}
                  onInput={(e) => setPopupMessage(e.currentTarget.value)}
                />
              </div>
              <PopupButton
                class="btn btn-primary w-full"
                title={popupTitle()}
                message={popupMessage()}
                buttons={buttons()}
                onPopupClose={setPopupResult}
              >
                Show popup
              </PopupButton>
              {popupResult() != null && (
                <pre class="text-center mt-4">
                  You clicked the {popupResult() || 'close'} button
                </pre>
              )}
            </div>
          </Collapse>
        </li>
        <li>
          <Collapse title="Alert">
            <div class="space-y-5">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Change the alert's message</span>
                </label>
                <input
                  type="text"
                  class="input input-bordered w-full"
                  value={alertMessage()}
                  onInput={(e) => setAlertMessage(e.currentTarget.value)}
                />
              </div>
              <AlertButton
                class="btn btn-primary w-full"
                message={alertMessage()}
              >
                Show alert
              </AlertButton>
            </div>
          </Collapse>
        </li>
        <li>
          <Collapse title="Confirm">
            <div class="space-y-5">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Change the confirm's message</span>
                </label>
                <input
                  type="text"
                  class="input input-bordered w-full"
                  value={confirmMessage()}
                  onInput={(e) => setConfirmMessage(e.currentTarget.value)}
                />
              </div>

              <ConfirmButton
                class="btn btn-primary w-full"
                message={confirmMessage()}
                onClose={setConfirmResult}
              >
                Show confirm dialog
              </ConfirmButton>
              {confirmResult() != null && (
                <pre class="text-center mt-4">
                  You said {confirmResult() ? 'yes ❤️' : 'no 💔'}
                </pre>
              )}
            </div>
          </Collapse>
        </li>
      </ul>
    </div>
  )
}
