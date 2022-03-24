class SubmissionMenu {
	constructor({ caster, enemy, onComplete }) {
		this.caster = caster;
		this.enemy = enemy;
		this.onComplete = onComplete;
	}

	decide() {
		this.onComplete({
			actions: Actions[this.caster.Actions[0]],
			target: this.enemy,
		});
	}

	init(container) {
		this.decide();
	}
}
