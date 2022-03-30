window.Actions = {
	damage1: {
		name: "Charge",
		description: "Charge l'adversaire",
		success: [
			{
				type: "textMessage",
				text: "{CASTER} utilises {ACTION} !",
			},
			{
				type: "animation",
				animation: "movement",
			},
			{
				type: "stateChange",
				damage: 7,
			},
		],
	},
	healStatus: {
		name: "Soin",
		targetType: "friendly",
		success: [
			{
				type: "textMessage",
				text: "{CASTER} utilises {ACTION}.",
			},
			{
				type: "stateChange",
				statusHandler: {
					type: "hea",
					expiresIn: 3,
				},
			},
		],
	},
	paralyzedStatus: {
		name: "Cage éclair",
		success: [
			{
				type: "textMessage",
				text: "{CASTER} utilises {ACTION} !",
			},
			{
				type: "animation",
				animation: "psycho",
				color: "purple",
			},
			{
				type: "stateChange",
				statusHandler: {
					type: "par",
					expiresIn: 3,
				},
			},
			{
				type: "textMessage",
				text: "{TARGET} est paralysé. Il ne peut pas attaquer.",
			},
		],
	},

	// items
	item_recoverStatus: {
		name: "Antidote",
		description: "Dissipe tous les effets negatifs.",
		targetType: "friendly",
		success: [
			{ type: "textMessage", text: "{CASTER} utilise un {ACTION}!" },
			{ type: "stateChange", statusHandler: null },
			{ type: "textMessage", text: "{CASTER} est propre comme un sous neuf." },
		],
	},
	item_recoverHp: {
		name: "Potion",
		description: "Le pokemon récupère 20 HP",
		targetType: "friendly",
		success: [
			{ type: "stateChange", recover: 20 },
			{ type: "textMessage", text: "{CASTER} récupère 20 HP !" },
		],
	},
};
