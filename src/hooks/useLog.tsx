import { CONFIG_PROJECT, CONFIG_DEBUG } from "@/configs";
import { TLogLevel, TLogMessage } from "@/types";
import { serviceLog } from "@/services";


export const useLog = (level: TLogLevel, message: TLogMessage) => {
    if (CONFIG_DEBUG.log || CONFIG_PROJECT.environment === 'dev') {
        serviceLog({ level, message });
    }
};
