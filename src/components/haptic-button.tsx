import { mergeProps } from 'solid-js'
import { JSX } from 'solid-js/jsx-runtime'
import { HapticForce, hapticImpact } from '../api/haptic'

export type HapticButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: JSX.Element
  hapticForce?: HapticForce
}

export function HapticButton(props: HapticButtonProps) {
  const merged = mergeProps(props, {
    onClick: (e) => {
      hapticImpact(props.hapticForce ?? 'medium')
      if (props.onClick && typeof props.onClick == 'function') {
        props.onClick(e)
      }
    },
  })

  return <button {...merged}>{props.children}</button>
}
