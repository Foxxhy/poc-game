import { CONFIG_PROJECT } from "@/configs";

export const useEnv = () => ({
    isDev: CONFIG_PROJECT.environment === 'dev',
    isProd: CONFIG_PROJECT.environment === 'prod',
})