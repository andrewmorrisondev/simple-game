import items from '../items/itemsData.mjs'

export default {
  hag: {
    name: 'hag',
    stats: {
      stench: 30,
      strength: 15,
      skill: 70,
      stamina: 50,
      sorcery: 80,
      substainance: 30,
      stealth: 40,
    },
    spawnableBiomes: [ 'swamp', 'forest', 'mountain top' ],
    itemDrop: [ 
      items.manaPotion,
      // items.goldCoin,
      // items.exp(10)
    ],
    appearence: {
      color: 'green',
      size: 'medium',
      shape: 'hunched'
    }
  },

  hag: {
    name: 'Wraith',
    stats: {
      stench: 10,
      strength: 65,
      skill: 70,
      stamina: 80,
      sorcery: 80,
      speech: 45,
      substainance: 30,
      stealth: 40,
      spunk: 50
    },
    spawnableBiomes: [ 'sky', 'ruins', 'catacombs' ],
    itemDrop: [ 
      items.manaPotion,
      // items.goldCoin,
      // items.exp(10)
    ],
    appearence: {
      color: 'black',
      size: 'large',
      shape: 'ghastly'
    }
  }
}