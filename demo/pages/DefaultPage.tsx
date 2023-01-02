import { Show } from 'solid-js'
import { createExpandSignal, createUserSignal, HapticButton } from '../../src'
import { ColorSwatch } from '../components/color-swatch'

export function DefaultPage() {
  const [expanded, expand] = createExpandSignal()
  const user = createUserSignal()

  return (
    <div class="my-auto flex flex-col">
      <p
        class="text-center w-full"
        style={{ color: 'var(--tg-theme-hint-color)' }}
      >
        Hi {user()?.first_name ?? ''}, welcome to the demo app. <br />
        You're currently using a {
          window.Telegram.WebApp.platform
        } platform. <br />
        Select a tab to browse through examples.
      </p>
      <Show when={!expanded()}>
        <HapticButton
          class="btn btn-primary btn-outline w-full mt-5"
          onClick={() => expand()}
        >
          Expand to see the tabs
        </HapticButton>
      </Show>
      <ColorSwatch />
    </div>
  )
}
