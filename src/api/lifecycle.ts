export const ready = window.Telegram.WebApp.ready
export const close = window.Telegram.WebApp.close

export function useLifecycle() {
  return {
    ready,
    close,
  }
}
