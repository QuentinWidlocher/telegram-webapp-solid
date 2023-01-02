import * as Telegram from './types/telegram-webapp'

export { AlertButton } from './components/alert-button'
export type { AlertButtonProps } from './components/alert-button'
export { BackButton } from './components/back-button'
export type { BackButtonProps } from './components/back-button'
export { ConfirmButton } from './components/confirm-button'
export type { ConfirmButtonProps } from './components/confirm-button'
export { HapticButton } from './components/haptic-button'
export type { HapticButtonProps } from './components/haptic-button'
export { HapticInput } from './components/haptic-input'
export type { HapticInputProps } from './components/haptic-input'
export { MainButton } from './components/main-button'
export type { MainButtonProps } from './components/main-button'
export { PopupButton } from './components/popup-button'
export type { PopupButtonProps } from './components/popup-button'
export { QrCodeButton } from './components/qr-code-button'
export type { QrCodeButtonProps } from './components/qr-code-button'
export { StableContainer } from './components/stable-container'
export type { StableContainerProps } from './components/stable-container'

export { createBackButtonSignal } from './signals/back-button'
export { createDataSignal } from './signals/data'
export { createExpandSignal } from './signals/expand'
export {
  createHapticImpactSignal,
  createHapticSelectionSignal,
} from './signals/haptic'
export { createLifecycleSignal } from './signals/lifecycle'
export { createMainButtonSignal } from './signals/main-button'
export { createOpenSignal } from './signals/open'
export { promptQrCodeScan } from './signals/qr-code'
export { createThemeSignal } from './signals/theme'
export { createUserSignal } from './signals/user'
export { createVersionSignal } from './signals/version'
export {
  createViewportHeightSignal,
  createViewportStableHeightSignal,
} from './signals/viewport'

declare global {
  export interface Window {
    Telegram: {
      WebApp: Telegram.WebApp
    }
  }
}
