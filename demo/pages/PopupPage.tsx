import { createSignal } from 'solid-js'
import { PopupButton, AlertButton, ConfirmButton } from '../../src'

export function PopupPage() {
  let [popupResult, setPopupResult] = createSignal<string | null>(null)
  let [confirmResult, setConfirmResult] = createSignal<string | null>(null)

  return (
    <div>
      <ul class="space-y-2">
        <li>
          <div class="flex gap-2">
            <PopupButton
              class="btn btn-primary flex-1"
              title="Wow, a popup!"
              message="Wow, this is a popup with a lot of buttons"
              buttons={[
                { id: 'cancel', text: 'Cancel', type: 'cancel' },
                { id: 'ping', text: 'Ping', type: 'default' },
              ]}
              onPopupClose={setPopupResult}
            >
              Show popup 1
            </PopupButton>
            <PopupButton
              class="btn btn-primary flex-1"
              title="Wow, a popup!"
              message="Wow, this is a popup with a lot of buttons"
              buttons={[
                { id: 'close', text: 'Close', type: 'close' },
                { id: 'delete', text: 'Delete', type: 'destructive' },
                { id: 'ok', text: 'OK', type: 'ok' },
              ]}
              onPopupClose={setPopupResult}
            >
              Show popup 2
            </PopupButton>
          </div>
          {popupResult() != null && (
            <pre class="text-center mt-4">
              You clicked the {popupResult() || 'close'} button
            </pre>
          )}
        </li>
        <li>
          <AlertButton
            class="btn btn-primary w-full"
            message="Wow, this is an awesome alert"
          >
            Show alert
          </AlertButton>
        </li>
        <li>
          <ConfirmButton
            class="btn btn-primary w-full"
            message="Wow, are you sure?"
            onClose={setConfirmResult}
          >
            Show confirm dialog
          </ConfirmButton>
          {confirmResult() != null && (
            <pre class="text-center mt-4">
              You said {confirmResult() ? 'yes ❤️' : 'no 💔'}
            </pre>
          )}
        </li>
      </ul>
    </div>
  )
}
