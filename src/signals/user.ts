export function createUserSignal() {
  return () => window.Telegram.WebApp.initDataUnsafe.user;
}
