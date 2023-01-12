class Player {
    constructor(u, pclass) {
        this.stats = new Stats();
        this.name = u;
        this.class = pclass;
        this.level = 4;
        this.powerups = null;
    }
}

class Stats {
    constructor() {
        this.health = 100;
        this.attack = 25;
        this.defense = 10;
        this.confidence = 10;
        this.knowledge = 5;
        this.social = 2.5;
        this.popularity = 0.1;
        this.kindness = 0.1;
        this.charisma = 0.1;
        this.training = 0.1;
        this.proficiency = 0.1;
    }

    socialize(){
        this.social += Math.floor(Math.random() * (this.confidence + this.proficiency) * 0.5)
        this.confidence += Math.floor(Math.random() * this.social * 0.1)
        if(Math.random() > 0.5){
            this.popularity += Math.floor(Math.random() * this.social* 0.1)
            this.kindness += Math.floor(Math.random() * this.social * 0.1)
            this.charisma += Math.floor(Math.random() * this.kindness * 0.1)
        }
    }

    train(){
        this.training += Math.floor(Math.random() * (this.confidence + this.proficiency) * 0.5)
        this.confidence += Math.floor(Math.random() * this.training)
        if(Math.random() < 0.25){
            // this.health += Math.floor(Math.random() * this.training)
        }else if(Math.random() < 0.5){
            this.attack += Math.floor(Math.random() * this.training)
        }else if(Math.random() < 0.75){
            this.defense += Math.floor(Math.random() * this.training)
        } // if above 0.75, no stat is increased.
    }

    study(){
        this.knowledge += Math.floor(Math.random() * (this.confidence + this.proficiency) * 0.5)
        this.confidence += Math.floor(Math.random() * this.knowledge)
        if(Math.random() < 0.25){
            this.health += Math.floor(Math.random() * this.knowledge)
        }else if(Math.random() < 0.5){
            this.attack += Math.floor(Math.random() * this.knowledge)
        }else if(Math.random() < 0.75){
            this.defense += Math.floor(Math.random() * this.knowledge)
        } // if above 0.75, no stat is increased.
    }

    toString() {
        return `Confidence: ${this.confidence} Knowledge: ${this.knowledge} Social: ${this.social} Popularity: ${this.popularity} Kindness: ${this.kindness} Charisma: ${this.charisma} Training: ${this.training} Proficiency: ${this.proficiency}`;
    }

    getStats() {
        // return an array of strings with the first two letters of the name of the stat and the value of the stat
        return [`co: ${this.confidence}`, `kn: ${this.knowledge}`, `so: ${this.social}`, `po: ${this.popularity}`, `ki: ${this.kindness}`, `ch: ${this.charisma}`, `tr: ${this.training}`, `pr: ${this.proficiency}`]
    }
}

class parent {
    constructor(type) {
        this.stats = new Stats(stats);
        this.name = u;
        this.class = pclass;
        this.level = 4;
    }
}

let player = new Player('name', 'class');
update();

function action(a){
    console.log(a);
    player.stats[a]();
    update();
}

function update(){
    document.getElementById('health').innerHTML = player.stats.health
    document.getElementById('attack').innerHTML = player.stats.attack
    document.getElementById('defense').innerHTML = player.stats.defense
    // document.getElementById('stats').innerHTML = player.stats.toString();
    document.getElementById('sidestats').innerHTML = player.stats.getStats();
}
