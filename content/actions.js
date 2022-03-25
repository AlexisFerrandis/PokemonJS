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
};
