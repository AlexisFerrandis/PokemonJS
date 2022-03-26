class TurnCycle {
	constructor({ battle, onNewEvent }) {
		this.battle = battle;
		this.onNewEvent = onNewEvent;
		this.currentTeam = "player"; // or ennemy
	}

	async turn() {
		// caster
		const casterId = this.battle.activeCombatants[this.currentTeam];
		const caster = this.battle.combatants[casterId];

		const enemyId = this.battle.activeCombatants[caster.team === "player" ? "enemy" : "player"];
		const enemy = this.battle.combatants[enemyId];

		const submission = await this.onNewEvent({
			type: "submissionMenu",
			caster,
			enemy,
		});

		// stop here if monster swap or run
		if (submission.replacement) {
			await this.onNewEvent({
				type: "replace",
				replacement: submission.replacement,
			});
			await this.onNewEvent({
				type: "textMessage",
				text: `${submission.replacement.Name} i choose you!`,
			});
			this.nextTurn();
			return;
		}

		if (submission.instanceId) {
			this.battle.items = this.battle.items.filter((i) => i.instanceId !== submission.instanceId);
		}

		const resultingEvents = caster.getReplacedEvents(submission.action.success);
		for (let i = 0; i < resultingEvents.length; i++) {
			const event = {
				...resultingEvents[i],
				submission,
				action: submission.action,
				caster,
				target: submission.target,
			};
			await this.onNewEvent(event);
		}

		// did a monster die?
		const targetDead = submission.target.hp <= 0;
		if (targetDead) {
			await this.onNewEvent({
				type: "textMessage",
				text: `${submission.target.Name} is dead!`,
			});
		}

		// is there a winner? => end
		const winner = this.getWinningTeam();
		if (winner) {
			await this.onNewEvent({
				type: "textMessage",
				text: "U WIN :)",
			});
			//END THE BATTLE -> TODO
			return;
		}

		// dead monster, no winner, bring replacement
		if (targetDead) {
			const replacement = await this.onNewEvent({
				type: "replacementMenu",
				team: submission.target.team,
			});
			await this.onNewEvent({
				type: "replace",
				replacement: replacement,
			});
			await this.onNewEvent({
				type: "textMessage",
				text: `${replacement.Name} Go!`,
			});
		}

		// check for post events, do things AFTER original turn submission
		const postEvents = caster.getPostEvents();
		for (let i = 0; i < postEvents.length; i++) {
			const event = {
				...postEvents[i],
				submission,
				action: submission.action,
				caster,
				target: submission.target,
			};
			await this.onNewEvent(event);
		}

		// check status expiration
		const expiredEvent = caster.decrementStatus();
		if (expiredEvent) {
			await this.onNewEvent(expiredEvent);
		}

		this.nextTurn();
	}

	nextTurn() {
		this.currentTeam = this.currentTeam === "player" ? "enemy" : "player";
		this.turn();
	}

	getWinningTeam() {
		let aliveTeams = {};
		Object.values(this.battle.combatants).forEach((c) => {
			if (c.hp > 0) {
				aliveTeams[c.team] = true;
			}
		});
		if (!aliveTeams["player"]) {
			return "enemy";
		}
		if (!aliveTeams["enemy"]) {
			return "player";
		}
		return null;
	}

	async init() {
		// await this.onNewEvent({
		// 	type: "textMessage",
		// 	text: "The battle is running",
		// });

		// start first turn
		this.turn();
	}
}
