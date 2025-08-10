import objectDelimiter from '@/images/object/delimiter.png';
import objectFence from '@/images/object/fence.png';
import objectGrass from '@/images/object/grass.png';
import objectHouse from '@/images/object/house.png';
import objectLedger from '@/images/object/ledger.png';
import objectProfOakLab from '@/images/object/prof-oaks-lab.png';
import objectSign from '@/images/object/sign.png';
import objectTree from '@/images/object/tree.png';
import objectWater from '@/images/object/water.png';

import ashDownMove from '@/images/pokemon/ash-down-move.png';
import ashDown from '@/images/pokemon/ash-down.png';
import ashLeftMove from '@/images/pokemon/ash-left-move.png';
import ashLeft from '@/images/pokemon/ash-left.png';
import ashRightMove from '@/images/pokemon/ash-right-move.png';
import ashRight from '@/images/pokemon/ash-right.png';
import ashUpMove from '@/images/pokemon/ash-up-move.png';
import ashUp from '@/images/pokemon/ash-up.png';

import pokemonPidgeyBack from '@/images/pokemon/pidgey-back.png';
import pokemonPidgeyFront from '@/images/pokemon/pidgey-front.png';
import pokemonRatataBack from '@/images/pokemon/ratata-back.png';
import pokemonRatataFront from '@/images/pokemon/ratata-front.png';
import pokemonSquirtleBack from '@/images/pokemon/squirtle-back.png';
import pokemonSquirtleFront from '@/images/pokemon/squirtle-front.png';

export const useAssets = () => ({
    objects: {
        delimiter: objectDelimiter,
        fence: objectFence,
        grass: objectGrass,
        house: objectHouse,
        ledger: objectLedger,
        profOakLab: objectProfOakLab,
        sign: objectSign,
        tree: objectTree,
        water: objectWater,
    },
    player: {
        ashDownMove,
        ashDown,
        ashLeftMove,
        ashLeft,
        ashRightMove,
        ashRight,
        ashUpMove,
        ashUp,
    },
    pokemon: {
        pidgey: {
            back: pokemonPidgeyBack,
            front: pokemonPidgeyFront,
        },
        ratata: {
            back: pokemonRatataBack,
            front: pokemonRatataFront,
        },
        squirtle: {
            back: pokemonSquirtleBack,
            front: pokemonSquirtleFront,
        },
    }
})