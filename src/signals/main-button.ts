import { createEffect, createSignal } from 'solid-js'
import { createHapticImpactSignal } from '../signals/haptic'
import { createCleanupEffect } from '../utils/create-cleanup-effect'

export type MainButtonProps = {
  onClick?: () => void
  text?: string | null
  show?: boolean
  active?: boolean
  progressVisible?: boolean
  hapticForce?: Parameters<typeof createHapticImpactSignal>[0]
}

export function createMainButtonSignal(props: MainButtonProps) {
  const originalText = window.Telegram.WebApp.MainButton.text
  const hapticSignal = createHapticImpactSignal(props.hapticForce)

  const [visible, setVisible] = createSignal(
    window.Telegram.WebApp.MainButton.isVisible,
  )
  const [active, setActive] = createSignal(
    window.Telegram.WebApp.MainButton.isActive,
  )
  const [progressVisible, setProgressVisible] = createSignal(
    window.Telegram.WebApp.MainButton.isProgressVisible,
  )
  const [text, setText] = createSignal<string | null>(
    props.text ?? originalText,
  )

  setVisible(props.show ?? visible())
  setActive(props.active ?? active())
  setProgressVisible(props.progressVisible ?? progressVisible())

  createCleanupEffect(function updateVisibility() {
    if (visible()) {
      window.Telegram.WebApp.MainButton.show()
    } else {
      window.Telegram.WebApp.MainButton.hide()
    }
  })

  createEffect(function updateText() {
    if (text()) {
      window.Telegram.WebApp.MainButton.setText(text())
    } else {
      window.Telegram.WebApp.MainButton.setText(originalText)
    }
  })

  createEffect(function updateProgressVisibility() {
    if (progressVisible()) {
      window.Telegram.WebApp.MainButton.showProgress()
    } else {
      window.Telegram.WebApp.MainButton.hideProgress()
    }
  })

  createEffect(function updateActive() {
    if (active()) {
      window.Telegram.WebApp.MainButton.enable()
    } else {
      window.Telegram.WebApp.MainButton.disable()
    }
  })

  createEffect(function updateOnClick() {
    if (props.onClick) {
      window.Telegram.WebApp.MainButton.onClick(() => {
        if (props.hapticForce && hapticSignal) {
          hapticSignal()
        }
        props.onClick()
      })
    } else {
      window.Telegram.WebApp.MainButton.onClick(undefined)
    }
  })

  return {
    visible,
    setVisible,
    text,
    setText,
    progressVisible,
    setProgressVisible,
    active,
    setActive,
  }
}
