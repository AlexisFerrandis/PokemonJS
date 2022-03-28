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
		};
		this.lineup = ["p2", "p1"];
		this.items = [
			{ actionId: "item_recoverHp", instanceId: "item1" },
			{ actionId: "item_recoverHp", instanceId: "item2" },
			{ actionId: "item_recoverStatus", instanceId: "item3" },
		];
	}
}
window.playerState = new PlayerState();
