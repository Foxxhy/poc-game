import { IConfigParty } from "@/types/type.party";

export const CONFIG_PARTY: IConfigParty = {
    id: 1,
    player: {
        name: 'Player',
        position: {
            map: '1',
            x: 0,
            y: 0,
        },
        money: 1000,
        inventory: [],
        party: [],
        team: [],
        quests: [],
    }
}