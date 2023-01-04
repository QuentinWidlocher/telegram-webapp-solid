import hexToHsl from 'hex-to-hsl'
import { Component, createSignal, Match, Switch } from 'solid-js'
import { StableContainer } from '../src/components/stable-container'
import { useTheme } from '../src/api/theme'
import { BottomNavigation, Tab } from './components/bottom-navigation'
import { logger } from './logger'
import { DefaultPage } from './pages/DefaultPage'
import { LogsPage } from './pages/LogsPage'
import { ButtonsPage } from './pages/ButtonsPage'
import { PopupPage } from './pages/PopupPage'
import { QrCodePage } from './pages/QrCodePage'

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
  const { theme } = useTheme()
  const [selectedTab, setSelectedTab] = createSignal<Tab | null>(null)

  addEventListener('error', (event) => {
    logger.error(event.message)
  })

  return (
    <StableContainer
      class="flex flex-col pb-16"
      data-theme={theme()?.colorScheme}
      style={{
        '--p': hexToCssHsl(theme()?.themeParams?.button_color),
        '--pf': hexToDarkerCssHsl(theme()?.themeParams?.button_color),
        '--pc': hexToCssHsl(theme()?.themeParams?.button_text_color),
        '--n': hexToCssHsl(theme()?.themeParams?.bg_color),
        '--nf': hexToDarkerCssHsl(theme()?.themeParams?.bg_color),
        '--nc': hexToCssHsl(theme()?.themeParams?.text_color),
        '--b1': hexToCssHsl(theme()?.themeParams?.bg_color),
        '--b2': hexToCssHsl(theme()?.themeParams?.secondary_bg_color),
        '--b3': hexToDarkerCssHsl(theme()?.themeParams?.secondary_bg_color),
        '--bc': hexToCssHsl(theme()?.themeParams?.text_color),
        'overflow-y': 'auto',
      }}
    >
      <section class="flex-1 flex flex-col m-5">
        <Switch fallback={<DefaultPage />}>
          <Match when={selectedTab() == 'buttons'}>
            <ButtonsPage />
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

      <BottomNavigation
        selectedTab={selectedTab()}
        onSelectedTabChange={setSelectedTab}
        enableLogs
      />
    </StableContainer>
  )
}

export default App
