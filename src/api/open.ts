export function onInvoiceClosed(
  cb: (obj: {
    url: string
    status: 'paid' | 'cancelled' | 'failed' | 'pending'
  }) => void,
) {
  window.Telegram.WebApp.onEvent('invoiceClosed', cb)
}

export const openLink = window.Telegram.WebApp.openLink
export const openTelegramLink = window.Telegram.WebApp.openTelegramLink
export const openInvoice = window.Telegram.WebApp.openInvoice

export function useOpenFunctions() {
  return {
    openLink,
    openTelegramLink,
    openInvoice,
    onInvoiceClosed,
  }
}
