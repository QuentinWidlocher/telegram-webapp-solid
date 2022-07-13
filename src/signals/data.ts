import { WebAppInitData } from "../types/telegram-webapp";

export function createDataSignal(): [initData: () => WebAppInitData, sendData: (data: string) => void] {
  return [() => window.Telegram.WebApp.initDataUnsafe, window.Telegram.WebApp.sendData];
}