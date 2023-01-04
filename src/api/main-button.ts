import { createEffect, onCleanup } from 'solid-js'
import { useTelegramAPI } from '../context/context'
import { createHapticImpact } from './haptic'

export type UseMainButtonProps = {
  onClick?: () => void
  text?: string | null
  show?: boolean
  active?: boolean
  progressVisible?: boolean
  mandatory?: boolean
  hapticForce?: Parameters<typeof createHapticImpact>[0]
}

export const originalText = window.Telegram.WebApp.MainButton.text

export function useMainButton(props: UseMainButtonProps) {
  const hapticSignal = createHapticImpact(props.hapticForce)

  const { mainButton } = useTelegramAPI()

  mainButton.setVisible((visible) => props.show ?? visible)
  mainButton.setActive((active) => props.active ?? active)
  mainButton.setMandatory((mandatory) => props.mandatory ?? mandatory)
  mainButton.setProgressVisible((visible) => props.progressVisible ?? visible)
  mainButton.setText((text) => props.text ?? text)

  function handleClick() {
    if (props.hapticForce && hapticSignal) {
      hapticSignal()
    }

    if (mainButton.mandatory()) {
      mainButton.setMandatory(false)
    }

    props.onClick()
  }

  createEffect(function updateOnClick() {
    if (props.onClick) {
      window.Telegram.WebApp.MainButton.onClick(handleClick)
    } else {
      window.Telegram.WebApp.MainButton.offClick(handleClick)
    }
  })

  onCleanup(() => {
    window.Telegram.WebApp.MainButton.offClick(handleClick)
  })

  return mainButton
}
