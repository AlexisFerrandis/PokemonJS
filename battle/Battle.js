class Battle {
	constructor({ enemy, onComplete }) {
		this.enemy = enemy;
		this.onComplete = onComplete;
		this.combatants = {
			// player1: new Combatant(
			// 	{
			// 		...monsters.eevee,
			// 		team: "player",
			// 		hp: 10,
			// 		maxHp: 50,
			// 		xp: 95,
			// 		maxXp: 100,
			// 		level: 1,
			// 		status: null,
			// 		isPlayerControlled: true,
			// 	},
			// 	this
			// ),
			// player2: new Combatant(
			// 	{
			// 		...monsters.charmander,
			// 		team: "player",
			// 		hp: 40,
			// 		maxHp: 50,
			// 		xp: 80,
			// 		maxXp: 100,
			// 		level: 1,
			// 		status: null,
			// 		isPlayerControlled: true,
			// 	},
			// 	this
			// ),
			// player3: new Combatant(
			// 	{
			// 		...monsters.charmander,
			// 		team: "player",
			// 		hp: 40,
			// 		maxHp: 50,
			// 		xp: 80,
			// 		maxXp: 100,
			// 		level: 1,
			// 		status: null,
			// 		isPlayerControlled: true,
			// 	},
			// 	this
			// ),
			// enemy1: new Combatant(
			// 	{
			// 		...monsters.ivysaur,
			// 		team: "enemy",
			// 		hp: 10,
			// 		maxHp: 50,
			// 		xp: 20,
			// 		maxXp: 100,
			// 		level: 1,
			// 		status: null,
			// 	},
			// 	this
			// ),
			// enemy2: new Combatant(
			// 	{
			// 		...monsters.venusaur,
			// 		team: "enemy",
			// 		hp: 20,
			// 		maxHp: 50,
			// 		xp: 30,
			// 		maxXp: 100,
			// 		level: 1,
			// 		status: null,
			// 	},
			// 	this
			// ),
		};
		this.activeCombatants = {
			player: null,
			enemy: null,
		};

		// add player team
		window.playerState.lineup.forEach((id) => {
			this.addCombatant(id, "player", window.playerState.monsters[id]);
		});

		// add enemy team
		Object.keys(this.enemy.monsters).forEach((key) => {
			this.addCombatant("e_" + key, "enemy", this.enemy.monsters[key]);
		});

		this.items = [];
		// add player items
		window.playerState.items.forEach((item) => {
			this.items.push({
				...item,
				team: "player",
			});
		});

		this.usedInstanceIds = {};
	}

	addCombatant(id, team, config) {
		this.combatants[id] = new Combatant(
			{
				...monsters[config.monsterId],
				...config,
				team,
				isPlayerControlled: team === "player",
			},
			this
		);

		// populate 1st monster
		this.activeCombatants[team] = this.activeCombatants[id] || id;
	}

	createElement() {
		this.element = document.createElement("div");
		this.element.classList.add("battle");

		this.element.innerHTML = `
        <div class="battle-player">
            <img src=${"./assets/images/characters/trainers/player.png"} alt="player" />
        </div>
        <div class="battle-enemy">
            <img src="${this.enemy.src}" alt=${this.enemy.name} />
        </div>
        <div class="text-container">
        </div>
        `;
	}

	init(container) {
		this.createElement();
		container.appendChild(this.element);

		// team
		this.playerTeam = new Team("player", "player");
		this.enemyTeam = new Team("enemy", "MECHANT");

		Object.keys(this.combatants).forEach((key) => {
			let combatant = this.combatants[key];
			combatant.id = key;
			combatant.init(this.element);

			//Add to correct team
			if (combatant.team === "player") {
				this.playerTeam.combatants.push(combatant);
			} else if (combatant.team === "enemy") {
				this.enemyTeam.combatants.push(combatant);
			}
		});

		this.playerTeam.init(this.element);
		this.enemyTeam.init(this.element);

		this.turnCycle = new TurnCycle({
			battle: this,
			onNewEvent: (event) => {
				return new Promise((resolve) => {
					const battleEvent = new BattleEvent(event, this);
					battleEvent.init(resolve);
				});
			},
			onWinner: (winner) => {
				if (winner === "player") {
					const playerState = window.playerState;
					Object.keys(playerState.monsters).forEach((id) => {
						const playerStateMonster = playerState.monsters[id];
						const combatant = this.combatants[id];
						if (combatant) {
							playerStateMonster.hp = combatant.hp;
							playerStateMonster.xp = combatant.xp;
							playerStateMonster.maxXp = combatant.maxXp;
							playerStateMonster.level = combatant.level;
						}
					});

					// get rid of player used items
					playerState.items = playerState.items.filter((item) => {
						return this.usedInstanceIds[item.instanceId];
					});

					// send signal to update
					utils.emitEvent("PlayerStateUpdated");
				}

				this.element.remove();
				this.onComplete();
			},
		});
		this.turnCycle.init();
	}
}
