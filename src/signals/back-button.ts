import {
  createEffect,
  createRenderEffect,
  createSignal,
  on,
  onCleanup,
} from 'solid-js'
import { logger } from '../../demo/logger'
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

  function updateVisibility() {
    logger.log('BackButtonSignal updateVisibility')
    if (visible()) {
      logger.log('BackButtonSignal show')
      window.Telegram.WebApp.BackButton.show()
    } else {
      logger.log('BackButtonSignal hide')
      window.Telegram.WebApp.BackButton.hide()
    }
  }

  createEffect(updateVisibility)

  createEffect(function updateOnClick() {
    if (props.onClick) {
      window.Telegram.WebApp.BackButton.onClick(() => {
        // logger.log('BackButtonSignal onClick')
        if (props.hapticForce && hapticSignal) {
          hapticSignal()
        }
        props.onClick()
      })
    } else {
      window.Telegram.WebApp.BackButton.onClick(undefined)
    }
  })

  onCleanup(() => {
    updateVisibility()
  })

  return {
    visible,
    setVisible: (v) => {
      setVisible(v)
      logger.log('BackButtonSignal setVisible', v)
    },
    updateVisibility,
  } as const
}
