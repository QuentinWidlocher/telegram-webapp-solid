import { onCleanup, onMount } from 'solid-js'
import { logger } from '../../demo/logger'
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
  })

  onMount(() => {
    logger.log('BackButton mounted')
    backButton.setVisible(true)
  })

  onCleanup(() => {
    logger.log('BackButton unmounted')
    backButton.setVisible(false)
    backButton.updateVisibility()
  })

  return null
}
