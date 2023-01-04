import { Show } from 'solid-js'
import { useViewport, useUser, HapticButton, getUser } from '../../src'
import { ColorSwatch } from '../components/color-swatch'
import { logger } from '../logger'

export function DefaultPage() {
  const viewport = useViewport({
    onExpand: () => logger.log('Viewport Expanded'),
    onCollapse: () => logger.log('Viewport Collapsed'),
  })
  const user = getUser()

  return (
    <div class="my-auto flex flex-col">
      <p
        class="text-center w-full"
        style={{ color: 'var(--tg-theme-hint-color)' }}
      >
        Hi {user?.first_name ?? ''}, welcome to the demo app. <br />
        You're currently using the {
          window.Telegram.WebApp.platform
        } platform. <br />
        Select a tab to browse through examples.
      </p>
      <Show when={!viewport.expanded()}>
        <HapticButton
          class="btn btn-primary btn-outline w-full mt-5"
          onClick={() => viewport.expand()}
        >
          Expand to see the tabs
        </HapticButton>
      </Show>
      <p
        class="text-center w-full"
        style={{ color: 'var(--tg-theme-hint-color)' }}
      >
        Below are the colors used in the theme.
      </p>
      <ColorSwatch />
    </div>
  )
}
