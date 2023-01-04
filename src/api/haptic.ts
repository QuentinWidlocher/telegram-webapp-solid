export type HapticForce = Parameters<
  typeof window.Telegram.WebApp.HapticFeedback.impactOccurred
>[0]

export function hapticImpact(force: HapticForce) {
  window.Telegram.WebApp.HapticFeedback.impactOccurred(force)
}

export function hapticSelection() {
  window.Telegram.WebApp.HapticFeedback.selectionChanged()
}

export function createHapticImpact(force: HapticForce) {
  return () => hapticImpact(force)
}

export function createHapticSelection() {
  return () => hapticSelection()
}
