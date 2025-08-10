export const ServiceTypes = {
    getEffectiveness : (reference: any, attackType: string, defenseType: string) => {
        const relation = reference[attackType];
    
        if (!relation) {
            throw new Error(`Type d'attaque inconnu : ${attackType}`);
        }
    
        if (relation.strong.includes(defenseType)) {
            return 'efficace';
        }
    
        if (relation.immune.includes(defenseType) || relation.resistant.includes(defenseType)) {
            return 'résistée';
        }
    
        return 'neutre';
    },
    getCoefficientEffectiveness: (effectiveness: string) => {
        switch (effectiveness) {
            case 'efficace':
                return 2;
            case 'résistée':
                return 0.5;
            default:
                return 1;
        }
    }
};