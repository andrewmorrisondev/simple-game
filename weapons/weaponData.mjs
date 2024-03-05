export default {
  sting: {
    name: 'sting',
    type: 'dagger',
    baseDamage: 1000,
    damageType: {
      physical: 1000,
      elemental: 1000,
    },
    effect: [
      // bonusCrit(orc, 10)
      'orc bonusCrit 10',
    ],
    level: 'legendary',
    appearance: {
      color: 'blue',
      style: 'glowing',
    },
  },
  anduril: {
    name: 'Andúril',
    type: 'Long Sword',
    baseDamage: 1000,
    damageType: {
      physical: 1000,
      elemental: 1000,
    },
    effect: [
      // bonusCrit(orc, 10)
      'Wraith bonusCrit 30',
    ],
    level: 'legendary',
    appearance: {
      color: 'silver',
      style: 'glowing',
    },
  },
}