import { WebAppInitData } from "../types/telegram-webapp";
export declare function createInitDataSignal(): [() => WebAppInitData, (data: string) => void];
