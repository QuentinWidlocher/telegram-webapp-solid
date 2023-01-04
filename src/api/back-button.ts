import { createEffect, onCleanup } from 'solid-js'
import { useTelegramAPI } from '../context/context'
import { createHapticImpact } from './haptic'

export type UseBackButtonProps = {
  onClick?: () => void
  show?: boolean
  hapticForce?: Parameters<typeof createHapticImpact>[0]
}

export function useBackButton(props: UseBackButtonProps) {
  const { backButton } = useTelegramAPI()
  const hapticSignal = createHapticImpact(props.hapticForce)

  backButton.setVisible((visible) => props.show ?? visible)

  function handleClick() {
    if (props.hapticForce && hapticSignal) {
      hapticSignal()
    }
    props.onClick()
  }

  createEffect(function updateOnClick() {
    if (props.onClick) {
      window.Telegram.WebApp.BackButton.onClick(handleClick)
    } else {
      window.Telegram.WebApp.BackButton.offClick(handleClick)
    }
  })

  onCleanup(() => {
    window.Telegram.WebApp.BackButton.offClick(handleClick)
  })

  return backButton
}
