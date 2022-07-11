export function createInitDataSignal() {
  return [() => window.Telegram.WebApp.initDataUnsafe, window.Telegram.WebApp.sendData];
}