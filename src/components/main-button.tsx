import { createEffect, onCleanup, useContext } from 'solid-js'
import { createHapticImpact } from '../api/haptic'
import { useMainButton } from '../api/main-button'

export type MainButtonProps = {
  onClick?: () => void
  text?: string
  active?: boolean
  progressVisible?: boolean
  mandatory?: boolean
  onMandatoryChange?: (mandatory: boolean) => void
  hapticForce?: Parameters<typeof createHapticImpact>[0]
}

export function MainButton(props: MainButtonProps) {
  const mainButton = useMainButton({
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
    console.log('main button cleanup, we hide')
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
