class Combatant {
	constructor(config, battle) {
		Object.keys(config).forEach((key) => {
			this[key] = config[key];
		});

		this.battle = battle;
	}

	get hpPercent() {
		const percent = (this.hp / this.maxHp) * 100;
		return percent > 0 ? percent : 0;
	}
	get xpPercent() {
		return (this.xp / this.maxXp) * 100;
	}

	get isActive() {
		return this.battle.activeCombatants[this.team] === this.id;
	}

	createElement() {
		// display monster's info
		this.hudElement = document.createElement("div");
		this.hudElement.classList.add("combatant");
		this.hudElement.setAttribute("data-combatant", this.id);
		this.hudElement.setAttribute("data-team", this.team);

		this.hudElement.innerHTML = `
        <p class="combatant_name">${this.Name}</p>
        <p class="combatant_level">Lv</p>
        <div class="life">
            <div class="life-container">
                <p class="php">HP</p>
                <div class="combatant_life-container" style="width:${this.hpPercent}%">
                    ${
						this.team === "player"
							? `
                    
                    <p class="hp-number">${this.hp}/${this.maxHp}</p>
                    
                    `
							: ""
					}
                </div>
            </div>
        </div>

        ${
			this.team === "player"
				? `
        <div class="xp-container">
            <p>EXP</p>
            <div class="xpx">
                <div class="combatant_xp-container" style="width:${this.xpPercent}%">
                </div>
            </div>
        </div>
        `
				: ""
		}
        <p class="combatant_status"></p>
        <img class="support" src="../assets/images/battlebacks/city_base1.png" alt="support" data-team=${this.team} />
    `;

		this.hpFills = this.hudElement.querySelectorAll(".combatant_life-container p");
		this.xpFills = this.hudElement.querySelectorAll(".combatant_xp-container p");

		// display monster
		this.monsterElement = document.createElement("img");
		this.monsterElement.classList.add("monster");
		if (this.team === "enemy") {
			this.monsterElement.setAttribute("src", `../assets/images/monsters/Front/${this.Name}.png`);
		} else if (this.team === "player") {
			this.monsterElement.setAttribute("src", `../assets/images/monsters/Back/${this.Name}.png`);
		}
		this.monsterElement.setAttribute("alt", this.Name);
		this.monsterElement.setAttribute("data-team", this.team);
	}

	update(changes = {}) {
		Object.keys(changes).forEach((key) => {
			this[key] = changes[key];
		});

		// update activ flag
		this.hudElement.setAttribute("data-active", this.isActive);
		this.monsterElement.setAttribute("data-active", this.isActive);

		// update hp and xp
		this.hpFills.forEach((fill) => (fill.style.width = `${this.hpPercent}px`));
		this.xpFills.forEach((fill) => (fill.style.width = `${this.xpPercent}px`));

		// update lvl
		this.hudElement.querySelector(".combatant_level").innerText += this.level;
	}

	init(container) {
		this.createElement();
		container.appendChild(this.hudElement);
		container.appendChild(this.monsterElement);

		this.update();
	}
}
