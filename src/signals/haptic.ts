export function createHapticSignal(
  style: Parameters<
    typeof window.Telegram.WebApp.HapticFeedback.impactOccurred
  >[0]
) {
  return () => window.Telegram.WebApp.HapticFeedback.impactOccurred(style);
}
