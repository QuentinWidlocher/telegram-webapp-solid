import { createSignal, mergeProps, Show } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'
import { PopupParams } from '../types/telegram-webapp'
import { Popup } from './popup'

export type PopupButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> &
  PopupParams & {
    children: JSX.Element
    onPopupClose?: (buttonId: string) => void
  }

export function PopupButton(props: PopupButtonProps) {
  let [showPopup, setShowPopup] = createSignal(false)

  const merged = mergeProps(props, {
    onClick: (e) => {
      setShowPopup(true)

      if (props.onClick && typeof props.onClick == 'function') {
        props.onClick(e)
      }
    },
  })

  return (
    <>
      <button {...merged}>{props.children}</button>
      <Show when={showPopup()}>
        <Popup
          message={props.message}
          buttons={props.buttons}
          title={props.title}
          onButtonClick={(id) => {
            props.onPopupClose?.(id)
            setShowPopup(false)
          }}
        />
      </Show>
    </>
  )
}
