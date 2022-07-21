export function createLifecycleSignal() {
  return {
    ready: window.Telegram.WebApp.ready,
    close: window.Telegram.WebApp.close,
  };
}
