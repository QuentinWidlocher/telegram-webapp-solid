import { createSignal } from 'solid-js'
import { createHapticImpactSignal, HapticInput } from '../src'
import { QrCodeButton } from '../src/components/qr-code-button'

export function QrCodePage() {
  let [data, setData] = createSignal<string | null>(null)
  let [message, setMessage] = createSignal('Aim at a QR Code')
  let hapticImpact = createHapticImpactSignal('medium')

  return (
    <div class="space-y-5">
      <div class="form-control">
        <label class="label">
          <span class="label-text">Change the QR code popup's label</span>
        </label>
        <HapticInput
          type="text"
          class="input input-bordered w-full"
          value={message()}
          onInput={(e) => setMessage(e.currentTarget.value)}
        />
      </div>
      <QrCodeButton
        class="btn btn-primary w-full"
        message="Aim at  a QR Code"
        onDataReceived={(data) => {
          hapticImpact()
          setData(data)
        }}
      >
        Scan a QR code
      </QrCodeButton>
      {data() && (
        <pre class="text-center text-2xl mt-4 font-mono">{data()}</pre>
      )}
    </div>
  )
}
