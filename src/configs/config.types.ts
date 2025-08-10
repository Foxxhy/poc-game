import { IConfigTypes } from "@/types";

export const CONFIG_TYPES: IConfigTypes = {
    water: 'eau',
    fire: 'feu',
    grass: 'plante',
    electric: 'électrique',
    ice: 'glace',
    fighting: 'combat',
    poison: 'poison',
    ground: 'sol',
    flying: 'vol',
    psychic: 'psy',
    bug: 'insecte',
    rock: 'roche',
    ghost: 'spectre',
    dragon: 'dragon',
    dark: 'ténèbres',
    steel: 'acier',
    fairy: 'fée',
}

export const CONFIG_TYPES_ATTACKS_RELATIONS = {
    water: {
        strong: ['fire', 'rock', 'ground'],
        resistant: ['grass', 'electric', 'ice'],
        immune: ['water', 'grass', 'dragon'],
    },
    fire: {
        strong: ['grass', 'ice', 'bug', 'steel'],
        resistant: ['fire', 'water', 'rock', 'dragon'],
        immune: ['ground', 'rock', 'water'],
    },
    grass: {
        strong: ['water', 'ground', 'rock'],
        resistant: ['grass', 'electric', 'ice', 'ground', 'flying', 'poison', 'bug', 'dragon', 'steel', 'fairy'],
        immune: ['fire', 'poison', 'flying', 'ice'],
    },
    electric: {
        strong: ['water', 'flying'],
        resistant: ['electric', 'steel', 'grass'],
        immune: ['ground'],
    },
    ice: {
        strong: ['grass', 'ground', 'flying', 'dragon'],
        resistant: ['ice', 'water', 'fire', 'steel'],
        immune: ['electric'],
    },
    fighting: {
        strong: ['normal', 'ice', 'dark'],
        resistant: ['fighting', 'psychic', 'fairy'],
        immune: ['ghost'],
    },
    poison: {
        strong: ['grass', 'fairy'],
        resistant: ['poison', 'ground', 'rock', 'ghost'],
        immune: ['steel'],
    },
    ground: {
        strong: ['fire', 'electric', 'poison', 'rock', 'steel'],
        resistant: ['poison', 'rock', 'electric'],
        immune: ['grass', 'flying'],
    },
    flying: {
        strong: ['grass', 'fighting', 'bug'],
        resistant: ['fighting', 'ground', 'bug', 'grass', 'steel'],
        immune: ['rock', 'electric', 'ice'],
    },
    psychic: {
        strong: ['fighting', 'poison'],
        resistant: ['psychic', 'steel'],
        immune: ['dark'],
    },
    bug: {
        strong: ['grass', 'psychic', 'dark'],
        resistant: ['fighting', 'ground', 'grass'],
        immune: ['flying', 'rock', 'fire'],
    },
    rock: {
        strong: ['fire', 'electric', 'poison', 'flying'],
        resistant: ['normal', 'fire', 'poison', 'flying'],
        immune: ['fighting'],
    },
    ghost: {
        strong: ['psychic', 'ghost'],
        resistant: ['poison', 'bug'],
        immune: ['normal', 'fighting'],
    },
    dragon: {
        strong: ['dragon'],
        resistant: ['fire', 'water', 'grass', 'electric'],
        immune: ['steel'],
    },
    dark: { 
        strong: ['psychic', 'ghost'],
        resistant: ['fighting', 'dark', 'fairy'],
        immune: ['psychic'],
    },
    steel: {
        strong: ['ice', 'rock', 'fairy'],
        resistant: ['normal', 'fire', 'fighting', 'ground'],
        immune: ['poison'],
    },
    fairy: {
        strong: ['fighting', 'dragon', 'dark'],
        resistant: ['poison', 'steel', 'fire'],
        immune: ['ghost'],
    }
}

export const CONFIG_TYPES_RESISTANCE_TYPES = {
    water: {
        strong: ['fire', 'rock', 'ground'],
        resistant: ['grass', 'electric', 'ice'],
        immune: ['water', 'grass', 'dragon'],
    },
    fire: {
        strong: ['grass', 'ice', 'bug', 'steel'],
        resistant: ['fire', 'water', 'rock', 'dragon'],
        immune: ['ground', 'rock', 'water'],
    },
    grass: {
        strong: ['water', 'ground', 'rock'],
        resistant: ['grass', 'electric', 'ice', 'ground', 'flying', 'poison', 'bug', 'dragon', 'steel', 'fairy'],
        immune: ['fire', 'poison', 'flying', 'ice'],
    },
    electric: {
        strong: ['water', 'flying'],
        resistant: ['electric', 'steel', 'grass'],
        immune: ['ground'],
    },
    ice: {
        strong: ['grass', 'ground', 'flying', 'dragon'],
        resistant: ['ice', 'water', 'fire', 'steel'],
        immune: ['electric'],
    },
    fighting: {
        strong: ['normal', 'ice', 'dark'],
        resistant: ['fighting', 'psychic', 'fairy'],
        immune: ['ghost'],
    },
    poison: {
        strong: ['grass', 'fairy'],
        resistant: ['poison', 'ground', 'rock', 'ghost'],
        immune: ['steel'],
    },
    ground: {
        strong: ['fire', 'electric', 'poison', 'rock', 'steel'],
        resistant: ['poison', 'rock', 'electric'],
        immune: ['grass', 'flying'],
    },
    flying: {
        strong: ['grass', 'fighting', 'bug'],
        resistant: ['fighting', 'ground', 'bug', 'grass', 'steel'],
        immune: ['rock', 'electric', 'ice'],
    },
    psychic: {
        strong: ['fighting', 'poison'],
        resistant: ['psychic', 'steel'],
        immune: ['dark'],
    },
    bug: {
        strong: ['grass', 'psychic', 'dark'],
        resistant: ['fighting', 'ground', 'grass'],
        immune: ['flying', 'rock', 'fire'],
    },
    rock: {
        strong: ['fire', 'electric', 'poison', 'flying'],
        resistant: ['normal', 'fire', 'poison', 'flying'],
        immune: ['fighting'],
    },
    ghost: {
        strong: ['psychic', 'ghost'],
        resistant: ['poison', 'bug'],
        immune: ['normal', 'fighting'],
    },
    dragon: {
        strong: ['dragon'],
        resistant: ['fire', 'water', 'grass', 'electric'],
        immune: ['steel'],
    },
    dark: { 
        strong: ['psychic', 'ghost'],
        resistant: ['fighting', 'dark', 'fairy'],
        immune: ['psychic'],
    },
    steel: {
        strong: ['ice', 'rock', 'fairy'],
        resistant: ['normal', 'fire', 'fighting', 'ground'],
        immune: ['poison'],
    },
    fairy: {
        strong: ['fighting', 'dragon', 'dark'],
        resistant: ['poison', 'steel', 'fire'],
        immune: ['ghost'],
    }
}