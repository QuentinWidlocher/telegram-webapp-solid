import { WebAppInitData } from "../types/telegram-webapp";
export declare function createDataSignal(): [initData: () => WebAppInitData, sendData: (data: string) => void];
