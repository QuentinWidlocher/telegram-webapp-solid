export function createOpenSignal() {
  return {
    openLink: window.Telegram.WebApp.openLink,
    openTelegramLink: window.Telegram.WebApp.openTelegramLink,
    openInvoice: window.Telegram.WebApp.openInvoice,
    onInvoiceClosed: (
      cb: (obj: {
        url: string;
        status: "paid" | "cancelled" | "failed" | "pending";
      }) => void
    ) => {
      window.Telegram.WebApp.onEvent("invoiceClosed", cb);
    },
  };
}
