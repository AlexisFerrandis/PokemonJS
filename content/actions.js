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
};
