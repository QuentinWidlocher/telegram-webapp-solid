import { mergeProps } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'
import { promptQrCodeScan } from '../api/qr-code'

export type QrCodeButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: JSX.Element
  message?: string
  onDataReceived: (data: string) => void
}

export function QrCodeButton(props: QrCodeButtonProps) {
  const merged = mergeProps(props, {
    onClick: (e) => {
      promptQrCodeScan(props.message).then((result) => {
        props.onDataReceived(result)
      })
      if (props.onClick && typeof props.onClick == 'function') {
        props.onClick(e)
      }
    },
  })

  return <button {...merged}>{props.children}</button>
}
