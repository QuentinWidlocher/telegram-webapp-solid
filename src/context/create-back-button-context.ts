import { createSignal, createEffect } from 'solid-js'

export type BackButtonContext = ReturnType<typeof createBackButtonContext>

export function createBackButtonContext() {
  const [visible, setVisible] = createSignal(
    window.Telegram.WebApp.BackButton.isVisible,
  )

  createEffect(function updateVisibility() {
    if (visible()) {
      window.Telegram.WebApp.BackButton.show()
    } else {
      window.Telegram.WebApp.BackButton.hide()
    }
  })

  return {
    visible,
    setVisible,
  }
}
