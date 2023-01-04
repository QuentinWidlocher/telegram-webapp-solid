import { createContext, createSignal, ParentProps, useContext } from 'solid-js'
import {
  BackButtonContext,
  createBackButtonContext,
} from './create-back-button-context'
import {
  createMainButtonContext,
  MainButtonContext,
} from './create-main-button-context'
import { createThemeContext, ThemeContext } from './create-theme-context'
import {
  createViewportContext,
  ViewportContext,
} from './create-viewport-context'

export const TelegramAPIContext = createContext<{
  mainButton: MainButtonContext
  backButton: BackButtonContext
  viewport: ViewportContext
  theme: ThemeContext
}>()

const [alreadyUsed, setAlreadyUsed] = createSignal(false)

export function TelegramAPIProvider(props: ParentProps) {
  if (alreadyUsed()) {
    throw new Error('TelegramAPIProvider can only be used once')
  }

  setAlreadyUsed(true)

  return (
    <TelegramAPIContext.Provider
      value={{
        mainButton: createMainButtonContext(),
        backButton: createBackButtonContext(),
        viewport: createViewportContext(),
        theme: createThemeContext(),
      }}
    >
      {props.children}
    </TelegramAPIContext.Provider>
  )
}

export function useTelegramAPI() {
  const context = useContext(TelegramAPIContext)
  console.log('context', context)
  if (context == null) {
    throw new Error('useTelegramAPI must be used within a TelegramAPIProvider')
  }
  return context
}
