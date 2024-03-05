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
      substinance: 30,
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
  }
}