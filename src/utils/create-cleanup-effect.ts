import { createRoot, createEffect, onCleanup } from 'solid-js'
import { EffectFunction } from 'solid-js/types/reactive/signal'

/**
 * Like a normal effect, but it will run once before the cleanup
 * Curtesy of Fabio Spampinato
 */
export function createCleanupEffect(fn: EffectFunction<unknown, unknown>) {
  let dispose = () => {}
  createRoot((d) => {
    dispose = d
    createEffect(fn)
  })
  onCleanup(() => {
    queueMicrotask(dispose)
  })
}
