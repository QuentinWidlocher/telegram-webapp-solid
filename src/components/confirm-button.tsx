import { createSignal, mergeProps, Show } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'
import { logger } from '../../demo/logger'
import { Confirm } from './Confirm'

export type ConfirmButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: JSX.Element
  message: string
  onClose?: (pressedTrue) => void
}

export function ConfirmButton(props: ConfirmButtonProps) {
  let [showConfirm, setShowConfirm] = createSignal(false)

  const merged = mergeProps(props, {
    onClick: (e) => {
      setShowConfirm(true)

      if (props.onClick && typeof props.onClick == 'function') {
        props.onClick(e)
      }
    },
  })

  return (
    <>
      <button {...merged}>{props.children}</button>
      <Show when={showConfirm()}>
        <Confirm
          message={props.message}
          onButtonClick={(pressedTrue) => {
            props.onClose?.(pressedTrue)
            logger.log('onConfirmClose')
            setShowConfirm(false)
          }}
        />
      </Show>
    </>
  )
}
