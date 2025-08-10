import { ILog } from "@/types";

export const serviceLog = (log: ILog) => {
    const date = new Date();
    console.log(`[${log.level}]: ${date.toLocaleString()} - ${log.message}`);
}