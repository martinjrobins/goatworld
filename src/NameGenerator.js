const firstNames = [
  "poopy",
  "fluffy",
  "farty",
  "scratchy",
  "happy",
  "goaty",
  "grumpy",
  "slappy",
  "burpy",
  "rainbow",
  "naked",
  "sparkle"
];

const secondNames = [
  "butt butt",
  "goat",
  "poop",
  "mcgoatyface",
  "mcgoatington",
  "mario",
  "moonshine",
  "underwear",
  "supergoat",
  "guys",
  "dancing butt",
  "mcpoopington",
  "toes",
];

function generateGoatName() {
  var firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  var secondName = secondNames[Math.floor(Math.random() * secondNames.length)]
  return `${firstName} ${secondName}`
}

export default generateGoatName
