import hexToHsl from 'hex-to-hsl'
import { Component, createSignal, Match, Show, Switch } from 'solid-js'
import { HapticButton } from '../src/components/haptic-button'
import { StableContainer } from '../src/components/stable-container'
import { createExpandSignal } from '../src/signals/expand'
import { createThemeSignal } from '../src/signals/theme'
import { createUserSignal } from '../src/signals/user'
import { checkIfAvailable } from '../src/utils/version'
import { logger } from './logger'
import { LogsPage } from './LogsPage'
import { MainBackButtonPage } from './MainBackButtonPage'
import { PopupPage } from './PopupPage'
import { QrCodePage } from './QrCodePage'

function hexToCssHsl(hex: string) {
  if (!hex) return
  const [h, s, l] = hexToHsl(hex)
  return `${h} ${s}% ${l}%`
}

function hexToDarkerCssHsl(hex: string) {
  if (!hex) return
  const [h, s, l] = hexToHsl(hex)
  return `${h} ${s}% ${l * 0.8}%`
}

const App: Component = () => {
  const { theme } = createThemeSignal()
  const [selectedTab, setSelectedTab] = createSignal('home')
  const [expanded, expand] = createExpandSignal()
  const user = createUserSignal()

  addEventListener('error', (event) => {
    logger.error(event.message)
  })

  return (
    <StableContainer
      class="flex flex-col p-5"
      data-theme={theme()?.colorScheme}
      style={{
        '--p': hexToCssHsl(theme()?.themeParams?.button_color),
        '--pf': hexToDarkerCssHsl(theme()?.themeParams?.button_color),
        '--pc': hexToCssHsl(theme()?.themeParams?.button_text_color),
        '--n': hexToCssHsl(theme()?.themeParams?.bg_color),
        '--nf': hexToDarkerCssHsl(theme()?.themeParams?.bg_color),
        '--nc': hexToCssHsl(theme()?.themeParams?.text_color),
      }}
    >
      <section class="flex-1 flex flex-col">
        <Switch
          fallback={
            <div class="my-auto flex flex-col">
              <p
                class="text-center w-full"
                style={{ color: 'var(--tg-theme-hint-color)' }}
              >
                Hi {user()?.first_name ?? ''}, welcome to the demo app. <br />
                You're currently using a {window.Telegram.WebApp.platform}{' '}
                platform. <br />
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
              <div class="flex flex-wrap gap-2 mt-5 justify-center">
                <div
                  class="w-24 h-24 aspect-square rounded-xl shadow-lg grid place-content-center"
                  style={{
                    'background-color': 'var(--tg-theme-secondary-bg-color)',
                  }}
                >
                  <span class="text-xs bg-black text-white">
                    secondary-bg-color
                  </span>
                </div>
                <div
                  class="w-24 h-24 aspect-square rounded-xl shadow-lg grid place-content-center"
                  style={{ 'background-color': 'var(--tg-theme-text-color)' }}
                >
                  <span class="text-xs bg-black text-white">text-color</span>
                </div>
                <div
                  class="w-24 h-24 aspect-square rounded-xl shadow-lg grid place-content-center"
                  style={{ 'background-color': 'var(--tg-theme-hint-color)' }}
                >
                  <span class="text-xs bg-black text-white">hint-color</span>
                </div>
                <div
                  class="w-24 h-24 aspect-square rounded-xl shadow-lg grid place-content-center"
                  style={{ 'background-color': 'var(--tg-theme-bg-color)' }}
                >
                  <span class="text-xs bg-black text-white">bg-color</span>
                </div>
                <div
                  class="w-24 h-24 aspect-square rounded-xl shadow-lg grid place-content-center"
                  style={{ 'background-color': 'var(--tg-theme-link-color)' }}
                >
                  <span class="text-xs bg-black text-white">link-color</span>
                </div>
                <div
                  class="w-24 h-24 aspect-square rounded-xl shadow-lg grid place-content-center"
                  style={{ 'background-color': 'var(--tg-theme-button-color)' }}
                >
                  <span class="text-xs bg-black text-white">button-color</span>
                </div>
                <div
                  class="w-24 h-24 aspect-square rounded-xl shadow-lg grid place-content-center"
                  style={{
                    'background-color': 'var(--tg-theme-button-text-color)',
                  }}
                >
                  <span class="text-xs bg-black text-white">
                    button-text-color
                  </span>
                </div>
              </div>
            </div>
          }
        >
          <Match when={selectedTab() == 'buttons'}>
            <MainBackButtonPage />
          </Match>
          <Match when={selectedTab() == 'qr-code'}>
            <QrCodePage />
          </Match>
          <Match when={selectedTab() == 'popup'}>
            <PopupPage />
          </Match>
          <Match when={selectedTab() == 'logs'}>
            <LogsPage />
          </Match>
        </Switch>
      </section>

      <div class="btm-nav text-primary">
        <button
          onClick={() => setSelectedTab('buttons')}
          classList={{ active: selectedTab() == 'buttons' }}
          style={{ 'background-color': `hsl(var(--p)/0.2)` }}
        >
          <span class="btm-nav-label">Buttons</span>
        </button>
        {checkIfAvailable('showScanQrPopup') && (
          <button
            onClick={() => setSelectedTab('qr-code')}
            classList={{ active: selectedTab() == 'qr-code' }}
            style={{ 'background-color': `hsl(var(--p)/0.2)` }}
          >
            <span class="btm-nav-label">QR Code</span>
          </button>
        )}
        {checkIfAvailable('showPopup') && (
          <button
            onClick={() => setSelectedTab('popup')}
            classList={{ active: selectedTab() == 'popup' }}
            style={{ 'background-color': `hsl(var(--p)/0.2)` }}
          >
            <span class="btm-nav-label">Popups</span>
          </button>
        )}
        <button
          onClick={() => setSelectedTab('logs')}
          classList={{ active: selectedTab() == 'logs' }}
          style={{ 'background-color': `hsl(var(--p)/0.2)` }}
        >
          <span class="btm-nav-label">Logs</span>
        </button>
      </div>
    </StableContainer>
  )
}

export default App
