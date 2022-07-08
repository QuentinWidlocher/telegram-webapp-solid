export function createHapticImpactSignal(
  style: Parameters<
    typeof window.Telegram.WebApp.HapticFeedback.impactOccurred
  >[0]
) {
  return () => window.Telegram.WebApp.HapticFeedback.impactOccurred(style);
}

export function createHapticSelectionSignal() {
  return () => window.Telegram.WebApp.HapticFeedback.selectionChanged();
}
