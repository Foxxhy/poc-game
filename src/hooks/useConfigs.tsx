import {
    CONFIG_SETTINGS,
    CONFIG_PROJECT,
    CONFIG_WEATHER
} from "@/configs";

export const useConfigs = () => ({
    configSettings: CONFIG_SETTINGS,
    configProject: CONFIG_PROJECT,
    configEnvironment: CONFIG_PROJECT.environment,
    configWeather: CONFIG_WEATHER,
})