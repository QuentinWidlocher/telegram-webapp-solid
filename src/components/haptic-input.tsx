import { mergeProps } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'
import { hapticSelection } from '../api/haptic'

export type HapticInputProps = JSX.InputHTMLAttributes<HTMLInputElement> & {
  children?: JSX.Element
}

export function HapticInput(props: HapticInputProps) {
  const merged = mergeProps(props, {
    onselectionchange: (e) => {
      hapticSelection()
    },
  })

  return <input {...merged}>{props.children}</input>
}
