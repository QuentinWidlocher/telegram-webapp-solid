export function createPromptQrCodeScanSignal(): (
  message?: string,
) => Promise<string> {
  return (message?: string) =>
    new Promise((resolve, reject) => {
      window.Telegram.WebApp.showScanQrPopup({ text: message }, (result) => {
        if (result) {
          resolve(result)
          return true
        } else {
          reject(new Error('QR code scan failed'))
          return true
        }
      })
    })
}
