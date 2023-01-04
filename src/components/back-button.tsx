import { onCleanup } from 'solid-js'
import { useBackButton } from '../api/back-button'
import { createHapticImpact } from '../api/haptic'

export type BackButtonProps = {
  onClick?: () => void
  hapticForce?: Parameters<typeof createHapticImpact>[0]
}

export function BackButton(props: BackButtonProps) {
  const backButton = useBackButton({
    onClick: props.onClick,
    hapticForce: props.hapticForce,
    show: true,
  })

  onCleanup(() => {
    backButton.setVisible(false)
  })

  return null
}
