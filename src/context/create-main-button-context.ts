import { Accessor, Setter, createSignal, createEffect } from 'solid-js'

export type MainButtonContext = ReturnType<typeof createMainButtonContext>

export function createMainButtonContext() {
  const originalText = window.Telegram.WebApp.MainButton.text

  const [visible, setVisible] = createSignal(
    window.Telegram.WebApp.MainButton.isVisible,
  )
  const [active, setActive] = createSignal(
    window.Telegram.WebApp.MainButton.isActive,
  )
  const [progressVisible, setProgressVisible] = createSignal(
    window.Telegram.WebApp.MainButton.isProgressVisible,
  )
  const [mandatory, setMandatory] = createSignal(false)
  const [text, setText] = createSignal<string | null>(originalText)

  const mainButton = {
    visible,
    setVisible,
    active,
    setActive,
    progressVisible,
    setProgressVisible,
    mandatory,
    setMandatory,
    text,
    setText,
  }

  createEffect(function updateVisibility() {
    if (mainButton.visible()) {
      console.log('showing main button')
      window.Telegram.WebApp.MainButton.show()
    } else {
      console.log('hiding main button')
      window.Telegram.WebApp.MainButton.hide()
    }
  })

  createEffect(function updateText() {
    if (mainButton.text()) {
      window.Telegram.WebApp.MainButton.setText(mainButton.text())
    } else {
      window.Telegram.WebApp.MainButton.setText(originalText)
    }
  })

  createEffect(function updateProgressVisibility() {
    if (mainButton.progressVisible()) {
      window.Telegram.WebApp.MainButton.showProgress()
    } else {
      window.Telegram.WebApp.MainButton.hideProgress()
    }
  })

  createEffect(function updateActive() {
    if (mainButton.active()) {
      window.Telegram.WebApp.MainButton.enable()
    } else {
      window.Telegram.WebApp.MainButton.disable()
    }
  })

  createEffect(function updateMandatory() {
    if (mainButton.mandatory()) {
      window.Telegram.WebApp.enableClosingConfirmation()
    } else {
      window.Telegram.WebApp.disableClosingConfirmation()
    }
  })

  return {
    visible: mainButton.visible,
    setVisible: mainButton.setVisible,
    active: mainButton.active,
    setActive: mainButton.setActive,
    progressVisible: mainButton.progressVisible,
    setProgressVisible: mainButton.setProgressVisible,
    text: mainButton.text,
    setText: mainButton.setText,
    mandatory: mainButton.mandatory,
    setMandatory: mainButton.setMandatory,
  }
}
