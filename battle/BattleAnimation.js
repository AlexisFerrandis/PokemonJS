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
	async psycho(event, onComplete) {
		const { caster } = event;
		let div = document.createElement("div");
		div.classList.add("glob-orb");
		div.classList.add(caster.team === "player" ? "battle-glob-right" : "battle-glob-left");

		div.innerHTML = `
		<svg viewBox="0 0 32 32" width="32" height="32">
			<circle cx="16" cy="16" r="16" fill="${event.color}" />
		</svg>
		`;

		//Remove class when animation is fully complete
		div.addEventListener("animationend", () => {
			div.remove();
		});

		//Add to scene
		document.querySelector(".battle").appendChild(div);

		await utils.wait(820);
		onComplete();
	},
};
