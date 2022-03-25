class Battle {
	constructor() {
		this.combatants = {
			player1: new Combatant(
				{
					...monsters.eevee,
					team: "player",
					hp: 40,
					maxHp: 50,
					xp: 80,
					maxXp: 100,
					level: 1,
					status: null,
				},
				this
			),
			enemy1: new Combatant(
				{
					...monsters.ivysaur,
					team: "enemy",
					hp: 30,
					maxHp: 50,
					xp: 20,
					maxXp: 100,
					level: 1,
					status: null,
				},
				this
			),
			enemy2: new Combatant(
				{
					...monsters.venusaur,
					team: "enemy",
					hp: 20,
					maxHp: 50,
					xp: 30,
					maxXp: 100,
					level: 1,
					status: null,
				},
				this
			),
		};
		this.activeCombatants = {
			player: "player1",
			enemy: "enemy1",
		};
	}

	createElement() {
		this.element = document.createElement("div");
		this.element.classList.add("battle");

		this.element.innerHTML = `
        <div class="battle-player">
            <img src=${"./assets/images/characters/trainers/player.png"} alt="player" />
        </div>
        <div class="battle-enemy">
            <img src=${"./assets/images/characters/trainers/rival.png"} alt="enemy" />
        </div>
        <div class="text-container">
        </div>
        `;
	}

	init(container) {
		this.createElement();
		container.appendChild(this.element);

		Object.keys(this.combatants).forEach((key) => {
			let combatant = this.combatants[key];
			combatant.id = key;
			combatant.init(this.element);
		});

		this.turnCycle = new TurnCycle({
			battle: this,
			onNewEvent: (event) => {
				return new Promise((resolve) => {
					const battleEvent = new BattleEvent(event, this);
					battleEvent.init(resolve);
				});
			},
		});
		this.turnCycle.init();
	}
}