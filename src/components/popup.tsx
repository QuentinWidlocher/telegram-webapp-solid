import { createSignal, onCleanup, onMount } from 'solid-js'
import type {
  OneToThree,
  PopupButton,
  PopupParams,
} from '../types/telegram-webapp'

type ClickablePopupButton = {
  id?: PopupButton['id']
  text?: PopupButton['text']
  type?: PopupButton['type']
  onClick?: () => void
}

export type PopupProps = {
  title?: PopupParams['title']
  message: PopupParams['message']
  onButtonClick?: (id: string) => void
  buttons: OneToThree<ClickablePopupButton>
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
          props.onButtonClick?.(id)
          props.buttons.find((btn) => btn.id == id)?.onClick?.()
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
