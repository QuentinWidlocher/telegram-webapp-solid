import { createSignal, onCleanup, onMount } from 'solid-js'

export type AlertProps = {
  message: string
  onButtonClick?: () => void
}

const [alreadyOpened, setAlreadyOpened] = createSignal(false)

export function Alert(props: AlertProps) {
  onMount(() => {
    if (alreadyOpened()) {
      throw new Error('Alert can only be opened once')
    } else {
      window.Telegram.WebApp.showAlert(props.message, () => {
        props.onButtonClick()
      })
      setAlreadyOpened(true)
    }
  })

  onCleanup(() => {
    setAlreadyOpened(false)
  })

  return null
}
