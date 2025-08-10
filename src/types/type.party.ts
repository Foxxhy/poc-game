export interface IConfigParty {
    id: number;
    player: {
        name: string;
        money: number;
        position: {
            map: string;
            x: number;
            y: number;
        };
        inventory: [];
        party: [];
        team: [];
        quests: [];
    }
}