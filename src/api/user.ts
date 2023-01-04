export function getUser() {
  return window.Telegram.WebApp.initDataUnsafe.user
}

export function useUser() {
  return getUser
}
