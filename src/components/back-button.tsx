import { createEffect, onCleanup, onMount } from 'solid-js'
import { createBackButtonSignal } from '../signals/back-button'
import { createHapticImpactSignal } from '../signals/haptic'

export type BackButtonProps = {
  onClick?: () => void
  hapticForce?: Parameters<typeof createHapticImpactSignal>[0]
}

export function BackButton(props: BackButtonProps) {
  const backButton = createBackButtonSignal({
    onClick: props.onClick,
    hapticForce: props.hapticForce,
    show: true,
  })

  onMount(() => {
    backButton.setVisible(true)
  })

  onCleanup(() => {
    backButton.setVisible(false)
  })

  return null
}
