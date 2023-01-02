import { createEffect, onCleanup, onMount } from 'solid-js'
import { createHapticImpactSignal } from '../signals/haptic'
import { createMainButtonSignal } from '../signals/main-button'

export type MainButtonProps = {
  onClick?: () => void
  text?: string
  active?: boolean
  progressVisible?: boolean
  mandatory?: boolean
  onMandatoryChange?: (mandatory: boolean) => void
  hapticForce?: Parameters<typeof createHapticImpactSignal>[0]
}

export function MainButton(props: MainButtonProps) {
  const mainButton = createMainButtonSignal({
    onClick: props.onClick,
    text: props.text,
    hapticForce: props.hapticForce,
    active: props.active,
    progressVisible: props.progressVisible,
    mandatory: props.mandatory,
    show: true,
  })

  createEffect(() => {
    props.onMandatoryChange?.(mainButton.mandatory())
  })

  onCleanup(() => {
    mainButton.setVisible(false)
    mainButton.setActive(true)
    mainButton.setProgressVisible(false)
    mainButton.setText(null)
    mainButton.setMandatory(false)
  })

  createEffect(() => {
    mainButton.setActive(props.active)
    mainButton.setProgressVisible(props.progressVisible)
    mainButton.setText(props.text)
    mainButton.setMandatory(props.mandatory)
  })

  return null
}
