class BattleEvent {
	constructor(event, battle) {
		this.event = event;
		this.battle = battle;
	}

	textMessage(resolve) {
		const text = this.event.text.replace("{CASTER}", this.event.caster?.Name).replace("{TARGET}", this.event.target?.Name).replace("{ACTION}", this.event.action?.name);
		const message = new TextMessage({
			text,
			onComplete: () => {
				resolve();
			},
		});

		message.init(this.battle.element);
	}

	async stateChange(resolve) {
		const { caster, target, damage, recover, statusHandler, action } = this.event;
		let who = this.event.onCaster ? caster : target;

		if (damage) {
			// update target hp
			target.update({
				hp: target.hp - damage,
			});

			// start blinking
			target.monsterElement.classList.add("battle-dmg-blink");
		}

		if (recover) {
			let newHp = who.hp + recover;
			if (newHp > who.maxHp) {
				newHp = who.maxHp;
			}
			who.update({
				hp: newHp,
			});
		}

		if (statusHandler) {
			who.update({
				status: {
					...statusHandler,
				},
			});
		}
		if (statusHandler === null) {
			who.update({
				status: null,
			});
		}

		await utils.wait(600);

		target.monsterElement.classList.remove("battle-dmg-blink");
		resolve();
	}

	submissionMenu(resolve) {
		const menu = new SubmissionMenu({
			caster: this.event.caster,
			enemy: this.event.enemy,
			onComplete: (submission) => {
				//submission { what move to use, who to use it on }
				resolve(submission);
			},
		});
		menu.init(this.battle.element);
	}

	animation(resolve) {
		const fn = BattleAnimations[this.event.animation];
		fn(this.event, resolve);
	}

	init(resolve) {
		this[this.event.type](resolve);
	}
}
