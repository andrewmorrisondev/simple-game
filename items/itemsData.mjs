export default {
  manaPotion: {
    name: 'mana potion',
    type: 'potion',
    effect: [
      { subsistenceBuff: 50 },
    ],
    appearance: {
      color: 'red',
      style: 'swirling',
    },
  },
  goldCoins: (num) => {
    console.log(num)
  }
}