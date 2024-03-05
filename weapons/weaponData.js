export default weapons = {
  sting: {
    name: 'sting',
    type: 'dagger',
    baseDamage: 1000,
    effect: bonusCrit(orc, 10),
    level: legendary
  },
  'simpleSword': {
    name: 'simple sword',
    type: 'sword',
    baseDamage: 500,
    effect: null,
    level: common
  },
  'axe': {
    name: 'axe',
    type: 'axe',
    baseDamage: 800,
    effect: bonusDamage(orc, 10),
    level: rare
  },
}