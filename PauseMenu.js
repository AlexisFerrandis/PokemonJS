class PauseMenu {
	constructor({ onComplete }) {
		this.onComplete = onComplete;
	}

	getOptions(pageKey) {
		// case 1 show first page of options
		if (pageKey === "root") {
			// const lineupMonsters = playerState.lineup.map((id) => {
			// 	const { monsterId } = playerState.monsters[id];
			// 	const base = monsters[monsterId];
			// 	return {
			// 		label: base.Name,
			// 		description: base.descriptions,
			// 		handler: () => {
			// 			this.keyboardMenu.setOptions(this.getOptions(id));
			// 		},
			// 	};
			// });

			return [
				// ...lineupMonsters,
				{
					label: "Save",
					description: "Save your progress",
					handler: () => {
						//
					},
				},
				{
					label: "Close",
					description: "Close the menu",
					handler: () => {
						this.close();
					},
				},
			];
		}

		// case 2 show options for a monster (id)
		// const unequipped = Object.keys(playerState.monsters)
		// 	.filter((id) => {
		// 		console.log(playerState.lineup.indexOf(id));
		// 		return playerState.lineup.indexOf(id) === -1;
		// 	})
		// 	.map((id) => {
		// 		const { monsterId } = playerState.monsters[id];
		// 		const base = monsters[monsterId];
		// 		return {
		// 			label: `Swap for ${base.Name}`,
		// 			description: base.description,
		// 			handler: () => {
		// 				playerState.swapLineup(pageKey, id);
		// 				this.keyboardMenu.setOptions(this.getOptions("root"));
		// 			},
		// 		};
		// 	});

		// return [
		// 	...unequipped,
		// 	{
		// 		label: "Move to front",
		// 		description: "Move this monster to the front of the list",
		// 		handler: () => {
		// 			playerState.moveToFront(pageKey);
		// 			this.keyboardMenu.setOptions(this.getOptions("root"));
		// 		},
		// 	},
		// 	{
		// 		label: "Back",
		// 		description: "Back to root menu",
		// 		handler: () => {
		// 			this.keyboardMenu.setOptions(this.getOptions("root"));
		// 		},
		// 	},
		// ];
	}

	createElement() {
		this.element = document.createElement("div");
		this.element.classList.add("pause-menu");
		document.querySelector(".hud").style.display = "block";
	}

	close() {
		this.esc?.unbind();
		this.keyboardMenu.end();
		this.element.remove();
		this.onComplete();
		document.querySelector(".hud").style.display = "none";
	}

	async init(container) {
		this.createElement();
		this.keyboardMenu = new KeyboardMenu({
			descriptionContainer: container,
		});
		this.keyboardMenu.init(this.element);
		this.keyboardMenu.setOptions(this.getOptions("root"));

		container.appendChild(this.element);

		utils.wait(200);
		this.esc = new KeyPressListener("Escape", () => {
			this.close();
		});
	}
}
