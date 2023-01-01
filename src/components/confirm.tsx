import { createSignal, onCleanup, onMount } from 'solid-js'

export type ConfirmProps = {
  message: string
  onButtonClick?: (pressedTrue) => void
}

const [alreadyOpened, setAlreadyOpened] = createSignal(false)

export function Confirm(props: ConfirmProps) {
  onMount(() => {
    if (alreadyOpened()) {
      throw new Error('Confirm can only be opened once')
    } else {
      window.Telegram.WebApp.showConfirm(props.message, (pressedTrue) => {
        props.onButtonClick(pressedTrue)
      })
      setAlreadyOpened(true)
    }
  })

  onCleanup(() => {
    setAlreadyOpened(false)
  })

  return null
}
