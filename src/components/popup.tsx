import { createSignal, onCleanup, onMount } from 'solid-js'
import type { PopupParams } from '../types/telegram-webapp'

export type PopupProps = PopupParams & {
  onButtonClick?: (id: string) => void
}

const [alreadyOpened, setAlreadyOpened] = createSignal(false)

export function Popup(props: PopupProps) {
  onMount(() => {
    if (alreadyOpened()) {
      throw new Error('Popup can only be opened once')
    } else {
      window.Telegram.WebApp.showPopup(
        {
          message: props.message,
          buttons: props.buttons,
          title: props.title,
        },
        (id) => {
          props.onButtonClick(id)
        },
      )
      setAlreadyOpened(true)
    }
  })

  onCleanup(() => {
    setAlreadyOpened(false)
  })

  return null
}
