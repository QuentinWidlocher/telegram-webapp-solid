import { createEffect } from 'solid-js'
import { useTelegramAPI } from '../context/context'

export function useViewport(props?: {
  onExpand?: () => void
  onCollapse?: () => void
}) {
  const { viewport } = useTelegramAPI()

  createEffect(() => {
    const expanded = viewport.expanded()
    if (expanded && props?.onExpand) {
      props.onExpand()
    }
    if (!expanded && props?.onCollapse) {
      props.onCollapse()
    }
  })

  return viewport
}
