import { createEffect, createSignal, onCleanup } from 'solid-js'
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

const originalText = window.Telegram.WebApp.MainButton.text

export function createMainButtonSignal(props: MainButtonProps) {
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
  const [text, setText] = createSignal<string | null>(originalText)

  setVisible((visible) => props.show ?? visible)
  setActive((active) => props.active ?? active)
  setProgressVisible((visible) => props.progressVisible ?? visible)
  setText((text) => props.text ?? text)

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

  function handleClick() {
    if (props.hapticForce && hapticSignal) {
      hapticSignal()
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
