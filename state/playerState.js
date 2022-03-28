class PlayerState {
	constructor() {
		this.monsters = {
			p1: {
				monsterId: "eevee",
				hp: 30,
				maxHp: 50,
				xp: 90,
				maxXp: 100,
				level: 1,
				status: { type: "cfs" },
			},
			p2: {
				monsterId: "charmander",
				hp: 50,
				maxHp: 50,
				xp: 75,
				maxXp: 100,
				level: 1,
				status: null,
			},
			p3: {
				monsterId: "ivysaur",
				hp: 50,
				maxHp: 50,
				xp: 75,
				maxXp: 100,
				level: 1,
				status: null,
			},
		};
		this.lineup = ["p1", "p2"];
		this.items = [
			{ actionId: "item_recoverHp", instanceId: "item1" },
			{ actionId: "item_recoverHp", instanceId: "item2" },
			{ actionId: "item_recoverStatus", instanceId: "item3" },
		];
	}

	swapLineup(oldId, incomingId) {
		const oldIndex = this.lineup.indexOf(oldId);
		this.lineup[oldIndex] = incomingId;
		utils.emitEvent("LineupChanged");
	}

	moveToFront(futureFrontId) {
		this.lineup = this.lineup.filter((id) => id !== futureFrontId);
		this.lineup.unshift(futureFrontId);
		utils.emitEvent("LineupChanged");
	}
}
window.playerState = new PlayerState();
