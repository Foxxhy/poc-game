import { CONFIG_PROJECT, CONFIG_PARTY, CONFIG_SAVE, CONFIG_DEBUG, CONFIG_SETTINGS } from "@/configs";
import { IConfigParty, IConfigDebug, IConfigSettings } from "@/types";
import { serviceSave } from "@/services";




export const useSettings = () => ({
    saveParty: (data: IConfigParty) => serviceSave.save(serviceSave.formater(`${CONFIG_SAVE.party}-${CONFIG_PROJECT.name}`), data),
    saveDebug: (data: IConfigDebug) => serviceSave.save(serviceSave.formater(`${CONFIG_SAVE.debug}-${CONFIG_PROJECT.name}`), data),
    saveSettings: (data: IConfigSettings) => serviceSave.save(serviceSave.formater(`${CONFIG_SAVE.settings}-${CONFIG_PROJECT.name}`), data),
    loadParty: (): IConfigParty => serviceSave.load(serviceSave.formater(`${CONFIG_SAVE.party}-${CONFIG_PROJECT.name}`)) as IConfigParty || CONFIG_PARTY,
    loadDebug: (): IConfigDebug => serviceSave.load(serviceSave.formater(`${CONFIG_SAVE.debug}-${CONFIG_PROJECT.name}`)) as IConfigDebug || CONFIG_DEBUG,
    loadSettings: (): IConfigSettings => serviceSave.load(serviceSave.formater(`${CONFIG_SAVE.settings}-${CONFIG_PROJECT.name}`)) as IConfigSettings || CONFIG_SETTINGS,
})