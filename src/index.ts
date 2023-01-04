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
export { VersionContainer } from './components/version-container'

export { useBackButton } from './api/back-button'
export type { UseBackButtonProps } from './api/back-button'
export { useData, getData, sendData } from './api/data'
export {
  createHapticImpact,
  createHapticSelection,
  hapticImpact,
  hapticSelection,
} from './api/haptic'
export type { HapticForce } from './api/haptic'
export { useLifecycle, close, ready } from './api/lifecycle'
export { useMainButton, originalText } from './api/main-button'
export type { UseMainButtonProps } from './api/main-button'
export {
  useOpenFunctions,
  onInvoiceClosed,
  openInvoice,
  openLink,
  openTelegramLink,
} from './api/open'
export { createPromptQrCodeScan, promptQrCodeScan } from './api/qr-code'
export { useTheme } from './api/theme'
export { useUser, getUser } from './api/user'
export {
  useVersion,
  checkIfAvailable,
  isVersionAtLeast,
  apiVersions,
} from './api/version'
export type { APIVersion } from './api/version'
export { useViewport } from './api/viewport'

export { TelegramAPIProvider, useTelegramAPI } from './context/context'

declare global {
  export interface Window {
    Telegram: {
      WebApp: Telegram.WebApp
    }
  }
}
