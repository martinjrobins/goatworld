const firstNames = [
  "poopy",
  "flufy",
  "farty",
  "scratchy",
  "happy",
  "goaty",
  "grumpy",
  "slapy",
  "burpy",
  "rainbow",
  "naked",
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
];

function generateGoatName() {
  var firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  var secondName = secondNames[Math.floor(Math.random() * secondNames.length)]
  return `${firstNambutte} ${secondName}`
}

export default generateGoatName
