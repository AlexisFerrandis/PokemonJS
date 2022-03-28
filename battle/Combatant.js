class Combatant {
	constructor(config, battle) {
		Object.keys(config).forEach((key) => {
			this[key] = config[key];
		});
		this.hp = typeof this.hp === "undefined" ? this.maxHp : this.hp;
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
		return this.battle?.activeCombatants[this.team] === this.id;
	}

	get givesXp() {
		return this.level * 20;
	}

	createElement() {
		// display monster's info
		this.hudElement = document.createElement("div");
		this.hudElement.classList.add("combatant");
		this.hudElement.setAttribute("data-combatant", this.id);
		this.hudElement.setAttribute("data-team", this.team);

		this.hudElement.innerHTML = `
        <p class="combatant_name">${this.Name}</p>
		<p class="combatant_status"></p>
        <p class="combatant_level">Lv<span class="combatant-lvl"></span></p>
        <div class="life">
            <div class="life-container">
                <p class="php">HP</p>
                <div class="combatant_life-container">
                </div>
            </div>${
				this.team === "player"
					? `
            
            <p class="hp-number"></p>
            
            `
					: ""
			}
        </div>

        ${
			this.team === "player"
				? `
        <div class="xp-container">
            <p>EXP</p>
            <div class="xpx">
                <div class="combatant_xp-container">
                </div>
            </div>
        </div>
        `
				: ""
		}
        
        <img class="support" src="../assets/images/battlebacks/city_base1.png" alt="support" data-team=${this.team} />
		<img class="combatant_icon" src="../assets/images/monsters/Icons/${this.Name}.png" alt="${this.Name}" />
    `;

		this.hpFills = this.hudElement.querySelectorAll(".combatant_life-container");
		this.hpNumber = this.hudElement.querySelector(".hp-number");
		this.xpFills = this.hudElement.querySelectorAll(".combatant_xp-container");

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
		if (this.hpNumber) {
			this.hpNumber.innerText = `${this.hp}/${this.maxHp}`;
		}
		this.hpFills.forEach((fill) => (fill.style.width = `${this.hpPercent}%`));
		this.xpFills.forEach((fill) => (fill.style.width = `${this.xpPercent}%`));

		// update lvl
		this.hudElement.querySelector(".combatant-lvl").innerText = this.level;

		// update status
		const statusElement = this.hudElement.querySelector(".combatant_status");
		if (this.status) {
			statusElement.innerText = this.status.type;
			statusElement.setAttribute("data-status", this.status.type);
			statusElement.style.display = "block";
		} else {
			statusElement.innerText = "";
			statusElement.style.display = "none";
		}
	}

	getReplacedEvents(originalEvents) {
		if (this.status?.type === "cfs" && utils.randomFromArray([true, false, false])) {
			return [
				{
					type: "textMessage",
					text: `${this.Name} is confused`,
				},
				{
					type: "textMessage",
					text: `${this.Name} is hurting himself ! `,
				},
			];
		}

		return originalEvents;
	}

	getPostEvents() {
		if (this.status?.type === "hea") {
			return [
				{
					type: "textMessage",
					text: "this monster is healing",
				},
				{
					type: "stateChange",
					recover: 5,
					onCaster: true,
				},
			];
		}
		return [];
	}

	decrementStatus() {
		if (this.status?.expiresIn > 0) {
			this.status.expiresIn--;
			if (this.status?.expiresIn === 0) {
				const statusType = this.status.type;
				this.update({ status: null });
				return {
					type: "textMessage",
					text: `${this.Name} is no longer ${statusType}`,
				};
			}
		}
		return null;
	}

	init(container) {
		this.createElement();
		container.appendChild(this.hudElement);
		container.appendChild(this.monsterElement);

		this.update();
	}
}
