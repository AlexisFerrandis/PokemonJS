window.Actions = {
	damage1: {
		name: "whomp",
		success: [
			{
				type: "textMessage",
				text: "{CASTER} uses {ACTION}",
			},
			{
				type: "animation",
				animation: "movement",
			},
			{
				type: "stateChange",
				damage: 10,
			},
		],
	},
	healStatus: {
		name: "tomato",
		targetType: "friendly",
		success: [
			{
				type: "textMessage",
				text: "{CASTER} uses {ACTION}",
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
	confusionStatus: {
		name: "psycho",
		success: [
			{
				type: "textMessage",
				text: "{CASTER} uses {ACTION}",
			},
			{
				type: "animation",
				animation: "psycho",
				color: "purple",
			},
			{
				type: "stateChange",
				statusHandler: {
					type: "cfs",
					expiresIn: 3,
				},
			},
			{
				type: "textMessage",
				text: "{TARGET} is now confused",
			},
		],
	},

	// items
	item_recoverStatus: {
		name: "status",
		description: "Feeling fresh",
		targetType: "friendly",
		success: [
			{ type: "textMessage", text: "{CASTER} uses a {ACTION}!" },
			{ type: "stateChange", statusHandler: null },
			{ type: "textMessage", text: "Feeling fresh!" },
		],
	},
	item_recoverHp: {
		name: "Potion",
		description: "Heals 20 HP",
		targetType: "friendly",
		success: [
			{ type: "textMessage", text: "{CASTER} sprinkles on some {ACTION}!" },
			{ type: "stateChange", recover: 20 },
			{ type: "textMessage", text: "{CASTER} recovers HP!" },
		],
	},
};
