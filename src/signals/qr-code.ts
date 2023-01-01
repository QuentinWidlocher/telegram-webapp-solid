export function promptQrCodeScan(message?: string): Promise<string> {
  return new Promise((resolve, reject) => {
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
