class OverworldMap {
	constructor(config) {
		this.overworld = null;
		this.gameObjects = config.gameObjects;
		this.cutsceneSpaces = config.cutsceneSpaces || {};
		this.walls = config.walls || {};

		this.lowerImage = new Image();
		this.lowerImage.src = config.lowerSrc;

		this.upperImage = new Image();
		this.upperImage.src = config.upperSrc;

		this.isCutscenePlaying = false;
		this.isPaused = false;
	}

	drawLowerImage(ctx, cameraPerson) {
		let ratio = 0.5; // perhaps to reconfigure best now 0.5
		ctx.drawImage(this.lowerImage, utils.withGrid(10.5) - cameraPerson.x, utils.withGrid(6) - cameraPerson.y, this.upperImage.width * ratio, this.upperImage.height * ratio);
	}

	drawUpperImage(ctx, cameraPerson) {
		let ratio = 0.5;
		ctx.drawImage(this.upperImage, utils.withGrid(10.5) - cameraPerson.x, utils.withGrid(6) - cameraPerson.y, this.upperImage.width * ratio, this.upperImage.height * ratio);
	}

	isSpaceTaken(currentX, currentY, direction) {
		const { x, y } = utils.nextPosition(currentX, currentY, direction);
		return this.walls[`${x},${y}`] || false;
	}

	mountObjects() {
		Object.keys(this.gameObjects).forEach((key) => {
			// TODO determine if object need mount
			let object = this.gameObjects[key];
			object.id = key;
			object.mount(this);
		});
	}

	async startCutscene(events) {
		this.isCutscenePlaying = true;

		for (let i = 0; i < events.length; i++) {
			const eventHandler = new OverworldEvent({
				event: events[i],
				map: this,
			});
			const result = await eventHandler.init();
			if (result === "LOST_BATTLE") {
				break;
			}
		}

		this.isCutscenePlaying = false;

		// reset npc behavior
		Object.values(this.gameObjects).forEach((object) => object.doBehaviorEvent(this));
	}

	checkForActionCutscene() {
		const player = this.gameObjects["player"];
		const nextCoords = utils.nextPosition(player.x, player.y, player.direction);
		const match = Object.values(this.gameObjects).find((object) => {
			return `${object.x}, ${object.y}` === `${nextCoords.x}, ${nextCoords.y}`;
		});
		if (!this.isCutscenePlaying && match && match.talking.length) {
			const relevantScenario = match.talking.find((scenario) => {
				return (scenario.required || []).every((sf) => {
					return playerState.storyFlags[sf];
				});
			});
			relevantScenario && this.startCutscene(relevantScenario.events);
		}
	}

	checkForFootStepCutscene() {
		const player = this.gameObjects["player"];
		const match = this.cutsceneSpaces[`${player.x},${player.y}`];
		if (!this.isCutscenePlaying && match) {
			this.startCutscene(match[0].events);
		}
	}

	addWall(x, y) {
		this.walls[`${x},${y}`] = true;
	}
	removeWall(x, y) {
		delete this.walls[`${x},${y}`];
	}
	moveWall(wasX, wasY, direction) {
		this.removeWall(wasX, wasY);
		const { x, y } = utils.nextPosition(wasX, wasY, direction);
		this.addWall(x, y);
	}
}

window.OverworldMaps = {
	PaletteTown: {
		lowerSrc: "../assets/images/maps/map.PNG",
		upperSrc: "../assets/images/maps/mapForeground.PNG",
		gameObjects: {
			// player
			player: new Person({
				x: utils.withGrid(44),
				y: utils.withGrid(49),
				isPlayerControlled: true,
			}),

			// rival
			npcA: new Person({
				x: utils.withGrid(59),
				y: utils.withGrid(55),
				src: "../assets/images/characters/rival.png",
				behaviorLoop: [
					{
						type: "stand",
						direction: "left",
					},
				],
				talking: [
					// {
					// 	required: ["TALKED_TO_npcB"],
					// 	events: [{ type: "textMessage", text: "Isn't the npcB the coolest?", facePlayer: "npcA" }],
					// },
					{
						events: [
							{ type: "textMessage", text: "Mon carapuce va t'écraser !", facePlayer: "npcA" },
							{ type: "battle", enemyId: "rival" },
							{ type: "addStoryFlag", flag: "DEFEATED_RIVAL" },
							{ type: "textMessage", text: "You crushed me like weak potato.", facePlayer: "npcA" },
							// {
							// 	type: "battle",
							// 	enemyId: "beth",
							// },
							// {
							// 	who: "player",
							// 	type: "walk",
							// 	direction: "left",
							// },
						],
					},
				],
			}),

			// old lady
			npcB: new Person({
				x: utils.withGrid(48),
				y: utils.withGrid(44),
				src: "../assets/images/characters/NPC_11.png",
				behaviorLoop: [
					{
						type: "stand",
						direction: "down",
						time: 2000,
					},
					{
						type: "stand",
						direction: "left",
						time: 2000,
					},
				],
				talking: [
					{
						events: [
							{ type: "textMessage", text: "Les Pokemons sont pleins de mysteres...", facePlayer: "npcB" },
							// { type: "addStoryFlag", flag: "TALKED_TO_npcB" },
						],
					},
				],
			}),

			// swimmer
			npcC: new Person({
				x: utils.withGrid(44),
				y: utils.withGrid(64),
				src: "../assets/images/characters/trainer_SWIMMER2_M.png",
				behaviorLoop: [
					{
						type: "walk",
						direction: "up",
					},
					{
						type: "walk",
						direction: "up",
					},
					{
						type: "walk",
						direction: "right",
					},
					{
						type: "walk",
						direction: "right",
					},
					{
						type: "walk",
						direction: "down",
					},
					{
						type: "walk",
						direction: "down",
					},
					{
						type: "walk",
						direction: "left",
					},
					{
						type: "walk",
						direction: "left",
					},
				],
			}),

			// dude near flower
			npcD: new Person({
				x: utils.withGrid(46),
				y: utils.withGrid(55),
				src: "../assets/images/characters/NPC_06.png",
				behaviorLoop: [
					{
						type: "stand",
						direction: "left",
						time: 4000,
					},

					{
						type: "stand",
						direction: "up",
						time: 4000,
					},
				],
				talking: [
					{
						events: [{ type: "textMessage", text: "J'adore le primptemps et les fleurs.", facePlayer: "npcD" }],
					},
				],
			}),

			// girl
			npcE: new Person({
				x: utils.withGrid(57),
				y: utils.withGrid(60),
				src: "../assets/images/characters/NPC_26.png",
				behaviorLoop: [
					{
						type: "stand",
						direction: "left",
						time: 2000,
					},
				],
				talking: [
					{
						events: [{ type: "textMessage", text: "On vit dans une société...", facePlayer: "npcE" }],
					},
				],
			}),
		},
		walls: utils.loadWall(collisions),
		cutsceneSpaces: {
			[utils.asGridCoords(54, 55)]: [
				{
					events: [
						{
							who: "npcA",
							type: "walk",
							direction: "left",
						},
						{
							who: "npcA",
							type: "walk",
							direction: "left",
						},
						{
							who: "npcA",
							type: "walk",
							direction: "left",
						},
						{
							who: "npcA",
							type: "walk",
							direction: "left",
						},
						{
							who: "npcA",
							type: "stand",
							direction: "left",
							time: 500,
						},
						{
							type: "textMessage",
							text: "Mon Carapuce va t'écraser !",
						},
						{
							type: "battle",
							enemyId: "rival",
						},
					],
				},
			],
			[utils.asGridCoords(44, 48)]: [
				{
					events: [{ type: "changeMap", map: "MomHouse" }],
				},
			],
			[utils.asGridCoords(54, 48)]: [
				{
					events: [{ type: "changeMap", map: "Dojo" }],
				},
			],
		},
	},
	MomHouse: {
		lowerSrc: "../assets/images/maps/map.PNG",
		upperSrc: "../assets/images/maps/mapForeground.PNG",
		walls: utils.loadWall(collisions),
		gameObjects: {
			player: new Person({
				isPlayerControlled: true,
				x: utils.withGrid(11),
				y: utils.withGrid(11),
			}),
			npcMom: new Person({
				x: utils.withGrid(8),
				y: utils.withGrid(8),
				src: "../assets/images/characters/mother.png",
				behaviorLoop: [
					{
						type: "stand",
						direction: "right",
						time: 4000,
					},
				],
				talking: [
					{
						events: [
							{ type: "textMessage", text: "Je suis fière de toi.", facePlayer: "npcMom" },
							{ type: "textMessage", text: "J'espère que tu les attraperas tous !", facePlayer: "npcMom" },
						],
					},
				],
			}),
		},
		cutsceneSpaces: {
			[utils.asGridCoords(6, 13)]: [
				{
					events: [{ type: "changeMap", map: "PaletteTown" }],
				},
			],
		},
	},
	Dojo: {
		lowerSrc: "../assets/images/maps/map.PNG",
		upperSrc: "../assets/images/maps/mapForeground.PNG",
		walls: utils.loadWall(collisions),
		gameObjects: {
			player: new Person({
				isPlayerControlled: true,
				x: utils.withGrid(56),
				y: utils.withGrid(16),
			}),
			npcTrain1: new Person({
				x: utils.withGrid(8),
				y: utils.withGrid(8),
				src: "../assets/images/characters/mother.png",
				talking: [
					{
						events: [{ type: "textMessage", text: "Lets fight", facePlayer: "npcA" }],
					},
				],
				behaviorLoop: [
					{
						type: "stand",
						direction: "right",
						time: 4000,
					},
				],
				talking: [
					{
						events: [
							{ type: "textMessage", text: "Je suis fière de toi.", facePlayer: "npcA" },
							{ type: "textMessage", text: "J'espère que tu les attraperas tous !", facePlayer: "npcA" },
						],
					},
				],
			}),
		},
		cutsceneSpaces: {
			[utils.asGridCoords(56, 17)]: [
				{
					events: [{ type: "changeMap", map: "PaletteTown" }],
				},
			],
		},
	},
};
