window.BattleAnimations = {
	async movement(event, onComplete) {
		const element = event.caster.monsterElement;
		const animationClassName = event.caster.team === "player" ? "battle-movement-right" : "battle-movement-left";
		element.classList.add(animationClassName);

		//remove class after animation complete
		element.addEventListener(
			"animationend",
			() => {
				element.classList.remove(animationClassName);
			},
			{ once: true }
		);

		// continue cycle
		await utils.wait(100);
		onComplete();
	},
};
