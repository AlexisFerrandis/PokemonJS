class SubmissionMenu {
	constructor({ caster, enemy, onComplete }) {
		this.caster = caster;
		this.enemy = enemy;
		this.onComplete = onComplete;
	}

	getPages() {
		const backOption = {
			label: "Back",
			description: "Return to previous page",
			handler: () => {
				this.keyboardMenu.setOptions(this.getPages().root);
			},
		};

		return {
			root: [
				{
					label: "Attack",
					description: "Choose an attack",
					handler: () => {
						console.log("here");
						this.keyboardMenu.setOptions(this.getPages().attacks);
					},
				},
				{
					label: "Items",
					description: "Choose an item",
					handler: () => {
						// go to item menu
						this.keyboardMenu.setOptions(this.getPages().items);
					},
				},
				{
					label: "Swap",
					description: "Change to another monster",
					handler: () => {
						// see ur monsters
					},
				},
				{
					label: "Run",
					description: "Leave the battle",
					handler: () => {
						// run
					},
				},
			],
			attacks: [
				...this.caster.actions.map((key) => {
					const action = Actions[key];
					return {
						label: action.name,
						description: action.description,
						handler: () => {
							this.menuSubmit(action);
						},
					};
				}),
				backOption,
			],
			items: [backOption],
		};
	}

	menuSubmit(action, instanceId) {
		this.keyboardMenu?.end();

		this.onComplete({
			action,
			target: action.targetType === "friendly" ? this.caster : this.enemy,
		});
	}

	decide() {
		// todo select random opponent action
		this.menuSubmit(Actions[this.caster.actions[0]]);
	}

	showMenu(container) {
		this.keyboardMenu = new KeyboardMenu();
		this.keyboardMenu.init(container);
		this.keyboardMenu.setOptions(this.getPages().root);
	}

	init(container) {
		if (this.caster.isPlayerControlled) {
			// show menu
			this.showMenu(container);
		} else {
			this.decide();
		}
	}
}
