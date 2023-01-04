import { createSignal, onCleanup } from 'solid-js'

export type ViewportContext = ReturnType<typeof createViewportContext>

export function createViewportContext() {
  const [expanded, setExpanded] = createSignal(
    window.Telegram.WebApp.isExpanded,
  )
  const [viewportHeight, setViewportHeight] = createSignal(
    window.Telegram.WebApp.viewportHeight,
  )
  const [viewportStableHeight, setViewportStableHeight] = createSignal(
    window.Telegram.WebApp.viewportStableHeight,
  )

  function updateViewport(isStable: boolean) {
    if (isStable) {
      setExpanded(window.Telegram.WebApp.isExpanded)
      setViewportStableHeight(window.Telegram.WebApp.viewportStableHeight)
    }

    setViewportHeight(window.Telegram.WebApp.viewportHeight)
  }

  window.Telegram.WebApp.onEvent('viewportChanged', updateViewport)

  onCleanup(() => {
    window.Telegram.WebApp.offEvent('viewportChanged', updateViewport)
  })

  return {
    expanded,
    expand: () => window.Telegram.WebApp.expand(),
    viewportHeight,
    viewportStableHeight,
  }
}
