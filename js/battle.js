class Pokemon {
  constructor(name, type, health, damage, defense, ataque){
    this.name = name;
    this.type = type;
    this.health = health;
    this.damage = damage;
    this.defense = defense;
    this.ataque = ataque;
  }
  attack(target) {
    target.health -= this.damage;
    ui.innerHTML= `${this.name} has attacked ${this.ataque}`
  }
  def(target) {
    const lucky = Math.floor(Math.random()*100);
    console.log(`tu numero de sorteo es ${lucky}`);
    if( lucky < 50){
      target.health += lucky;
    }else {
      console.log(`ha fallado la denfensa`)
    } 
  }
  superAttack(target, pokemon) {
    const lucky = Math.floor(Math.random()*100);
    console.log(`tu numero de sorteo es ${lucky}`)
    if (lucky <50) {
      target.health -= this.damage
      pokemon.health -= 20;
      ui.innerHTML = `SUPER ATTACK!`
    } else {
      pokemon.health -= 50;
      ui.innerHTML = `THE SUPER ATTACK HAS WEAKENED YOU`
    }
  }
}

const squartle = new Pokemon ('squartle', 'water', 100, 30, 30, 'Waterjet');
const charmander = new Pokemon ('charmander', 'fire', 100, 35,25 , 'Fire flames')
const pikachu = new Pokemon ('pikachu', 'electrical', 100, 45, 15, 'Thundershock')
const newtwo = new Pokemon ('newtwo', 'legendary', 200, 50, 50, 'neolipsis');

////selectores
botonataque1 = document.getElementById("pokemonButton1");
botonataque2 = document.getElementById("pokemonButton2");
botonataque3 = document.getElementById("pokemonButton3");
botonDefensa = document.getElementById("defense");
botonSuper = document.getElementById("superAttack");
ui = document.getElementById("uiAlert");

//// selectores de contadores 
pokemonCounter1 = document.getElementById("counter1")
pokemonCounter2 = document.getElementById("counter2")
pokemonCounter3 = document.getElementById("counter3")
bossCounter = document.getElementById("counterBoss")

////functions
const ataque = (button, pokemon, enemy) => {
button.addEventListener('click', ()=>{
  pokemon.attack(enemy);
  console.log(enemy.health)
  bossCounter.innerHTML = newtwo.health
  redireccion();
})
};

botonDefensa.addEventListener('click', ()=>{
  squartle.def(squartle);
  charmander.def(charmander);
  pikachu.def(pikachu);
  console.log (charmander.health)
  console.log (pikachu.health)
  console.log (squartle.health)
  pokemonCounter1.innerHTML = squartle.health
  pokemonCounter2.innerHTML = charmander.health
  pokemonCounter3.innerHTML = pikachu.health
  ui.innerHTML= `La defensa ha sido aplicada`
})

botonSuper.addEventListener('click', ()=>{
  squartle.superAttack(newtwo, squartle);
  pikachu.superAttack(newtwo, pikachu);
  charmander.superAttack(newtwo, charmander);
  pokemonCounter1.innerHTML = squartle.health
  pokemonCounter2.innerHTML = charmander.health
  pokemonCounter3.innerHTML = pikachu.health
  bossCounter.innerHTML= newtwo.health
  console.log(newtwo.health);
  console.log(squartle.health)
  console.log(pikachu.health)
  console.log(charmander.health)
  redireccion();
})
///call functions
ataque(botonataque1, squartle, newtwo);
ataque(botonataque2, charmander, newtwo);
ataque(botonataque3, pikachu, newtwo);

const redireccion = ()=>{
  if (newtwo.health <= 0){
    location.replace("/pages/endgame.html")
  } else {
    console.log("sigue vivo")
  }
}
