import {
    CONFIG_TYPES,
    CONFIG_TYPES_ATTACKS_RELATIONS,
} from "@/configs";
import { ServiceTypes } from "@/services";


export const useType = () => ({
    configTypes: CONFIG_TYPES,
    getEffectiveness: (attackType: string, defenseType: string) => ServiceTypes.getEffectiveness(CONFIG_TYPES_ATTACKS_RELATIONS, attackType, defenseType),
    getCoefficientEffectiveness: (attackType: string, defenseType: string) => ServiceTypes.getCoefficientEffectiveness(ServiceTypes.getEffectiveness(CONFIG_TYPES_ATTACKS_RELATIONS, attackType, defenseType)),
})