class Hud {
	constructor() {
		this.scoreboards = [];
	}

	update() {
		this.scoreboards.forEach((scoreboard) => {
			scoreboard.update(window.playerState.monsters[scoreboard.id]);
		});
	}

	createElement() {
		this.element = document.createElement("div");
		this.element.classList.add("hud");

		const { playerState } = window;
		playerState.lineup.forEach((key) => {
			const monster = playerState.monsters[key];
			const scoreboard = new Combatant(
				{
					id: key,
					...monsters[monster.monsterId],
					...monster,
				},
				null
			);
			scoreboard.createElement();
			this.scoreboards.push(scoreboard);
			this.element.appendChild(scoreboard.hudElement);
		});
		this.update();
	}

	init(container) {
		this.createElement();
		container.appendChild(this.element);

		document.addEventListener("PlayerStateUpdated", () => {
			this.update();
		});
	}
}
