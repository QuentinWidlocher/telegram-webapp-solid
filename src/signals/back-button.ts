import { createEffect, createSignal } from 'solid-js'
import { createCleanupEffect } from '../utils/create-cleanup-effect'
import { createHapticImpactSignal } from './haptic'

export type BackButtonProps = {
  onClick?: () => void
  show?: boolean
  hapticForce?: Parameters<typeof createHapticImpactSignal>[0]
}

export function createBackButtonSignal(props: BackButtonProps) {
  const hapticSignal = createHapticImpactSignal(props.hapticForce)

  const [visible, setVisible] = createSignal(
    window.Telegram.WebApp.BackButton.isVisible,
  )

  createCleanupEffect(function updateVisibility() {
    if (visible()) {
      window.Telegram.WebApp.BackButton.show()
    } else {
      window.Telegram.WebApp.BackButton.hide()
    }
  })

  createEffect(function updateOnClick() {
    if (props.onClick) {
      window.Telegram.WebApp.BackButton.onClick(() => {
        if (props.hapticForce && hapticSignal) {
          hapticSignal()
        }
        props.onClick()
      })
    } else {
      window.Telegram.WebApp.BackButton.onClick(undefined)
    }
  })

  return {
    visible,
    setVisible,
  }
}
