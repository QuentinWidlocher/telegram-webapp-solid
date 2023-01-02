import { createSignal, mergeProps, Show } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'
import { Alert } from './alert'

export type AlertButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: JSX.Element
  message: string
  onAlertClose?: () => void
}

export function AlertButton(props: AlertButtonProps) {
  let [showAlert, setShowAlert] = createSignal(false)

  const merged = mergeProps(props, {
    onClick: (e) => {
      setShowAlert(true)

      if (props.onClick && typeof props.onClick == 'function') {
        props.onClick(e)
      }
    },
  })

  return (
    <>
      <button {...merged}>{props.children}</button>
      <Show when={showAlert()}>
        <Alert
          message={props.message}
          onButtonClick={() => {
            props.onAlertClose?.()
            setShowAlert(false)
          }}
        />
      </Show>
    </>
  )
}
