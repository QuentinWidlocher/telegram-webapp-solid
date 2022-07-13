import { createEffect, onCleanup, onMount } from 'solid-js'
import { createHapticImpactSignal } from '../signals/haptic'
import { createMainButtonSignal } from '../signals/main-button'

export type MainButtonProps = {
  onClick?: () => void
  text?: string
  hapticForce?: Parameters<typeof createHapticImpactSignal>[0]
}

export function MainButton(props: MainButtonProps) {
  const mainButton = createMainButtonSignal({
    onClick: props.onClick,
    text: props.text,
    hapticForce: props.hapticForce,
    show: true,
  })

  onMount(() => {
    console.log('MainButtonComponent mounted')
    mainButton.setVisible(true)
  })

  onCleanup(() => {
    console.log('MainButtonComponent unmounted')
    mainButton.setVisible(false)
  })

  return null
}
