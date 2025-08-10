import { CONFIG_DAY, CONFIG_SETTINGS } from "@/configs";
import { ServiceDate } from "@/services";

export const useDate = () => ({
    getDate: () => ServiceDate.getDate(),
    getDay: () => ServiceDate.getDay(CONFIG_SETTINGS.day.duration, CONFIG_DAY),
    getHour: () => ServiceDate.getHour(CONFIG_SETTINGS.day.duration),
    getPeriod: () => ServiceDate.getPeriod(CONFIG_SETTINGS.day.duration, CONFIG_DAY.period),
})