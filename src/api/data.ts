import { WebAppInitData } from "../types/telegram-webapp";

export function sendData(data: string) {
  window.Telegram.WebApp.sendData(data);
}

export function getData(): WebAppInitData {
  return window.Telegram.WebApp.initDataUnsafe;
}

export function useData(): [initData: WebAppInitData, sendData: (data: string) => void] {
  return [getData(), sendData];
}