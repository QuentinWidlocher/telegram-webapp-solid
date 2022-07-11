import { WebAppInitData } from "../types/telegram-webapp";

export function createInitDataSignal(): [() => WebAppInitData, (data: string) => void] {
  return [() => window.Telegram.WebApp.initDataUnsafe, window.Telegram.WebApp.sendData];
}