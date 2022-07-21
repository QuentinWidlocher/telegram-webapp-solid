export function createVersionSignal() {
  return {
    version: () => window.Telegram.WebApp.version,
    isVersionAtLeast: window.Telegram.WebApp.isVersionAtLeast,
  };
}
