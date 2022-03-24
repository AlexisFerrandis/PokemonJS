// types
window.monsterTypes = {
	normal: {
		Name: "Normal",
		InternalName: "NORMAL",
		Weaknesses: "FIGHTING",
		Immunities: "GHOST",
	},
	fighting: {
		Name: "Fighting",
		InternalName: "FIGHTING",
		Weaknesses: ["FLYING", "PSYCHIC", "FAIRY"],
		Resistances: ["ROCK", "BUG", "DARK"],
	},
	flying: {
		Name: "Flying",
		InternalName: "FLYING",
		Weaknesses: ["ROCK", "ELECTRIC", "ICE"],
		Resistances: ["FIGHTING", "BUG", "GRASS"],
		Immunities: "GROUND",
	},
	poison: {
		Name: "Poison",
		InternalName: "POISON",
		Weaknesses: ["GROUND", "PSYCHIC"],
		Resistances: ["FIGHTING", "POISON", "BUG", "GRASS", "FAIRY"],
	},
	ground: {
		Name: "Ground",
		InternalName: "GROUND",
		Weaknesses: ["WATER", "GRASS", "ICE"],
		Resistances: ["POISON", "ROCK"],
		Immunities: "ELECTRIC",
	},
	rock: {
		Name: "Rock",
		InternalName: "ROCK",
		Weaknesses: ["FIGHTING", "GROUND", "STEEL", "WATER", "GRASS"],
		Resistances: ["NORMAL", "FLYING", "POISON", "FIRE"],
	},
	bug: {
		Name: "Bug",
		InternalName: "BUG",
		Weaknesses: ["FLYING", "ROCK", "FIRE"],
		Resistances: ["FIGHTING", "GROUND", "GRASS"],
	},
	ghost: {
		Name: "Ghost",
		InternalName: "GHOST",
		Weaknesses: ["GHOST", "DARK"],
		Resistances: ["POISON", "BUG"],
		Immunities: ["NORMAL", "FIGHTING"],
	},
	steel: {
		Name: "Steel",
		InternalName: "STEEL",
		Weaknesses: ["FIGHTING", "GROUND", "FIRE"],
		Resistances: ["NORMAL", "FLYING", "ROCK", "BUG", "STEEL", "GRASS", "PSYCHIC", "ICE", "DRAGON", "FAIRY"],
		Immunities: "POISON",
	},
	fire: {
		Name: "Fire",
		InternalName: "FIRE",
		IsSpecialType: true,
		Weaknesses: ["GROUND", "ROCK", "WATER"],
		Resistances: ["BUG", "STEEL", "FIRE", "GRASS", "ICE", "FAIRY"],
	},
	water: {
		Name: "Water",
		InternalName: "WATER",
		IsSpecialType: true,
		Weaknesses: ["GRASS", "ELECTRIC"],
		Resistances: ["STEEL", "FIRE", "WATER", "ICE"],
	},
	grass: {
		Name: "Grass",
		InternalName: "GRASS",
		IsSpecialType: true,
		Weaknesses: ["FLYING", "POISON", "BUG", "FIRE", "ICE"],
		Resistances: ["GROUND", "WATER", "GRASS", "ELECTRIC"],
	},
	electric: {
		Name: "Electric",
		InternalName: "ELECTRIC",
		IsSpecialType: true,
		Weaknesses: "GROUND",
		Resistances: ["FLYING", "STEEL", "ELECTRIC"],
	},
	psychic: {
		Name: "Psychic",
		InternalName: "PSYCHIC",
		IsSpecialType: true,
		Weaknesses: ["BUG", "GHOST", "DARK"],
		Resistances: ["FIGHTING", "PSYCHIC"],
	},
	ice: {
		Name: "Ice",
		InternalName: "ICE",
		IsSpecialType: true,
		Weaknesses: ["FIGHTING", "ROCK", "STEEL", "FIRE"],
		Resistances: "ICE",
	},
	dragon: {
		Name: "Dragon",
		InternalName: "DRAGON",
		IsSpecialType: true,
		Weaknesses: ["ICE", "DRAGON", "FAIRY"],
		Resistances: ["FIRE", "WATER", "GRASS", "ELECTRIC"],
	},
	dark: {
		Name: "Dark",
		InternalName: "DARK",
		IsSpecialType: true,
		Weaknesses: ["FIGHTING", "BUG", "FAIRY"],
		Resistances: ["GHOST", "DARK"],
		Immunities: "PSYCHIC",
	},
	fairy: {
		Name: "Fairy",
		InternalName: "FAIRY",
		IsSpecialType: true,
		Weaknesses: ["POISON", "STEEL"],
		Resistances: ["FIGHTING", "BUG", "DARK"],
		Immunities: "DRAGON",
	},
};

// monsters
window.monsters = {
	bulbasaur: {
		Name: "Bulbasaur",
		InternalName: "BULBASAUR",
		Type1: "GRASS",
		Type2: "POISON",
		BaseStats: [45, 49, 49, 45, 65, 65],
		GenderRate: "FemaleOneEighth",
		GrowthRate: "Parabolic",
		BaseEXP: 64,
		EffortPoints: [0, 0, 0, 0, 1, 0],
		Rareness: 45,
		Happiness: 70,
		Abilities: "OVERGROW",
		HiddenAbility: "CHLOROPHYLL",
		Moves: [1, "TACKLE", 3, "GROWL", 7, "LEECHSEED", 9, "VINEWHIP", 13, "POISONPOWDER", 13, "SLEEPPOWDER", 15, "TAKEDOWN", 19, "RAZORLEAF", 21, "SWEETSCENT", 25, "GROWTH", 27, "DOUBLEEDGE", 31, "WORRYSEED", 33, "SYNTHESIS", 37, "SEEDBOMB"],
		TutorMoves: ["ATTRACT", "BIND", "CONFIDE", "CUT", "DOUBLETEAM", "ECHOEDVOICE", "ENERGYBALL", "FACADE", "FRUSTRATION", "GIGADRAIN", "GRASSKNOT", "GRASSPLEDGE", "HIDDENPOWER", "KNOCKOFF", "LIGHTSCREEN", "NATUREPOWER", "PROTECT", "REST", "RETURN", "ROCKSMASH", "ROUND", "SAFEGUARD", "SEEDBOMB", "SLEEPTALK", "SLUDGEBOMB", "SNORE", "SOLARBEAM", "STRENGTH", "SUBSTITUTE", "SUNNYDAY", "SWAGGER", "SWORDSDANCE", "SYNTHESIS", "TOXIC", "VENOSHOCK", "WORKUP", "WORRYSEED"],
		EggMoves: ["AMNESIA", "CHARM", "CURSE", "ENDURE", "GIGADRAIN", "GRASSWHISTLE", "GRASSYTERRAIN", "INGRAIN", "LEAFSTORM", "MAGICALLEAF", "NATUREPOWER", "PETALDANCE", "POWERWHIP", "SKULLBASH", "SLUDGE"],
		Compatibility: ["Monster", "Grass"],
		StepsToHatch: 5120,
		Height: 0.7,
		Weight: 6.9,
		Color: "Green",
		Shape: "Quadruped",
		Habitat: "Grassland",
		Kind: "Seed",
		// Pokedex : Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.
		Generation: 1,
		BattlerPlayerX: -4,
		BattlerPlayerY: 0,
		BattlerEnemyX: -1,
		BattlerEnemyY: 26,
		BattlerShadowX: 0,
		BattlerShadowSize: 2,
		Evolutions: ["IVYSAUR", "Level", 16],
		// frontSrc: `../assets/images/monsters/Front/${this.InternalName}.png`,
		// frontSrc: `../assets/images/monsters/Back/${this.InternalName}.png`,
	},

	ivysaur: {
		Name: "Ivysaur",
		InternalName: "IVYSAUR",
		Type1: "GRASS",
		Type2: "POISON",
		BaseStats: [60, 62, 63, 60, 80, 80],
		GenderRate: "FemaleOneEighth",
		GrowthRate: "Parabolic",
		BaseEXP: 142,
		EffortPoints: [0, 0, 0, 0, 1, 1],
		Rareness: 45,
		Happiness: 70,
		Abilities: "OVERGROW",
		HiddenAbility: "CHLOROPHYLL",
		Moves: [1, "TACKLE", 1, "GROWL", 1, "LEECHSEED", 3, "GROWL", 7, "LEECHSEED", 9, "VINEWHIP", 13, "POISONPOWDER", 13, "SLEEPPOWDER", 15, "TAKEDOWN", 20, "RAZORLEAF", 23, "SWEETSCENT", 28, "GROWTH", 31, "DOUBLEEDGE", 36, "WORRYSEED", 39, "SYNTHESIS", 44, "SOLARBEAM"],
		TutorMoves: ["ATTRACT", "BIND", "CONFIDE", "CUT", "DOUBLETEAM", "ECHOEDVOICE", "ENERGYBALL", "FACADE", "FRUSTRATION", "GIGADRAIN", "GRASSKNOT", "GRASSPLEDGE", "HIDDENPOWER", "KNOCKOFF", "LIGHTSCREEN", "NATUREPOWER", "PROTECT", "REST", "RETURN", "ROCKSMASH", "ROUND", "SAFEGUARD", "SEEDBOMB", "SLEEPTALK", "SLUDGEBOMB", "SNORE", "SOLARBEAM", "STRENGTH", "SUBSTITUTE", "SUNNYDAY", "SWAGGER", "SWORDSDANCE", "SYNTHESIS", "TOXIC", "VENOSHOCK", "WORKUP", "WORRYSEED"],
		Compatibility: ["Monster", "Grass"],
		StepsToHatch: 5120,
		Height: 1.0,
		Weight: 13.0,
		Color: "Green",
		Shape: "Quadruped",
		Habitat: "Grassland",
		Kind: "Seed",
		// Pokedex : To support its bulb, Ivysaur's legs grow sturdy. If it spends more time lying in the sunlight, the bud will soon bloom into a large flower.
		Generation: 1,
		BattlerPlayerX: -9,
		BattlerPlayerY: 0,
		BattlerEnemyX: 2,
		BattlerEnemyY: 22,
		BattlerShadowX: 0,
		BattlerShadowSize: 2,
		Evolutions: ["VENUSAUR", "Level", 32],
	},
	venusaur: {
		Name: "Venusaur",
		InternalName: "VENUSAUR",
		Type1: "GRASS",
		Type2: "POISON",
		BaseStats: [80, 82, 83, 80, 100, 100],
		GenderRate: "FemaleOneEighth",
		GrowthRate: "Parabolic",
		BaseEXP: 236,
		EffortPoints: [0, 0, 0, 0, 2, 1],
		Rareness: 45,
		Happiness: 70,
		Abilities: "OVERGROW",
		HiddenAbility: "CHLOROPHYLL",
		Moves: [0, "PETALDANCE", 1, "PETALDANCE", 1, "TACKLE", 1, "GROWL", 1, "LEECHSEED", 1, "VINEWHIP", 3, "GROWL", 7, "LEECHSEED", 9, "VINEWHIP", 13, "POISONPOWDER", 13, "SLEEPPOWDER", 15, "TAKEDOWN", 20, "RAZORLEAF", 23, "SWEETSCENT", 28, "GROWTH", 31, "DOUBLEEDGE", 39, "WORRYSEED", 45, "SYNTHESIS", 50, "PETALBLIZZARD", 53, "SOLARBEAM"],
		TutorMoves: ["ATTRACT", "BIND", "BLOCK", "BULLDOZE", "CONFIDE", "CUT", "DOUBLETEAM", "EARTHQUAKE", "ECHOEDVOICE", "ENERGYBALL", "FACADE", "FRENZYPLANT", "FRUSTRATION", "GIGADRAIN", "GIGAIMPACT", "GRASSKNOT", "GRASSPLEDGE", "HIDDENPOWER", "HYPERBEAM", "KNOCKOFF", "LIGHTSCREEN", "NATUREPOWER", "OUTRAGE", "PROTECT", "REST", "RETURN", "ROAR", "ROCKSMASH", "ROUND", "SAFEGUARD", "SEEDBOMB", "SLEEPTALK", "SLUDGEBOMB", "SNORE", "SOLARBEAM", "STOMPINGTANTRUM", "STRENGTH", "SUBSTITUTE", "SUNNYDAY", "SWAGGER", "SWORDSDANCE", "SYNTHESIS", "TOXIC", "VENOSHOCK", "WORKUP", "WORRYSEED"],
		Compatibility: ["Monster", "Grass"],
		StepsToHatch: 5120,
		Height: 2.0,
		Weight: 100.0,
		Color: "Green",
		Shape: "Quadruped",
		Habitat: "Grassland",
		Kind: "Seed",
		// Pokedex : Venusaur's flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people.
		Generation: 1,
		BattlerPlayerX: 1,
		BattlerPlayerY: 0,
		BattlerEnemyX: 2,
		BattlerEnemyY: 11,
		BattlerShadowX: 0,
		BattlerShadowSize: 3,
	},

	charmander: {
		Name: "Charmander",
		InternalName: "CHARMANDER",
		Type1: "FIRE",
		BaseStats: [39, 52, 43, 65, 60, 50],
		GenderRate: "FemaleOneEighth",
		GrowthRate: "Parabolic",
		BaseEXP: 62,
		EffortPoints: [0, 0, 0, 1, 0, 0],
		Rareness: 45,
		Happiness: 70,
		Abilities: "BLAZE",
		HiddenAbility: "SOLARPOWER",
		Moves: [1, "SCRATCH", 1, "GROWL", 7, "EMBER", 10, "SMOKESCREEN", 16, "DRAGONRAGE", 19, "SCARYFACE", 25, "FIREFANG", 28, "FLAMEBURST", 34, "SLASH", 37, "FLAMETHROWER", 43, "FIRESPIN", 46, "INFERNO"],
		TutorMoves: ["AERIALACE", "ATTRACT", "BRICKBREAK", "CONFIDE", "CUT", "DOUBLETEAM", "DRAGONCLAW", "DRAGONPULSE", "ECHOEDVOICE", "FACADE", "FIREBLAST", "FIREPLEDGE", "FIREPUNCH", "FLAMECHARGE", "FLAMETHROWER", "FLING", "FOCUSPUNCH", "FRUSTRATION", "HEATWAVE", "HIDDENPOWER", "IRONTAIL", "OVERHEAT", "POWERUPPUNCH", "PROTECT", "REST", "RETURN", "ROCKSLIDE", "ROCKSMASH", "ROCKTOMB", "ROUND", "SHADOWCLAW", "SLEEPTALK", "SNORE", "STRENGTH", "SUBSTITUTE", "SUNNYDAY", "SWAGGER", "SWORDSDANCE", "THUNDERPUNCH", "TOXIC", "WILLOWISP", "WORKUP"],
		EggMoves: ["AIRCUTTER", "ANCIENTPOWER", "BEATUP", "BELLYDRUM", "BITE", "COUNTER", "CRUNCH", "DRAGONDANCE", "DRAGONPULSE", "DRAGONRUSH", "FLAREBLITZ", "FOCUSPUNCH", "METALCLAW", "OUTRAGE"],
		Compatibility: ["Monster", "Dragon"],
		StepsToHatch: 5120,
		Height: 0.6,
		Weight: 8.5,
		Color: "Red",
		Shape: "BipedalTail",
		Habitat: "Mountain",
		Kind: "Lizard",
		// Pokedex : The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is happy, and blazes when it is enraged.
		Generation: 1,
		BattlerPlayerX: -6,
		BattlerPlayerY: 0,
		BattlerEnemyX: 4,
		BattlerEnemyY: 19,
		BattlerShadowX: 0,
		BattlerShadowSize: 1,
		Evolutions: ["CHARMELEON", "Level", 16],
	},

	charmeleon: {
		Name: "Charmeleon",
		InternalName: "CHARMELEON",
		Type1: "FIRE",
		BaseStats: [58, 64, 58, 80, 80, 65],
		GenderRate: "FemaleOneEighth",
		GrowthRate: "Parabolic",
		BaseEXP: 142,
		EffortPoints: [0, 0, 0, 1, 1, 0],
		Rareness: 45,
		Happiness: 70,
		Abilities: "BLAZE",
		HiddenAbility: "SOLARPOWER",
		Moves: [1, "SCRATCH", 1, "GROWL", 1, "EMBER", 7, "EMBER", 10, "SMOKESCREEN", 17, "DRAGONRAGE", 21, "SCARYFACE", 28, "FIREFANG", 32, "FLAMEBURST", 39, "SLASH", 43, "FLAMETHROWER", 50, "FIRESPIN", 54, "INFERNO"],
		TutorMoves: ["AERIALACE", "ATTRACT", "BRICKBREAK", "CONFIDE", "CUT", "DOUBLETEAM", "DRAGONCLAW", "DRAGONPULSE", "ECHOEDVOICE", "FACADE", "FIREBLAST", "FIREPLEDGE", "FIREPUNCH", "FLAMECHARGE", "FLAMETHROWER", "FLING", "FOCUSPUNCH", "FRUSTRATION", "HEATWAVE", "HIDDENPOWER", "IRONTAIL", "OVERHEAT", "POWERUPPUNCH", "PROTECT", "REST", "RETURN", "ROCKSLIDE", "ROCKSMASH", "ROCKTOMB", "ROUND", "SHADOWCLAW", "SLEEPTALK", "SNORE", "STRENGTH", "SUBSTITUTE", "SUNNYDAY", "SWAGGER", "SWORDSDANCE", "THUNDERPUNCH", "TOXIC", "WILLOWISP", "WORKUP"],
		Compatibility: ["Monster", "Dragon"],
		StepsToHatch: 5120,
		Height: 1.1,
		Weight: 19.0,
		Color: "Red",
		Shape: "BipedalTail",
		Habitat: "Mountain",
		Kind: "Flame",
		// Pokedex : Without pity, its sharp claws destroy foes. If it encounters a strong enemy, it becomes agitated, and the flame on its tail flares with a bluish white color.
		Generation: 1,
		BattlerPlayerX: -3,
		BattlerPlayerY: 0,
		BattlerEnemyX: -2,
		BattlerEnemyY: 18,
		BattlerShadowX: 0,
		BattlerShadowSize: 2,
		Evolutions: ["CHARIZARD", "Level", 36],
	},

	charizard: {
		Name: "Charizard",
		InternalName: "CHARIZARD",
		Type1: "FIRE",
		Type2: "FLYING",
		BaseStats: [78, 84, 78, 100, 109, 85],
		GenderRate: "FemaleOneEighth",
		GrowthRate: "Parabolic",
		BaseEXP: 240,
		EffortPoints: [0, 0, 0, 0, 3, 0],
		Rareness: 45,
		Happiness: 70,
		Abilities: "BLAZE",
		HiddenAbility: "SOLARPOWER",
		Moves: [0, "WINGATTACK", 1, "WINGATTACK", 1, "FLAREBLITZ", 1, "HEATWAVE", 1, "DRAGONCLAW", 1, "SHADOWCLAW", 1, "AIRSLASH", 1, "SCRATCH", 1, "GROWL", 1, "EMBER", 7, "EMBER", 10, "SMOKESCREEN", 17, "DRAGONRAGE", 21, "SCARYFACE", 28, "FIREFANG", 32, "FLAMEBURST", 41, "SLASH", 47, "FLAMETHROWER", 56, "FIRESPIN", 62, "INFERNO", 71, "HEATWAVE", 77, "FLAREBLITZ"],
		TutorMoves: ["AERIALACE", "ATTRACT", "BLASTBURN", "BRICKBREAK", "BRUTALSWING", "BULLDOZE", "CONFIDE", "CUT", "DEFOG", "DOUBLETEAM", "DRAGONCLAW", "DRAGONPULSE", "DRAGONTAIL", "EARTHQUAKE", "ECHOEDVOICE", "FACADE", "FIREBLAST", "FIREPLEDGE", "FIREPUNCH", "FLAMECHARGE", "FLAMETHROWER", "FLING", "FLY", "FOCUSBLAST", "FOCUSPUNCH", "FRUSTRATION", "GIGAIMPACT", "HEATWAVE", "HIDDENPOWER", "HYPERBEAM", "IRONTAIL", "OUTRAGE", "OVERHEAT", "POWERUPPUNCH", "PROTECT", "REST", "RETURN", "ROAR", "ROCKSLIDE", "ROCKSMASH", "ROCKTOMB", "ROOST", "ROUND", "SHADOWCLAW", "SKYDROP", "SLEEPTALK", "SNORE", "SOLARBEAM", "STEELWING", "STRENGTH", "SUBSTITUTE", "SUNNYDAY", "SWAGGER", "SWORDSDANCE", "TAILWIND", "THUNDERPUNCH", "TOXIC", "WILLOWISP", "WORKUP"],
		Compatibility: ["Monster", "Dragon"],
		StepsToHatch: 5120,
		Height: 1.7,
		Weight: 90.5,
		Color: "Red",
		Shape: "BipedalTail",
		Habitat: "Mountain",
		Kind: "Flame",
		// Pokedex : A Charizard flies about in search of strong opponents. It breathes intense flames that can melt any material. However, it will never torch a weaker foe.
		Generation: 1,
		BattlerPlayerX: -2,
		BattlerPlayerY: 0,
		BattlerEnemyX: 0,
		BattlerEnemyY: 3,
		BattlerShadowX: 0,
		BattlerShadowSize: 3,
	},

	squirtle: {
		Name: "Squirtle",
		InternalName: "SQUIRTLE",
		Type1: "WATER",
		BaseStats: [44, 48, 65, 43, 50, 64],
		GenderRate: "FemaleOneEighth",
		GrowthRate: "Parabolic",
		BaseEXP: 63,
		EffortPoints: [0, 0, 1, 0, 0, 0],
		Rareness: 45,
		Happiness: 70,
		Abilities: "TORRENT",
		HiddenAbility: "RAINDISH",
		Moves: [1, "TACKLE", 4, "TAILWHIP", 7, "WATERGUN", 10, "WITHDRAW", 13, "BUBBLE", 16, "BITE", 19, "RAPIDSPIN", 22, "PROTECT", 25, "WATERPULSE", 28, "AQUATAIL", 31, "SKULLBASH", 34, "IRONDEFENSE", 37, "RAINDANCE", 40, "HYDROPUMP"],
		TutorMoves: ["AQUATAIL", "ATTRACT", "BLIZZARD", "BRICKBREAK", "CONFIDE", "DIVE", "DOUBLETEAM", "DRAGONPULSE", "FACADE", "FLING", "FOCUSPUNCH", "FRUSTRATION", "GYROBALL", "HAIL", "HIDDENPOWER", "ICEBEAM", "ICEPUNCH", "ICYWIND", "IRONDEFENSE", "IRONTAIL", "POWERUPPUNCH", "PROTECT", "RAINDANCE", "REST", "RETURN", "ROCKSMASH", "ROCKTOMB", "ROUND", "SCALD", "SLEEPTALK", "SNORE", "STRENGTH", "SUBSTITUTE", "SURF", "SWAGGER", "TOXIC", "WATERFALL", "WATERPLEDGE", "WATERPULSE", "WORKUP", "ZENHEADBUTT"],
		EggMoves: ["AQUAJET", "AQUARING", "AURASPHERE", "BRINE", "DRAGONPULSE", "FAKEOUT", "FLAIL", "FORESIGHT", "HAZE", "MIRRORCOAT", "MIST", "MUDSPORT", "MUDDYWATER", "REFRESH", "WATERSPOUT", "YAWN"],
		Compatibility: ["Monster", "Water1"],
		StepsToHatch: 5120,
		Height: 0.5,
		Weight: 9.0,
		Color: "Blue",
		Shape: "BipedalTail",
		Habitat: "WatersEdge",
		Kind: "TinyTurtle",
		// Pokedex : Its shell is not just for protection. Its rounded shape and the grooves on its surface minimize resistance in water, enabling Squirtle to swim at high speeds.
		Generation: 1,
		BattlerPlayerX: -3,
		BattlerPlayerY: 0,
		BattlerEnemyX: 2,
		BattlerEnemyY: 20,
		BattlerShadowX: 0,
		BattlerShadowSize: 1,
		Evolutions: ["WARTORTLE", "Level", 16],
	},

	wartortle: {
		Name: "Wartortle",
		InternalName: "WARTORTLE",
		Type1: "WATER",
		BaseStats: [59, 63, 80, 58, 65, 80],
		GenderRate: "FemaleOneEighth",
		GrowthRate: "Parabolic",
		BaseEXP: 142,
		EffortPoints: [0, 0, 1, 0, 0, 1],
		Rareness: 45,
		Happiness: 70,
		Abilities: "TORRENT",
		HiddenAbility: "RAINDISH",
		Moves: [1, "TACKLE", 1, "TAILWHIP", 1, "WATERGUN", 4, "TAILWHIP", 7, "WATERGUN", 10, "WITHDRAW", 13, "BUBBLE", 17, "BITE", 21, "RAPIDSPIN", 25, "PROTECT", 29, "WATERPULSE", 33, "AQUATAIL", 37, "SKULLBASH", 41, "IRONDEFENSE", 45, "RAINDANCE", 49, "HYDROPUMP"],
		TutorMoves: ["AQUATAIL", "ATTRACT", "BLIZZARD", "BRICKBREAK", "CONFIDE", "DIVE", "DOUBLETEAM", "DRAGONPULSE", "FACADE", "FLING", "FOCUSPUNCH", "FRUSTRATION", "GYROBALL", "HAIL", "HIDDENPOWER", "ICEBEAM", "ICEPUNCH", "ICYWIND", "IRONDEFENSE", "IRONTAIL", "POWERUPPUNCH", "PROTECT", "RAINDANCE", "REST", "RETURN", "ROCKSMASH", "ROCKTOMB", "ROUND", "SCALD", "SLEEPTALK", "SNORE", "STRENGTH", "SUBSTITUTE", "SURF", "SWAGGER", "TOXIC", "WATERFALL", "WATERPLEDGE", "WATERPULSE", "WORKUP", "ZENHEADBUTT"],
		Compatibility: ["Monster", "Water1"],
		StepsToHatch: 5120,
		Height: 1.0,
		Weight: 22.5,
		Color: "Blue",
		Shape: "BipedalTail",
		Habitat: "WatersEdge",
		Kind: "Turtle",
		// Pokedex : Its large tail is covered with rich, thick fur that deepens in color with age. The scratches on its shell are evidence of this Pokémon's toughness in battle.
		Generation: 1,
		BattlerPlayerX: -2,
		BattlerPlayerY: 0,
		BattlerEnemyX: -4,
		BattlerEnemyY: 16,
		BattlerShadowX: 0,
		BattlerShadowSize: 2,
		Evolutions: ["BLASTOISE", "Level", 36],
	},

	blastoise: {
		Name: "Blastoise",
		InternalName: "BLASTOISE",
		Type1: "WATER",
		BaseStats: [79, 83, 100, 78, 85, 105],
		GenderRate: "FemaleOneEighth",
		GrowthRate: "Parabolic",
		BaseEXP: 239,
		EffortPoints: [0, 0, 0, 0, 0, 3],
		Rareness: 45,
		Happiness: 70,
		Abilities: "TORRENT",
		HiddenAbility: "RAINDISH",
		Moves: [1, "FLASHCANNON", 1, "TACKLE", 1, "TAILWHIP", 1, "WATERGUN", 1, "WITHDRAW", 4, "TAILWHIP", 7, "WATERGUN", 10, "WITHDRAW", 13, "BUBBLE", 17, "BITE", 21, "RAPIDSPIN", 25, "PROTECT", 29, "WATERPULSE", 33, "AQUATAIL", 40, "SKULLBASH", 47, "IRONDEFENSE", 54, "RAINDANCE", 60, "HYDROPUMP"],
		TutorMoves: ["AQUATAIL", "ATTRACT", "BLIZZARD", "BRICKBREAK", "BULLDOZE", "CONFIDE", "DARKPULSE", "DIVE", "DOUBLETEAM", "DRAGONPULSE", "DRAGONTAIL", "EARTHQUAKE", "FACADE", "FLASHCANNON", "FLING", "FOCUSBLAST", "FOCUSPUNCH", "FRUSTRATION", "GIGAIMPACT", "GYROBALL", "HAIL", "HIDDENPOWER", "HYDROCANNON", "HYPERBEAM", "ICEBEAM", "ICEPUNCH", "ICYWIND", "IRONDEFENSE", "IRONTAIL", "LIQUIDATION", "OUTRAGE", "POWERUPPUNCH", "PROTECT", "RAINDANCE", "REST", "RETURN", "ROAR", "ROCKSLIDE", "ROCKSMASH", "ROCKTOMB", "ROUND", "SCALD", "SIGNALBEAM", "SLEEPTALK", "SMACKDOWN", "SNORE", "STRENGTH", "SUBSTITUTE", "SURF", "SWAGGER", "TOXIC", "WATERFALL", "WATERPLEDGE", "WATERPULSE", "WORKUP", "ZENHEADBUTT"],
		Compatibility: ["Monster", "Water1"],
		StepsToHatch: 5120,
		Height: 1.6,
		Weight: 85.5,
		Color: "Blue",
		Shape: "BipedalTail",
		Habitat: "WatersEdge",
		Kind: "Shellfish",
		// Pokedex : The waterspouts that protrude from its shell are highly accurate. Their bullets of water can precisely nail tin cans from a distance of over 160 feet.
		Generation: 1,
		BattlerPlayerX: -3,
		BattlerPlayerY: 0,
		BattlerEnemyX: 0,
		BattlerEnemyY: 13,
		BattlerShadowX: 0,
		BattlerShadowSize: 3,
	},

	caterpie: {
		Name: "Caterpie",
		InternalName: "CATERPIE",
		Type1: "BUG",
		BaseStats: [45, 30, 35, 45, 20, 20],
		GenderRate: "Female50Percent",
		GrowthRate: "Medium",
		BaseEXP: 39,
		EffortPoints: [1, 0, 0, 0, 0, 0],
		Rareness: 255,
		Happiness: 70,
		Abilities: "SHIELDDUST",
		HiddenAbility: "RUNAWAY",
		Moves: [1, "TACKLE", 1, "STRINGSHOT", 9, "BUGBITE"],
		TutorMoves: ["BUGBITE", "ELECTROWEB", "SNORE"],
		Compatibility: "Bug",
		StepsToHatch: 3840,
		Height: 0.3,
		Weight: 2.9,
		Color: "Green",
		Shape: "Insectoid",
		Habitat: "Forest",
		Kind: "Worm",
		// Pokedex : Its voracious appetite compels it to devour leaves bigger than itself without hesitation. It releases a terribly strong odor from its antennae.
		Generation: 1,
		BattlerPlayerX: -5,
		BattlerPlayerY: 0,
		BattlerEnemyX: -3,
		BattlerEnemyY: 23,
		BattlerShadowX: 0,
		BattlerShadowSize: 1,
		Evolutions: ["METAPOD", "Level", 7],
	},

	metapod: {
		Name: "Metapod",
		InternalName: "METAPOD",
		Type1: "BUG",
		BaseStats: [50, 20, 55, 30, 25, 25],
		GenderRate: "Female50Percent",
		GrowthRate: "Medium",
		BaseEXP: 72,
		EffortPoints: [0, 0, 2, 0, 0, 0],
		Rareness: 120,
		Happiness: 70,
		Abilities: "SHEDSKIN",
		Moves: [0, "HARDEN", 1, "HARDEN"],
		TutorMoves: ["BUGBITE", "ELECTROWEB", "IRONDEFENSE"],
		Compatibility: "Bug",
		StepsToHatch: 3840,
		Height: 0.7,
		Weight: 9.9,
		Color: "Green",
		Shape: "Serpentine",
		Habitat: "Forest",
		Kind: "Cocoon",
		// Pokedex : Its shell is as hard as an iron slab. A Metapod does not move very much because it is preparing its soft innards for evolution inside the shell.
		Generation: 1,
		BattlerPlayerX: -1,
		BattlerPlayerY: 0,
		BattlerEnemyX: -1,
		BattlerEnemyY: 23,
		BattlerShadowX: 0,
		BattlerShadowSize: 2,
		Evolutions: ["BUTTERFREE", "Level", 10],
	},

	butterfree: {
		Name: "Butterfree",
		InternalName: "BUTTERFREE",
		Type1: "BUG",
		Type2: "FLYING",
		BaseStats: [60, 45, 50, 70, 90, 80],
		GenderRate: "Female50Percent",
		GrowthRate: "Medium",
		BaseEXP: 178,
		EffortPoints: [0, 0, 0, 0, 2, 1],
		Rareness: 45,
		Happiness: 70,
		Abilities: "COMPOUNDEYES",
		HiddenAbility: "TINTEDLENS",
		Moves: [0, "GUST", 1, "GUST", 1, "CONFUSION", 11, "CONFUSION", 13, "POISONPOWDER", 13, "STUNSPORE", 13, "SLEEPPOWDER", 17, "PSYBEAM", 19, "SILVERWIND", 23, "SUPERSONIC", 25, "SAFEGUARD", 29, "WHIRLWIND", 31, "BUGBUZZ", 35, "RAGEPOWDER", 37, "CAPTIVATE", 41, "TAILWIND", 43, "AIRSLASH", 47, "QUIVERDANCE"],
		TutorMoves: ["ACROBATICS", "AERIALACE", "ATTRACT", "BUGBITE", "CONFIDE", "DEFOG", "DOUBLETEAM", "DREAMEATER", "ELECTROWEB", "ENERGYBALL", "FACADE", "FRUSTRATION", "GIGADRAIN", "GIGAIMPACT", "HIDDENPOWER", "HYPERBEAM", "INFESTATION", "PROTECT", "PSYCHIC", "PSYCHUP", "RAINDANCE", "REST", "RETURN", "ROOST", "ROUND", "SAFEGUARD", "SHADOWBALL", "SIGNALBEAM", "SKILLSWAP", "SLEEPTALK", "SNORE", "SOLARBEAM", "STRUGGLEBUG", "SUBSTITUTE", "SUNNYDAY", "SWAGGER", "TAILWIND", "THIEF", "TOXIC", "UTURN", "VENOSHOCK"],
		Compatibility: "Bug",
		StepsToHatch: 3840,
		Height: 1.1,
		Weight: 32.0,
		Color: "White",
		Shape: "MultiWinged",
		Habitat: "Forest",
		Kind: "Butterfly",
		// Pokedex : It has a superior ability to search for delicious honey from flowers. It can seek, extract, and carry honey from flowers blooming over six miles away.
		Generation: 1,
		WildItemUncommon: "SILVERPOWDER",
		BattlerPlayerX: -10,
		BattlerPlayerY: 0,
		BattlerEnemyX: 8,
		BattlerEnemyY: -2,
		BattlerShadowX: 0,
		BattlerShadowSize: 2,
	},

	weedle: {
		Name: "Weedle",
		InternalName: "WEEDLE",
		Type1: "BUG",
		Type2: "POISON",
		BaseStats: [40, 35, 30, 50, 20, 20],
		GenderRate: "Female50Percent",
		GrowthRate: "Medium",
		BaseEXP: 39,
		EffortPoints: [0, 0, 0, 1, 0, 0],
		Rareness: 255,
		Happiness: 70,
		Abilities: "SHIELDDUST",
		HiddenAbility: "RUNAWAY",
		Moves: [1, "POISONSTING", 1, "STRINGSHOT", 9, "BUGBITE"],
		TutorMoves: ["BUGBITE", "ELECTROWEB"],
		Compatibility: "Bug",
		StepsToHatch: 3840,
		Height: 0.3,
		Weight: 3.2,
		Color: "Brown",
		Shape: "Insectoid",
		Habitat: "Forest",
		Kind: "HairyBug",
		// Pokedex : A Weedle has an extremely acute sense of smell. It distinguishes its favorite kinds of leaves from those it dislikes by sniffing with its big red proboscis (nose).
		Generation: 1,
		BattlerPlayerX: 0,
		BattlerPlayerY: 0,
		BattlerEnemyX: 3,
		BattlerEnemyY: 24,
		BattlerShadowX: 0,
		BattlerShadowSize: 1,
		Evolutions: ["KAKUNA", "Level", 7],
	},

	kakuna: {
		Name: "Kakuna",
		InternalName: "KAKUNA",
		Type1: "BUG",
		Type2: "POISON",
		BaseStats: [45, 25, 50, 35, 25, 25],
		GenderRate: "Female50Percent",
		GrowthRate: "Medium",
		BaseEXP: 72,
		EffortPoints: [0, 0, 2, 0, 0, 0],
		Rareness: 120,
		Happiness: 70,
		Abilities: "SHEDSKIN",
		Moves: [0, "HARDEN", 1, "HARDEN"],
		TutorMoves: ["BUGBITE", "ELECTROWEB", "IRONDEFENSE"],
		Compatibility: "Bug",
		StepsToHatch: 3840,
		Height: 0.6,
		Weight: 10.0,
		Color: "Yellow",
		Shape: "Serpentine",
		Habitat: "Forest",
		Kind: "Cocoon",
		// Pokedex : It remains virtually immobile while it clings to a tree. However, on the inside, it busily prepares for evolution. This is evident from how hot its shell becomes.
		Generation: 1,
		BattlerPlayerX: 0,
		BattlerPlayerY: 0,
		BattlerEnemyX: 0,
		BattlerEnemyY: 22,
		BattlerShadowX: 0,
		BattlerShadowSize: 1,
		Evolutions: ["BEEDRILL", "Level", 10],
	},
	beedrill: {
		Name: "Beedrill",
		InternalName: "BEEDRILL",
		Type1: "BUG",
		Type2: "POISON",
		BaseStats: [65, 90, 40, 75, 45, 80],
		GenderRate: "Female50Percent",
		GrowthRate: "Medium",
		BaseEXP: 178,
		EffortPoints: [0, 2, 0, 0, 0, 1],
		Rareness: 45,
		Happiness: 70,
		Abilities: "SWARM",
		HiddenAbility: "SNIPER",
		Moves: [0, "TWINEEDLE", 1, "TWINEEDLE", 1, "FURYATTACK", 11, "FURYATTACK", 14, "RAGE", 17, "PURSUIT", 20, "FOCUSENERGY", 23, "VENOSHOCK", 26, "ASSURANCE", 29, "TOXICSPIKES", 32, "PINMISSILE", 35, "POISONJAB", 38, "AGILITY", 41, "ENDEAVOR", 44, "FELLSTINGER"],
		TutorMoves: ["ACROBATICS", "AERIALACE", "ATTRACT", "BRICKBREAK", "BRUTALSWING", "BUGBITE", "CONFIDE", "CUT", "DEFOG", "DOUBLETEAM", "DRILLRUN", "ELECTROWEB", "ENDEAVOR", "FACADE", "FALSESWIPE", "FRUSTRATION", "GIGADRAIN", "GIGAIMPACT", "HIDDENPOWER", "HYPERBEAM", "INFESTATION", "KNOCKOFF", "LASERFOCUS", "PAYBACK", "POISONJAB", "PROTECT", "REST", "RETURN", "ROCKSMASH", "ROOST", "ROUND", "SLEEPTALK", "SLUDGEBOMB", "SNORE", "SOLARBEAM", "STRUGGLEBUG", "SUBSTITUTE", "SUNNYDAY", "SWAGGER", "SWORDSDANCE", "TAILWIND", "THIEF", "THROATCHOP", "TOXIC", "UTURN", "VENOSHOCK", "XSCISSOR"],
		Compatibility: "Bug",
		StepsToHatch: 3840,
		Height: 1.0,
		Weight: 29.5,
		Color: "Yellow",
		Shape: "MultiWinged",
		Habitat: "Forest",
		Kind: "PoisonBee",
		// Pokedex : A Beedrill is extremely territorial. For safety reasons, no one should ever approach its nest. If angered, they will attack in a swarm.
		Generation: 1,
		WildItemUncommon: "POISONBARB",
		BattlerPlayerX: 9,
		BattlerPlayerY: 0,
		BattlerEnemyX: -8,
		BattlerEnemyY: 1,
		BattlerShadowX: 0,
		BattlerShadowSize: 2,
	},
	//         [monsterName : {
	//         Name : Pidgey
	//         InternalName : PIDGEY
	//         Type1 : NORMAL
	//         Type2 : FLYING
	//         BaseStats : 40,45,40,56,35,35
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 50
	//         EffortPoints : 0,0,0,1,0,0
	//         Rareness : 255
	//         Happiness : 70
	//         Abilities : KEENEYE,TANGLEDFEET
	//         HiddenAbility : BIGPECKS
	//         Moves : 1,"TACKLE",5,"SANDATTACK",9,"GUST",13,"QUICKATTACK",17,"WHIRLWIND",21,TWISTER,25,FEATHERDANCE,29,"AGILITY",33,"WINGATTACK",37,"ROOST",41,"TAILWIND",45,MIRRORMOVE,49,"AIRSLASH",53,HURRICANE
	//         TutorMoves : "AERIALACE","ATTRACT","CONFIDE","DEFOG","DOUBLETEAM","FACADE","FLY","FRUSTRATION","HEATWAVE","HIDDENPOWER","PROTECT","RAINDANCE","REST","RETURN","ROOST","ROUND",SKYATTACK,"SLEEPTALK","SNORE","STEELWING","SUBSTITUTE","SUNNYDAY","SWAGGER","TAILWIND","THIEF","TOXIC",UPROAR,"UTURN","WORKUP"
	//         EggMoves : "AIRCUTTER","AIRSLASH",BRAVEBIRD,"DEFOG",FEINTATTACK,"FORESIGHT","PURSUIT","STEELWING",UPROAR
	//         Compatibility : Flying
	//         StepsToHatch : 3840
	//         Height : 0.3
	//         Weight : 1.8
	//         Color : Brown
	//         Shape : Winged
	//         Habitat : Forest
	//         Kind : Tiny Bird
	//         // Pokedex : It has an extremely sharp sense of direction. It can unerringly return home to its nest, however far it may be removed from its familiar surroundings.
	//         Generation : 1
	//         BattlerPlayerX : -9
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 4
	//         BattlerEnemyY : 23
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 1
	//         Evolutions : PIDGEOTTO,"Level",18
	//         }
	//         [monsterName : {
	//         Name : Pidgeotto
	//         InternalName : PIDGEOTTO
	//         Type1 : NORMAL
	//         Type2 : FLYING
	//         BaseStats : 63,60,55,71,50,50
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 122
	//         EffortPoints : 0,0,0,2,0,0
	//         Rareness : 120
	//         Happiness : 70
	//         Abilities : KEENEYE,TANGLEDFEET
	//         HiddenAbility : BIGPECKS
	//         Moves : 1,"TACKLE",1,"SANDATTACK",1,"GUST",5,"SANDATTACK",9,"GUST",13,"QUICKATTACK",17,"WHIRLWIND",22,TWISTER,27,FEATHERDANCE,32,"AGILITY",37,"WINGATTACK",42,"ROOST",47,"TAILWIND",52,MIRRORMOVE,57,"AIRSLASH",62,HURRICANE
	//         TutorMoves : "AERIALACE","ATTRACT","CONFIDE","DEFOG","DOUBLETEAM","FACADE","FLY","FRUSTRATION","HEATWAVE","HIDDENPOWER","PROTECT","RAINDANCE","REST","RETURN","ROOST","ROUND",SKYATTACK,"SLEEPTALK","SNORE","STEELWING","SUBSTITUTE","SUNNYDAY","SWAGGER","TAILWIND","THIEF","TOXIC",UPROAR,"UTURN","WORKUP"
	//         Compatibility : Flying
	//         StepsToHatch : 3840
	//         Height : 1.1
	//         Weight : 30.0
	//         Color : Brown
	//         Shape : Winged
	//         Habitat : Forest
	//         Kind : Bird
	//         // Pokedex : This Pokémon flies around, patrolling its large territory. If its living space is violated, it shows no mercy in thoroughly punishing the foe with its sharp claws.
	//         Generation : 1
	//         BattlerPlayerX : -7
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 8
	//         BattlerEnemyY : 16
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : PIDGEOT,"Level",36
	//         }
	//         [monsterName : {
	//         Name : Pidgeot
	//         InternalName : PIDGEOT
	//         Type1 : NORMAL
	//         Type2 : FLYING
	//         BaseStats : 83,80,75,101,70,70
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 216
	//         EffortPoints : 0,0,0,3,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : KEENEYE,TANGLEDFEET
	//         HiddenAbility : BIGPECKS
	//         Moves : 1,HURRICANE,1,"TACKLE",1,"SANDATTACK",1,"GUST",1,"QUICKATTACK",5,"SANDATTACK",9,"GUST",13,"QUICKATTACK",17,"WHIRLWIND",22,TWISTER,27,FEATHERDANCE,32,"AGILITY",38,"WINGATTACK",44,"ROOST",50,"TAILWIND",56,MIRRORMOVE,62,"AIRSLASH",68,HURRICANE
	//         TutorMoves : "AERIALACE","ATTRACT","CONFIDE","DEFOG","DOUBLETEAM","FACADE","FLY","FRUSTRATION","GIGAIMPACT","HEATWAVE","HIDDENPOWER","HYPERBEAM","LASERFOCUS","PROTECT","RAINDANCE","REST","RETURN","ROOST","ROUND",SKYATTACK,"SLEEPTALK","SNORE","STEELWING","SUBSTITUTE","SUNNYDAY","SWAGGER","TAILWIND","THIEF","TOXIC",UPROAR,"UTURN","WORKUP"
	//         Compatibility : Flying
	//         StepsToHatch : 3840
	//         Height : 1.5
	//         Weight : 39.5
	//         Color : Brown
	//         Shape : Winged
	//         Habitat : Forest
	//         Kind : Bird
	//         // Pokedex : Pidgeot has gorgeous, glossy feathers. Many trainers are so captivated by the beautiful feathers on its head that they choose Pidgeot as their Pokémon.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 7
	//         BattlerEnemyY : -4
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Rattata
	//         InternalName : RATTATA
	//         Type1 : NORMAL
	//         BaseStats : 30,56,35,72,25,35
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 51
	//         EffortPoints : 0,0,0,1,0,0
	//         Rareness : 255
	//         Happiness : 70
	//         Abilities : RUNAWAY,GUTS
	//         HiddenAbility : HUSTLE
	//         Moves : 1,"TACKLE",1,"TAILWHIP",4,"QUICKATTACK",7,"FOCUSENERGY",10,"BITE",13,"PURSUIT",16,HYPERFANG,19,"ASSURANCE",22,"CRUNCH",25,SUCKERPUNCH,28,SUPERFANG,31,"DOUBLEEDGE",34,"ENDEAVOR"
	//         TutorMoves : "ATTRACT","BLIZZARD",CHARGEBEAM,"CONFIDE","COVET","CUT","DOUBLETEAM","ENDEAVOR","FACADE","FRUSTRATION","GRASSKNOT","HIDDENPOWER","ICEBEAM","ICYWIND","IRONTAIL","LASTRESORT","PROTECT","RAINDANCE","REST","RETURN","ROCKSMASH","ROUND","SHADOWBALL",SHOCKWAVE,"SLEEPTALK","SNORE","SUBSTITUTE","SUNNYDAY",SUPERFANG,"SWAGGER",TAUNT,"THIEF",THUNDER,THUNDERBOLT,THUNDERWAVE,"TOXIC",UPROAR,"UTURN",WILDCHARGE,"WORKUP","ZENHEADBUTT"
	//         EggMoves : "BITE","COUNTER",FINALGAMBIT,FLAMEWHEEL,FURYSWIPES,"LASTRESORT",MEFIRST,REVENGE,REVERSAL,SCREECH,UPROAR
	//         Compatibility : Field
	//         StepsToHatch : 3840
	//         Height : 0.3
	//         Weight : 3.5
	//         Color : Purple
	//         Shape : "Quadruped"
	//         Habitat : "Grassland"
	//         Kind : Mouse
	//         // Pokedex : A Rattata is cautious in the extreme. Even while it is asleep, it constantly moves its ears and listens for danger. It will make its nest anywhere.
	//         Generation : 1
	//         WildItemUncommon : CHILANBERRY
	//         BattlerPlayerX : -5
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 22
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : RATICATE,"Level",20
	//         }
	//         [monsterName : {
	//         Name : Raticate
	//         InternalName : RATICATE
	//         Type1 : NORMAL
	//         BaseStats : 55,81,60,97,50,70
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 145
	//         EffortPoints : 0,0,0,2,0,0
	//         Rareness : 127
	//         Happiness : 70
	//         Abilities : RUNAWAY,GUTS
	//         HiddenAbility : HUSTLE
	//         Moves : 0,"SCARYFACE",1,"SWORDSDANCE",1,"TACKLE",1,"TAILWHIP",1,"QUICKATTACK",1,"FOCUSENERGY",4,"QUICKATTACK",7,"FOCUSENERGY",10,"BITE",13,"PURSUIT",16,HYPERFANG,19,"ASSURANCE",24,"CRUNCH",29,SUCKERPUNCH,34,SUPERFANG,39,"DOUBLEEDGE",44,"ENDEAVOR"
	//         TutorMoves : "ATTRACT","BLIZZARD",CHARGEBEAM,"CONFIDE","COVET","CUT","DOUBLETEAM","ENDEAVOR","FACADE","FRUSTRATION","GIGAIMPACT","GRASSKNOT","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","IRONTAIL","LASTRESORT","PROTECT","RAINDANCE","REST","RETURN","ROAR","ROCKSMASH","ROUND","SHADOWBALL",SHOCKWAVE,"SLEEPTALK","SNORE","STOMPINGTANTRUM","STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERFANG,"SWAGGER","SWORDSDANCE",TAUNT,"THIEF","THROATCHOP",THUNDER,THUNDERBOLT,THUNDERWAVE,"TOXIC",UPROAR,"UTURN",WILDCHARGE,"WORKUP","ZENHEADBUTT"
	//         Compatibility : Field
	//         StepsToHatch : 3840
	//         Height : 0.7
	//         Weight : 18.5
	//         Color : Brown
	//         Shape : "Quadruped"
	//         Habitat : "Grassland"
	//         Kind : Mouse
	//         // Pokedex : A Raticate's sturdy fangs grow steadily. To keep them ground down, it gnaws on rocks and logs. It may even chew on the walls of houses.
	//         Generation : 1
	//         WildItemUncommon : CHILANBERRY
	//         BattlerPlayerX : -7
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 14
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Spearow
	//         InternalName : SPEAROW
	//         Type1 : NORMAL
	//         Type2 : FLYING
	//         BaseStats : 40,60,30,70,31,31
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 52
	//         EffortPoints : 0,0,0,1,0,0
	//         Rareness : 255
	//         Happiness : 70
	//         Abilities : KEENEYE
	//         HiddenAbility : SNIPER
	//         Moves : 1,PECK,1,"GROWL",4,LEER,8,"PURSUIT",11,"FURYATTACK",15,"AERIALACE",18,MIRRORMOVE,22,"ASSURANCE",25,"AGILITY",29,"FOCUSENERGY",32,"ROOST",36,DRILLPECK
	//         TutorMoves : "AERIALACE","ATTRACT","CONFIDE","DEFOG","DOUBLETEAM","DRILLRUN","ECHOEDVOICE","FACADE","FALSESWIPE","FLY","FRUSTRATION","HEATWAVE","HIDDENPOWER","PROTECT","RAINDANCE","REST","RETURN","ROOST","ROUND",SKYATTACK,"SLEEPTALK","SNORE","STEELWING","SUBSTITUTE","SUNNYDAY","SWAGGER","TAILWIND","THIEF","TOXIC",UPROAR,"UTURN","WORKUP"
	//         EggMoves : ASTONISH,FEATHERDANCE,FEINTATTACK,"QUICKATTACK",RAZORWIND,"SCARYFACE",SKYATTACK,"STEELWING",TRIATTACK,UPROAR,"WHIRLWIND"
	//         Compatibility : Flying
	//         StepsToHatch : 3840
	//         Height : 0.3
	//         Weight : 2.0
	//         Color : Brown
	//         Shape : Winged
	//         Habitat : RoughTerrain
	//         Kind : Tiny Bird
	//         // Pokedex : Its loud cry can be heard over half a mile away. If its high, keening cry is heard echoing all around, it is a sign that they are warning each other of danger.
	//         Generation : 1
	//         WildItemUncommon : SHARPBEAK
	//         BattlerPlayerX : -5
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : 22
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 1
	//         Evolutions : FEAROW,"Level",20
	//         }
	//         [monsterName : {
	//         Name : Fearow
	//         InternalName : FEAROW
	//         Type1 : NORMAL
	//         Type2 : FLYING
	//         BaseStats : 65,90,65,100,61,61
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 155
	//         EffortPoints : 0,0,0,2,0,0
	//         Rareness : 90
	//         Happiness : 70
	//         Abilities : KEENEYE
	//         HiddenAbility : SNIPER
	//         Moves : 1,"DRILLRUN",1,PLUCK,1,PECK,1,"GROWL",1,LEER,1,"PURSUIT",4,LEER,8,"PURSUIT",11,"FURYATTACK",15,"AERIALACE",18,MIRRORMOVE,23,"ASSURANCE",27,"AGILITY",32,"FOCUSENERGY",36,"ROOST",41,DRILLPECK,45,"DRILLRUN"
	//         TutorMoves : "AERIALACE","ATTRACT","CONFIDE","DEFOG","DOUBLETEAM","DRILLRUN","ECHOEDVOICE","FACADE","FALSESWIPE","FLY","FRUSTRATION","GIGAIMPACT","HEATWAVE","HIDDENPOWER","HYPERBEAM","LASERFOCUS","PROTECT","RAINDANCE","REST","RETURN","ROOST","ROUND",SKYATTACK,"SLEEPTALK","SNORE","STEELWING","SUBSTITUTE","SUNNYDAY","SWAGGER","TAILWIND","THIEF","THROATCHOP","TOXIC",UPROAR,"UTURN","WORKUP"
	//         Compatibility : Flying
	//         StepsToHatch : 3840
	//         Height : 1.2
	//         Weight : 38.0
	//         Color : Brown
	//         Shape : Winged
	//         Habitat : RoughTerrain
	//         Kind : Beak
	//         // Pokedex : Its long neck and elongated beak are ideal for catching prey in soil or water. It deftly moves this extended and skinny beak to pluck prey.
	//         Generation : 1
	//         WildItemUncommon : SHARPBEAK
	//         BattlerPlayerX : 10
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : -6
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [monsterName : {
	//         Name : Ekans
	//         InternalName : EKANS
	//         Type1 : POISON
	//         BaseStats : 35,60,44,55,40,54
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 58
	//         EffortPoints : 0,1,0,0,0,0
	//         Rareness : 255
	//         Happiness : 70
	//         Abilities : INTIMIDATE,SHEDSKIN
	//         HiddenAbility : UNNERVE
	//         Moves : 1,WRAP,1,LEER,4,"POISONSTING",9,"BITE",12,GLARE,17,SCREECH,20,ACID,25,STOCKPILE,25,SWALLOW,25,SPITUP,28,ACIDSPRAY,33,MUDBOMB,36,GASTROACID,38,BELCH,41,"HAZE",44,COIL,49,GUNKSHOT
	//         TutorMoves : "AQUATAIL","ATTRACT","BIND","BRUTALSWING","BULLDOZE","CONFIDE","DARKPULSE","DOUBLETEAM","EARTHQUAKE","FACADE","FRUSTRATION",GASTROACID,"GIGADRAIN","HIDDENPOWER","INFESTATION","IRONTAIL","PAYBACK","POISONJAB","PROTECT","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKTOMB","ROUND","SEEDBOMB","SLEEPTALK",""SLUDGE"BOMB","SLUDGE"WAVE,SNATCH,"SNORE",SPITE,"STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER","THIEF",TORMENT,"TOXIC","VENOSHOCK"
	//         EggMoves : "BEATUP",DISABLE,"IRONTAIL",POISONFANG,POISONTAIL,"PURSUIT","SCARYFACE",SLAM,SNATCH,SPITE,SUCKERPUNCH,SWITCHEROO
	//         Compatibility : Field,Dragon
	//         StepsToHatch : 5120
	//         Height : 2.0
	//         Weight : 6.9
	//         Color : Purple
	//         Shape : Serpentine
	//         Habitat : "Grassland"
	//         Kind : Snake
	//         // Pokedex : An Ekans curls itself up in a spiral while it rests. This position allows it to quickly respond to an enemy from any direction with a threat from its upraised head.
	//         Generation : 1
	//         BattlerPlayerX : -3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : 24
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : ARBOK,"Level",22
	//         }
	//         [monsterName : {
	//         Name : Arbok
	//         InternalName : ARBOK
	//         Type1 : POISON
	//         BaseStats : 60,95,69,80,65,79
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 157
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 90
	//         Happiness : 70
	//         Abilities : INTIMIDATE,SHEDSKIN
	//         HiddenAbility : UNNERVE
	//         Moves : 0,"CRUNCH",1,"CRUNCH",1,ICEFANG,1,THUNDERFANG,1,"FIREFANG",1,WRAP,1,LEER,1,"POISONSTING",1,"BITE",4,"POISONSTING",9,"BITE",12,GLARE,17,SCREECH,20,ACID,27,STOCKPILE,27,SWALLOW,27,SPITUP,32,ACIDSPRAY,39,MUDBOMB,44,GASTROACID,48,BELCH,51,"HAZE",56,COIL,63,GUNKSHOT
	//         TutorMoves : "AQUATAIL","ATTRACT","BIND","BRUTALSWING","BULLDOZE","CONFIDE","DARKPULSE","DOUBLETEAM","DRAGONTAIL","EARTHQUAKE","FACADE","FRUSTRATION",GASTROACID,"GIGADRAIN","GIGAIMPACT","HIDDENPOWER","HYPERBEAM","INFESTATION","IRONTAIL","PAYBACK","POISONJAB","PROTECT","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKTOMB","ROUND","SEEDBOMB","SLEEPTALK",""SLUDGE"BOMB","SLUDGE"WAVE,SNATCH,"SNORE",SPITE,"STOMPINGTANTRUM","STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER","THIEF","THROATCHOP",TORMENT,"TOXIC","VENOSHOCK"
	//         Compatibility : Field,Dragon
	//         StepsToHatch : 5120
	//         Height : 3.5
	//         Weight : 65.0
	//         Color : Purple
	//         Shape : Serpentine
	//         Habitat : "Grassland"
	//         Kind : Cobra
	//         // Pokedex : This Pokémon has a terrifically strong constricting power. It can even flatten steel oil drums. Once it wraps its body around its foe, escaping is impossible.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : 11
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Pikachu
	//         InternalName : PIKACHU
	//         Type1 : ELECTRIC
	//         BaseStats : 35,55,40,90,50,50
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 112
	//         EffortPoints : 0,0,0,2,0,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : STATIC
	//         HiddenAbility : LIGHTNINGROD
	//         Moves : 1,"TAILWHIP",1,THUNDERSHOCK,5,"GROWL",7,PLAYNICE,10,"QUICKATTACK",13,ELECTROBALL,18,THUNDERWAVE,21,FEINT,23,"DOUBLETEAM",26,SPARK,29,NUZZLE,34,DISCHARGE,37,SLAM,42,THUNDERBOLT,45,"AGILITY",50,WILDCHARGE,53,"LIGHTSCREEN",58,THUNDER
	//         TutorMoves : "ATTRACT","BRICKBREAK",CHARGEBEAM,"CONFIDE","COVET","DOUBLETEAM","ECHOEDVOICE","ELECTROWEB","FACADE","FLING","FOCUSPUNCH","FRUSTRATION","GRASSKNOT","HELPINGHAND","HIDDENPOWER","IRONTAIL","KNOCKOFF","LASERFOCUS","LIGHTSCREEN",MAGNETRISE,"PROTECT","RAINDANCE","REST","RETURN","ROCKSMASH","ROUND",SHOCKWAVE,"SIGNALBEAM","SLEEPTALK","SNORE","STRENGTH","SUBSTITUTE","SWAGGER",THUNDER,THUNDERBOLT,"THUNDERPUNCH",THUNDERWAVE,"TOXIC",VOLTSWITCH,VOLT"TACKLE",WILDCHARGE
	//         Compatibility : Field,Fairy
	//         StepsToHatch : 2560
	//         Height : 0.4
	//         Weight : 6.0
	//         Color : Yellow
	//         Shape : "Quadruped"
	//         Habitat : Forest
	//         Kind : Mouse
	//         // Pokedex : It stores electricity in the electric sacs on its cheeks. When it releases pent-up energy in a burst, the electric power is equal to a lightning bolt.
	//         Generation : 1
	//         WildItemUncommon : LIGHTBALL
	//         BattlerPlayerX : -5
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 4
	//         BattlerEnemyY : 14
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 1
	//         Evolutions : RAICHU,Item,THUNDERSTONE
	//         }
	//         [monsterName : {
	//         Name : Raichu
	//         InternalName : RAICHU
	//         Type1 : ELECTRIC
	//         BaseStats : 60,90,55,110,90,80
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 218
	//         EffortPoints : 0,0,0,3,0,0
	//         Rareness : 75
	//         Happiness : 70
	//         Abilities : STATIC
	//         HiddenAbility : LIGHTNINGROD
	//         Moves : 1,THUNDERSHOCK,1,"TAILWHIP",1,"QUICKATTACK",1,THUNDERBOLT
	//         TutorMoves : "ATTRACT","BRICKBREAK",CHARGEBEAM,"CONFIDE","COVET","DOUBLETEAM","ECHOEDVOICE","ELECTROWEB","FACADE","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","GRASSKNOT","HELPINGHAND","HIDDENPOWER","HYPERBEAM","IRONTAIL","KNOCKOFF","LASERFOCUS","LIGHTSCREEN",MAGNETRISE,"PROTECT","RAINDANCE","REST","RETURN","ROCKSMASH","ROUND",SHOCKWAVE,"SIGNALBEAM","SLEEPTALK","SNORE","STRENGTH","SUBSTITUTE","SWAGGER","THIEF",THUNDER,THUNDERBOLT,"THUNDERPUNCH",THUNDERWAVE,"TOXIC",VOLTSWITCH,WILDCHARGE
	//         Compatibility : Field,Fairy
	//         StepsToHatch : 2560
	//         Height : 0.8
	//         Weight : 30.0
	//         Color : Yellow
	//         Shape : BipedalTail
	//         Habitat : Forest
	//         Kind : Mouse
	//         // Pokedex : If it stores too much electricity, its behavior turns aggressive. To avoid this, it occasionally discharges excess energy and calms itself down.
	//         Generation : 1
	//         BattlerPlayerX : -5
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 11
	//         BattlerEnemyY : 10
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Sandshrew
	//         InternalName : SANDSHREW
	//         Type1 : GROUND
	//         BaseStats : 50,75,85,40,20,30
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 60
	//         EffortPoints : 0,0,1,0,0,0
	//         Rareness : 255
	//         Happiness : 70
	//         Abilities : SANDVEIL
	//         HiddenAbility : SANDRUSH
	//         Moves : 1,"SCRATCH",1,DEFENSECURL,3,"SANDATTACK",5,"POISONSTING",7,ROLLOUT,9,"RAPIDSPIN",11,FURYCUTTER,14,MAGNITUDE,17,"SWIFT",20,FURYSWIPES,23,SANDTOMB,26,"SLASH",30,DIG,34,"GYROBALL",38,"SWORDSDANCE",42,SANDSTORM,46,"EARTHQUAKE"
	//         TutorMoves : "AERIALACE","ATTRACT","BRICKBREAK","BULLDOZE","CONFIDE","COVET","CUT","DOUBLETEAM",EARTHPOWER,"EARTHQUAKE","FACADE","FLING","FOCUSPUNCH","FRUSTRATION","GYROBALL","HIDDENPOWER","IRONTAIL","KNOCKOFF","POISONJAB","PROTECT","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND","SAFEGUARD",SANDSTORM,"SHADOWCLAW","SLEEPTALK","SNORE",STEALTHROCK,"STOMPINGTANTRUM","STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERFANG,"SWAGGER","SWORDSDANCE","THIEF","TOXIC","XSCISSOR"
	//         EggMoves : CHIPAWAY,"COUNTER",CRUSHCLAW,"ENDURE","FLAIL",HONECLAWS,"METALCLAW",MUDSHOT,NIGHTSLASH,"RAPIDSPIN",ROCKCLIMB,ROTOTILLER
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 0.6
	//         Weight : 12.0
	//         Color : Yellow
	//         Shape : BipedalTail
	//         Habitat : RoughTerrain
	//         Kind : Mouse
	//         // Pokedex : When it curls up in a ball, it can make any attack bounce off harmlessly. Its hide has turned tough and solid as a result of living in the desert.
	//         Generation : 1
	//         WildItemUncommon : GRIPCLAW
	//         BattlerPlayerX : -5
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : 21
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : SANDSLASH,"Level",22
	//         }
	//         [monsterName : {
	//         Name : Sandslash
	//         InternalName : SANDSLASH
	//         Type1 : GROUND
	//         BaseStats : 75,100,110,65,45,55
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 158
	//         EffortPoints : 0,0,2,0,0,0
	//         Rareness : 90
	//         Happiness : 70
	//         Abilities : SANDVEIL
	//         HiddenAbility : SANDRUSH
	//         Moves : 0,CRUSHCLAW,1,CRUSHCLAW,1,"SCRATCH",1,DEFENSECURL,1,"SANDATTACK",1,"POISONSTING",3,"SANDATTACK",5,"POISONSTING",7,ROLLOUT,9,"RAPIDSPIN",11,FURYCUTTER,14,MAGNITUDE,17,"SWIFT",20,FURYSWIPES,24,SANDTOMB,28,"SLASH",33,DIG,38,"GYROBALL",43,"SWORDSDANCE",48,SANDSTORM,53,"EARTHQUAKE"
	//         TutorMoves : "AERIALACE","ATTRACT","BRICKBREAK","BULLDOZE","CONFIDE","COVET","CUT","DOUBLETEAM",EARTHPOWER,"EARTHQUAKE","FACADE","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","GYROBALL","HIDDENPOWER","HYPERBEAM","IRONTAIL","KNOCKOFF","POISONJAB","PROTECT","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND","SAFEGUARD",SANDSTORM,"SHADOWCLAW","SLEEPTALK","SNORE",STEALTHROCK,"STOMPINGTANTRUM",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERFANG,"SWAGGER","SWORDSDANCE","THIEF","TOXIC","XSCISSOR"
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 1.0
	//         Weight : 29.5
	//         Color : Yellow
	//         Shape : BipedalTail
	//         Habitat : RoughTerrain
	//         Kind : Mouse
	//         // Pokedex : It curls up in a ball to protect itself from enemy attacks. It also curls up to prevent heatstroke during the daytime when temperatures rise sharply.
	//         Generation : 1
	//         WildItemUncommon : GRIPCLAW
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -2
	//         BattlerEnemyY : 18
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Nidoran♀
	//         InternalName : NIDORANfE
	//         Type1 : POISON
	//         BaseStats : 55,47,52,41,40,40
	//         GenderRate : AlwaysFemale
	//         GrowthRate : Parabolic
	//         BaseEXP : 55
	//         EffortPoints : 1,0,0,0,0,0
	//         Rareness : 235
	//         Happiness : 70
	//         Abilities : POISONPOINT,RIVALRY
	//         HiddenAbility : HUSTLE
	//         Moves : 1,"GROWL",1,"SCRATCH",7,"TAILWHIP",9,DOUBLEKICK,13,"POISONSTING",19,FURYSWIPES,21,"BITE",25,"HELPINGHAND",31,"TOXICSPIKES",33,FLATTER,37,"CRUNCH",43,"CAPTIVATE",45,POISONFANG
	//         TutorMoves : "AERIALACE","ATTRACT","BLIZZARD","CONFIDE","CUT","DOUBLETEAM","ECHOEDVOICE","FACADE","FRUSTRATION","HELPINGHAND","HIDDENPOWER","ICEBEAM","IRONTAIL","POISONJAB","PROTECT","RAINDANCE","REST","RETURN","ROCKSMASH","ROUND","SHADOWCLAW",SHOCKWAVE,"SLEEPTALK",""SLUDGE"BOMB","SNORE","STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERFANG,"SWAGGER","THIEF",THUNDER,THUNDERBOLT,"TOXIC","VENOSHOCK","WATERPULSE"
	//         EggMoves : "BEATUP","CHARM",CHIPAWAY,"COUNTER",DISABLE,"ENDURE","FOCUSENERGY","IRONTAIL",POISONTAIL,"PURSUIT","SKULLBASH","SUPERSONIC","TAKEDOWN",VENOMDRENCH
	//         Compatibility : Monster,Field
	//         StepsToHatch : 5120
	//         Height : 0.4
	//         Weight : 7.0
	//         Color : Blue
	//         Shape : "Quadruped"
	//         Habitat : "Grassland"
	//         Kind : Poison Pin
	//         // Pokedex : Its highly toxic barbs are thought to have developed as protection for this small-bodied Pokémon. When enraged, it releases a horrible toxin from its horn.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -2
	//         BattlerEnemyY : 23
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 1
	//         Evolutions : NIDORINA,"Level",16
	//         }
	//         [monsterName : {
	//         Name : Nidorina
	//         InternalName : NIDORINA
	//         Type1 : POISON
	//         BaseStats : 70,62,67,56,55,55
	//         GenderRate : AlwaysFemale
	//         GrowthRate : Parabolic
	//         BaseEXP : 128
	//         EffortPoints : 2,0,0,0,0,0
	//         Rareness : 120
	//         Happiness : 70
	//         Abilities : POISONPOINT,RIVALRY
	//         HiddenAbility : HUSTLE
	//         Moves : 1,"GROWL",1,"SCRATCH",7,"TAILWHIP",9,DOUBLEKICK,13,"POISONSTING",20,FURYSWIPES,23,"BITE",28,"HELPINGHAND",35,"TOXICSPIKES",38,FLATTER,43,"CRUNCH",50,"CAPTIVATE",58,POISONFANG
	//         TutorMoves : "AERIALACE","ATTRACT","BLIZZARD","CONFIDE","CUT","DOUBLETEAM","ECHOEDVOICE","FACADE","FRUSTRATION","HELPINGHAND","HIDDENPOWER","ICEBEAM","IRONTAIL","POISONJAB","PROTECT","RAINDANCE","REST","RETURN","ROCKSMASH","ROUND","SHADOWCLAW",SHOCKWAVE,"SLEEPTALK",""SLUDGE"BOMB","SNORE","STOMPINGTANTRUM","STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERFANG,"SWAGGER","THIEF",THUNDER,THUNDERBOLT,"TOXIC","VENOSHOCK","WATERPULSE"
	//         Compatibility : Monster,Field
	//         StepsToHatch : 5120
	//         Height : 0.8
	//         Weight : 20.0
	//         Color : Blue
	//         Shape : "Quadruped"
	//         Habitat : "Grassland"
	//         Kind : Poison Pin
	//         // Pokedex : When it is with its friends or family, its barbs are tucked away to prevent injury. It appears to become nervous if separated from the others.
	//         Generation : 1
	//         BattlerPlayerX : 3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -2
	//         BattlerEnemyY : 17
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : NIDOQUEEN,Item,MOONSTONE
	//         }
	//         [monsterName : {
	//         Name : Nidoqueen
	//         InternalName : NIDOQUEEN
	//         Type1 : POISON
	//         Type2 : GROUND
	//         BaseStats : 90,92,87,76,75,85
	//         GenderRate : AlwaysFemale
	//         GrowthRate : Parabolic
	//         BaseEXP : 227
	//         EffortPoints : 3,0,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : POISONPOINT,RIVALRY
	//         HiddenAbility : SHEERFORCE
	//         Moves : 1,SUPERPOWER,1,"SCRATCH",1,"TAILWHIP",1,DOUBLEKICK,1,"POISONSTING",23,CHIPAWAY,35,BODYSLAM,43,EARTHPOWER,58,SUPERPOWER
	//         TutorMoves : "AERIALACE","AQUATAIL","ATTRACT","BLIZZARD","BRICKBREAK","BULLDOZE","CONFIDE","CUT","DOUBLETEAM","DRAGONPULSE","DRAGONTAIL","DRILLRUN",EARTHPOWER,"EARTHQUAKE","ECHOEDVOICE","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","HELPINGHAND","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICEPUNCH","ICYWIND","IRONTAIL","OUTRAGE","POISONJAB","POWERUPPUNCH","PROTECT",QUASH,"RAINDANCE","REST","RETURN","ROAR","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SHADOWBALL","SHADOWCLAW",SHOCKWAVE,"SLEEPTALK",""SLUDGE"BOMB","SLUDGE"WAVE,"SMACKDOWN","SNORE",STEALTHROCK,"STOMPINGTANTRUM",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERFANG,SUPERPOWER,"SURF","SWAGGER",TAUNT,"THIEF","THROATCHOP",THUNDER,THUNDERBOLT,"THUNDERPUNCH",TORMENT,"TOXIC",UPROAR,"VENOSHOCK","WATERPULSE"
	//         Compatibility : Monster,Field
	//         StepsToHatch : 5120
	//         Height : 1.3
	//         Weight : 60.0
	//         Color : Blue
	//         Shape : BipedalTail
	//         Habitat : "Grassland"
	//         Kind : Drill
	//         // Pokedex : It is adept at sending foes flying with harsh "tackle"s using its tough, scaly body. This Pokémon is at its strongest when it is defending its young.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 8
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Nidoran♂
	//         InternalName : NIDORANmA
	//         Type1 : POISON
	//         BaseStats : 46,57,40,50,40,40
	//         GenderRate : AlwaysMale
	//         GrowthRate : Parabolic
	//         BaseEXP : 55
	//         EffortPoints : 0,1,0,0,0,0
	//         Rareness : 235
	//         Happiness : 70
	//         Abilities : POISONPOINT,RIVALRY
	//         HiddenAbility : HUSTLE
	//         Moves : 1,LEER,1,PECK,7,"FOCUSENERGY",9,DOUBLEKICK,13,"POISONSTING",19,"FURYATTACK",21,HORNATTACK,25,"HELPINGHAND",31,"TOXICSPIKES",33,FLATTER,37,"POISONJAB",43,"CAPTIVATE",45,HORNDRILL
	//         TutorMoves : "ATTRACT","BLIZZARD","CONFIDE","CUT","DOUBLETEAM","DRILLRUN","ECHOEDVOICE","FACADE","FRUSTRATION","HELPINGHAND","HIDDENPOWER","ICEBEAM","IRONTAIL","POISONJAB","PROTECT","RAINDANCE","REST","RETURN","ROCKSMASH","ROUND","SHADOWCLAW",SHOCKWAVE,"SLEEPTALK",""SLUDGE"BOMB",SMARTSTRIKE,"SNORE","STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERFANG,"SWAGGER","THIEF",THUNDER,THUNDERBOLT,"TOXIC","VENOSHOCK","WATERPULSE"
	//         EggMoves : "AMNESIA","BEATUP",CHIPAWAY,"CONFUSION","COUNTER",DISABLE,"ENDURE",HEADSMASH,"IRONTAIL",POISONTAIL,SUCKERPUNCH,"SUPERSONIC","TAKEDOWN",VENOMDRENCH
	//         Compatibility : Monster,Field
	//         StepsToHatch : 5120
	//         Height : 0.5
	//         Weight : 9.0
	//         Color : Purple
	//         Shape : "Quadruped"
	//         Habitat : "Grassland"
	//         Kind : Poison Pin
	//         // Pokedex : The male Nidoran has developed muscles that freely move its ears in any direction. Even the slightest sound does not escape this Pokémon's notice.
	//         Generation : 1
	//         BattlerPlayerX : -1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -2
	//         BattlerEnemyY : 21
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 1
	//         Evolutions : NIDORINO,"Level",16
	//         }
	//         [monsterName : {
	//         Name : Nidorino
	//         InternalName : NIDORINO
	//         Type1 : POISON
	//         BaseStats : 61,72,57,65,55,55
	//         GenderRate : AlwaysMale
	//         GrowthRate : Parabolic
	//         BaseEXP : 128
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 120
	//         Happiness : 70
	//         Abilities : POISONPOINT,RIVALRY
	//         HiddenAbility : HUSTLE
	//         Moves : 1,LEER,1,PECK,7,"FOCUSENERGY",9,DOUBLEKICK,13,"POISONSTING",20,"FURYATTACK",23,HORNATTACK,28,"HELPINGHAND",35,"TOXICSPIKES",38,FLATTER,43,"POISONJAB",50,"CAPTIVATE",58,HORNDRILL
	//         TutorMoves : "ATTRACT","BLIZZARD","CONFIDE","CUT","DOUBLETEAM","DRILLRUN","ECHOEDVOICE","FACADE","FRUSTRATION","HELPINGHAND","HIDDENPOWER","ICEBEAM","IRONTAIL","POISONJAB","PROTECT","RAINDANCE","REST","RETURN","ROCKSMASH","ROUND","SHADOWCLAW",SHOCKWAVE,"SLEEPTALK",""SLUDGE"BOMB",SMARTSTRIKE,"SNORE","STOMPINGTANTRUM","STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERFANG,"SWAGGER","THIEF",THUNDER,THUNDERBOLT,"TOXIC","VENOSHOCK","WATERPULSE"
	//         Compatibility : Monster,Field
	//         StepsToHatch : 5120
	//         Height : 0.9
	//         Weight : 19.5
	//         Color : Purple
	//         Shape : "Quadruped"
	//         Habitat : "Grassland"
	//         Kind : Poison Pin
	//         // Pokedex : Its horn is harder than a diamond. If it senses a hostile presence, all the barbs on its back bristle up at once, and it challenges the foe with all its might.
	//         Generation : 1
	//         BattlerPlayerX : 1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -2
	//         BattlerEnemyY : 21
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : NIDOKING,Item,MOONSTONE
	//         }
	//         [monsterName : {
	//         Name : Nidoking
	//         InternalName : NIDOKING
	//         Type1 : POISON
	//         Type2 : GROUND
	//         BaseStats : 81,102,77,85,85,75
	//         GenderRate : AlwaysMale
	//         GrowthRate : Parabolic
	//         BaseEXP : 227
	//         EffortPoints : 0,3,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : POISONPOINT,RIVALRY
	//         HiddenAbility : SHEERFORCE
	//         Moves : 1,MEGAHORN,1,PECK,1,"FOCUSENERGY",1,DOUBLEKICK,1,"POISONSTING",23,CHIPAWAY,35,THRASH,43,EARTHPOWER,58,MEGAHORN
	//         TutorMoves : "AQUATAIL","ATTRACT","BLIZZARD","BRICKBREAK","BULLDOZE","CONFIDE","CUT","DOUBLETEAM","DRAGONPULSE","DRAGONTAIL","DRILLRUN",EARTHPOWER,"EARTHQUAKE","ECHOEDVOICE","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","HELPINGHAND","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICEPUNCH","ICYWIND","IRONTAIL","OUTRAGE","POISONJAB","POWERUPPUNCH","PROTECT",QUASH,"RAINDANCE","REST","RETURN","ROAR","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SHADOWBALL","SHADOWCLAW",SHOCKWAVE,"SLEEPTALK",""SLUDGE"BOMB","SLUDGE"WAVE,"SMACKDOWN",SMARTSTRIKE,"SNORE",STEALTHROCK,"STOMPINGTANTRUM",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERFANG,SUPERPOWER,"SURF","SWAGGER",TAUNT,"THIEF","THROATCHOP",THUNDER,THUNDERBOLT,"THUNDERPUNCH",TORMENT,"TOXIC",UPROAR,"VENOSHOCK","WATERPULSE"
	//         Compatibility : Monster,Field
	//         StepsToHatch : 5120
	//         Height : 1.4
	//         Weight : 62.0
	//         Color : Purple
	//         Shape : BipedalTail
	//         Habitat : "Grassland"
	//         Kind : Drill
	//         // Pokedex : A Nidoking's thick tail packs enormously destructive power capable of toppling a metal transmission tower. Once it goes on a rampage, there is no stopping it.
	//         Generation : 1
	//         BattlerPlayerX : 4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 4
	//         BattlerEnemyY : 10
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Clefairy
	//         InternalName : CLEFAIRY
	//         Type1 : FAIRY
	//         BaseStats : 70,45,48,35,60,65
	//         GenderRate : Female75Percent
	//         GrowthRate : Fast
	//         BaseEXP : 113
	//         EffortPoints : 2,0,0,0,0,0
	//         Rareness : 150
	//         Happiness : 140
	//         Abilities : CUTECHARM,MAGICGUARD
	//         HiddenAbility : FRIENDGUARD
	//         Moves : 1,SPOTLIGHT,1,DISARMINGVOICE,1,POUND,1,"GROWL",1,ENCORE,7,SING,10,DOUBLESLAP,13,DEFENSECURL,16,FOLLOWME,19,BESTOW,22,WAKEUPSLAP,25,MINIMIZE,28,"STOREDPOWER",31,METRONOME,34,COSMICPOWER,37,LUCKYCHANT,40,BODYSLAM,43,MOONLIGHT,46,MOONBLAST,49,GRAVITY,50,METEORMASH,55,HEALINGWISH,58,AFTERYOU
	//         TutorMoves : AFTERYOU,"ATTRACT","BLIZZARD",BOUNCE,"BRICKBREAK",CALMMIND,CHARGEBEAM,"CONFIDE","COVET",DAZZLINGGLEAM,"DOUBLETEAM",DRAINPUNCH,"DREAMEATER","ECHOEDVOICE","ENDEAVOR","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSPUNCH","FRUSTRATION","GRASSKNOT",GRAVITY,"HEALBELL","HELPINGHAND","HIDDENPOWER","HYPERVOICE","ICEBEAM","ICEPUNCH","ICYWIND","IRONTAIL","KNOCKOFF","LASTRESORT","LIGHTSCREEN",MAGICCOAT,"POWERUPPUNCH","PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE",RECYCLE,REFLECT,"REST","RETURN","ROCKSMASH",ROLEPLAY,"ROUND","SAFEGUARD","SHADOWBALL",SHOCKWAVE,"SIGNALBEAM","SLEEPTALK",SNATCH,"SNORE","SOLARBEAM",STEALTHROCK,"STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER",TELEKINESIS,THUNDER,THUNDERBOLT,"THUNDERPUNCH",THUNDERWAVE,"TOXIC",TRICK,"WATERPULSE",WONDERROOM,"WORKUP","ZENHEADBUTT"
	//         Compatibility : Fairy
	//         StepsToHatch : 2560
	//         Height : 0.6
	//         Weight : 7.5
	//         Color : Pink
	//         Shape : BipedalTail
	//         Habitat : Mountain
	//         Kind : Fairy
	//         // Pokedex : On every night of a full moon, they come out to play. When dawn arrives, the tired Clefairy go to sleep nestled up against each other in deep and quiet mountains.
	//         Generation : 1
	//         WildItemUncommon : MOONSTONE
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -2
	//         BattlerEnemyY : 23
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : CLEFABLE,Item,MOONSTONE
	//         }
	//         [monsterName : {
	//         Name : Clefable
	//         InternalName : CLEFABLE
	//         Type1 : FAIRY
	//         BaseStats : 95,70,73,60,95,90
	//         GenderRate : Female75Percent
	//         GrowthRate : Fast
	//         BaseEXP : 217
	//         EffortPoints : 3,0,0,0,0,0
	//         Rareness : 25
	//         Happiness : 140
	//         Abilities : CUTECHARM,MAGICGUARD
	//         HiddenAbility : UNAWARE
	//         Moves : 1,SPOTLIGHT,1,DISARMINGVOICE,1,SING,1,DOUBLESLAP,1,MINIMIZE,1,METRONOME
	//         TutorMoves : AFTERYOU,"ATTRACT","BLIZZARD",BOUNCE,"BRICKBREAK",CALMMIND,CHARGEBEAM,"CONFIDE","COVET",DAZZLINGGLEAM,"DOUBLETEAM",DRAINPUNCH,"DREAMEATER","ECHOEDVOICE","ENDEAVOR","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","GRASSKNOT",GRAVITY,"HEALBELL","HELPINGHAND","HIDDENPOWER","HYPERBEAM","HYPERVOICE","ICEBEAM","ICEPUNCH","ICYWIND","IRONTAIL","KNOCKOFF","LASERFOCUS","LASTRESORT","LIGHTSCREEN",MAGICCOAT,"POWERUPPUNCH","PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE",RECYCLE,REFLECT,"REST","RETURN","ROCKSMASH",ROLEPLAY,"ROUND","SAFEGUARD","SHADOWBALL",SHOCKWAVE,"SIGNALBEAM","SLEEPTALK",SNATCH,"SNORE","SOLARBEAM",STEALTHROCK,"STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER",TELEKINESIS,THUNDER,THUNDERBOLT,"THUNDERPUNCH",THUNDERWAVE,"TOXIC",TRICK,"WATERPULSE",WONDERROOM,"WORKUP","ZENHEADBUTT"
	//         Compatibility : Fairy
	//         StepsToHatch : 2560
	//         Height : 1.3
	//         Weight : 40.0
	//         Color : Pink
	//         Shape : BipedalTail
	//         Habitat : Mountain
	//         Kind : Fairy
	//         // Pokedex : A Clefable uses its wings to skip lightly as if it were flying. Its bouncy step lets it even walk on water. On quiet, moonlit nights, it strolls on lakes.
	//         Generation : 1
	//         WildItemUncommon : MOONSTONE
	//         BattlerPlayerX : 4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : 18
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [monsterName : {
	//         Name : Vulpix
	//         InternalName : VULPIX
	//         Type1 : FIRE
	//         BaseStats : 38,41,40,65,50,65
	//         GenderRate : Female75Percent
	//         GrowthRate : Medium
	//         BaseEXP : 60
	//         EffortPoints : 0,0,0,1,0,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : FLASHFIRE
	//         HiddenAbility : DROUGHT
	//         Moves : 1,"EMBER",4,"TAILWHIP",7,"ROAR",9,"BABYDOLLEYES",10,"QUICKATTACK",12,CONFUSERAY,15,"FIRESPIN",18,"PAYBACK",20,"WILLOWISP",23,FEINTATTACK,26,HEX,28,"FLAMEBURST",31,EXTRASENSORY,34,"SAFEGUARD",36,"FLAMETHROWER",39,IMPRISON,42,"FIREBLAST",44,GRUDGE,47,"CAPTIVATE",50,"INFERNO"
	//         TutorMoves : "ATTRACT","CONFIDE","COVET","DARKPULSE","DOUBLETEAM","ENERGYBALL","FACADE","FIREBLAST","FLAMECHARGE","FLAMETHROWER",FOULPLAY,"FRUSTRATION","HEATWAVE","HIDDENPOWER","IRONTAIL","OVERHEAT",PAINSPLIT,"PAYBACK","PROTECT","PSYCHUP","REST","RETURN","ROAR",ROLEPLAY,"ROUND","SAFEGUARD","SLEEPTALK","SNORE",SPITE,"SUBSTITUTE","SUNNYDAY","SWAGGER","TOXIC","WILLOWISP","ZENHEADBUTT"
	//         EggMoves : "CAPTIVATE",DISABLE,EXTRASENSORY,FEINTATTACK,"FLAIL","FLAREBLITZ","HEATWAVE",HEX,HOWL,HYPNOSIS,POWERSWAP,SECRETPOWER,SPITE,TAILSLAP
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 0.6
	//         Weight : 9.9
	//         Color : Brown
	//         Shape : "Quadruped"
	//         Habitat : "Grassland"
	//         Kind : Fox
	//         // Pokedex : It can freely control fire, making fiery orbs fly like will-o'-the-wisps. Just before evolution, its six tails grow hot as if on fire.
	//         Generation : 1
	//         WildItemUncommon : CHARCOAL
	//         BattlerPlayerX : -6
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 3
	//         BattlerEnemyY : 19
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : NINETALES,Item,FIRESTONE
	//         }
	//         [monsterName : {
	//         Name : Ninetales
	//         InternalName : NINETALES
	//         Type1 : FIRE
	//         BaseStats : 73,76,75,100,81,100
	//         GenderRate : Female75Percent
	//         GrowthRate : Medium
	//         BaseEXP : 177
	//         EffortPoints : 0,0,0,1,0,1
	//         Rareness : 75
	//         Happiness : 70
	//         Abilities : FLASHFIRE
	//         HiddenAbility : DROUGHT
	//         Moves : 1,IMPRISON,1,NASTYPLOT,1,"FLAMETHROWER",1,"QUICKATTACK",1,CONFUSERAY,1,"SAFEGUARD"
	//         TutorMoves : "ATTRACT",CALMMIND,"CONFIDE","COVET","DARKPULSE","DOUBLETEAM","DREAMEATER","ENERGYBALL","FACADE","FIREBLAST","FLAMECHARGE","FLAMETHROWER",FOULPLAY,"FRUSTRATION","GIGAIMPACT","HEATWAVE","HIDDENPOWER","HYPERBEAM","IRONTAIL","LASERFOCUS","OVERHEAT",PAINSPLIT,"PAYBACK","PROTECT","PSYCHUP",PSYSHOCK,"REST","RETURN","ROAR",ROLEPLAY,"ROUND","SAFEGUARD","SLEEPTALK","SNORE","SOLARBEAM",SPITE,"SUBSTITUTE","SUNNYDAY","SWAGGER","TOXIC","WILLOWISP","ZENHEADBUTT"
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 1.1
	//         Weight : 19.9
	//         Color : Yellow
	//         Shape : "Quadruped"
	//         Habitat : "Grassland"
	//         Kind : Fox
	//         // Pokedex : It has long been said that each of the nine tails embody an enchanted power. A long-lived Ninetales will have fur that shines like gold.
	//         Generation : 1
	//         WildItemUncommon : CHARCOAL
	//         BattlerPlayerX : -3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 6
	//         BattlerEnemyY : 13
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [monsterName : {
	//         Name : Jigglypuff
	//         InternalName : JIGGLYPUFF
	//         Type1 : NORMAL
	//         Type2 : FAIRY
	//         BaseStats : 115,45,20,20,45,25
	//         GenderRate : Female75Percent
	//         GrowthRate : Fast
	//         BaseEXP : 95
	//         EffortPoints : 2,0,0,0,0,0
	//         Rareness : 170
	//         Happiness : 70
	//         Abilities : CUTECHARM,COMPETITIVE
	//         HiddenAbility : FRIENDGUARD
	//         Moves : 1,SING,3,DEFENSECURL,5,POUND,9,PLAYNICE,11,DISARMINGVOICE,14,DISABLE,17,DOUBLESLAP,20,ROLLOUT,22,"ROUND",25,STOCKPILE,25,SWALLOW,25,SPITUP,27,WAKEUPSLAP,30,"REST",32,BODYSLAM,35,"GYROBALL",38,MIMIC,41,"HYPERVOICE",45,"DOUBLEEDGE"
	//         TutorMoves : ALLYSWITCH,"ATTRACT","BLIZZARD",BOUNCE,"BRICKBREAK",CHARGEBEAM,"CONFIDE","COVET",DAZZLINGGLEAM,"DOUBLETEAM",DRAINPUNCH,"DREAMEATER","ECHOEDVOICE","ENDEAVOR","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSPUNCH","FRUSTRATION","GRASSKNOT",GRAVITY,"GYROBALL","HEALBELL","HELPINGHAND","HIDDENPOWER","HYPERVOICE","ICEBEAM","ICEPUNCH","ICYWIND","KNOCKOFF","LASTRESORT","LIGHTSCREEN",MAGICCOAT,PAINSPLIT,"POWERUPPUNCH","PROTECT","PSYCHIC","PSYCHUP","RAINDANCE",RECYCLE,REFLECT,"REST","RETURN",ROLEPLAY,"ROUND","SAFEGUARD","SHADOWBALL",SHOCKWAVE,"SLEEPTALK",SNATCH,"SNORE","SOLARBEAM",STEALTHROCK,"STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER",TELEKINESIS,THUNDER,THUNDERBOLT,"THUNDERPUNCH",THUNDERWAVE,"TOXIC","WATERPULSE",WILDCHARGE,"WORKUP"
	//         Compatibility : Fairy
	//         StepsToHatch : 2560
	//         Height : 0.5
	//         Weight : 5.5
	//         Color : Pink
	//         Shape : Bipedal
	//         Habitat : "Grassland"
	//         Kind : Balloon
	//         // Pokedex : Nothing can avoid falling asleep hearing a Jigglypuff's song. The sound waves of its singing voice match the brain waves of someone in a deep sleep.
	//         Generation : 1
	//         WildItemUncommon : MOONSTONE
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 24
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : WIGGLYTUFF,Item,MOONSTONE
	//         }
	//         [monsterName : {
	//         Name : Wigglytuff
	//         InternalName : WIGGLYTUFF
	//         Type1 : NORMAL
	//         Type2 : FAIRY
	//         BaseStats : 140,70,45,45,85,50
	//         GenderRate : Female75Percent
	//         GrowthRate : Fast
	//         BaseEXP : 196
	//         EffortPoints : 3,0,0,0,0,0
	//         Rareness : 50
	//         Happiness : 70
	//         Abilities : CUTECHARM,COMPETITIVE
	//         HiddenAbility : FRISK
	//         Moves : 1,"DOUBLEEDGE",1,PLAYROUGH,1,SING,1,DEFENSECURL,1,DISABLE,1,DOUBLESLAP
	//         TutorMoves : ALLYSWITCH,"ATTRACT","BLIZZARD",BOUNCE,"BRICKBREAK",CHARGEBEAM,"CONFIDE","COVET",DAZZLINGGLEAM,"DOUBLETEAM",DRAINPUNCH,"DREAMEATER","ECHOEDVOICE","ENDEAVOR","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","GRASSKNOT",GRAVITY,"GYROBALL","HEALBELL","HELPINGHAND","HIDDENPOWER","HYPERBEAM","HYPERVOICE","ICEBEAM","ICEPUNCH","ICYWIND","KNOCKOFF","LASERFOCUS","LASTRESORT","LIGHTSCREEN",MAGICCOAT,MAGICROOM,PAINSPLIT,"POWERUPPUNCH","PROTECT","PSYCHIC","PSYCHUP","RAINDANCE",RECYCLE,REFLECT,"REST","RETURN",ROLEPLAY,"ROUND","SAFEGUARD","SHADOWBALL",SHOCKWAVE,"SLEEPTALK",SNATCH,"SNORE","SOLARBEAM",STEALTHROCK,"STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER",TELEKINESIS,THUNDER,THUNDERBOLT,"THUNDERPUNCH",THUNDERWAVE,"TOXIC","WATERPULSE",WILDCHARGE,"WORKUP"
	//         Compatibility : Fairy
	//         StepsToHatch : 2560
	//         Height : 1.0
	//         Weight : 12.0
	//         Color : Pink
	//         Shape : Bipedal
	//         Habitat : "Grassland"
	//         Kind : Balloon
	//         // Pokedex : Its fur is the ultimate in luxuriousness. Sleeping alongside a Wigglytuff is simply divine. Its body expands seemingly without end when it inhales.
	//         Generation : 1
	//         WildItemUncommon : MOONSTONE
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 4
	//         BattlerEnemyY : 13
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [monsterName : {
	//         Name : Zubat
	//         InternalName : ZUBAT
	//         Type1 : POISON
	//         Type2 : FLYING
	//         BaseStats : 40,45,35,55,30,40
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 49
	//         EffortPoints : 0,0,0,1,0,0
	//         Rareness : 255
	//         Happiness : 70
	//         Abilities : INNERFOCUS
	//         HiddenAbility : INFILTRATOR
	//         Moves : 1,ABSORB,5,"SUPERSONIC",7,ASTONISH,11,"BITE",13,"WINGATTACK",17,CONFUSERAY,19,"AIRCUTTER",23,"SWIFT",25,POISONFANG,29,MEANLOOK,31,LEECHLIFE,35,"HAZE",37,"VENOSHOCK",41,"AIRSLASH",43,QUICKGUARD
	//         TutorMoves : "ACROBATICS","AERIALACE","ATTRACT","CONFIDE","DEFOG","DOUBLETEAM","FACADE","FLY","FRUSTRATION","GIGADRAIN","HEATWAVE","HIDDENPOWER",LEECHLIFE,"PAYBACK","PROTECT","RAINDANCE","REST","RETURN","ROOST","ROUND","SHADOWBALL","SLEEPTALK",""SLUDGE"BOMB",SNATCH,"SNORE","STEELWING","SUBSTITUTE","SUNNYDAY",SUPERFANG,"SWAGGER","TAILWIND",TAUNT,"THIEF",TORMENT,"TOXIC",UPROAR,"UTURN","VENOSHOCK","ZENHEADBUTT"
	//         EggMoves : BRAVEBIRD,"CURSE","DEFOG",FEINTATTACK,"GIGADRAIN","GUST",HYPNOSIS,NASTYPLOT,"PURSUIT","QUICKATTACK","STEELWING",VENOMDRENCH,"WHIRLWIND","ZENHEADBUTT"
	//         Compatibility : Flying
	//         StepsToHatch : 3840
	//         Height : 0.8
	//         Weight : 7.5
	//         Color : Purple
	//         Shape : Winged
	//         Habitat : Cave
	//         Kind : Bat
	//         // Pokedex : While living in pitch-black caverns, their eyes gradually grew shut and deprived them of vision. They use ultrasonic waves to detect obstacles.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -2
	//         BattlerEnemyY : -1
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : GOLBAT,"Level",22
	//         }
	//         [monsterName : {
	//         Name : Golbat
	//         InternalName : GOLBAT
	//         Type1 : POISON
	//         Type2 : FLYING
	//         BaseStats : 75,80,70,90,65,75
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 159
	//         EffortPoints : 0,0,0,2,0,0
	//         Rareness : 90
	//         Happiness : 70
	//         Abilities : INNERFOCUS
	//         HiddenAbility : INFILTRATOR
	//         Moves : 1,SCREECH,1,ABSORB,1,"SUPERSONIC",1,ASTONISH,1,"BITE",5,"SUPERSONIC",7,ASTONISH,11,"BITE",13,"WINGATTACK",17,CONFUSERAY,19,"AIRCUTTER",24,"SWIFT",27,POISONFANG,32,MEANLOOK,35,LEECHLIFE,40,"HAZE",43,"VENOSHOCK",48,"AIRSLASH",51,QUICKGUARD
	//         TutorMoves : "ACROBATICS","AERIALACE","ATTRACT","CONFIDE","DEFOG","DOUBLETEAM","FACADE","FLY","FRUSTRATION","GIGADRAIN","GIGAIMPACT","HEATWAVE","HIDDENPOWER","HYPERBEAM",LEECHLIFE,"PAYBACK","PROTECT","RAINDANCE","REST","RETURN","ROOST","ROUND","SHADOWBALL","SLEEPTALK",""SLUDGE"BOMB",SNATCH,"SNORE","STEELWING","SUBSTITUTE","SUNNYDAY",SUPERFANG,"SWAGGER","TAILWIND",TAUNT,"THIEF",TORMENT,"TOXIC",UPROAR,"UTURN","VENOSHOCK","ZENHEADBUTT"
	//         Compatibility : Flying
	//         StepsToHatch : 3840
	//         Height : 1.6
	//         Weight : 55.0
	//         Color : Purple
	//         Shape : Winged
	//         Habitat : Cave
	//         Kind : Bat
	//         // Pokedex : Its fangs easily puncture even thick animal hide. It loves to feast on the blood of people and Pokémon. It flits about in darkness and strikes from behind.
	//         Generation : 1
	//         BattlerPlayerX : 6
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 5
	//         BattlerEnemyY : -5
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : CROBAT,Happiness,
	//         }
	//         [monsterName : {
	//         Name : Oddish
	//         InternalName : ODDISH
	//         Type1 : GRASS
	//         Type2 : POISON
	//         BaseStats : 45,50,55,30,75,65
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 64
	//         EffortPoints : 0,0,0,0,1,0
	//         Rareness : 255
	//         Happiness : 70
	//         Abilities : "CHLOROPHYLL"
	//         HiddenAbility : RUNAWAY
	//         Moves : 1,ABSORB,1,"GROWTH",5,"SWEETSCENT",9,ACID,13,"POISONPOWDER",14,"STUNSPORE",15,"SLEEPPOWDER",19,MEGADRAIN,23,LUCKYCHANT,27,MOONLIGHT,31,"GIGADRAIN",35,"TOXIC",39,"NATURALGIFT",43,MOONBLAST,47,"GRASSYTERRAIN",51,"PETALDANCE"
	//         TutorMoves : AFTERYOU,"ATTRACT","CONFIDE","CUT",DAZZLINGGLEAM,"DOUBLETEAM","ENERGYBALL","FACADE","FRUSTRATION",GASTROACID,"GIGADRAIN","GRASSKNOT","HIDDENPOWER","INFESTATION","NATUREPOWER","PROTECT","REST","RETURN","ROUND","SEEDBOMB","SLEEPTALK",""SLUDGE"BOMB","SNORE","SOLARBEAM","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","SYNTHESIS","TOXIC","VENOSHOCK","WORRYSEED"
	//         EggMoves : AFTERYOU,"CHARM","FLAIL","INGRAIN","NATUREPOWER","RAZORLEAF",SECRETPOWER,STRENGTHSAP,"SYNTHESIS",TEETERDANCE,"TICKLE"
	//         Compatibility : Grass
	//         StepsToHatch : 5120
	//         Height : 0.5
	//         Weight : 5.4
	//         Color : Blue
	//         Shape : HeadLegs
	//         Habitat : "Grassland"
	//         Kind : Weed
	//         // Pokedex : It grows by absorbing moonlight. During the daytime, it buries itself in the ground, leaving only its leaves exposed to avoid detection by its enemies.
	//         Generation : 1
	//         WildItemUncommon : ABSORBBULB
	//         BattlerPlayerX : 2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 3
	//         BattlerEnemyY : 23
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 1
	//         Evolutions : GLOOM,"Level",21
	//         }
	//         [monsterName : {
	//         Name : Gloom
	//         InternalName : GLOOM
	//         Type1 : GRASS
	//         Type2 : POISON
	//         BaseStats : 60,65,70,40,85,75
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 138
	//         EffortPoints : 0,0,0,0,2,0
	//         Rareness : 120
	//         Happiness : 70
	//         Abilities : "CHLOROPHYLL"
	//         HiddenAbility : STENCH
	//         Moves : 1,ABSORB,1,"GROWTH",1,"SWEETSCENT",1,ACID,5,"SWEETSCENT",9,ACID,13,"POISONPOWDER",14,"STUNSPORE",15,"SLEEPPOWDER",19,MEGADRAIN,24,LUCKYCHANT,29,MOONLIGHT,34,"GIGADRAIN",39,"TOXIC",44,"NATURALGIFT",49,"PETALBLIZZARD",54,"GRASSYTERRAIN",59,"PETALDANCE"
	//         TutorMoves : AFTERYOU,"ATTRACT","CONFIDE","CUT",DAZZLINGGLEAM,"DOUBLETEAM",DRAINPUNCH,"ENERGYBALL","FACADE","FLING","FRUSTRATION",GASTROACID,"GIGADRAIN","GRASSKNOT","HIDDENPOWER","INFESTATION","NATUREPOWER","PROTECT","REST","RETURN","ROUND","SEEDBOMB","SLEEPTALK",""SLUDGE"BOMB","SNORE","SOLARBEAM","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","SYNTHESIS","TOXIC","VENOSHOCK","WORRYSEED"
	//         Compatibility : Grass
	//         StepsToHatch : 5120
	//         Height : 0.8
	//         Weight : 8.6
	//         Color : Blue
	//         Shape : Bipedal
	//         Habitat : "Grassland"
	//         Kind : Weed
	//         // Pokedex : A horribly noxious honey drools from its mouth. One whiff of the honey can result in memory loss. Some fans are said to enjoy this overwhelming stink, however.
	//         Generation : 1
	//         WildItemUncommon : ABSORBBULB
	//         BattlerPlayerX : 1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 22
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : VILEPLUME,Item,LEAFSTONE,BELLOSSOM,Item,SUNSTONE
	//         }
	//         [monsterName : {
	//         Name : Vileplume
	//         InternalName : VILEPLUME
	//         Type1 : GRASS
	//         Type2 : POISON
	//         BaseStats : 75,80,85,50,110,90
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 221
	//         EffortPoints : 0,0,0,0,3,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : "CHLOROPHYLL"
	//         HiddenAbility : EFFECTSPORE
	//         Moves : 1,MEGADRAIN,1,AROMATHERAPY,1,"POISONPOWDER",1,"STUNSPORE",49,"PETALBLIZZARD",59,"PETALDANCE",69,"SOLARBEAM"
	//         TutorMoves : AFTERYOU,"ATTRACT","CONFIDE","CUT",DAZZLINGGLEAM,"DOUBLETEAM",DRAINPUNCH,"ENERGYBALL","FACADE","FLING","FRUSTRATION",GASTROACID,"GIGADRAIN","GIGAIMPACT","GRASSKNOT","HIDDENPOWER","HYPERBEAM","INFESTATION","NATUREPOWER","PROTECT","REST","RETURN","ROUND","SAFEGUARD","SEEDBOMB","SLEEPTALK",""SLUDGE"BOMB","SNORE","SOLARBEAM","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","SYNTHESIS","TOXIC","VENOSHOCK","WORRYSEED"
	//         Compatibility : Grass
	//         StepsToHatch : 5120
	//         Height : 1.2
	//         Weight : 18.6
	//         Color : Red
	//         Shape : Bipedal
	//         Habitat : "Grassland"
	//         Kind : Flower
	//         // Pokedex : In seasons when it produces more pollen, the air around a Vileplume turns yellow with the powder as it walks. The pollen is highly toxic and causes paralysis.
	//         Generation : 1
	//         WildItemUncommon : ABSORBBULB
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 3
	//         BattlerEnemyY : 16
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Paras
	//         InternalName : PARAS
	//         Type1 : BUG
	//         Type2 : GRASS
	//         BaseStats : 35,70,55,25,45,55
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 57
	//         EffortPoints : 0,1,0,0,0,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : EFFECTSPORE,DRYSKIN
	//         HiddenAbility : DAMP
	//         Moves : 1,"SCRATCH",6,"STUNSPORE",6,"POISONPOWDER",11,ABSORB,17,FURYCUTTER,22,SPORE,27,"SLASH",33,"GROWTH",38,"GIGADRAIN",43,AROMATHERAPY,49,"RAGEPOWDER",54,"XSCISSOR"
	//         TutorMoves : "AERIALACE",AFTERYOU,"ATTRACT","BRICKBREAK","BUGBITE","CONFIDE","CUT","DOUBLETEAM","ENERGYBALL","FACADE","FALSESWIPE","FRUSTRATION","GIGADRAIN","GRASSKNOT","HIDDENPOWER","KNOCKOFF",LEECHLIFE,"LIGHTSCREEN","NATUREPOWER","PROTECT","REST","RETURN","ROCKSMASH","ROUND","SEEDBOMB","SLEEPTALK",""SLUDGE"BOMB","SNORE","SOLARBEAM","STRUGGLEBUG","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","SYNTHESIS","THIEF","TOXIC","VENOSHOCK","WORRYSEED","XSCISSOR"
	//         EggMoves : "AGILITY","BUGBITE","COUNTER",CROSSPOISON,"ENDURE","FELLSTINGER","FLAIL","GRASSYTERRAIN","LEECHSEED","METALCLAW","NATURALGIFT","PSYBEAM","PURSUIT",ROTOTILLER,SCREECH,"SWEETSCENT",WIDEGUARD
	//         Compatibility : Bug,Grass
	//         StepsToHatch : 5120
	//         Height : 0.3
	//         Weight : 5.4
	//         Color : Red
	//         Shape : Insectoid
	//         Habitat : Forest
	//         Kind : Mushroom
	//         // Pokedex : A Paras has parasitic tochukaso mushrooms growing on its back. They grow by drawing nutrients from the host. They are valued as a medicine for long life.
	//         Generation : 1
	//         WildItemCommon : TINYMUSHROOM
	//         WildItemUncommon : BIGMUSHROOM
	//         BattlerPlayerX : 5
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -3
	//         BattlerEnemyY : 33
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : PARASECT,"Level",24
	//         }
	//         [monsterName : {
	//         Name : Parasect
	//         InternalName : PARASECT
	//         Type1 : BUG
	//         Type2 : GRASS
	//         BaseStats : 60,95,80,30,60,80
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 142
	//         EffortPoints : 0,2,1,0,0,0
	//         Rareness : 75
	//         Happiness : 70
	//         Abilities : EFFECTSPORE,DRYSKIN
	//         HiddenAbility : DAMP
	//         Moves : 1,CROSSPOISON,1,"SCRATCH",1,"STUNSPORE",1,"POISONPOWDER",1,ABSORB,6,"STUNSPORE",6,"POISONPOWDER",11,ABSORB,17,FURYCUTTER,22,SPORE,29,"SLASH",37,"GROWTH",44,"GIGADRAIN",51,AROMATHERAPY,59,"RAGEPOWDER",66,"XSCISSOR"
	//         TutorMoves : "AERIALACE",AFTERYOU,"ATTRACT","BRICKBREAK","BUGBITE","CONFIDE","CUT","DOUBLETEAM","ENERGYBALL","FACADE","FALSESWIPE","FRUSTRATION","GIGADRAIN","GIGAIMPACT","GRASSKNOT","HIDDENPOWER","HYPERBEAM","KNOCKOFF",LEECHLIFE,"LIGHTSCREEN","NATUREPOWER","PROTECT","REST","RETURN","ROCKSMASH","ROUND","SEEDBOMB","SLEEPTALK",""SLUDGE"BOMB","SNORE","SOLARBEAM","STRUGGLEBUG","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","SYNTHESIS","THIEF","THROATCHOP","TOXIC","VENOSHOCK","WORRYSEED","XSCISSOR"
	//         Compatibility : Bug,Grass
	//         StepsToHatch : 5120
	//         Height : 1.0
	//         Weight : 29.5
	//         Color : Red
	//         Shape : Insectoid
	//         Habitat : Forest
	//         Kind : Mushroom
	//         // Pokedex : Parasect are known to infest the roots of large trees en masse and drain nutrients. When an infested tree dies, they move onto another tree all at once.
	//         Generation : 1
	//         WildItemCommon : TINYMUSHROOM
	//         WildItemUncommon : BIGMUSHROOM
	//         BattlerPlayerX : 1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -3
	//         BattlerEnemyY : 20
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Venonat
	//         InternalName : VENONAT
	//         Type1 : BUG
	//         Type2 : POISON
	//         BaseStats : 60,55,50,45,40,55
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 61
	//         EffortPoints : 0,0,0,0,0,1
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : COMPOUNDEYES,TINTEDLENS
	//         HiddenAbility : RUNAWAY
	//         Moves : 1,"TACKLE",1,DISABLE,1,"FORESIGHT",5,"SUPERSONIC",11,"CONFUSION",13,"POISONPOWDER",17,"PSYBEAM",23,"STUNSPORE",25,"SIGNALBEAM",29,"SLEEPPOWDER",35,LEECHLIFE,37,"ZENHEADBUTT",41,POISONFANG,47,"PSYCHIC"
	//         TutorMoves : "ATTRACT","BUGBITE","CONFIDE","DOUBLETEAM","FACADE","FRUSTRATION","GIGADRAIN","HIDDENPOWER","INFESTATION",LEECHLIFE,"PROTECT","PSYCHIC","REST","RETURN","ROUND","SIGNALBEAM","SKILLSWAP","SLEEPTALK",""SLUDGE"BOMB","SNORE","SOLARBEAM","STRUGGLEBUG","SUBSTITUTE","SUNNYDAY","SWAGGER","THIEF","TOXIC","VENOSHOCK","ZENHEADBUTT"
	//         EggMoves : "AGILITY","BATONPASS","BUGBITE","GIGADRAIN",MORNINGSUN,"RAGEPOWDER",SCREECH,SECRETPOWER,"SIGNALBEAM","SKILLSWAP","TOXICSPIKES"
	//         Compatibility : Bug
	//         StepsToHatch : 5120
	//         Height : 1.0
	//         Weight : 30.0
	//         Color : Purple
	//         Shape : Bipedal
	//         Habitat : Forest
	//         Kind : Insect
	//         // Pokedex : Its coat of thin, stiff hair that covers its entire body is said to have evolved for protection. Its large eyes never fail to spot even miniscule prey.
	//         Generation : 1
	//         BattlerPlayerX : 6
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 14
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : VENOMOTH,"Level",31
	//         }
	//         [monsterName : {
	//         Name : Venomoth
	//         InternalName : VENOMOTH
	//         Type1 : BUG
	//         Type2 : POISON
	//         BaseStats : 70,65,60,90,90,75
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 158
	//         EffortPoints : 0,0,0,1,1,0
	//         Rareness : 75
	//         Happiness : 70
	//         Abilities : SHIELDDUST,TINTEDLENS
	//         HiddenAbility : WONDERSKIN
	//         Moves : 0,"GUST",1,"GUST",1,"QUIVERDANCE",1,"BUGBUZZ",1,"SILVERWIND",1,"TACKLE",1,DISABLE,1,"FORESIGHT",1,"SUPERSONIC",5,"SUPERSONIC",11,"CONFUSION",13,"POISONPOWDER",17,"PSYBEAM",23,"STUNSPORE",25,"SIGNALBEAM",29,"SLEEPPOWDER",37,LEECHLIFE,41,"ZENHEADBUTT",47,POISONFANG,55,"PSYCHIC",59,"BUGBUZZ",63,"QUIVERDANCE"
	//         TutorMoves : "ACROBATICS","AERIALACE","ATTRACT","BUGBITE","CONFIDE","DEFOG","DOUBLETEAM","ENERGYBALL","FACADE","FRUSTRATION","GIGADRAIN","GIGAIMPACT","HIDDENPOWER","HYPERBEAM","INFESTATION",LEECHLIFE,"PROTECT","PSYCHIC","REST","RETURN","ROOST","ROUND","SIGNALBEAM","SKILLSWAP","SLEEPTALK",""SLUDGE"BOMB","SNORE","SOLARBEAM","STRUGGLEBUG","SUBSTITUTE","SUNNYDAY","SWAGGER","TAILWIND","THIEF","TOXIC","UTURN","VENOSHOCK","ZENHEADBUTT"
	//         Compatibility : Bug
	//         StepsToHatch : 5120
	//         Height : 1.5
	//         Weight : 12.5
	//         Color : Purple
	//         Shape : MultiWinged
	//         Habitat : Forest
	//         Kind : Poison Moth
	//         // Pokedex : Venomoth are nocturnal--they only are active at night. Their favorite prey are insects that gather around streetlights, attracted by the light in the darkness.
	//         Generation : 1
	//         WildItemUncommon : SHEDSHELL
	//         BattlerPlayerX : -4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 4
	//         BattlerEnemyY : -4
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [monsterName : {
	//         Name : Diglett
	//         InternalName : DIGLETT
	//         Type1 : GROUND
	//         BaseStats : 10,55,25,95,35,45
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 53
	//         EffortPoints : 0,0,0,1,0,0
	//         Rareness : 255
	//         Happiness : 70
	//         Abilities : SANDVEIL,ARENATRAP
	//         HiddenAbility : SANDFORCE
	//         Moves : 1,"SANDATTACK",1,"SCRATCH",4,"GROWL",7,ASTONISH,10,MUDSLAP,14,MAGNITUDE,18,"BULLDOZE",22,SUCKERPUNCH,25,MUDBOMB,28,EARTHPOWER,31,DIG,35,"SLASH",39,"EARTHQUAKE",43,FISSURE
	//         TutorMoves : "AERIALACE","ATTRACT","BULLDOZE","CONFIDE","CUT","DOUBLETEAM",EARTHPOWER,"EARTHQUAKE","ECHOEDVOICE","FACADE","FRUSTRATION","HIDDENPOWER","PROTECT","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SHADOWCLAW","SLEEPTALK",""SLUDGE"BOMB","SNORE",STEALTHROCK,"STOMPINGTANTRUM","SUBSTITUTE","SUNNYDAY","SWAGGER","THIEF","TOXIC"
	//         EggMoves : "ANCIENTPOWER",ASTONISH,"BEATUP","ENDURE",FEINTATTACK,FINALGAMBIT,HEADBUTT,MEMENTO,MUDBOMB,"PURSUIT",REVERSAL,SCREECH,UPROAR
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 0.2
	//         Weight : 0.8
	//         Color : Brown
	//         Shape : HeadBase
	//         Habitat : Cave
	//         Kind : Mole
	//         // Pokedex : Diglett are raised in most farms. The reason is simple--wherever they burrow, the soil is left perfectly tilled for growing delicious crops.
	//         Generation : 1
	//         WildItemUncommon : SOFTSAND
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 29
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : DUGTRIO,"Level",26
	//         }
	//         [monsterName : {
	//         Name : Dugtrio
	//         InternalName : DUGTRIO
	//         Type1 : GROUND
	//         BaseStats : 35,100,50,120,50,70
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 149
	//         EffortPoints : 0,0,0,2,0,0
	//         Rareness : 50
	//         Happiness : 70
	//         Abilities : SANDVEIL,ARENATRAP
	//         HiddenAbility : SANDFORCE
	//         Moves : 0,SANDTOMB,1,SANDTOMB,1,ROTOTILLER,1,NIGHTSLASH,1,TRIATTACK,1,"SCRATCH",1,"SANDATTACK",1,"GROWL",4,"GROWL",7,ASTONISH,10,MUDSLAP,14,MAGNITUDE,18,"BULLDOZE",22,SUCKERPUNCH,25,MUDBOMB,30,EARTHPOWER,35,DIG,41,"SLASH",47,"EARTHQUAKE",53,FISSURE
	//         TutorMoves : "AERIALACE","ATTRACT","BULLDOZE","CONFIDE","CUT","DOUBLETEAM",EARTHPOWER,"EARTHQUAKE","ECHOEDVOICE","FACADE","FRUSTRATION","GIGAIMPACT","HIDDENPOWER","HYPERBEAM","PROTECT","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SHADOWCLAW","SLEEPTALK",""SLUDGE"BOMB","SLUDGE"WAVE,"SNORE",STEALTHROCK,"STOMPINGTANTRUM",STONEEDGE,"SUBSTITUTE","SUNNYDAY","SWAGGER","THIEF","TOXIC"
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 0.7
	//         Weight : 33.3
	//         Color : Brown
	//         Shape : MultiBody
	//         Habitat : Cave
	//         Kind : Mole
	//         // Pokedex : Because the triplets originally split from one body, they think exactly alike. They work cooperatively to burrow endlessly through the ground.
	//         Generation : 1
	//         WildItemUncommon : SOFTSAND
	//         BattlerPlayerX : 1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 23
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Meowth
	//         InternalName : MEOWTH
	//         Type1 : NORMAL
	//         BaseStats : 40,45,35,90,40,40
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 58
	//         EffortPoints : 0,0,0,1,0,0
	//         Rareness : 255
	//         Happiness : 70
	//         Abilities : PICKUP,TECHNICIAN
	//         HiddenAbility : UNNERVE
	//         Moves : 1,"SCRATCH",1,"GROWL",6,"BITE",9,"FAKEOUT",14,FURYSWIPES,17,SCREECH,22,FEINTATTACK,25,TAUNT,30,PAYDAY,33,"SLASH",38,NASTYPLOT,41,"ASSURANCE",46,"CAPTIVATE",49,NIGHTSLASH,50,FEINT
	//         TutorMoves : "AERIALACE","ATTRACT","CONFIDE","COVET","CUT","DARKPULSE","DOUBLETEAM","DREAMEATER","ECHOEDVOICE","FACADE",FOULPLAY,"FRUSTRATION",GUNKSHOT,"HIDDENPOWER","HYPERVOICE","ICYWIND","IRONTAIL","KNOCKOFF","LASTRESORT","PAYBACK","PROTECT","PSYCHUP","RAINDANCE","REST","RETURN","ROUND","SEEDBOMB","SHADOWBALL","SHADOWCLAW",SHOCKWAVE,"SLEEPTALK",SNATCH,"SNORE",SPITE,"SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,"THIEF","THROATCHOP",THUNDER,THUNDERBOLT,TORMENT,"TOXIC",UPROAR,"UTURN","WATERPULSE","WORKUP"
	//         EggMoves : "AMNESIA",ASSIST,"CHARM","FLAIL",FOULPLAY,HYPNOSIS,"IRONTAIL","LASTRESORT",ODORSLEUTH,PUNISHMENT,SNATCH,SPITE,"TAILWHIP"
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 0.4
	//         Weight : 4.2
	//         Color : Yellow
	//         Shape : "Quadruped"
	//         Habitat : Urban
	//         Kind : Scratch Cat
	//         // Pokedex : Meowth withdraw their sharp claws into their paws to silently sneak about. For some reason, this Pokémon loves shiny coins that glitter with light.
	//         Generation : 1
	//         WildItemUncommon : QUICKCLAW
	//         BattlerPlayerX : 3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 18
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : PERSIAN,"Level",28
	//         }
	//         [monsterName : {
	//         Name : Persian
	//         InternalName : PERSIAN
	//         Type1 : NORMAL
	//         BaseStats : 65,70,60,115,65,65
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 154
	//         EffortPoints : 0,0,0,2,0,0
	//         Rareness : 90
	//         Happiness : 70
	//         Abilities : LIMBER,TECHNICIAN
	//         HiddenAbility : UNNERVE
	//         Moves : 0,"SWIFT",1,"SWIFT",1,PLAYROUGH,1,SWITCHEROO,1,"SCRATCH",1,"GROWL",1,"BITE",1,"FAKEOUT",6,"BITE",9,"FAKEOUT",14,FURYSWIPES,17,SCREECH,22,FEINTATTACK,25,TAUNT,32,POWERGEM,37,"SLASH",44,NASTYPLOT,49,"ASSURANCE",56,"CAPTIVATE",61,NIGHTSLASH,65,FEINT
	//         TutorMoves : "AERIALACE","ATTRACT","CONFIDE","COVET","CUT","DARKPULSE","DOUBLETEAM","DREAMEATER","ECHOEDVOICE",EMBARGO,"FACADE",FOULPLAY,"FRUSTRATION","GIGAIMPACT",GUNKSHOT,"HIDDENPOWER","HYPERBEAM","HYPERVOICE","ICYWIND","IRONTAIL","KNOCKOFF","LASTRESORT","PAYBACK","PROTECT","PSYCHUP","RAINDANCE","REST","RETURN","ROAR","ROUND","SEEDBOMB","SHADOWBALL","SHADOWCLAW",SHOCKWAVE,"SLEEPTALK",SNATCH,"SNORE",SPITE,"SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,"THIEF","THROATCHOP",THUNDER,THUNDERBOLT,TORMENT,"TOXIC",UPROAR,"UTURN","WATERPULSE","WORKUP"
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 1.0
	//         Weight : 32.0
	//         Color : Yellow
	//         Shape : "Quadruped"
	//         Habitat : Urban
	//         Kind : Classy Cat
	//         // Pokedex : A Persian's six bold whiskers sense air movements to determine what is in its vicinity. It becomes docile if grabbed by the whiskers.
	//         Generation : 1
	//         WildItemUncommon : QUICKCLAW
	//         BattlerPlayerX : -3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 3
	//         BattlerEnemyY : 15
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Psyduck
	//         InternalName : PSYDUCK
	//         Type1 : WATER
	//         BaseStats : 50,52,48,55,65,50
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 64
	//         EffortPoints : 0,0,0,0,1,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : DAMP,CLOUDNINE
	//         HiddenAbility : SWIFTSWIM
	//         Moves : 1,WATERSPORT,1,"SCRATCH",4,"TAILWHIP",7,"WATERGUN",10,"CONFUSION",13,FURYSWIPES,16,"WATERPULSE",19,DISABLE,22,SCREECH,25,"ZENHEADBUTT",28,"AQUATAIL",31,SOAK,34,"PSYCHUP",37,"AMNESIA",40,"HYDROPUMP",43,WONDERROOM
	//         TutorMoves : "AERIALACE","AQUATAIL","ATTRACT","BLIZZARD","BRICKBREAK",CALMMIND,"CONFIDE","DIVE","DOUBLETEAM","FACADE","FLING","FOCUSPUNCH","FRUSTRATION","HAIL","HIDDENPOWER","ICEBEAM","ICEPUNCH","ICYWIND","IRONTAIL","LIGHTSCREEN","POWERUPPUNCH","PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE","REST","RETURN","ROCKSMASH",ROLEPLAY,"ROUND","SCALD","SHADOWCLAW","SIGNALBEAM","SLEEPTALK","SNORE","STRENGTH","SUBSTITUTE","SURF","SWAGGER",TELEKINESIS,"TOXIC","WATERFALL","WATERPULSE",WONDERROOM,"WORRYSEED","ZENHEADBUTT"
	//         EggMoves : CLEARSMOG,CONFUSERAY,CROSSCHOP,ENCORE,"FORESIGHT",FUTURESIGHT,HYPNOSIS,MUDBOMB,"PSYBEAM","REFRESH",SECRETPOWER,SIMPLEBEAM,"SLEEPTALK","SYNCHRONOISE","YAWN"
	//         Compatibility : Water1,Field
	//         StepsToHatch : 5120
	//         Height : 0.8
	//         Weight : 19.6
	//         Color : Yellow
	//         Shape : BipedalTail
	//         Habitat : WatersEdge
	//         Kind : Duck
	//         // Pokedex : When its headache intensifies, it starts using strange powers. However, it has no recollection of its powers, so it always looks befuddled and bewildered.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 20
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : GOLDUCK,"Level",33
	//         }
	//         [monsterName : {
	//         Name : Golduck
	//         InternalName : GOLDUCK
	//         Type1 : WATER
	//         BaseStats : 80,82,78,85,95,80
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 175
	//         EffortPoints : 0,0,0,0,2,0
	//         Rareness : 75
	//         Happiness : 70
	//         Abilities : DAMP,CLOUDNINE
	//         HiddenAbility : SWIFTSWIM
	//         Moves : 1,MEFIRST,1,"AQUAJET",1,WATERSPORT,1,"SCRATCH",1,"TAILWHIP",1,"WATERGUN",4,"TAILWHIP",7,"WATERGUN",10,"CONFUSION",13,FURYSWIPES,16,"WATERPULSE",19,DISABLE,22,SCREECH,25,"ZENHEADBUTT",28,"AQUATAIL",31,SOAK,36,"PSYCHUP",41,"AMNESIA",46,"HYDROPUMP",51,WONDERROOM
	//         TutorMoves : "AERIALACE","AQUATAIL","ATTRACT","BLIZZARD","BRICKBREAK",CALMMIND,"CONFIDE","DIVE","DOUBLETEAM","FACADE","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICEPUNCH","ICYWIND","IRONTAIL","LASERFOCUS","LIGHTSCREEN","LIQUIDATION",LOWKICK,LOWSWEEP,"POWERUPPUNCH","PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE","REST","RETURN","ROCKSMASH",ROLEPLAY,"ROUND","SCALD","SHADOWCLAW","SIGNALBEAM","SLEEPTALK","SNORE","STRENGTH","SUBSTITUTE","SURF","SWAGGER",TELEKINESIS,"TOXIC","WATERFALL","WATERPULSE",WONDERROOM,"WORRYSEED","ZENHEADBUTT"
	//         Compatibility : Water1,Field
	//         StepsToHatch : 5120
	//         Height : 1.7
	//         Weight : 76.6
	//         Color : Blue
	//         Shape : BipedalTail
	//         Habitat : WatersEdge
	//         Kind : Duck
	//         // Pokedex : A Golduck is an adept swimmer. It sometimes joins competitive swimmers in training. It uses psychic powers when its forehead shimmers with light.
	//         Generation : 1
	//         BattlerPlayerX : -1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 15
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Mankey
	//         InternalName : MANKEY
	//         Type1 : FIGHTING
	//         BaseStats : 40,80,35,70,35,45
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 61
	//         EffortPoints : 0,1,0,0,0,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : VITALSPIRIT,ANGERPOINT
	//         HiddenAbility : DEFIANT
	//         Moves : 1,"COVET",1,"SCRATCH",1,LOWKICK,1,LEER,1,"FOCUSENERGY",5,FURYSWIPES,8,KARATECHOP,12,"PURSUIT",15,SEISMICTOSS,19,"SWAGGER",22,CROSSCHOP,26,"ASSURANCE",29,PUNISHMENT,33,THRASH,36,CLOSECOMBAT,40,SCREECH,43,"STOMPINGTANTRUM",47,"OUTRAGE",50,FINALGAMBIT
	//         TutorMoves : "ACROBATICS","AERIALACE","ATTRACT","BRICKBREAK",BULKUP,"BULLDOZE","CONFIDE","COVET","DOUBLETEAM",DUALCHOP,"EARTHQUAKE","ENDEAVOR","FACADE","FIREPUNCH","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION",GUNKSHOT,"HELPINGHAND","HIDDENPOWER","ICEPUNCH","IRONTAIL",LOWKICK,LOWSWEEP,"OUTRAGE","OVERHEAT","PAYBACK","POISONJAB","POWERUPPUNCH","PROTECT","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB",ROLEPLAY,"ROUND","SEEDBOMB","SLEEPTALK","SMACKDOWN","SNORE",SPITE,"STOMPINGTANTRUM","STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,"THIEF",THUNDER,THUNDERBOLT,"THUNDERPUNCH","TOXIC",UPROAR,"UTURN","WORKUP"
	//         EggMoves : "BEATUP",CLOSECOMBAT,"COUNTER",ENCORE,"FOCUSPUNCH","FORESIGHT",MEDITATE,NIGHTSLASH,POWERTRIP,REVENGE,REVERSAL,"SLEEPTALK",SMELLINGSALTS
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 0.5
	//         Weight : 28.0
	//         Color : Brown
	//         Shape : BipedalTail
	//         Habitat : Mountain
	//         Kind : Pig Monkey
	//         // Pokedex : When it starts shaking and its nasal breathing turns rough, it's a sure sign of anger. However, since this happens instantly, there is no time to flee.
	//         Generation : 1
	//         BattlerPlayerX : -2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 3
	//         BattlerEnemyY : 20
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : PRIMEAPE,"Level",28
	//         }
	//         [monsterName : {
	//         Name : Primeape
	//         InternalName : PRIMEAPE
	//         Type1 : FIGHTING
	//         BaseStats : 65,105,60,95,60,70
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 159
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 75
	//         Happiness : 70
	//         Abilities : VITALSPIRIT,ANGERPOINT
	//         HiddenAbility : DEFIANT
	//         Moves : 0,"RAGE",1,"RAGE",1,FINALGAMBIT,1,"FLING",1,"SCRATCH",1,LOWKICK,1,LEER,1,"FOCUSENERGY",5,FURYSWIPES,8,KARATECHOP,12,"PURSUIT",15,SEISMICTOSS,19,"SWAGGER",22,CROSSCHOP,26,"ASSURANCE",30,PUNISHMENT,35,THRASH,39,CLOSECOMBAT,44,SCREECH,48,"STOMPINGTANTRUM",53,"OUTRAGE",57,FINALGAMBIT
	//         TutorMoves : "ACROBATICS","AERIALACE","ATTRACT","BRICKBREAK",BULKUP,"BULLDOZE","CONFIDE","COVET","DOUBLETEAM",DUALCHOP,"EARTHQUAKE","ENDEAVOR","FACADE","FIREPUNCH","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT",GUNKSHOT,"HELPINGHAND","HIDDENPOWER","HYPERBEAM","ICEPUNCH","IRONTAIL",LOWKICK,LOWSWEEP,"OUTRAGE","OVERHEAT","PAYBACK","POISONJAB","POWERUPPUNCH","PROTECT","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB",ROLEPLAY,"ROUND","SEEDBOMB","SLEEPTALK","SMACKDOWN","SNORE",SPITE,"STOMPINGTANTRUM",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,"THIEF","THROATCHOP",THUNDER,THUNDERBOLT,"THUNDERPUNCH","TOXIC",UPROAR,"UTURN","WORKUP"
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 1.0
	//         Weight : 32.0
	//         Color : Brown
	//         Shape : BipedalTail
	//         Habitat : Mountain
	//         Kind : Pig Monkey
	//         // Pokedex : When it becomes furious, its blood circulation becomes more robust, and its muscles are made stronger. But it also becomes much less intelligent.
	//         Generation : 1
	//         BattlerPlayerX : 5
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 3
	//         BattlerEnemyY : 13
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : "Growl"ithe
	//         InternalName : "GROWL"ITHE
	//         Type1 : FIRE
	//         BaseStats : 55,70,45,60,70,50
	//         GenderRate : Female25Percent
	//         GrowthRate : Slow
	//         BaseEXP : 70
	//         EffortPoints : 0,1,0,0,0,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : INTIMIDATE,FLASHFIRE
	//         HiddenAbility : JUSTIFIED
	//         Moves : 1,"BITE",1,"ROAR",6,"EMBER",8,LEER,10,ODORSLEUTH,12,"HELPINGHAND",17,FLAMEWHEEL,19,REVERSAL,21,"FIREFANG",23,"TAKEDOWN",28,"FLAMEBURST",30,"AGILITY",32,RETALIATE,34,"FLAMETHROWER",39,"CRUNCH",41,"HEATWAVE",43,"OUTRAGE",45,"FLAREBLITZ"
	//         TutorMoves : "AERIALACE","ATTRACT","CONFIDE","COVET","DOUBLETEAM","FACADE","FIREBLAST","FLAMECHARGE","FLAMETHROWER","FRUSTRATION","HEATWAVE","HELPINGHAND","HIDDENPOWER","IRONTAIL","OUTRAGE","OVERHEAT","PROTECT","REST","RETURN","ROAR","ROCKSMASH","ROUND","SAFEGUARD","SLEEPTALK",SNARL,"SNORE","STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER","THIEF","TOXIC",WILDCHARGE,"WILLOWISP"
	//         EggMoves : BODYSLAM,BURNUP,CLOSECOMBAT,"COVET","CRUNCH","DOUBLEEDGE",DOUBLEKICK,"FIRESPIN","FLAREBLITZ","HEATWAVE",HOWL,"IRONTAIL",MORNINGSUN,THRASH
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 0.7
	//         Weight : 19.0
	//         Color : Brown
	//         Shape : "Quadruped"
	//         Habitat : "Grassland"
	//         Kind : Puppy
	//         // Pokedex : Its superb sense of smell ensures that this Pokémon won't forget any scent, no matter what. It uses its sense of smell to detect the emotions of others.
	//         Generation : 1
	//         BattlerPlayerX : -4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 3
	//         BattlerEnemyY : 18
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : ARCANINE,Item,FIRESTONE
	//         }
	//         [monsterName : {
	//         Name : Arcanine
	//         InternalName : ARCANINE
	//         Type1 : FIRE
	//         BaseStats : 90,110,80,95,100,80
	//         GenderRate : Female25Percent
	//         GrowthRate : Slow
	//         BaseEXP : 194
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 75
	//         Happiness : 70
	//         Abilities : INTIMIDATE,FLASHFIRE
	//         HiddenAbility : JUSTIFIED
	//         Moves : 1,THUNDERFANG,1,"BITE",1,"ROAR",1,ODORSLEUTH,1,"FIREFANG",34,EXTREMESPEED
	//         TutorMoves : "AERIALACE","ATTRACT","BULLDOZE","CONFIDE","COVET","DOUBLETEAM","DRAGONPULSE","FACADE","FIREBLAST","FLAMECHARGE","FLAMETHROWER","FRUSTRATION","GIGAIMPACT","HEATWAVE","HELPINGHAND","HIDDENPOWER","HYPERBEAM",IRONHEAD,"IRONTAIL","LASERFOCUS","OUTRAGE","OVERHEAT","PROTECT","REST","RETURN","ROAR","ROCKSMASH","ROUND","SAFEGUARD","SLEEPTALK",SNARL,"SNORE","SOLARBEAM","STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER","THIEF","TOXIC",WILDCHARGE,"WILLOWISP"
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 1.9
	//         Weight : 155.0
	//         Color : Brown
	//         Shape : "Quadruped"
	//         Habitat : "Grassland"
	//         Kind : Legendary
	//         // Pokedex : This fleet-footed Pokémon is said to run over 6,200 miles in a single day and night. The fire that blazes wildly within its body is its source of power.
	//         Generation : 1
	//         BattlerPlayerX : -9
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 4
	//         BattlerEnemyY : 9
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Poliwag
	//         InternalName : POLIWAG
	//         Type1 : WATER
	//         BaseStats : 40,50,40,90,40,40
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 60
	//         EffortPoints : 0,0,0,1,0,0
	//         Rareness : 255
	//         Happiness : 70
	//         Abilities : WATERABSORB,DAMP
	//         HiddenAbility : SWIFTSWIM
	//         Moves : 1,WATERSPORT,5,"WATERGUN",8,HYPNOSIS,11,"BUBBLE",15,DOUBLESLAP,18,"RAINDANCE",21,BODYSLAM,25,BUBBLEBEAM,28,MUDSHOT,31,"BELLYDRUM",35,WAKEUPSLAP,38,"HYDROPUMP",41,MUDBOMB
	//         TutorMoves : "ATTRACT","BLIZZARD","CONFIDE","DIVE","DOUBLETEAM","ENDEAVOR","FACADE","FRUSTRATION","HAIL","HELPINGHAND","HIDDENPOWER","ICEBEAM","ICYWIND","PROTECT","PSYCHIC","RAINDANCE","REST","RETURN","ROUND","SCALD","SLEEPTALK","SNORE","SUBSTITUTE","SURF","SWAGGER","THIEF","TOXIC","WATERFALL","WATERPULSE"
	//         EggMoves : BUBBLEBEAM,ENCORE,"ENDEAVOR","ENDURE","HAZE",ICEBALL,MINDREADER,"MIST",MUDSHOT,"REFRESH",SPLASH,"WATERPULSE",WATERSPORT
	//         Compatibility : Water1
	//         StepsToHatch : 5120
	//         Height : 0.6
	//         Weight : 12.4
	//         Color : Blue
	//         Shape : HeadLegs
	//         Habitat : WatersEdge
	//         Kind : Tadpole
	//         // Pokedex : It is possible to see this Pokémon's spiral innards right through its thin skin. However, the skin is also very flexible. Even sharp fangs bounce right off it.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 9
	//         BattlerEnemyY : 23
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 1
	//         Evolutions : POLIWHIRL,"Level",25
	//         }
	//         [monsterName : {
	//         Name : Poliwhirl
	//         InternalName : POLIWHIRL
	//         Type1 : WATER
	//         BaseStats : 65,65,65,90,50,50
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 135
	//         EffortPoints : 0,0,0,2,0,0
	//         Rareness : 120
	//         Happiness : 70
	//         Abilities : WATERABSORB,DAMP
	//         HiddenAbility : SWIFTSWIM
	//         Moves : 1,WATERSPORT,1,"WATERGUN",1,HYPNOSIS,5,"WATERGUN",8,HYPNOSIS,11,"BUBBLE",15,DOUBLESLAP,18,"RAINDANCE",21,BODYSLAM,27,BUBBLEBEAM,32,MUDSHOT,37,"BELLYDRUM",43,WAKEUPSLAP,48,"HYDROPUMP",53,MUDBOMB
	//         TutorMoves : "ATTRACT","BLIZZARD","BRICKBREAK","BULLDOZE","CONFIDE","DIVE","DOUBLETEAM","EARTHQUAKE","ENDEAVOR","FACADE","FLING","FOCUSPUNCH","FRUSTRATION","HAIL","HELPINGHAND","HIDDENPOWER","ICEBEAM","ICEPUNCH","ICYWIND","POWERUPPUNCH","PROTECT","PSYCHIC","RAINDANCE","REST","RETURN","ROCKSMASH","ROUND","SCALD","SLEEPTALK","SNORE","STRENGTH","SUBSTITUTE","SURF","SWAGGER","THIEF","TOXIC","WATERFALL","WATERPULSE"
	//         Compatibility : Water1
	//         StepsToHatch : 5120
	//         Height : 1.0
	//         Weight : 20.0
	//         Color : Blue
	//         Shape : Bipedal
	//         Habitat : WatersEdge
	//         Kind : Tadpole
	//         // Pokedex : Its body surface is always wet and slick with an oily fluid. Because of this greasy covering, it can easily slip and slide out of the clutches of any enemy in battle.
	//         Generation : 1
	//         WildItemUncommon : KINGSROCK
	//         BattlerPlayerX : 10
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 20
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : POLIWRATH,Item,WATERSTONE,POLITOED,TradeItem,KINGSROCK
	//         }
	//         [monsterName : {
	//         Name : Poliwrath
	//         InternalName : POLIWRATH
	//         Type1 : WATER
	//         Type2 : FIGHTING
	//         BaseStats : 90,95,95,70,70,90
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 230
	//         EffortPoints : 0,0,3,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : WATERABSORB,DAMP
	//         HiddenAbility : SWIFTSWIM
	//         Moves : 0,SUBMISSION,1,SUBMISSION,1,CIRCLETHROW,1,BUBBLEBEAM,1,HYPNOSIS,1,DOUBLESLAP,32,DYNAMICPUNCH,43,MINDREADER,53,CIRCLETHROW
	//         TutorMoves : "ATTRACT","BLIZZARD","BRICKBREAK",BULKUP,"BULLDOZE","CONFIDE","DIVE","DOUBLETEAM",DUALCHOP,"EARTHQUAKE","ENDEAVOR","FACADE","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","HAIL","HELPINGHAND","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICEPUNCH","ICYWIND",LOWSWEEP,"PAYBACK","POISONJAB","POWERUPPUNCH","PROTECT","PSYCHIC","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND","SCALD","SLEEPTALK","SNORE","STRENGTH","SUBSTITUTE","SURF","SWAGGER","THIEF","THROATCHOP","TOXIC","WATERFALL","WATERPULSE","WORKUP"
	//         Compatibility : Water1
	//         StepsToHatch : 5120
	//         Height : 1.3
	//         Weight : 54.0
	//         Color : Blue
	//         Shape : Bipedal
	//         Habitat : WatersEdge
	//         Kind : Tadpole
	//         // Pokedex : Its highly developed muscles never grow fatigued, however much it exercises. This Pokémon can swim back and forth across the Pacific Ocean without effort.
	//         Generation : 1
	//         WildItemUncommon : KINGSROCK
	//         BattlerPlayerX : 1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 15
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Abra
	//         InternalName : ABRA
	//         Type1 : "PSYCHIC"
	//         BaseStats : 25,20,15,90,105,55
	//         GenderRate : Female25Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 62
	//         EffortPoints : 0,0,0,0,1,0
	//         Rareness : 200
	//         Happiness : 70
	//         Abilities : SYNCHRONIZE,INNERFOCUS
	//         HiddenAbility : MAGICGUARD
	//         Moves : 1,TELEPORT
	//         TutorMoves : ALLYSWITCH,"ATTRACT",CALMMIND,CHARGEBEAM,"CONFIDE",DAZZLINGGLEAM,"DOUBLETEAM",DRAINPUNCH,"DREAMEATER",EMBARGO,"ENERGYBALL","FACADE","FIREPUNCH","FLING","FOCUSPUNCH",FOULPLAY,"FRUSTRATION","GRASSKNOT",GRAVITY,"HIDDENPOWER","ICEPUNCH","IRONTAIL","KNOCKOFF","LIGHTSCREEN",MAGICCOAT,MAGICROOM,"PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE",RECYCLE,REFLECT,"REST","RETURN",ROLEPLAY,"ROUND","SAFEGUARD","SHADOWBALL",SHOCKWAVE,"SIGNALBEAM","SKILLSWAP","SLEEPTALK",SNATCH,"SNORE","SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,TELEKINESIS,"THIEF","THUNDERPUNCH",THUNDERWAVE,TORMENT,"TOXIC",TRICK,TRICKROOM,WONDERROOM,"ZENHEADBUTT"
	//         EggMoves : ALLYSWITCH,BARRIER,ENCORE,"FIREPUNCH",GUARDSPLIT,GUARDSWAP,"ICEPUNCH","KNOCKOFF",PSYCHICTERRAIN,POWERTRICK,PSYCHOSHIFT,"SKILLSWAP","THUNDERPUNCH"
	//         Compatibility : Humanlike
	//         StepsToHatch : 5120
	//         Height : 0.9
	//         Weight : 19.5
	//         Color : Brown
	//         Shape : BipedalTail
	//         Habitat : Urban
	//         Kind : Psi
	//         // Pokedex : A Pokémon that sleeps 18 hours a day. Observation revealed that it uses Teleport to change its location once every hour.
	//         Generation : 1
	//         WildItemUncommon : TWISTEDSPOON
	//         BattlerPlayerX : 3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 25
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : KADABRA,"Level",16
	//         }
	//         [monsterName : {
	//         Name : Kadabra
	//         InternalName : KADABRA
	//         Type1 : "PSYCHIC"
	//         BaseStats : 40,35,30,105,120,70
	//         GenderRate : Female25Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 140
	//         EffortPoints : 0,0,0,0,2,0
	//         Rareness : 100
	//         Happiness : 70
	//         Abilities : SYNCHRONIZE,INNERFOCUS
	//         HiddenAbility : MAGICGUARD
	//         Moves : 0,KINESIS,1,KINESIS,1,TELEPORT,1,"CONFUSION",16,"CONFUSION",18,DISABLE,21,"PSYBEAM",23,MIRACLEEYE,26,REFLECT,28,PSYCHOCUT,31,RECOVER,33,TELEKINESIS,36,ALLYSWITCH,38,"PSYCHIC",41,ROLEPLAY,43,FUTURESIGHT,46,TRICK
	//         TutorMoves : ALLYSWITCH,"ATTRACT",CALMMIND,CHARGEBEAM,"CONFIDE",DAZZLINGGLEAM,"DOUBLETEAM",DRAINPUNCH,"DREAMEATER",EMBARGO,"ENERGYBALL","FACADE","FIREPUNCH","FLING","FOCUSPUNCH",FOULPLAY,"FRUSTRATION","GRASSKNOT",GRAVITY,"HIDDENPOWER","ICEPUNCH","IRONTAIL","KNOCKOFF","LIGHTSCREEN",MAGICCOAT,MAGICROOM,"PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE",RECYCLE,REFLECT,"REST","RETURN",ROLEPLAY,"ROUND","SAFEGUARD","SHADOWBALL",SHOCKWAVE,"SIGNALBEAM","SKILLSWAP","SLEEPTALK",SNATCH,"SNORE","SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,TELEKINESIS,"THIEF","THUNDERPUNCH",THUNDERWAVE,TORMENT,"TOXIC",TRICK,TRICKROOM,WONDERROOM,"ZENHEADBUTT"
	//         Compatibility : Humanlike
	//         StepsToHatch : 5120
	//         Height : 1.3
	//         Weight : 56.5
	//         Color : Brown
	//         Shape : BipedalTail
	//         Habitat : Urban
	//         Kind : Psi
	//         // Pokedex : It is rumored that a boy with psychic abilities suddenly transformed into Kadabra while he was assisting research into extrasensory powers.
	//         Generation : 1
	//         WildItemUncommon : TWISTEDSPOON
	//         BattlerPlayerX : 2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 13
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : ALAKAZAM,Trade,
	//         }
	//         [monsterName : {
	//         Name : Alakazam
	//         InternalName : ALAKAZAM
	//         Type1 : "PSYCHIC"
	//         BaseStats : 55,50,45,120,135,95
	//         GenderRate : Female25Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 225
	//         EffortPoints : 0,0,0,0,3,0
	//         Rareness : 50
	//         Happiness : 70
	//         Abilities : SYNCHRONIZE,INNERFOCUS
	//         HiddenAbility : MAGICGUARD
	//         Moves : 0,KINESIS,1,KINESIS,1,TELEPORT,1,"CONFUSION",16,"CONFUSION",18,DISABLE,21,"PSYBEAM",23,MIRACLEEYE,26,REFLECT,28,PSYCHOCUT,31,RECOVER,33,TELEKINESIS,36,ALLYSWITCH,38,"PSYCHIC",41,CALMMIND,43,FUTURESIGHT,46,TRICK
	//         TutorMoves : ALLYSWITCH,"ATTRACT",CALMMIND,CHARGEBEAM,"CONFIDE",DAZZLINGGLEAM,"DOUBLETEAM",DRAINPUNCH,"DREAMEATER",EMBARGO,"ENERGYBALL","FACADE","FIREPUNCH","FLING","FOCUSBLAST","FOCUSPUNCH",FOULPLAY,"FRUSTRATION","GIGAIMPACT","GRASSKNOT",GRAVITY,"HIDDENPOWER","HYPERBEAM","ICEPUNCH","IRONTAIL","KNOCKOFF","LASERFOCUS","LIGHTSCREEN",MAGICCOAT,MAGICROOM,"PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE",RECYCLE,REFLECT,"REST","RETURN",ROLEPLAY,"ROUND","SAFEGUARD","SHADOWBALL",SHOCKWAVE,"SIGNALBEAM","SKILLSWAP","SLEEPTALK",SNATCH,"SNORE","SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,TELEKINESIS,"THIEF","THUNDERPUNCH",THUNDERWAVE,TORMENT,"TOXIC",TRICK,TRICKROOM,WONDERROOM,"ZENHEADBUTT"
	//         Compatibility : Humanlike
	//         StepsToHatch : 5120
	//         Height : 1.5
	//         Weight : 48.0
	//         Color : Brown
	//         Shape : Bipedal
	//         Habitat : Urban
	//         Kind : Psi
	//         // Pokedex : While it has strong psychic abilities and high intelligence, an Alakazam's muscles are very weak. It uses psychic power to move its body.
	//         Generation : 1
	//         WildItemUncommon : TWISTEDSPOON
	//         BattlerPlayerX : 4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 12
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Machop
	//         InternalName : MACHOP
	//         Type1 : FIGHTING
	//         BaseStats : 70,80,50,35,35,35
	//         GenderRate : Female25Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 61
	//         EffortPoints : 0,1,0,0,0,0
	//         Rareness : 180
	//         Happiness : 70
	//         Abilities : GUTS,NOGUARD
	//         HiddenAbility : STEADFAST
	//         Moves : 1,LOWKICK,1,LEER,3,"FOCUSENERGY",7,KARATECHOP,9,"FORESIGHT",13,LOWSWEEP,15,SEISMICTOSS,19,REVENGE,21,"KNOCKOFF",25,VITALTHROW,27,WAKEUPSLAP,31,DUALCHOP,33,SUBMISSION,37,BULKUP,39,CROSSCHOP,43,"SCARYFACE",45,DYNAMICPUNCH
	//         TutorMoves : "ATTRACT","BRICKBREAK",BULKUP,"BULLDOZE","CONFIDE","DOUBLETEAM",DUALCHOP,"EARTHQUAKE","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","HELPINGHAND","HIDDENPOWER","ICEPUNCH","KNOCKOFF","LIGHTSCREEN",LOWKICK,LOWSWEEP,"PAYBACK","POISONJAB","POWERUPPUNCH","PROTECT","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB",ROLEPLAY,"ROUND","SLEEPTALK","SMACKDOWN","SNORE","STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERPOWER,"SWAGGER","THIEF","THUNDERPUNCH","TOXIC","WORKUP"
	//         EggMoves : BULLETPUNCH,CLOSECOMBAT,"COUNTER",ENCORE,"FIREPUNCH",HEAVYSLAM,"ICEPUNCH","KNOCKOFF",MEDITATE,POWERTRICK,QUICKGUARD,ROLLINGKICK,SMELLINGSALTS,"THUNDERPUNCH","TICKLE"
	//         Compatibility : Humanlike
	//         StepsToHatch : 5120
	//         Height : 0.8
	//         Weight : 19.5
	//         Color : Gray
	//         Shape : BipedalTail
	//         Habitat : Mountain
	//         Kind : Superpower
	//         // Pokedex : It continually undertakes strenuous training to master all forms of martial arts. Its strength lets it easily hoist a sumo wrestler onto its shoulders.
	//         Generation : 1
	//         WildItemUncommon : FOCUSBAND
	//         BattlerPlayerX : 3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 15
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : MACHOKE,"Level",28
	//         }
	//         [monsterName : {
	//         Name : Machoke
	//         InternalName : MACHOKE
	//         Type1 : FIGHTING
	//         BaseStats : 80,100,70,45,50,60
	//         GenderRate : Female25Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 142
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 90
	//         Happiness : 70
	//         Abilities : GUTS,NOGUARD
	//         HiddenAbility : STEADFAST
	//         Moves : 1,LOWKICK,1,LEER,1,"FOCUSENERGY",1,KARATECHOP,3,"FOCUSENERGY",7,KARATECHOP,9,"FORESIGHT",13,LOWSWEEP,15,SEISMICTOSS,19,REVENGE,21,"KNOCKOFF",25,VITALTHROW,27,WAKEUPSLAP,33,DUALCHOP,37,SUBMISSION,43,BULKUP,47,CROSSCHOP,53,"SCARYFACE",57,DYNAMICPUNCH
	//         TutorMoves : "ATTRACT","BRICKBREAK",BULKUP,"BULLDOZE","CONFIDE","DOUBLETEAM",DUALCHOP,"EARTHQUAKE","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","HELPINGHAND","HIDDENPOWER","ICEPUNCH","KNOCKOFF","LIGHTSCREEN",LOWKICK,LOWSWEEP,"PAYBACK","POISONJAB","POWERUPPUNCH","PROTECT","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB",ROLEPLAY,"ROUND","SLEEPTALK","SMACKDOWN","SNORE","STOMPINGTANTRUM","STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERPOWER,"SWAGGER","THIEF","THUNDERPUNCH","TOXIC","WORKUP"
	//         Compatibility : Humanlike
	//         StepsToHatch : 5120
	//         Height : 1.5
	//         Weight : 70.5
	//         Color : Gray
	//         Shape : Bipedal
	//         Habitat : Mountain
	//         Kind : Superpower
	//         // Pokedex : A belt is worn by a Machoke to keep its overwhelming power under control. Because it is so dangerous, no one has ever removed the belt.
	//         Generation : 1
	//         WildItemUncommon : FOCUSBAND
	//         BattlerPlayerX : 7
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 9
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : MACHAMP,Trade,
	//         }
	//         [monsterName : {
	//         Name : Machamp
	//         InternalName : MACHAMP
	//         Type1 : FIGHTING
	//         BaseStats : 90,130,80,55,65,85
	//         GenderRate : Female25Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 227
	//         EffortPoints : 0,3,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : GUTS,NOGUARD
	//         HiddenAbility : STEADFAST
	//         Moves : 0,"STRENGTH",1,"STRENGTH",1,WIDEGUARD,1,LOWKICK,1,LEER,1,"FOCUSENERGY",1,KARATECHOP,3,"FOCUSENERGY",7,KARATECHOP,9,"FORESIGHT",13,LOWSWEEP,15,SEISMICTOSS,19,REVENGE,21,"KNOCKOFF",25,VITALTHROW,27,WAKEUPSLAP,33,DUALCHOP,37,SUBMISSION,43,BULKUP,47,CROSSCHOP,53,"SCARYFACE",57,DYNAMICPUNCH
	//         TutorMoves : "ATTRACT","BRICKBREAK",BULKUP,"BULLDOZE","CONFIDE","DOUBLETEAM",DUALCHOP,"EARTHQUAKE","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","HELPINGHAND","HIDDENPOWER","HYPERBEAM","ICEPUNCH","KNOCKOFF","LIGHTSCREEN",LOWKICK,LOWSWEEP,"PAYBACK","POISONJAB","POWERUPPUNCH","PROTECT","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB",ROLEPLAY,"ROUND","SLEEPTALK","SMACKDOWN","SNORE","STOMPINGTANTRUM",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERPOWER,"SWAGGER","THIEF","THROATCHOP","THUNDERPUNCH","TOXIC","WORKUP"
	//         Compatibility : Humanlike
	//         StepsToHatch : 5120
	//         Height : 1.6
	//         Weight : 130.0
	//         Color : Gray
	//         Shape : Bipedal
	//         Habitat : Mountain
	//         Kind : Superpower
	//         // Pokedex : It is impossible to defend against punches and chops doled out by its four arms. Its fighting spirit flares up when it faces a tough opponent.
	//         Generation : 1
	//         WildItemUncommon : FOCUSBAND
	//         BattlerPlayerX : 7
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -9
	//         BattlerEnemyY : 3
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Bellsprout
	//         InternalName : BELLSPROUT
	//         Type1 : GRASS
	//         Type2 : POISON
	//         BaseStats : 50,75,35,40,70,30
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 60
	//         EffortPoints : 0,1,0,0,0,0
	//         Rareness : 255
	//         Happiness : 70
	//         Abilities : "CHLOROPHYLL"
	//         HiddenAbility : GLUTTONY
	//         Moves : 1,"VINEWHIP",7,"GROWTH",11,WRAP,13,"SLEEPPOWDER",15,"POISONPOWDER",17,"STUNSPORE",23,ACID,27,"KNOCKOFF",29,"SWEETSCENT",35,GASTROACID,39,"RAZORLEAF",41,"POISONJAB",47,SLAM,50,WRINGOUT
	//         TutorMoves : "ATTRACT","BIND","CONFIDE","CUT","DOUBLETEAM","ENERGYBALL","FACADE","FRUSTRATION",GASTROACID,"GIGADRAIN","GRASSKNOT","HIDDENPOWER","INFESTATION","KNOCKOFF","NATUREPOWER","POISONJAB","PROTECT",REFLECT,"REST","RETURN","ROUND","SEEDBOMB","SLEEPTALK",""SLUDGE"BOMB","SNORE","SOLARBEAM","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","SYNTHESIS","THIEF","TOXIC","VENOSHOCK","WORRYSEED"
	//         EggMoves : ACIDSPRAY,BELCH,BULLETSEED,CLEARSMOG,ENCORE,"GIGADRAIN","INGRAIN",LEECHLIFE,"MAGICALLEAF","NATURALGIFT","POWERWHIP",STRENGTHSAP,"SYNTHESIS","TICKLE",WEATHERBALL,"WORRYSEED"
	//         Compatibility : Grass
	//         StepsToHatch : 5120
	//         Height : 0.7
	//         Weight : 4.0
	//         Color : Green
	//         Shape : Bipedal
	//         Habitat : Forest
	//         Kind : Flower
	//         // Pokedex : A Bellsprout's thin and flexible body lets it bend and sway to avoid any attack, however strong it may be. From its mouth, it leaks a fluid that melts even iron.
	//         Generation : 1
	//         BattlerPlayerX : -2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 21
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 1
	//         Evolutions : WEEPINBELL,"Level",21
	//         }
	//         [monsterName : {
	//         Name : Weepinbell
	//         InternalName : WEEPINBELL
	//         Type1 : GRASS
	//         Type2 : POISON
	//         BaseStats : 65,90,50,55,85,45
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 137
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 120
	//         Happiness : 70
	//         Abilities : "CHLOROPHYLL"
	//         HiddenAbility : GLUTTONY
	//         Moves : 1,"VINEWHIP",1,"GROWTH",1,WRAP,7,"GROWTH",11,WRAP,13,"SLEEPPOWDER",15,"POISONPOWDER",17,"STUNSPORE",24,ACID,29,"KNOCKOFF",32,"SWEETSCENT",39,GASTROACID,44,"RAZORLEAF",47,"POISONJAB",54,SLAM,58,WRINGOUT
	//         TutorMoves : "ATTRACT","BIND","CONFIDE","CUT","DOUBLETEAM","ENERGYBALL","FACADE","FRUSTRATION",GASTROACID,"GIGADRAIN","GRASSKNOT","HIDDENPOWER","INFESTATION","KNOCKOFF","NATUREPOWER","POISONJAB","PROTECT",REFLECT,"REST","RETURN","ROUND","SEEDBOMB","SLEEPTALK",""SLUDGE"BOMB","SNORE","SOLARBEAM","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","SYNTHESIS","THIEF","TOXIC","VENOSHOCK","WORRYSEED"
	//         Compatibility : Grass
	//         StepsToHatch : 5120
	//         Height : 1.0
	//         Weight : 6.4
	//         Color : Green
	//         Shape : HeadBase
	//         Habitat : Forest
	//         Kind : Flycatcher
	//         // Pokedex : At night, a Weepinbell hangs on to a tree branch with its hooked rear and sleeps. If it moves around in its sleep, it may wake up to find itself on the ground.
	//         Generation : 1
	//         BattlerPlayerX : 4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 5
	//         BattlerEnemyY : 19
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : VICTREEBEL,Item,LEAFSTONE
	//         }
	//         [monsterName : {
	//         Name : Victreebel
	//         InternalName : VICTREEBEL
	//         Type1 : GRASS
	//         Type2 : POISON
	//         BaseStats : 80,105,65,70,100,70
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 221
	//         EffortPoints : 0,3,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : "CHLOROPHYLL"
	//         HiddenAbility : GLUTTONY
	//         Moves : 0,LEAFTORNADO,1,LEAFTORNADO,1,STOCKPILE,1,SWALLOW,1,SPITUP,1,"VINEWHIP",1,"SLEEPPOWDER",1,"SWEETSCENT",1,"RAZORLEAF",32,"LEAFSTORM",44,LEAFBLADE
	//         TutorMoves : "ATTRACT","BIND","CONFIDE","CUT","DOUBLETEAM","ENERGYBALL","FACADE","FRUSTRATION",GASTROACID,"GIGADRAIN","GIGAIMPACT","GRASSKNOT","HIDDENPOWER","HYPERBEAM","INFESTATION","KNOCKOFF","NATUREPOWER","POISONJAB","PROTECT",REFLECT,"REST","RETURN","ROUND","SEEDBOMB","SLEEPTALK",""SLUDGE"BOMB","SNORE","SOLARBEAM","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","SYNTHESIS","THIEF","TOXIC","VENOSHOCK","WORRYSEED"
	//         Compatibility : Grass
	//         StepsToHatch : 5120
	//         Height : 1.7
	//         Weight : 15.5
	//         Color : Green
	//         Shape : HeadBase
	//         Habitat : Forest
	//         Kind : Flycatcher
	//         // Pokedex : The long vine extending from its head is waved about as if it were a living thing to attract prey. When an unsuspecting victim approaches, it is swallowed whole.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : 12
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Tentacool
	//         InternalName : TENTACOOL
	//         Type1 : WATER
	//         Type2 : POISON
	//         BaseStats : 40,40,35,70,50,100
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 67
	//         EffortPoints : 0,0,0,0,0,1
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : CLEARBODY,LIQUIDOOZE
	//         HiddenAbility : RAINDISH
	//         Moves : 1,"POISONSTING",4,"SUPERSONIC",7,CONSTRICT,10,ACID,13,"TOXICSPIKES",16,"WATERPULSE",19,WRAP,22,ACIDSPRAY,25,BUBBLEBEAM,28,BARRIER,31,"POISONJAB",34,"BRINE",37,SCREECH,40,HEX,43,"SLUDGE"WAVE,46,"HYDROPUMP",49,WRINGOUT
	//         TutorMoves : "ATTRACT","BIND","BLIZZARD","CONFIDE","CUT",DAZZLINGGLEAM,"DIVE","DOUBLETEAM","FACADE","FRUSTRATION","GIGADRAIN","HAIL","HIDDENPOWER","ICEBEAM","ICYWIND","INFESTATION","KNOCKOFF",MAGICCOAT,"PAYBACK","POISONJAB","PROTECT","RAINDANCE","REST","RETURN","ROUND","SAFEGUARD","SCALD","SLEEPTALK",""SLUDGE"BOMB","SLUDGE"WAVE,"SNORE","SUBSTITUTE","SURF","SWAGGER","SWORDSDANCE","THIEF","TOXIC","VENOSHOCK","WATERFALL","WATERPULSE"
	//         EggMoves : ACUPRESSURE,"AQUARING",AURORABEAM,"BUBBLE",CONFUSERAY,"HAZE","KNOCKOFF","MIRRORCOAT","MUDDYWATER","RAPIDSPIN","TICKLE"
	//         Compatibility : Water3
	//         StepsToHatch : 5120
	//         Height : 0.9
	//         Weight : 45.5
	//         Color : Blue
	//         Shape : Multiped
	//         Habitat : Sea
	//         Kind : Jellyfish
	//         // Pokedex : Its body is almost entirely composed of water. It ensnares its foe with its two long tentacles, then stabs with the poison stingers at their tips.
	//         Generation : 1
	//         WildItemUncommon : POISONBARB
	//         BattlerPlayerX : 9
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 0
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : TENTACRUEL,"Level",30
	//         }
	//         [monsterName : {
	//         Name : Tentacruel
	//         InternalName : TENTACRUEL
	//         Type1 : WATER
	//         Type2 : POISON
	//         BaseStats : 80,70,65,100,80,120
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 180
	//         EffortPoints : 0,0,0,0,0,2
	//         Rareness : 60
	//         Happiness : 70
	//         Abilities : CLEARBODY,LIQUIDOOZE
	//         HiddenAbility : RAINDISH
	//         Moves : 1,REFLECTTYPE,1,WRINGOUT,1,"POISONSTING",1,"SUPERSONIC",1,CONSTRICT,1,ACID,4,"SUPERSONIC",7,CONSTRICT,10,ACID,13,"TOXICSPIKES",16,"WATERPULSE",19,WRAP,22,ACIDSPRAY,25,BUBBLEBEAM,28,BARRIER,32,"POISONJAB",36,"BRINE",40,SCREECH,44,HEX,48,"SLUDGE"WAVE,52,"HYDROPUMP",56,WRINGOUT
	//         TutorMoves : "ATTRACT","BIND","BLIZZARD","CONFIDE","CUT",DAZZLINGGLEAM,"DIVE","DOUBLETEAM","FACADE","FRUSTRATION","GIGADRAIN","GIGAIMPACT","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","INFESTATION","KNOCKOFF",MAGICCOAT,"PAYBACK","POISONJAB","PROTECT","RAINDANCE","REST","RETURN","ROUND","SAFEGUARD","SCALD","SLEEPTALK",""SLUDGE"BOMB","SLUDGE"WAVE,"SNORE","SUBSTITUTE","SURF","SWAGGER","SWORDSDANCE","THIEF","TOXIC","VENOSHOCK","WATERFALL","WATERPULSE"
	//         Compatibility : Water3
	//         StepsToHatch : 5120
	//         Height : 1.6
	//         Weight : 55.0
	//         Color : Blue
	//         Shape : Multiped
	//         Habitat : Sea
	//         Kind : Jellyfish
	//         // Pokedex : It lives in complex rock formations on the ocean floor and traps prey using its 80 tentacles. Its red orbs glow when it grows excited or agitated.
	//         Generation : 1
	//         WildItemUncommon : POISONBARB
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 1
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Geodude
	//         InternalName : GEODUDE
	//         Type1 : ROCK
	//         Type2 : GROUND
	//         BaseStats : 40,80,100,20,30,30
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 60
	//         EffortPoints : 0,0,1,0,0,0
	//         Rareness : 255
	//         Happiness : 70
	//         Abilities : ROCKHEAD,STURDY
	//         HiddenAbility : SANDVEIL
	//         Moves : 1,"TACKLE",1,DEFENSECURL,4,"MUDSPORT",6,ROCKPOLISH,10,ROLLOUT,12,MAGNITUDE,16,ROCKTHROW,18,"SMACKDOWN",22,"BULLDOZE",24,SELFDESTRUCT,28,STEALTHROCK,30,ROCKBLAST,34,"EARTHQUAKE",36,EXPLOSION,40,"DOUBLEEDGE",42,STONEEDGE
	//         TutorMoves : "ATTRACT","BLOCK","BRICKBREAK","BULLDOZE","CONFIDE","DOUBLETEAM",EARTHPOWER,"EARTHQUAKE",EXPLOSION,"FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSPUNCH","FRUSTRATION","GYROBALL","HIDDENPOWER","IRONDEFENSE","NATUREPOWER","POWERUPPUNCH","PROTECT","REST","RETURN",ROCKPOLISH,"ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SLEEPTALK","SMACKDOWN","SNORE",STEALTHROCK,STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERPOWER,"SWAGGER","THUNDERPUNCH","TOXIC"
	//         EggMoves : AUTOTOMIZE,"BLOCK","CURSE","ENDURE","FLAIL","FOCUSPUNCH",HAMMERARM,MEGAPUNCH,ROCKCLIMB,WIDEGUARD
	//         Compatibility : Mineral
	//         StepsToHatch : 3840
	//         Height : 0.4
	//         Weight : 20.0
	//         Color : Brown
	//         Shape : HeadArms
	//         Habitat : Mountain
	//         Kind : Rock
	//         // Pokedex : It climbs mountain paths using only the power of its arms. Because they look just like boulders lining paths, hikers may step on them without noticing.
	//         Generation : 1
	//         WildItemUncommon : EVERSTONE
	//         BattlerPlayerX : -6
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -2
	//         BattlerEnemyY : 7
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 1
	//         Evolutions : GRAVELER,"Level",25
	//         }
	//         [monsterName : {
	//         Name : Graveler
	//         InternalName : GRAVELER
	//         Type1 : ROCK
	//         Type2 : GROUND
	//         BaseStats : 55,95,115,35,45,45
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 137
	//         EffortPoints : 0,0,2,0,0,0
	//         Rareness : 120
	//         Happiness : 70
	//         Abilities : ROCKHEAD,STURDY
	//         HiddenAbility : SANDVEIL
	//         Moves : 1,"TACKLE",1,DEFENSECURL,1,"MUDSPORT",1,ROCKPOLISH,4,"MUDSPORT",6,ROCKPOLISH,10,ROLLOUT,12,MAGNITUDE,16,ROCKTHROW,18,"SMACKDOWN",22,"BULLDOZE",24,SELFDESTRUCT,30,STEALTHROCK,34,ROCKBLAST,40,"EARTHQUAKE",44,EXPLOSION,50,"DOUBLEEDGE",54,STONEEDGE
	//         TutorMoves : "ATTRACT","BLOCK","BRICKBREAK","BULLDOZE","CONFIDE","DOUBLETEAM",EARTHPOWER,"EARTHQUAKE",EXPLOSION,"FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSPUNCH","FRUSTRATION","GYROBALL","HIDDENPOWER","IRONDEFENSE","NATUREPOWER","POWERUPPUNCH","PROTECT","REST","RETURN",ROCKPOLISH,"ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SLEEPTALK","SMACKDOWN","SNORE",STEALTHROCK,"STOMPINGTANTRUM",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERPOWER,"SWAGGER","THUNDERPUNCH","TOXIC"
	//         Compatibility : Mineral
	//         StepsToHatch : 3840
	//         Height : 1.0
	//         Weight : 105.0
	//         Color : Brown
	//         Shape : Bipedal
	//         Habitat : Mountain
	//         Kind : Rock
	//         // Pokedex : They descend from mountains by tumbling down steep slopes. They are so brutal, they smash aside obstructing trees and huge boulders with thunderous "tackle"s.
	//         Generation : 1
	//         WildItemUncommon : EVERSTONE
	//         BattlerPlayerX : -4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 20
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : GOLEM,Trade,
	//         }
	//         [monsterName : {
	//         Name : Golem
	//         InternalName : GOLEM
	//         Type1 : ROCK
	//         Type2 : GROUND
	//         BaseStats : 80,120,130,45,55,65
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 223
	//         EffortPoints : 0,0,3,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : ROCKHEAD,STURDY
	//         HiddenAbility : SANDVEIL
	//         Moves : 1,HEAVYSLAM,1,"TACKLE",1,DEFENSECURL,1,"MUDSPORT",1,ROCKPOLISH,4,"MUDSPORT",6,ROCKPOLISH,10,STEAMROLLER,12,MAGNITUDE,16,ROCKTHROW,18,"SMACKDOWN",22,"BULLDOZE",24,SELFDESTRUCT,30,STEALTHROCK,34,ROCKBLAST,40,"EARTHQUAKE",44,EXPLOSION,50,"DOUBLEEDGE",54,STONEEDGE,60,HEAVYSLAM
	//         TutorMoves : "ATTRACT","BLOCK","BRICKBREAK","BULLDOZE","CONFIDE","DOUBLETEAM",EARTHPOWER,"EARTHQUAKE",EXPLOSION,"FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","GYROBALL","HIDDENPOWER","HYPERBEAM","IRONDEFENSE",IRONHEAD,"NATUREPOWER","POWERUPPUNCH","PROTECT","REST","RETURN","ROAR",ROCKPOLISH,"ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SLEEPTALK","SMACKDOWN","SNORE",STEALTHROCK,"STOMPINGTANTRUM",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERPOWER,"SWAGGER","THUNDERPUNCH","TOXIC"
	//         Compatibility : Mineral
	//         StepsToHatch : 3840
	//         Height : 1.4
	//         Weight : 300.0
	//         Color : Brown
	//         Shape : Bipedal
	//         Habitat : Mountain
	//         Kind : Megaton
	//         // Pokedex : It is said to live in volcanic craters on mountain peaks. Once a year, it sheds its hide and grows larger. The shed hide crumbles and returns to the soil.
	//         Generation : 1
	//         WildItemUncommon : EVERSTONE
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -3
	//         BattlerEnemyY : 16
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Ponyta
	//         InternalName : PONYTA
	//         Type1 : FIRE
	//         BaseStats : 50,85,55,90,65,65
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 82
	//         EffortPoints : 0,0,0,1,0,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : RUNAWAY,FLASHFIRE
	//         HiddenAbility : FLAMEBODY
	//         Moves : 1,"GROWL",1,"TACKLE",4,"TAILWHIP",9,"EMBER",13,FLAMEWHEEL,17,STOMP,21,"FLAMECHARGE",25,"FIRESPIN",29,"TAKEDOWN",33,"INFERNO",37,"AGILITY",41,"FIREBLAST",45,BOUNCE,49,"FLAREBLITZ"
	//         TutorMoves : ALLYSWITCH,"ATTRACT",BOUNCE,"CONFIDE","DOUBLETEAM","ECHOEDVOICE","FACADE","FIREBLAST","FLAMECHARGE","FLAMETHROWER","FRUSTRATION","HEATWAVE","HIDDENPOWER","IRONTAIL",LOWKICK,"OVERHEAT","PROTECT","REST","RETURN","ROUND","SLEEPTALK","SNORE","SOLARBEAM","STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER","TOXIC",WILDCHARGE,"WILLOWISP"
	//         EggMoves : ALLYSWITCH,"CAPTIVATE","CHARM","DOUBLEEDGE",DOUBLEKICK,FLAMEWHEEL,HIGHHORSEPOWER,HORNDRILL,HYPNOSIS,LOWKICK,MORNINGSUN,THRASH
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 1.0
	//         Weight : 30.0
	//         Color : Yellow
	//         Shape : "Quadruped"
	//         Habitat : "Grassland"
	//         Kind : Fire Horse
	//         // Pokedex : A Ponyta is very weak at birth. It can barely stand up. Its legs become stronger as it stumbles and falls while trying to keep up with its parent.
	//         Generation : 1
	//         BattlerPlayerX : 2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 5
	//         BattlerEnemyY : 16
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : RAPIDASH,"Level",40
	//         }
	//         [monsterName : {
	//         Name : Rapidash
	//         InternalName : RAPIDASH
	//         Type1 : FIRE
	//         BaseStats : 65,100,70,105,80,80
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 175
	//         EffortPoints : 0,0,0,2,0,0
	//         Rareness : 60
	//         Happiness : 70
	//         Abilities : RUNAWAY,FLASHFIRE
	//         HiddenAbility : FLAMEBODY
	//         Moves : 0,"FURYATTACK",1,"FURYATTACK",1,"POISONJAB",1,MEGAHORN,1,"GROWL",1,"QUICKATTACK",1,"TAILWHIP",1,"EMBER",4,"TAILWHIP",9,"EMBER",13,FLAMEWHEEL,17,STOMP,21,"FLAMECHARGE",25,"FIRESPIN",29,"TAKEDOWN",33,"INFERNO",37,"AGILITY",41,"FIREBLAST",45,BOUNCE,49,"FLAREBLITZ"
	//         TutorMoves : ALLYSWITCH,"ATTRACT",BOUNCE,"CONFIDE","DOUBLETEAM","DRILLRUN","ECHOEDVOICE","FACADE","FIREBLAST","FLAMECHARGE","FLAMETHROWER","FRUSTRATION","GIGAIMPACT","HEATWAVE","HIDDENPOWER","HYPERBEAM","IRONTAIL",LOWKICK,"OVERHEAT","POISONJAB","PROTECT","REST","RETURN","ROUND","SLEEPTALK",SMARTSTRIKE,"SNORE","SOLARBEAM","STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER","THROATCHOP","TOXIC",WILDCHARGE,"WILLOWISP"
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 1.7
	//         Weight : 95.0
	//         Color : Yellow
	//         Shape : "Quadruped"
	//         Habitat : "Grassland"
	//         Kind : Fire Horse
	//         // Pokedex : It usually canters casually in the fields and plains. But once a Rapidash turns serious, its fiery manes flare and blaze as it gallops its way up to 150 mph.
	//         Generation : 1
	//         BattlerPlayerX : -7
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 5
	//         BattlerEnemyY : 8
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Slowpoke
	//         InternalName : SLOWPOKE
	//         Type1 : WATER
	//         Type2 : "PSYCHIC"
	//         BaseStats : 90,65,65,15,40,40
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 63
	//         EffortPoints : 1,0,0,0,0,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : OBLIVIOUS,OWNTEMPO
	//         HiddenAbility : REGENERATOR
	//         Moves : 1,"CURSE",1,"YAWN",1,"TACKLE",5,"GROWL",9,"WATERGUN",14,"CONFUSION",19,DISABLE,23,HEADBUTT,28,"WATERPULSE",32,"ZENHEADBUTT",36,SLACKOFF,41,"AMNESIA",45,"PSYCHIC",49,"RAINDANCE",54,"PSYCHUP",58,HEALPULSE
	//         TutorMoves : AFTERYOU,"AQUATAIL","ATTRACT","BLIZZARD","BLOCK","BULLDOZE",CALMMIND,"CONFIDE","DIVE","DOUBLETEAM","DREAMEATER","EARTHQUAKE","ECHOEDVOICE","FACADE","FIREBLAST","FLAMETHROWER","FRUSTRATION","GRASSKNOT","HAIL","HIDDENPOWER","ICEBEAM","ICYWIND","IRONTAIL","LIGHTSCREEN",MAGICCOAT,"PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE",RECYCLE,"REST","RETURN","ROUND","SAFEGUARD","SCALD","SHADOWBALL","SIGNALBEAM","SKILLSWAP","SLEEPTALK","SNORE","STRENGTH","SUBSTITUTE","SUNNYDAY","SURF","SWAGGER",TELEKINESIS,THUNDERWAVE,"TOXIC",TRICK,TRICKROOM,"WATERPULSE",WONDERROOM,"ZENHEADBUTT"
	//         EggMoves : BELCH,"BELLYDRUM","BLOCK",FUTURESIGHT,MEFIRST,"MUDSPORT","SLEEPTALK","SNORE",STOMP,WONDERROOM,"ZENHEADBUTT"
	//         Compatibility : Monster,Water1
	//         StepsToHatch : 5120
	//         Height : 1.2
	//         Weight : 36.0
	//         Color : Pink
	//         Shape : "Quadruped"
	//         Habitat : WatersEdge
	//         Kind : Dopey
	//         // Pokedex : It catches prey by dipping its tail in water at the side of a river. But it often forgets what it is doing and spends whole days just loafing at the water's edge.
	//         Generation : 1
	//         WildItemUncommon : LAGGINGTAIL
	//         BattlerPlayerX : -4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 3
	//         BattlerEnemyY : 29
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : SLOWBRO,"Level",37,SLOWKING,TradeItem,KINGSROCK
	//         }
	//         [monsterName : {
	//         Name : Slowbro
	//         InternalName : SLOWBRO
	//         Type1 : WATER
	//         Type2 : "PSYCHIC"
	//         BaseStats : 95,75,110,30,100,80
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 172
	//         EffortPoints : 0,0,2,0,0,0
	//         Rareness : 75
	//         Happiness : 70
	//         Abilities : OBLIVIOUS,OWNTEMPO
	//         HiddenAbility : REGENERATOR
	//         Moves : 0,"WITHDRAW",1,"WITHDRAW",1,HEALPULSE,1,"CURSE",1,"YAWN",1,"TACKLE",1,"GROWL",5,"GROWL",9,"WATERGUN",14,"CONFUSION",19,DISABLE,23,HEADBUTT,28,"WATERPULSE",32,"ZENHEADBUTT",36,SLACKOFF,43,"AMNESIA",49,"PSYCHIC",55,"RAINDANCE",62,"PSYCHUP",68,HEALPULSE
	//         TutorMoves : "AERIALACE",AFTERYOU,"AQUATAIL","ATTRACT","BLIZZARD","BLOCK","BRICKBREAK","BULLDOZE",CALMMIND,"CONFIDE","DIVE","DOUBLETEAM",DRAINPUNCH,"DREAMEATER","EARTHQUAKE","ECHOEDVOICE","FACADE","FIREBLAST","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH",FOULPLAY,"FRUSTRATION","GIGAIMPACT","GRASSKNOT","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICEPUNCH","ICYWIND","IRONDEFENSE","IRONTAIL","LIGHTSCREEN",MAGICCOAT,"PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE",RECYCLE,"REST","RETURN","ROCKSMASH","ROUND","SAFEGUARD","SCALD","SHADOWBALL","SIGNALBEAM","SKILLSWAP","SLEEPTALK","SNORE","STRENGTH","SUBSTITUTE","SUNNYDAY","SURF","SWAGGER",TELEKINESIS,THUNDERWAVE,"TOXIC",TRICK,TRICKROOM,"WATERPULSE",WONDERROOM,"ZENHEADBUTT"
	//         Compatibility : Monster,Water1
	//         StepsToHatch : 5120
	//         Height : 1.6
	//         Weight : 78.5
	//         Color : Pink
	//         Shape : BipedalTail
	//         Habitat : WatersEdge
	//         Kind : Hermit Crab
	//         // Pokedex : Its tail has a Shellder firmly attached with a bite. As a result, the tail can't be used for fishing anymore. This forces it to reluctantly swim and catch prey.
	//         Generation : 1
	//         WildItemUncommon : KINGSROCK
	//         BattlerPlayerX : -7
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 6
	//         BattlerEnemyY : 14
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Magnemite
	//         InternalName : MAGNEMITE
	//         Type1 : ELECTRIC
	//         Type2 : STEEL
	//         BaseStats : 25,35,70,45,95,55
	//         GenderRate : Genderless
	//         GrowthRate : Medium
	//         BaseEXP : 65
	//         EffortPoints : 0,0,0,0,1,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : MAGNETPULL,STURDY
	//         HiddenAbility : ANALYTIC
	//         Moves : 1,"SUPERSONIC",1,"TACKLE",5,THUNDERSHOCK,7,THUNDERWAVE,11,MAGNETBOMB,13,"LIGHTSCREEN",17,SONICBOOM,19,SPARK,23,MIRRORSHOT,25,METALSOUND,29,ELECTROBALL,31,"FLASHCANNON",35,SCREECH,37,DISCHARGE,41,LOCKON,43,MAGNETRISE,47,"GYROBALL",49,ZAPCANNON
	//         TutorMoves : CHARGEBEAM,"CONFIDE","DOUBLETEAM","ELECTROWEB",EXPLOSION,"FACADE","FLASHCANNON","FRUSTRATION",GRAVITY,"GYROBALL","HIDDENPOWER","IRONDEFENSE","LIGHTSCREEN",MAGICCOAT,MAGNETRISE,"PROTECT","PSYCHUP","RAINDANCE",RECYCLE,REFLECT,"REST","RETURN","ROUND",SHOCKWAVE,"SIGNALBEAM","SLEEPTALK","SNORE","SUBSTITUTE","SUNNYDAY","SWAGGER",THUNDER,THUNDERBOLT,THUNDERWAVE,"TOXIC",VOLTSWITCH,WILDCHARGE
	//         Compatibility : Mineral
	//         StepsToHatch : 5120
	//         Height : 0.3
	//         Weight : 6.0
	//         Color : Gray
	//         Shape : HeadArms
	//         Habitat : RoughTerrain
	//         Kind : Magnet
	//         // Pokedex : The units at its sides are extremely powerful magnets. They generate enough magnetism to draw in iron objects from over 300 feet away.
	//         Generation : 1
	//         WildItemUncommon : METALCOAT
	//         BattlerPlayerX : 2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 6
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 1
	//         Evolutions : MAGNETON,"Level",30
	//         }
	//         [monsterName : {
	//         Name : Magneton
	//         InternalName : MAGNETON
	//         Type1 : ELECTRIC
	//         Type2 : STEEL
	//         BaseStats : 50,60,95,70,120,70
	//         GenderRate : Genderless
	//         GrowthRate : Medium
	//         BaseEXP : 163
	//         EffortPoints : 0,0,0,0,2,0
	//         Rareness : 60
	//         Happiness : 70
	//         Abilities : MAGNETPULL,STURDY
	//         HiddenAbility : ANALYTIC
	//         Moves : 0,TRIATTACK,1,TRIATTACK,1,ELECTRICTERRAIN,1,ZAPCANNON,1,"SUPERSONIC",1,"TACKLE",1,THUNDERSHOCK,1,THUNDERWAVE,5,THUNDERSHOCK,7,THUNDERWAVE,11,MAGNETBOMB,13,"LIGHTSCREEN",17,SONICBOOM,19,SPARK,23,MIRRORSHOT,25,METALSOUND,29,ELECTROBALL,33,"FLASHCANNON",39,SCREECH,43,DISCHARGE,49,LOCKON,53,MAGNETRISE,59,"GYROBALL",63,ZAPCANNON
	//         TutorMoves : CHARGEBEAM,"CONFIDE","DOUBLETEAM","ELECTROWEB",EXPLOSION,"FACADE","FLASHCANNON","FRUSTRATION","GIGAIMPACT",GRAVITY,"GYROBALL","HIDDENPOWER","HYPERBEAM","IRONDEFENSE","LIGHTSCREEN",MAGICCOAT,MAGNETRISE,"PROTECT","PSYCHUP","RAINDANCE",RECYCLE,REFLECT,"REST","RETURN","ROUND",SHOCKWAVE,"SIGNALBEAM","SLEEPTALK","SNORE","SUBSTITUTE","SUNNYDAY","SWAGGER",THUNDER,THUNDERBOLT,THUNDERWAVE,"TOXIC",VOLTSWITCH,WILDCHARGE
	//         Compatibility : Mineral
	//         StepsToHatch : 5120
	//         Height : 1.0
	//         Weight : 60.0
	//         Color : Gray
	//         Shape : MultiBody
	//         Habitat : RoughTerrain
	//         Kind : Magnet
	//         // Pokedex : It is actually three Magnemite linked by magnetism. It generates powerful radio waves that raise temperatures by 3.6 degrees F within a 3,300-foot radius.
	//         Generation : 1
	//         WildItemUncommon : METALCOAT
	//         BattlerPlayerX : -3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : -2
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : MAGNEZONE,Location,49,MAGNEZONE,Location,50,MAGNEZONE,Location,51
	//         }
	//         [monsterName : {
	//         Name : Farfetch'd
	//         InternalName : FARFETCHD
	//         Type1 : NORMAL
	//         Type2 : FLYING
	//         BaseStats : 52,90,55,60,58,62
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 132
	//         EffortPoints : 0,1,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : KEENEYE,INNERFOCUS
	//         HiddenAbility : DEFIANT
	//         Moves : 1,BRAVEBIRD,1,"POISONJAB",1,PECK,1,"SANDATTACK",1,LEER,1,FURYCUTTER,7,"FURYATTACK",9,"AERIALACE",13,"KNOCKOFF",19,"SLASH",21,"AIRCUTTER",25,"SWORDSDANCE",31,"AGILITY",33,NIGHTSLASH,37,"ACROBATICS",43,FEINT,45,"FALSESWIPE",49,"AIRSLASH",55,BRAVEBIRD
	//         TutorMoves : "ACROBATICS","AERIALACE","ATTRACT","BRUTALSWING","CONFIDE","COVET","CUT","DEFOG","DOUBLETEAM","FACADE","FALSESWIPE","FLY","FRUSTRATION","HEATWAVE","HELPINGHAND","HIDDENPOWER","IRONTAIL","KNOCKOFF","LASERFOCUS","LASTRESORT","POISONJAB","PROTECT","PSYCHUP","REST","RETURN","ROOST","ROUND",SKYATTACK,"SLEEPTALK","SNORE","STEELWING","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","TAILWIND","THIEF","THROATCHOP","TOXIC",UPROAR,"UTURN","WORKUP"
	//         EggMoves : "COVET","CURSE",FEATHERDANCE,FINALGAMBIT,FIRSTIMPRESSION,"FLAIL","FORESIGHT","GUST",LEAFBLADE,MIRRORMOVE,MUDSLAP,NIGHTSLASH,"QUICKATTACK",REVENGE,"ROOST",SIMPLEBEAM,"STEELWING","TRUMPCARD"
	//         Compatibility : Flying,Field
	//         StepsToHatch : 5120
	//         Height : 0.8
	//         Weight : 15.0
	//         Color : Brown
	//         Shape : Winged
	//         Habitat : "Grassland"
	//         Kind : Wild Duck
	//         // Pokedex : It is always seen with a stick from a plant. Apparently, there are good sticks and bad sticks. This Pokémon occasionally fights with others over choice sticks.
	//         Generation : 1
	//         WildItemUncommon : STICK
	//         BattlerPlayerX : 4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 19
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [monsterName : {
	//         Name : Doduo
	//         InternalName : DODUO
	//         Type1 : NORMAL
	//         Type2 : FLYING
	//         BaseStats : 35,85,45,75,35,35
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 62
	//         EffortPoints : 0,1,0,0,0,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : RUNAWAY,EARLYBIRD
	//         HiddenAbility : TANGLEDFEET
	//         Moves : 1,PECK,1,"GROWL",5,"QUICKATTACK",8,"RAGE",12,"FURYATTACK",15,"PURSUIT",19,PLUCK,22,DOUBLEHIT,26,"AGILITY",29,UPROAR,33,ACUPRESSURE,36,"SWORDSDANCE",40,JUMPKICK,43,DRILLPECK,47,"ENDEAVOR",50,THRASH
	//         TutorMoves : "AERIALACE","ATTRACT","CONFIDE","DOUBLETEAM","ECHOEDVOICE","ENDEAVOR","FACADE","FLY","FRUSTRATION","HIDDENPOWER","KNOCKOFF","PROTECT","REST","RETURN","ROOST","ROUND","SLEEPTALK","SNORE","STEELWING","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","THIEF","TOXIC",UPROAR,"WORKUP"
	//         EggMoves : "ASSURANCE",BRAVEBIRD,"ENDEAVOR",FEINTATTACK,"FLAIL","HAZE",MIRRORMOVE,"NATURALGIFT","QUICKATTACK","SUPERSONIC"
	//         Compatibility : Flying
	//         StepsToHatch : 5120
	//         Height : 1.4
	//         Weight : 39.2
	//         Color : Brown
	//         Shape : HeadLegs
	//         Habitat : "Grassland"
	//         Kind : Twin Bird
	//         // Pokedex : Even while eating or sleeping, one of the heads remains always vigilant for any sign of danger. When threatened, it flees at over 60 miles per hour.
	//         Generation : 1
	//         WildItemUncommon : SHARPBEAK
	//         BattlerPlayerX : 14
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -10
	//         BattlerEnemyY : 16
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : DODRIO,"Level",31
	//         }
	//         [monsterName : {
	//         Name : Dodrio
	//         InternalName : DODRIO
	//         Type1 : NORMAL
	//         Type2 : FLYING
	//         BaseStats : 60,110,70,110,60,60
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 165
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : RUNAWAY,EARLYBIRD
	//         HiddenAbility : TANGLEDFEET
	//         Moves : 0,TRIATTACK,1,TRIATTACK,1,PECK,1,"GROWL",1,"QUICKATTACK",1,"RAGE",5,"QUICKATTACK",8,"RAGE",12,"FURYATTACK",15,"PURSUIT",19,PLUCK,22,DOUBLEHIT,26,"AGILITY",29,UPROAR,34,ACUPRESSURE,38,"SWORDSDANCE",43,JUMPKICK,47,DRILLPECK,52,"ENDEAVOR",56,THRASH
	//         TutorMoves : "AERIALACE","ATTRACT","CONFIDE","DOUBLETEAM","ECHOEDVOICE","ENDEAVOR","FACADE","FLY","FRUSTRATION","GIGAIMPACT","HIDDENPOWER","HYPERBEAM","KNOCKOFF","PAYBACK","PROTECT","REST","RETURN","ROOST","ROUND",SKYATTACK,"SLEEPTALK","SNORE","STEELWING","STOMPINGTANTRUM","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE",TAUNT,"THIEF",TORMENT,"TOXIC",UPROAR,"WORKUP"
	//         Compatibility : Flying
	//         StepsToHatch : 5120
	//         Height : 1.8
	//         Weight : 85.2
	//         Color : Brown
	//         Shape : HeadLegs
	//         Habitat : "Grassland"
	//         Kind : Triple Bird
	//         // Pokedex : A peculiar Pokémon species with three heads. It vigorously races across grassy plains even in arid seasons with little rainfall.
	//         Generation : 1
	//         WildItemUncommon : SHARPBEAK
	//         BattlerPlayerX : 8
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -2
	//         BattlerEnemyY : 4
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Seel
	//         InternalName : SEEL
	//         Type1 : WATER
	//         BaseStats : 65,45,55,45,45,70
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 65
	//         EffortPoints : 0,0,0,0,0,1
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : THICKFAT,HYDRATION
	//         HiddenAbility : ICEBODY
	//         Moves : 1,HEADBUTT,3,"GROWL",7,WATERSPORT,11,"ICYWIND",13,ENCORE,17,ICESHARD,21,"REST",23,"AQUARING",27,AURORABEAM,31,"AQUAJET",33,"BRINE",37,"TAKEDOWN",41,"DIVE",43,"AQUATAIL",47,"ICEBEAM",51,"SAFEGUARD",53,"HAIL"
	//         TutorMoves : "AQUATAIL","ATTRACT","BLIZZARD","CONFIDE","DIVE","DOUBLETEAM","DRILLRUN","ECHOEDVOICE","FACADE","FLING","FRUSTRATION","HAIL","HIDDENPOWER","ICEBEAM","ICYWIND","IRONTAIL","PROTECT","RAINDANCE","REST","RETURN","ROUND","SAFEGUARD","SIGNALBEAM","SLEEPTALK",SMARTSTRIKE,"SNORE","SUBSTITUTE","SURF","SWAGGER","THIEF","TOXIC","WATERFALL","WATERPULSE"
	//         EggMoves : BELCH,DISABLE,ENCORE,ENTRAINMENT,"FAKEOUT",HORNDRILL,ICICLESPEAR,"IRONTAIL",LICK,PERISHSONG,"SIGNALBEAM",SLAM,"SLEEPTALK",SPITUP,STOCKPILE,SWALLOW,"WATERPULSE"
	//         Compatibility : Water1,Field
	//         StepsToHatch : 5120
	//         Height : 1.1
	//         Weight : 90.0
	//         Color : White
	//         Shape : Finned
	//         Habitat : Sea
	//         Kind : Sea Lion
	//         // Pokedex : Seel hunt for prey in frigid, ice-covered seas. When it needs to breathe, it punches a hole through the ice with the sharply protruding section of its head.
	//         Generation : 1
	//         BattlerPlayerX : -8
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 4
	//         BattlerEnemyY : 17
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : DEWGONG,"Level",34
	//         }
	//         [monsterName : {
	//         Name : Dewgong
	//         InternalName : DEWGONG
	//         Type1 : WATER
	//         Type2 : ICE
	//         BaseStats : 90,70,80,70,70,95
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 166
	//         EffortPoints : 0,0,0,0,0,2
	//         Rareness : 75
	//         Happiness : 70
	//         Abilities : THICKFAT,HYDRATION
	//         HiddenAbility : ICEBODY
	//         Moves : 0,SHEERCOLD,1,SHEERCOLD,1,HEADBUTT,1,"GROWL",1,"SIGNALBEAM",1,"ICYWIND",3,"GROWL",7,"SIGNALBEAM",11,"ICYWIND",13,ENCORE,17,ICESHARD,21,"REST",23,"AQUARING",27,AURORABEAM,31,"AQUAJET",33,"BRINE",39,"TAKEDOWN",45,"DIVE",49,"AQUATAIL",55,"ICEBEAM",61,"SAFEGUARD",65,"HAIL"
	//         TutorMoves : "AQUATAIL","ATTRACT","BLIZZARD","CONFIDE","DIVE","DOUBLETEAM","DRILLRUN","ECHOEDVOICE","FACADE","FLING",FROSTBREATH,"FRUSTRATION","GIGAIMPACT","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","IRONTAIL","LIQUIDATION","PROTECT","RAINDANCE","REST","RETURN","ROUND","SAFEGUARD","SIGNALBEAM","SLEEPTALK",SMARTSTRIKE,"SNORE","SUBSTITUTE","SURF","SWAGGER","THIEF","TOXIC","WATERFALL","WATERPULSE"
	//         Compatibility : Water1,Field
	//         StepsToHatch : 5120
	//         Height : 1.7
	//         Weight : 120.0
	//         Color : White
	//         Shape : Finned
	//         Habitat : Sea
	//         Kind : Sea Lion
	//         // Pokedex : It loves to snooze on bitterly cold ice. The sight of this Pokémon sleeping on a glacier was mistakenly thought to be a mermaid by a mariner long ago.
	//         Generation : 1
	//         BattlerPlayerX : -7
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 13
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Grimer
	//         InternalName : GRIMER
	//         Type1 : POISON
	//         BaseStats : 80,80,50,25,40,50
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 65
	//         EffortPoints : 1,0,0,0,0,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : STENCH,STICKYHOLD
	//         HiddenAbility : POISONTOUCH
	//         Moves : 1,POUND,1,POISONGAS,4,"HARDEN",7,MUDSLAP,12,DISABLE,15,"SLUDGE",18,MUDBOMB,21,MINIMIZE,26,"FLING",29,""SLUDGE"BOMB",32,"SLUDGE"WAVE,37,SCREECH,40,GUNKSHOT,43,ACIDARMOR,46,BELCH,48,MEMENTO
	//         TutorMoves : "ATTRACT","CONFIDE","DOUBLETEAM",EXPLOSION,"FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FRUSTRATION","GIGADRAIN",GUNKSHOT,"HIDDENPOWER","ICEPUNCH","INFESTATION",PAINSPLIT,"PAYBACK","POISONJAB","POWERUPPUNCH","PROTECT","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKTOMB","ROUND","SHADOWBALL",SHOCKWAVE,"SLEEPTALK",""SLUDGE"BOMB","SLUDGE"WAVE,"SNORE","STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,"THIEF",THUNDER,THUNDERBOLT,"THUNDERPUNCH",TORMENT,"TOXIC","VENOSHOCK"
	//         EggMoves : ACIDSPRAY,"CURSE","HAZE",IMPRISON,LICK,MEANLOOK,"POWERUPPUNCH","SCARYFACE",SHADOWPUNCH,SHADOWSNEAK,SPITUP,STOCKPILE,SWALLOW
	//         Compatibility : Amorphous
	//         StepsToHatch : 5120
	//         Height : 0.9
	//         Weight : 30.0
	//         Color : Purple
	//         Shape : HeadArms
	//         Habitat : Urban
	//         Kind : "Sludge"
	//         // Pokedex : Born from polluted "sludge" in the sea, Grimer's favorite food is anything filthy. They feed on wastewater pumped out from factories.
	//         Generation : 1
	//         WildItemUncommon : BLACK"SLUDGE"
	//         BattlerPlayerX : 3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -6
	//         BattlerEnemyY : 24
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : MUK,"Level",38
	//         }
	//         [monsterName : {
	//         Name : Muk
	//         InternalName : MUK
	//         Type1 : POISON
	//         BaseStats : 105,105,75,50,65,100
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 175
	//         EffortPoints : 1,1,0,0,0,0
	//         Rareness : 75
	//         Happiness : 70
	//         Abilities : STENCH,STICKYHOLD
	//         HiddenAbility : POISONTOUCH
	//         Moves : 0,VENOMDRENCH,1,VENOMDRENCH,1,POUND,1,POISONGAS,1,"HARDEN",1,MUDSLAP,4,"HARDEN",7,MUDSLAP,12,DISABLE,15,"SLUDGE",18,MUDBOMB,21,MINIMIZE,26,"FLING",29,""SLUDGE"BOMB",32,"SLUDGE"WAVE,37,SCREECH,40,GUNKSHOT,46,ACIDARMOR,52,BELCH,57,MEMENTO
	//         TutorMoves : "ATTRACT","BLOCK","BRICKBREAK","CONFIDE","DARKPULSE","DOUBLETEAM",EXPLOSION,"FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGADRAIN","GIGAIMPACT",GUNKSHOT,"HIDDENPOWER","HYPERBEAM","ICEPUNCH","INFESTATION",PAINSPLIT,"PAYBACK","POISONJAB","POWERUPPUNCH","PROTECT","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND","SHADOWBALL",SHOCKWAVE,"SLEEPTALK",""SLUDGE"BOMB","SLUDGE"WAVE,"SNORE","STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,"THIEF",THUNDER,THUNDERBOLT,"THUNDERPUNCH",TORMENT,"TOXIC","VENOSHOCK"
	//         Compatibility : Amorphous
	//         StepsToHatch : 5120
	//         Height : 1.2
	//         Weight : 30.0
	//         Color : Purple
	//         Shape : HeadArms
	//         Habitat : Urban
	//         Kind : "Sludge"
	//         // Pokedex : It prefers warm and humid habitats. In the summertime, the toxic substances in its body intensify, making Muk reek like putrid kitchen garbage.
	//         Generation : 1
	//         WildItemCommon : BLACK"SLUDGE"
	//         BattlerPlayerX : -2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 12
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Shellder
	//         InternalName : SHELLDER
	//         Type1 : WATER
	//         BaseStats : 30,65,100,40,45,25
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 61
	//         EffortPoints : 0,0,1,0,0,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : SHELLARMOR,SKILLLINK
	//         HiddenAbility : OVERCOAT
	//         Moves : 1,"TACKLE",1,"WATERGUN",4,"WITHDRAW",8,"SUPERSONIC",13,ICICLESPEAR,16,"PROTECT",20,LEER,25,CLAMP,28,ICESHARD,32,RAZORSHELL,37,AURORABEAM,40,WHIRLPOOL,44,"BRINE",49,"IRONDEFENSE",52,"ICEBEAM",56,SHELLSMASH,61,"HYDROPUMP"
	//         TutorMoves : "ATTRACT","BLIZZARD","CONFIDE","DIVE","DOUBLETEAM",EXPLOSION,"FACADE","FRUSTRATION","HAIL","HIDDENPOWER","ICEBEAM","ICYWIND","IRONDEFENSE","LIQUIDATION","PAYBACK","PROTECT","RAINDANCE","REST","RETURN","ROUND","SLEEPTALK","SNORE","SUBSTITUTE","SURF","SWAGGER","TOXIC","WATERPULSE"
	//         EggMoves : "AQUARING",AVALANCHE,BARRIER,BUBBLEBEAM,ICICLESPEAR,MUDSHOT,"RAPIDSPIN",ROCKBLAST,SCREECH,"TAKEDOWN","TWINEEDLE","WATERPULSE"
	//         Compatibility : Water3
	//         StepsToHatch : 5120
	//         Height : 0.3
	//         Weight : 4.0
	//         Color : Purple
	//         Shape : Head
	//         Habitat : Sea
	//         Kind : Bivalve
	//         // Pokedex : At night, it burrows a hole in the seafloor with its broad tongue to make a place to sleep. While asleep, it closes its shell, but leaves its tongue hanging out.
	//         Generation : 1
	//         WildItemCommon : PEARL
	//         WildItemUncommon : BIGPEARL
	//         BattlerPlayerX : -1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 27
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : CLOYSTER,Item,WATERSTONE
	//         }
	//         [monsterName : {
	//         Name : Cloyster
	//         InternalName : CLOYSTER
	//         Type1 : WATER
	//         Type2 : ICE
	//         BaseStats : 50,95,180,70,85,45
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 184
	//         EffortPoints : 0,0,2,0,0,0
	//         Rareness : 60
	//         Happiness : 70
	//         Abilities : SHELLARMOR,SKILLLINK
	//         HiddenAbility : OVERCOAT
	//         Moves : 1,"HYDROPUMP",1,SHELLSMASH,1,"TOXICSPIKES",1,"WITHDRAW",1,"SUPERSONIC",1,"PROTECT",1,AURORABEAM,13,SPIKECANNON,28,SPIKES,52,ICICLECRASH
	//         TutorMoves : "ATTRACT","BLIZZARD","CONFIDE","DIVE","DOUBLETEAM",EXPLOSION,"FACADE",FROSTBREATH,"FRUSTRATION","GIGAIMPACT","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","IRONDEFENSE","LIQUIDATION","PAYBACK","POISONJAB","PROTECT","RAINDANCE","REST","RETURN","ROUND","SIGNALBEAM","SLEEPTALK",SMARTSTRIKE,"SNORE","SUBSTITUTE","SURF","SWAGGER",TORMENT,"TOXIC","WATERPULSE"
	//         Compatibility : Water3
	//         StepsToHatch : 5120
	//         Height : 1.5
	//         Weight : 132.5
	//         Color : Purple
	//         Shape : Head
	//         Habitat : Sea
	//         Kind : Bivalve
	//         // Pokedex : It swims in the sea by swallowing water, then jetting it out toward the rear. The Cloyster shoots spikes from its shell using the same system.
	//         Generation : 1
	//         WildItemCommon : PEARL
	//         WildItemUncommon : BIGPEARL
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -4
	//         BattlerEnemyY : 4
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [monsterName : {
	//         Name : Gastly
	//         InternalName : GASTLY
	//         Type1 : GHOST
	//         Type2 : POISON
	//         BaseStats : 30,35,30,80,100,35
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 62
	//         EffortPoints : 0,0,0,0,1,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : LEVITATE
	//         Moves : 1,HYPNOSIS,1,LICK,5,SPITE,8,MEANLOOK,12,"CURSE",15,NIGHTSHADE,19,CONFUSERAY,22,SUCKERPUNCH,26,"PAYBACK",29,"SHADOWBALL",33,"DREAMEATER",36,"DARKPULSE",40,DESTINYBOND,43,HEX,47,NIGHTMARE
	//         TutorMoves : ALLYSWITCH,"ATTRACT","CONFIDE","DARKPULSE",DAZZLINGGLEAM,"DOUBLETEAM","DREAMEATER",EMBARGO,"ENERGYBALL",EXPLOSION,"FACADE","FIREPUNCH",FOULPLAY,"FRUSTRATION","GIGADRAIN","HIDDENPOWER","ICEPUNCH","ICYWIND","INFESTATION","KNOCKOFF",PAINSPLIT,"PAYBACK","PROTECT","PSYCHIC","PSYCHUP","RAINDANCE","REST","RETURN","ROUND","SHADOWBALL","SKILLSWAP","SLEEPTALK",""SLUDGE"BOMB",SNATCH,"SNORE",SPITE,"SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,TELEKINESIS,"THIEF",THUNDERBOLT,"THUNDERPUNCH",TORMENT,"TOXIC",TRICK,TRICKROOM,UPROAR,"VENOSHOCK","WILLOWISP",WONDERROOM
	//         EggMoves : ASTONISH,CLEARSMOG,DISABLE,"FIREPUNCH",GRUDGE,"HAZE","ICEPUNCH",PERISHSONG,PSYWAVE,REFLECTTYPE,"SCARYFACE",SMOG,"THUNDERPUNCH"
	//         Compatibility : Amorphous
	//         StepsToHatch : 5120
	//         Height : 1.3
	//         Weight : 0.1
	//         Color : Purple
	//         Shape : Head
	//         Habitat : Cave
	//         Kind : Gas
	//         // Pokedex : When exposed to a strong wind, a Gastly's gaseous body quickly dwindles away. They cluster under the eaves of houses to escape the ravages of wind.
	//         Generation : 1
	//         BattlerPlayerX : -1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 6
	//         BattlerEnemyY : -2
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : HAUNTER,"Level",25
	//         }
	//         [monsterName : {
	//         Name : Haunter
	//         InternalName : HAUNTER
	//         Type1 : GHOST
	//         Type2 : POISON
	//         BaseStats : 45,50,45,95,115,55
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 142
	//         EffortPoints : 0,0,0,0,2,0
	//         Rareness : 90
	//         Happiness : 70
	//         Abilities : LEVITATE
	//         Moves : 0,SHADOWPUNCH,1,SHADOWPUNCH,1,HYPNOSIS,1,LICK,1,SPITE,5,SPITE,8,MEANLOOK,12,"CURSE",15,NIGHTSHADE,19,CONFUSERAY,22,SUCKERPUNCH,28,"PAYBACK",33,"SHADOWBALL",39,"DREAMEATER",44,"DARKPULSE",50,DESTINYBOND,55,HEX,61,NIGHTMARE
	//         TutorMoves : ALLYSWITCH,"ATTRACT","CONFIDE","DARKPULSE",DAZZLINGGLEAM,"DOUBLETEAM","DREAMEATER",EMBARGO,"ENERGYBALL",EXPLOSION,"FACADE","FIREPUNCH","FLING",FOULPLAY,"FRUSTRATION","GIGADRAIN","HIDDENPOWER","ICEPUNCH","ICYWIND","INFESTATION","KNOCKOFF",PAINSPLIT,"PAYBACK","POISONJAB","PROTECT","PSYCHIC","PSYCHUP","RAINDANCE","REST","RETURN","ROUND","SHADOWBALL","SHADOWCLAW","SKILLSWAP","SLEEPTALK",""SLUDGE"BOMB",SNATCH,"SNORE",SPITE,"SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,TELEKINESIS,"THIEF",THUNDERBOLT,"THUNDERPUNCH",TORMENT,"TOXIC",TRICK,TRICKROOM,UPROAR,"VENOSHOCK","WILLOWISP",WONDERROOM
	//         Compatibility : Amorphous
	//         StepsToHatch : 5120
	//         Height : 1.6
	//         Weight : 0.1
	//         Color : Purple
	//         Shape : HeadArms
	//         Habitat : Cave
	//         Kind : Gas
	//         // Pokedex : If a Haunter beckons you while it is floating in darkness, don't approach it. This Pokémon will try to lick you with its tongue and steal your life away.
	//         Generation : 1
	//         BattlerPlayerX : -1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 0
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : GENGAR,Trade,
	//         }
	//         [monsterName : {
	//         Name : Gengar
	//         InternalName : GENGAR
	//         Type1 : GHOST
	//         Type2 : POISON
	//         BaseStats : 60,65,60,110,130,75
	//         GenderRate : Female50Percent
	//         GrowthRate : Parabolic
	//         BaseEXP : 225
	//         EffortPoints : 0,0,0,0,3,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : CURSEDBODY
	//         Moves : 0,SHADOWPUNCH,1,SHADOWPUNCH,1,HYPNOSIS,1,LICK,1,SPITE,5,SPITE,8,MEANLOOK,12,"CURSE",15,NIGHTSHADE,19,CONFUSERAY,22,SUCKERPUNCH,28,"PAYBACK",33,"SHADOWBALL",39,"DREAMEATER",44,"DARKPULSE",50,DESTINYBOND,55,HEX,61,NIGHTMARE
	//         TutorMoves : ALLYSWITCH,"ATTRACT","BRICKBREAK","CONFIDE","DARKPULSE",DAZZLINGGLEAM,"DOUBLETEAM",DRAINPUNCH,"DREAMEATER",EMBARGO,"ENERGYBALL",EXPLOSION,"FACADE","FIREPUNCH","FLING","FOCUSBLAST","FOCUSPUNCH",FOULPLAY,"FRUSTRATION","GIGADRAIN","GIGAIMPACT","HIDDENPOWER","HYPERBEAM","ICEPUNCH","ICYWIND","INFESTATION","KNOCKOFF","LASERFOCUS",PAINSPLIT,"PAYBACK","POISONJAB","POWERUPPUNCH","PROTECT","PSYCHIC","PSYCHUP","RAINDANCE","REST","RETURN","ROCKSMASH",ROLEPLAY,"ROUND","SHADOWBALL","SHADOWCLAW","SKILLSWAP","SLEEPTALK",""SLUDGE"BOMB",SNATCH,"SNORE",SPITE,"STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,TELEKINESIS,"THIEF",THUNDER,THUNDERBOLT,"THUNDERPUNCH",TORMENT,"TOXIC",TRICK,TRICKROOM,UPROAR,"VENOSHOCK","WILLOWISP",WONDERROOM
	//         Compatibility : Amorphous
	//         StepsToHatch : 5120
	//         Height : 1.5
	//         Weight : 40.5
	//         Color : Purple
	//         Shape : BipedalTail
	//         Habitat : Cave
	//         Kind : Shadow
	//         // Pokedex : Deep in the night, your shadow cast by a streetlight may suddenly overtake you. It is actually a Gengar running past you, pretending to be your shadow.
	//         Generation : 1
	//         BattlerPlayerX : -3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 15
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [monsterName : {
	//         Name : Onix
	//         InternalName : ONIX
	//         Type1 : ROCK
	//         Type2 : GROUND
	//         BaseStats : 35,45,160,70,30,45
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 77
	//         EffortPoints : 0,0,1,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : ROCKHEAD,STURDY
	//         HiddenAbility : WEAKARMOR
	//         Moves : 1,"MUDSPORT",1,"TACKLE",1,"HARDEN",1,"BIND",4,"CURSE",7,ROCKTHROW,10,"ROCKTOMB",13,"RAGE",16,STEALTHROCK,19,ROCKPOLISH,20,"GYROBALL",22,"SMACKDOWN",25,DRAGONBREATH,28,SLAM,31,SCREECH,34,"ROCKSLIDE",37,SANDTOMB,40,"IRONTAIL",43,DIG,46,STONEEDGE,49,"DOUBLEEDGE",52,SANDSTORM
	//         TutorMoves : "ATTRACT","BIND","BLOCK","BRUTALSWING","BULLDOZE","CONFIDE","DOUBLETEAM","DRAGONPULSE","DRAGONTAIL",EARTHPOWER,"EARTHQUAKE",EXPLOSION,"FACADE","FLASHCANNON","FRUSTRATION","GYROBALL","HIDDENPOWER",IRONHEAD,"IRONTAIL","NATUREPOWER","PAYBACK","PROTECT","PSYCHUP","REST","RETURN","ROAR",ROCKPOLISH,"ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SLEEPTALK","SMACKDOWN","SNORE",STEALTHROCK,"STOMPINGTANTRUM",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,TORMENT,"TOXIC"
	//         EggMoves : "BLOCK",DEFENSECURL,"FLAIL",HEAVYSLAM,ROCKBLAST,ROCKCLIMB,ROLLOUT,ROTOTILLER,STEALTHROCK,WIDEGUARD
	//         Compatibility : Mineral
	//         StepsToHatch : 6400
	//         Height : 8.8
	//         Weight : 210.0
	//         Color : Gray
	//         Shape : Serpentine
	//         Habitat : Cave
	//         Kind : Rock Snake
	//         // Pokedex : There is a magnet in its brain that prevents an Onix from losing direction while tunneling. As it grows older, its body becomes steadily rounder and smoother.
	//         Generation : 1
	//         BattlerPlayerX : 3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -2
	//         BattlerEnemyY : 5
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : STEELIX,TradeItem,METALCOAT
	//         }
	//         [monsterName : {
	//         Name : Drowzee
	//         InternalName : DROWZEE
	//         Type1 : "PSYCHIC"
	//         BaseStats : 60,48,45,42,43,90
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 66
	//         EffortPoints : 0,0,0,0,0,1
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : INSOMNIA,FOREWARN
	//         HiddenAbility : INNERFOCUS
	//         Moves : 1,HYPNOSIS,1,POUND,5,DISABLE,9,"CONFUSION",13,HEADBUTT,17,POISONGAS,21,MEDITATE,25,"PSYBEAM",29,WAKEUPSLAP,33,"PSYCHUP",37,"SYNCHRONOISE",41,"ZENHEADBUTT",45,"SWAGGER",49,"PSYCHIC",53,NASTYPLOT,57,PSYSHOCK,61,FUTURESIGHT
	//         TutorMoves : ALLYSWITCH,"ATTRACT","BRICKBREAK",CALMMIND,"CONFIDE",DAZZLINGGLEAM,"DOUBLETEAM",DRAINPUNCH,"DREAMEATER","FACADE","FIREPUNCH","FLING","FOCUSPUNCH",FOULPLAY,"FRUSTRATION","GRASSKNOT","HIDDENPOWER","ICEPUNCH","LIGHTSCREEN",LOWKICK,LOWSWEEP,MAGICCOAT,MAGICROOM,"POWERUPPUNCH","PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE",RECYCLE,REFLECT,"REST","RETURN",ROLEPLAY,"ROUND","SAFEGUARD","SHADOWBALL","SIGNALBEAM","SKILLSWAP","SLEEPTALK",SNATCH,"SNORE","SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,TELEKINESIS,"THIEF","THUNDERPUNCH",THUNDERWAVE,TORMENT,"TOXIC",TRICK,TRICKROOM,"ZENHEADBUTT"
	//         EggMoves : ASSIST,BARRIER,"FIREPUNCH",FLATTER,GUARDSWAP,"ICEPUNCH",NASTYPLOT,POWERSPLIT,PSYCHICTERRAIN,PSYCHOCUT,ROLEPLAY,SECRETPOWER,"SKILLSWAP","THUNDERPUNCH"
	//         Compatibility : Humanlike
	//         StepsToHatch : 5120
	//         Height : 1.0
	//         Weight : 32.4
	//         Color : Yellow
	//         Shape : Bipedal
	//         Habitat : "Grassland"
	//         Kind : Hypnosis
	//         // Pokedex : If your nose becomes itchy while you are sleeping, it's a sure sign that a Drowzee is standing above your pillow and trying to eat your dream through your nostrils.
	//         Generation : 1
	//         BattlerPlayerX : 4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -3
	//         BattlerEnemyY : 17
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : HYPNO,"Level",26
	//         }
	//         [monsterName : {
	//         Name : Hypno
	//         InternalName : HYPNO
	//         Type1 : "PSYCHIC"
	//         BaseStats : 85,73,70,67,73,115
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 169
	//         EffortPoints : 0,0,0,0,0,2
	//         Rareness : 75
	//         Happiness : 70
	//         Abilities : INSOMNIA,FOREWARN
	//         HiddenAbility : INNERFOCUS
	//         Moves : 1,FUTURESIGHT,1,NASTYPLOT,1,NIGHTMARE,1,SWITCHEROO,1,HYPNOSIS,1,POUND,1,DISABLE,1,"CONFUSION",5,DISABLE,9,"CONFUSION",13,HEADBUTT,17,POISONGAS,21,MEDITATE,25,"PSYBEAM",29,WAKEUPSLAP,33,"PSYCHUP",37,"SYNCHRONOISE",41,"ZENHEADBUTT",45,"SWAGGER",49,"PSYCHIC",53,NASTYPLOT,57,PSYSHOCK,61,FUTURESIGHT
	//         TutorMoves : ALLYSWITCH,"ATTRACT","BRICKBREAK",CALMMIND,"CONFIDE",DAZZLINGGLEAM,"DOUBLETEAM",DRAINPUNCH,"DREAMEATER","FACADE","FIREPUNCH","FLING","FOCUSBLAST","FOCUSPUNCH",FOULPLAY,"FRUSTRATION","GIGAIMPACT","GRASSKNOT","HIDDENPOWER","HYPERBEAM","ICEPUNCH","LIGHTSCREEN",LOWKICK,LOWSWEEP,MAGICCOAT,MAGICROOM,"POWERUPPUNCH","PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE",RECYCLE,REFLECT,"REST","RETURN",ROLEPLAY,"ROUND","SAFEGUARD","SHADOWBALL","SIGNALBEAM","SKILLSWAP","SLEEPTALK",SNATCH,"SNORE","SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,TELEKINESIS,"THIEF","THUNDERPUNCH",THUNDERWAVE,TORMENT,"TOXIC",TRICK,TRICKROOM,"ZENHEADBUTT"
	//         Compatibility : Humanlike
	//         StepsToHatch : 5120
	//         Height : 1.6
	//         Weight : 75.6
	//         Color : Yellow
	//         Shape : Bipedal
	//         Habitat : "Grassland"
	//         Kind : Hypnosis
	//         // Pokedex : The arcing movement and glitter of the pendulum in a Hypno's hand lull the foe into deep hypnosis. While searching for prey, it polishes the pendulum.
	//         Generation : 1
	//         BattlerPlayerX : 8
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : 10
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [monsterName : {
	//         Name : Krabby
	//         InternalName : KRABBY
	//         Type1 : WATER
	//         BaseStats : 30,105,90,50,25,25
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 65
	//         EffortPoints : 0,1,0,0,0,0
	//         Rareness : 225
	//         Happiness : 70
	//         Abilities : HYPERCUTTER,SHELLARMOR
	//         HiddenAbility : SHEERFORCE
	//         Moves : 1,"MUDSPORT",1,"BUBBLE",5,VICEGRIP,9,LEER,11,"HARDEN",15,BUBBLEBEAM,19,MUDSHOT,21,"METALCLAW",25,STOMP,29,"PROTECT",31,GUILLOTINE,35,SLAM,39,"BRINE",41,CRABHAMMER,45,"FLAIL"
	//         TutorMoves : ALLYSWITCH,"ATTRACT","BLIZZARD","BRICKBREAK","CONFIDE","CUT","DIVE","DOUBLETEAM","FACADE","FALSESWIPE","FLING","FRUSTRATION","HAIL","HIDDENPOWER","ICEBEAM","ICYWIND","IRONDEFENSE","KNOCKOFF","LIQUIDATION","PROTECT","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND","SCALD","SLEEPTALK","SNORE","STRENGTH","SUBSTITUTE",SUPERPOWER,"SURF","SWAGGER","SWORDSDANCE","THIEF","TOXIC","WATERPULSE","XSCISSOR"
	//         EggMoves : "AGILITY",ALLYSWITCH,"AMNESIA","ANCIENTPOWER",BIDE,CHIPAWAY,"ENDURE","FLAIL","HAZE","KNOCKOFF",SLAM,"TICKLE"
	//         Compatibility : Water3
	//         StepsToHatch : 5120
	//         Height : 0.4
	//         Weight : 6.5
	//         Color : Red
	//         Shape : Insectoid
	//         Habitat : WatersEdge
	//         Kind : River Crab
	//         // Pokedex : Krabby live in holes dug into beaches. On sandy shores with little in the way of food, they can be seen squabbling with each other over territory.
	//         Generation : 1
	//         BattlerPlayerX : 4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : 21
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : KINGLER,"Level",28
	//         }
	//         [monsterName : {
	//         Name : Kingler
	//         InternalName : KINGLER
	//         Type1 : WATER
	//         BaseStats : 55,130,115,75,50,50
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 166
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 60
	//         Happiness : 70
	//         Abilities : HYPERCUTTER,SHELLARMOR
	//         HiddenAbility : SHEERFORCE
	//         Moves : 1,WIDEGUARD,1,"MUDSPORT",1,"BUBBLE",1,VICEGRIP,1,LEER,5,VICEGRIP,9,LEER,11,"HARDEN",15,BUBBLEBEAM,19,MUDSHOT,21,"METALCLAW",25,STOMP,32,"PROTECT",37,GUILLOTINE,44,SLAM,51,"BRINE",56,CRABHAMMER,63,"FLAIL"
	//         TutorMoves : ALLYSWITCH,"ATTRACT","BLIZZARD","BRICKBREAK","CONFIDE","CUT","DIVE","DOUBLETEAM","FACADE","FALSESWIPE","FLING","FRUSTRATION","GIGAIMPACT","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","IRONDEFENSE","KNOCKOFF","LIQUIDATION","PROTECT",QUASH,"RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND","SCALD","SLEEPTALK","SNORE","STOMPINGTANTRUM","STRENGTH","SUBSTITUTE",SUPERPOWER,"SURF","SWAGGER","SWORDSDANCE","THIEF","TOXIC","WATERPULSE","XSCISSOR"
	//         Compatibility : Water3
	//         StepsToHatch : 5120
	//         Height : 1.3
	//         Weight : 60.0
	//         Color : Red
	//         Shape : Insectoid
	//         Habitat : WatersEdge
	//         Kind : Pincer
	//         // Pokedex : It waves its huge, oversized claw in the air to communicate with others. But since the claw is so heavy, this Pokémon quickly tires.
	//         Generation : 1
	//         BattlerPlayerX : -2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 3
	//         BattlerEnemyY : 14
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [1monsterName : {
	//         Name : Voltorb
	//         InternalName : VOLTORB
	//         Type1 : ELECTRIC
	//         BaseStats : 40,30,50,100,55,55
	//         GenderRate : Genderless
	//         GrowthRate : Medium
	//         BaseEXP : 66
	//         EffortPoints : 0,0,0,1,0,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : SOUNDPROOF,STATIC
	//         HiddenAbility : AFTERMATH
	//         Moves : 1,CHARGE,1,"TACKLE",4,SONICBOOM,6,EERIEIMPULSE,9,SPARK,11,ROLLOUT,13,SCREECH,16,CHARGEBEAM,20,"SWIFT",22,ELECTROBALL,26,SELFDESTRUCT,29,"LIGHTSCREEN",34,MAGNETRISE,37,DISCHARGE,41,EXPLOSION,46,"GYROBALL",48,"MIRRORCOAT"
	//         TutorMoves : CHARGEBEAM,"CONFIDE","DOUBLETEAM",EXPLOSION,"FACADE",FOULPLAY,"FRUSTRATION","GYROBALL","HIDDENPOWER","LIGHTSCREEN",MAGICCOAT,MAGNETRISE,"PROTECT","RAINDANCE","REST","RETURN","ROUND",SHOCKWAVE,"SIGNALBEAM","SLEEPTALK","SNORE","SUBSTITUTE","SWAGGER",TAUNT,"THIEF",THUNDER,THUNDERBOLT,THUNDERWAVE,TORMENT,"TOXIC",VOLTSWITCH,WILDCHARGE
	//         Compatibility : Mineral
	//         StepsToHatch : 5120
	//         Height : 0.5
	//         Weight : 10.4
	//         Color : Red
	//         Shape : Head
	//         Habitat : Urban
	//         Kind : Ball
	//         // Pokedex : It bears an uncanny and unexplained resemblance to a Poké Ball. Because it explodes at the slightest shock, even veteran trainers treat it with caution.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 24
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 1
	//         Evolutions : ELECTRODE,"Level",30
	//         }
	//         [1monsterName : {
	//         Name : Electrode
	//         InternalName : ELECTRODE
	//         Type1 : ELECTRIC
	//         BaseStats : 60,50,70,150,80,80
	//         GenderRate : Genderless
	//         GrowthRate : Medium
	//         BaseEXP : 172
	//         EffortPoints : 0,0,0,2,0,0
	//         Rareness : 60
	//         Happiness : 70
	//         Abilities : SOUNDPROOF,STATIC
	//         HiddenAbility : AFTERMATH
	//         Moves : 1,MAGNETICFLUX,1,CHARGE,1,"TACKLE",1,SONICBOOM,1,EERIEIMPULSE,4,SONICBOOM,6,EERIEIMPULSE,9,SPARK,11,ROLLOUT,13,SCREECH,16,CHARGEBEAM,20,"SWIFT",22,ELECTROBALL,26,SELFDESTRUCT,29,"LIGHTSCREEN",36,MAGNETRISE,41,DISCHARGE,47,EXPLOSION,54,"GYROBALL",58,"MIRRORCOAT"
	//         TutorMoves : CHARGEBEAM,"CONFIDE","DOUBLETEAM",EXPLOSION,"FACADE",FOULPLAY,"FRUSTRATION","GIGAIMPACT","GYROBALL","HIDDENPOWER","HYPERBEAM","LIGHTSCREEN",MAGICCOAT,MAGNETRISE,"PROTECT","RAINDANCE","REST","RETURN","ROUND",SHOCKWAVE,"SIGNALBEAM","SLEEPTALK","SNORE","SUBSTITUTE","SWAGGER",TAUNT,TELEKINESIS,"THIEF",THUNDER,THUNDERBOLT,THUNDERWAVE,TORMENT,"TOXIC",VOLTSWITCH,WILDCHARGE
	//         Compatibility : Mineral
	//         StepsToHatch : 5120
	//         Height : 1.2
	//         Weight : 66.6
	//         Color : Red
	//         Shape : Head
	//         Habitat : Urban
	//         Kind : Ball
	//         // Pokedex : They appear in great numbers at electric power plants. Because they feed on electricity, they cause massive and chaotic blackouts in nearby cities.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 17
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Exeggcute
	//         InternalName : EXEGGCUTE
	//         Type1 : GRASS
	//         Type2 : "PSYCHIC"
	//         BaseStats : 60,40,80,40,60,45
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 65
	//         EffortPoints : 0,0,1,0,0,0
	//         Rareness : 90
	//         Happiness : 70
	//         Abilities : "CHLOROPHYLL"
	//         HiddenAbility : HARVEST
	//         Moves : 1,BARRAGE,1,UPROAR,1,HYPNOSIS,7,REFLECT,11,"LEECHSEED",17,BULLETSEED,19,"STUNSPORE",21,"POISONPOWDER",23,"SLEEPPOWDER",27,"CONFUSION",33,"WORRYSEED",37,"NATURALGIFT",43,"SOLARBEAM",47,EXTRASENSORY,50,BESTOW
	//         TutorMoves : "ATTRACT","BLOCK","CONFIDE","DOUBLETEAM","DREAMEATER","ENERGYBALL",EXPLOSION,"FACADE","FRUSTRATION","GIGADRAIN","GRASSKNOT",GRAVITY,"HIDDENPOWER","INFESTATION","LIGHTSCREEN","NATUREPOWER","PROTECT","PSYCHIC","PSYCHUP",REFLECT,"REST","RETURN","ROUND","SEEDBOMB","SKILLSWAP","SLEEPTALK",""SLUDGE"BOMB","SNORE","SOLARBEAM","STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","SYNTHESIS",TELEKINESIS,"THIEF","TOXIC",TRICKROOM,UPROAR,"WORRYSEED"
	//         EggMoves : "ANCIENTPOWER","BLOCK","CURSE","GIGADRAIN","GRASSYTERRAIN","INGRAIN","LEAFSTORM",LUCKYCHANT,MOONLIGHT,"NATURALGIFT","NATUREPOWER",POWERSWAP,"SKILLSWAP","SYNTHESIS"
	//         Compatibility : Grass
	//         StepsToHatch : 5120
	//         Height : 0.4
	//         Weight : 2.5
	//         Color : Pink
	//         Shape : MultiBody
	//         Habitat : Forest
	//         Kind : Egg
	//         // Pokedex : It consists of six eggs that care for each other. The eggs attract each other and spin around. When cracks increasingly appear, it is close to evolution.
	//         Generation : 1
	//         WildItemUncommon : PSYCHICSEED
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 28
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : EXEGGUTOR,Item,LEAFSTONE
	//         }
	//         [1monsterName : {
	//         Name : Exeggutor
	//         InternalName : EXEGGUTOR
	//         Type1 : GRASS
	//         Type2 : "PSYCHIC"
	//         BaseStats : 95,95,85,55,125,75
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 186
	//         EffortPoints : 0,0,0,0,2,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : "CHLOROPHYLL"
	//         HiddenAbility : HARVEST
	//         Moves : 0,STOMP,1,STOMP,1,"SEEDBOMB",1,BARRAGE,1,HYPNOSIS,1,"CONFUSION",17,PSYSHOCK,27,EGGBOMB,37,WOODHAMMER,47,"LEAFSTORM"
	//         TutorMoves : "ATTRACT","BLOCK","CONFIDE","DOUBLETEAM","DREAMEATER","ENERGYBALL",EXPLOSION,"FACADE","FRUSTRATION","GIGADRAIN","GIGAIMPACT","GRASSKNOT",GRAVITY,"HIDDENPOWER","HYPERBEAM","INFESTATION","LIGHTSCREEN",LOWKICK,"NATUREPOWER","PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,REFLECT,"REST","RETURN","ROUND","SEEDBOMB","SKILLSWAP","SLEEPTALK",""SLUDGE"BOMB","SNORE","SOLARBEAM","STOMPINGTANTRUM","STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","SYNTHESIS",TELEKINESIS,"THIEF","TOXIC",TRICKROOM,"WORRYSEED","ZENHEADBUTT"
	//         Compatibility : Grass
	//         StepsToHatch : 5120
	//         Height : 2.0
	//         Weight : 120.0
	//         Color : Yellow
	//         Shape : HeadLegs
	//         Habitat : Forest
	//         Kind : Coconut
	//         // Pokedex : Originally from the tropics, Exeggutor's heads grow larger with exposure to bright sunlight. It is said that when the heads fall, they group to form an Exeggcute.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 4
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Cubone
	//         InternalName : CUBONE
	//         Type1 : GROUND
	//         BaseStats : 50,50,95,35,40,50
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 64
	//         EffortPoints : 0,0,1,0,0,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : ROCKHEAD,LIGHTNINGROD
	//         HiddenAbility : BATTLEARMOR
	//         Moves : 1,"GROWL",3,"TAILWHIP",7,BONECLUB,11,HEADBUTT,13,LEER,17,"FOCUSENERGY",21,BONEMERANG,23,"RAGE",27,"FALSESWIPE",31,THRASH,33,"FLING",37,"STOMPINGTANTRUM",41,"ENDEAVOR",43,"DOUBLEEDGE",47,RETALIATE,51,BONERUSH
	//         TutorMoves : "AERIALACE","ATTRACT","BLIZZARD","BRICKBREAK","BRUTALSWING","BULLDOZE","CONFIDE","DOUBLETEAM",EARTHPOWER,"EARTHQUAKE","ECHOEDVOICE","ENDEAVOR","FACADE","FALSESWIPE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSPUNCH","FRUSTRATION","HIDDENPOWER","ICEBEAM","ICYWIND","IRONDEFENSE",IRONHEAD,"IRONTAIL","KNOCKOFF",LOWKICK,"POWERUPPUNCH","PROTECT","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SLEEPTALK","SMACKDOWN","SNORE",STEALTHROCK,"STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","THIEF","THUNDERPUNCH","TOXIC",UPROAR
	//         EggMoves : "ANCIENTPOWER","BELLYDRUM",CHIPAWAY,"CURSE","DETECT",DOUBLEKICK,"ENDURE",IRONHEAD,PERISHSONG,SCREECH,"SKULLBASH"
	//         Compatibility : Monster
	//         StepsToHatch : 5120
	//         Height : 0.4
	//         Weight : 6.5
	//         Color : Brown
	//         Shape : BipedalTail
	//         Habitat : Mountain
	//         Kind : Lonely
	//         // Pokedex : It pines for the mother it will never see again. Seeing a likeness of its mother in the full moon, it cries. The stains on the skull it wears are from its tears.
	//         Generation : 1
	//         WildItemUncommon : THICKCLUB
	//         BattlerPlayerX : 2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -2
	//         BattlerEnemyY : 22
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : MAROWAK,"Level",28
	//         }
	//         [1monsterName : {
	//         Name : Marowak
	//         InternalName : MAROWAK
	//         Type1 : GROUND
	//         BaseStats : 60,80,110,45,50,80
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 149
	//         EffortPoints : 0,0,2,0,0,0
	//         Rareness : 75
	//         Happiness : 70
	//         Abilities : ROCKHEAD,LIGHTNINGROD
	//         HiddenAbility : BATTLEARMOR
	//         Moves : 1,"GROWL",1,"TAILWHIP",1,BONECLUB,1,HEADBUTT,3,"TAILWHIP",7,BONECLUB,11,HEADBUTT,13,LEER,17,"FOCUSENERGY",21,BONEMERANG,23,"RAGE",27,"FALSESWIPE",33,THRASH,37,"FLING",43,"STOMPINGTANTRUM",49,"ENDEAVOR",53,"DOUBLEEDGE",59,RETALIATE,65,BONERUSH
	//         TutorMoves : "AERIALACE","ATTRACT","BLIZZARD","BRICKBREAK","BRUTALSWING","BULLDOZE","CONFIDE","DOUBLETEAM",EARTHPOWER,"EARTHQUAKE","ECHOEDVOICE","ENDEAVOR","FACADE","FALSESWIPE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","IRONDEFENSE",IRONHEAD,"IRONTAIL","KNOCKOFF","LASERFOCUS",LOWKICK,"OUTRAGE","POWERUPPUNCH","PROTECT","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SLEEPTALK","SMACKDOWN","SNORE",STEALTHROCK,"STOMPINGTANTRUM",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","THIEF","THROATCHOP","THUNDERPUNCH","TOXIC",UPROAR
	//         Compatibility : Monster
	//         StepsToHatch : 5120
	//         Height : 1.0
	//         Weight : 45.0
	//         Color : Brown
	//         Shape : BipedalTail
	//         Habitat : Mountain
	//         Kind : Bone Keeper
	//         // Pokedex : A Marowak is the evolved form of a Cubone that has grown tough by overcoming the grief of losing its mother. Its tempered and "harden"ed spirit is not easily broken.
	//         Generation : 1
	//         WildItemUncommon : THICKCLUB
	//         BattlerPlayerX : -2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -8
	//         BattlerEnemyY : 19
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Hitmonlee
	//         InternalName : HITMONLEE
	//         Type1 : FIGHTING
	//         BaseStats : 50,120,53,87,35,110
	//         GenderRate : AlwaysMale
	//         GrowthRate : Medium
	//         BaseEXP : 159
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : LIMBER,RECKLESS
	//         HiddenAbility : UNBURDEN
	//         Moves : 0,DOUBLEKICK,1,DOUBLEKICK,1,REVERSAL,1,CLOSECOMBAT,1,MEGAKICK,1,REVENGE,1,MEDITATE,1,ROLLINGKICK,1,JUMPKICK,5,MEDITATE,9,ROLLINGKICK,13,JUMPKICK,17,"BRICKBREAK",21,"FOCUSENERGY",25,FEINT,29,HIGHJUMPKICK,33,MINDREADER,37,"FORESIGHT",41,WIDEGUARD,45,BLAZEKICK,49,"ENDURE",53,MEGAKICK,57,CLOSECOMBAT,61,REVERSAL
	//         TutorMoves : "ATTRACT",BOUNCE,"BRICKBREAK",BULKUP,"BULLDOZE","CONFIDE","COVET","DOUBLETEAM","EARTHQUAKE","FACADE","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","HELPINGHAND","HIDDENPOWER","KNOCKOFF","LASERFOCUS",LOWKICK,LOWSWEEP,"POISONJAB","POWERUPPUNCH","PROTECT","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB",ROLEPLAY,"ROUND","SLEEPTALK","SNORE","STOMPINGTANTRUM",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERPOWER,"SWAGGER","THIEF","TOXIC","WORKUP"
	//         Compatibility : Humanlike
	//         StepsToHatch : 6400
	//         Height : 1.5
	//         Weight : 49.8
	//         Color : Brown
	//         Shape : Bipedal
	//         Habitat : Urban
	//         Kind : Kicking
	//         // Pokedex : Its legs freely stretch and contract. Using these springlike limbs, it bowls over foes with devastating kicks. After battle, it rubs down its tired legs.
	//         Generation : 1
	//         BattlerPlayerX : 8
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : 14
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Hitmonchan
	//         InternalName : HITMONCHAN
	//         Type1 : FIGHTING
	//         BaseStats : 50,105,79,76,35,110
	//         GenderRate : AlwaysMale
	//         GrowthRate : Medium
	//         BaseEXP : 159
	//         EffortPoints : 0,0,0,0,0,2
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : KEENEYE,IRONFIST
	//         HiddenAbility : INNERFOCUS
	//         Moves : 0,COMETPUNCH,1,COMETPUNCH,1,CLOSECOMBAT,1,"COUNTER",1,"FOCUSPUNCH",1,REVENGE,1,"AGILITY",1,"PURSUIT",1,MACHPUNCH,6,"AGILITY",11,"PURSUIT",16,MACHPUNCH,16,BULLETPUNCH,21,FEINT,26,VACUUMWAVE,31,QUICKGUARD,36,"THUNDERPUNCH",36,"ICEPUNCH",36,"FIREPUNCH",41,SKYUPPERCUT,46,MEGAPUNCH,50,"DETECT",56,"FOCUSPUNCH",61,"COUNTER",66,CLOSECOMBAT
	//         TutorMoves : "ATTRACT","BRICKBREAK",BULKUP,"BULLDOZE","CONFIDE","COVET","DOUBLETEAM",DRAINPUNCH,"EARTHQUAKE","FACADE","FIREPUNCH","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","HELPINGHAND","HIDDENPOWER","ICEPUNCH","LASERFOCUS",LOWKICK,LOWSWEEP,"POWERUPPUNCH","PROTECT","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB",ROLEPLAY,"ROUND","SLEEPTALK","SNORE",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER","THIEF","THROATCHOP","THUNDERPUNCH","TOXIC","WORKUP"
	//         Compatibility : Humanlike
	//         StepsToHatch : 6400
	//         Height : 1.4
	//         Weight : 50.2
	//         Color : Brown
	//         Shape : Bipedal
	//         Habitat : Urban
	//         Kind : Punching
	//         // Pokedex : A Hitmonchan is said to possess the spirit of a boxer who aimed to become the world champion. Having an indomitable spirit means that it will never give up.
	//         Generation : 1
	//         BattlerPlayerX : 4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 11
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Lickitung
	//         InternalName : LICKITUNG
	//         Type1 : NORMAL
	//         BaseStats : 90,55,75,30,60,75
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 77
	//         EffortPoints : 2,0,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : OWNTEMPO,OBLIVIOUS
	//         HiddenAbility : CLOUDNINE
	//         Moves : 1,LICK,5,"SUPERSONIC",9,DEFENSECURL,13,"KNOCKOFF",17,WRAP,21,STOMP,25,DISABLE,29,SLAM,33,ROLLOUT,37,CHIPAWAY,41,MEFIRST,45,"REFRESH",49,SCREECH,53,"POWERWHIP",57,WRINGOUT
	//         TutorMoves : "AQUATAIL","ATTRACT","BIND","BLIZZARD","BRICKBREAK","BRUTALSWING","BULLDOZE","CONFIDE","CUT","DOUBLETEAM","DRAGONTAIL","DREAMEATER","EARTHQUAKE","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICEPUNCH","ICYWIND","IRONTAIL","KNOCKOFF","POWERUPPUNCH","PROTECT","PSYCHUP","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SHADOWBALL",SHOCKWAVE,"SLEEPTALK","SNORE","SOLARBEAM","STOMPINGTANTRUM","STRENGTH","SUBSTITUTE","SUNNYDAY","SURF","SWAGGER","SWORDSDANCE","THIEF",THUNDER,THUNDERBOLT,"THUNDERPUNCH","TOXIC","WATERPULSE","WORKUP","ZENHEADBUTT"
	//         EggMoves : "AMNESIA",BELCH,"BELLYDRUM",BODYSLAM,"CURSE",HAMMERARM,MAGNITUDE,"MUDDYWATER","SLEEPTALK",SMELLINGSALTS,"SNORE",THRASH,"ZENHEADBUTT"
	//         Compatibility : Monster
	//         StepsToHatch : 5120
	//         Height : 1.2
	//         Weight : 65.5
	//         Color : Pink
	//         Shape : BipedalTail
	//         Habitat : "Grassland"
	//         Kind : Licking
	//         // Pokedex : Whenever it sees something unfamiliar, it always licks the object because it memorizes things by texture and taste. It is somewhat put off by sour things.
	//         Generation : 1
	//         WildItemUncommon : LAGGINGTAIL
	//         BattlerPlayerX : -2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 15
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : LICKILICKY,HasMove,ROLLOUT
	//         }
	//         [1monsterName : {
	//         Name : Koffing
	//         InternalName : KOFFING
	//         Type1 : POISON
	//         BaseStats : 40,65,95,35,60,45
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 68
	//         EffortPoints : 0,0,1,0,0,0
	//         Rareness : 190
	//         Happiness : 70
	//         Abilities : LEVITATE
	//         Moves : 1,POISONGAS,1,"TACKLE",4,SMOG,7,"SMOKESCREEN",12,"ASSURANCE",15,CLEARSMOG,18,"SLUDGE",23,SELFDESTRUCT,26,"HAZE",29,"GYROBALL",34,""SLUDGE"BOMB",37,EXPLOSION,40,DESTINYBOND,42,BELCH,45,MEMENTO
	//         TutorMoves : "ATTRACT","CONFIDE","DARKPULSE","DOUBLETEAM",EXPLOSION,"FACADE","FIREBLAST","FLAMETHROWER","FRUSTRATION","GYROBALL","HIDDENPOWER","INFESTATION",PAINSPLIT,"PAYBACK","PROTECT","RAINDANCE","REST","RETURN","ROUND","SHADOWBALL",SHOCKWAVE,"SLEEPTALK",""SLUDGE"BOMB","SNORE",SPITE,"SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,"THIEF",THUNDER,THUNDERBOLT,TORMENT,"TOXIC",UPROAR,"VENOSHOCK","WILLOWISP"
	//         EggMoves : "CURSE",DESTINYBOND,GRUDGE,PAINSPLIT,"PSYBEAM",PSYWAVE,SCREECH,SPITE,SPITUP,STOCKPILE,SWALLOW,"TOXICSPIKES",VENOMDRENCH
	//         Compatibility : Amorphous
	//         StepsToHatch : 5120
	//         Height : 0.6
	//         Weight : 1.0
	//         Color : Purple
	//         Shape : Head
	//         Habitat : Urban
	//         Kind : Poison Gas
	//         // Pokedex : Getting up close to a Koffing will give you a chance to observe, through its thin skin, the toxic gases swirling inside. It blows up at the slightest stimulation.
	//         Generation : 1
	//         WildItemUncommon : SMOKEBALL
	//         BattlerPlayerX : -2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 0
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : WEEZING,"Level",35
	//         }
	//         [1monsterName : {
	//         Name : Weezing
	//         InternalName : WEEZING
	//         Type1 : POISON
	//         BaseStats : 65,90,120,60,85,70
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 172
	//         EffortPoints : 0,0,2,0,0,0
	//         Rareness : 60
	//         Happiness : 70
	//         Abilities : LEVITATE
	//         Moves : 0,DOUBLEHIT,1,DOUBLEHIT,1,POISONGAS,1,"TACKLE",1,SMOG,1,"SMOKESCREEN",4,SMOG,7,"SMOKESCREEN",12,"ASSURANCE",15,CLEARSMOG,18,"SLUDGE",23,SELFDESTRUCT,26,"HAZE",29,"GYROBALL",34,""SLUDGE"BOMB",40,EXPLOSION,46,DESTINYBOND,51,BELCH,57,MEMENTO
	//         TutorMoves : "ATTRACT","CONFIDE","DARKPULSE","DOUBLETEAM",EXPLOSION,"FACADE","FIREBLAST","FLAMETHROWER","FRUSTRATION","GIGAIMPACT","GYROBALL","HIDDENPOWER","HYPERBEAM","INFESTATION",PAINSPLIT,"PAYBACK","PROTECT","RAINDANCE","REST","RETURN","ROUND","SHADOWBALL",SHOCKWAVE,"SLEEPTALK",""SLUDGE"BOMB","SNORE",SPITE,"SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,"THIEF",THUNDER,THUNDERBOLT,TORMENT,"TOXIC",UPROAR,"VENOSHOCK","WILLOWISP"
	//         Compatibility : Amorphous
	//         StepsToHatch : 5120
	//         Height : 1.2
	//         Weight : 9.5
	//         Color : Purple
	//         Shape : MultiBody
	//         Habitat : Urban
	//         Kind : Poison Gas
	//         // Pokedex : By diluting its toxic gases with a special process, the highest grade of perfume can be made. To Weezing, gases emanating from garbage are the ultimate feast.
	//         Generation : 1
	//         WildItemUncommon : SMOKEBALL
	//         BattlerPlayerX : -2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -3
	//         BattlerEnemyY : -2
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [1monsterName : {
	//         Name : Rhyhorn
	//         InternalName : RHYHORN
	//         Type1 : GROUND
	//         Type2 : ROCK
	//         BaseStats : 80,85,95,25,30,30
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 69
	//         EffortPoints : 0,0,1,0,0,0
	//         Rareness : 120
	//         Happiness : 70
	//         Abilities : LIGHTNINGROD,ROCKHEAD
	//         HiddenAbility : RECKLESS
	//         Moves : 1,HORNATTACK,1,"TAILWHIP",1,"FURYATTACK",1,"SCARYFACE",5,"FURYATTACK",9,"SCARYFACE",13,"SMACKDOWN",17,STOMP,21,"BULLDOZE",25,CHIPAWAY,29,ROCKBLAST,33,"DRILLRUN",37,"TAKEDOWN",41,STONEEDGE,45,"EARTHQUAKE",49,MEGAHORN,53,HORNDRILL
	//         TutorMoves : "AQUATAIL","ATTRACT","BLIZZARD","BULLDOZE","CONFIDE","DOUBLETEAM","DRAGONPULSE","DRILLRUN",EARTHPOWER,"EARTHQUAKE","ENDEAVOR","FACADE","FIREBLAST","FLAMETHROWER","FRUSTRATION","HIDDENPOWER","ICEBEAM","ICYWIND","IRONTAIL","PAYBACK","POISONJAB","PROTECT","RAINDANCE","REST","RETURN","ROAR",ROCKPOLISH,"ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,SHOCKWAVE,"SLEEPTALK","SMACKDOWN",SMARTSTRIKE,"SNORE",SPITE,STEALTHROCK,"STOMPINGTANTRUM",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERPOWER,"SWAGGER","SWORDSDANCE","THIEF",THUNDER,THUNDERBOLT,"TOXIC",UPROAR
	//         EggMoves : "COUNTER","CRUNCH",CRUSHCLAW,"CURSE","DRAGONRUSH","FIREFANG",GUARDSPLIT,ICEFANG,"IRONTAIL",MAGNITUDE,METALBURST,REVERSAL,ROCKCLIMB,ROTOTILLER,"SKULLBASH",THUNDERFANG
	//         Compatibility : Monster,Field
	//         StepsToHatch : 5120
	//         Height : 1.0
	//         Weight : 115.0
	//         Color : Gray
	//         Shape : "Quadruped"
	//         Habitat : RoughTerrain
	//         Kind : Spikes
	//         // Pokedex : Once it starts running, it doesn't stop. Its tiny brain makes it so stupid that it can't remember why it started running in the first place.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 18
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : RHYDON,"Level",42
	//         }
	//         [1monsterName : {
	//         Name : Rhydon
	//         InternalName : RHYDON
	//         Type1 : GROUND
	//         Type2 : ROCK
	//         BaseStats : 105,130,120,40,45,45
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 170
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 60
	//         Happiness : 70
	//         Abilities : LIGHTNINGROD,ROCKHEAD
	//         HiddenAbility : RECKLESS
	//         Moves : 0,HAMMERARM,1,HAMMERARM,1,HORNDRILL,1,HORNATTACK,1,"TAILWHIP",1,"FURYATTACK",1,"SCARYFACE",5,"FURYATTACK",9,"SCARYFACE",13,"SMACKDOWN",17,STOMP,21,"BULLDOZE",25,CHIPAWAY,29,ROCKBLAST,33,"DRILLRUN",37,"TAKEDOWN",41,STONEEDGE,48,"EARTHQUAKE",55,MEGAHORN,62,HORNDRILL
	//         TutorMoves : "AQUATAIL","ATTRACT","BLIZZARD","BLOCK","BRICKBREAK","BRUTALSWING","BULLDOZE","CONFIDE","CUT","DOUBLETEAM","DRAGONPULSE","DRAGONTAIL","DRILLRUN",EARTHPOWER,"EARTHQUAKE","ENDEAVOR","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICEPUNCH","ICYWIND","IRONTAIL","OUTRAGE","PAYBACK","POISONJAB","POWERUPPUNCH","PROTECT","RAINDANCE","REST","RETURN","ROAR",ROCKPOLISH,"ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SHADOWCLAW",SHOCKWAVE,"SLEEPTALK","SMACKDOWN",SMARTSTRIKE,"SNORE",SPITE,STEALTHROCK,"STOMPINGTANTRUM",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERPOWER,"SURF","SWAGGER","SWORDSDANCE","THIEF",THUNDER,THUNDERBOLT,"THUNDERPUNCH","TOXIC",UPROAR
	//         Compatibility : Monster,Field
	//         StepsToHatch : 5120
	//         Height : 1.9
	//         Weight : 120.0
	//         Color : Gray
	//         Shape : BipedalTail
	//         Habitat : RoughTerrain
	//         Kind : Drill
	//         // Pokedex : Its horn, which rotates like a drill, destroys tall buildings with one strike. It stands on its hind legs, and its brain is well developed.
	//         Generation : 1
	//         BattlerPlayerX : 5
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : 10
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : RHYPERIOR,TradeItem,PROTECTOR
	//         }
	//         [1monsterName : {
	//         Name : Chansey
	//         InternalName : CHANSEY
	//         Type1 : NORMAL
	//         BaseStats : 250,5,5,50,35,105
	//         GenderRate : AlwaysFemale
	//         GrowthRate : Fast
	//         BaseEXP : 395
	//         EffortPoints : 2,0,0,0,0,0
	//         Rareness : 30
	//         Happiness : 140
	//         Abilities : NATURALCURE,SERENEGRACE
	//         HiddenAbility : HEALER
	//         Moves : 1,DEFENSECURL,1,"DOUBLEEDGE",1,"GROWL",1,POUND,5,"TAILWHIP",9,"REFRESH",12,DOUBLESLAP,16,SOFTBOILED,20,BESTOW,23,MINIMIZE,27,"TAKEDOWN",31,SING,35,"FLING",39,HEALPULSE,44,EGGBOMB,50,"LIGHTSCREEN",57,HEALINGWISH,65,"DOUBLEEDGE"
	//         TutorMoves : ALLYSWITCH,"ATTRACT","BLIZZARD","BRICKBREAK","BULLDOZE",CALMMIND,CHARGEBEAM,"CONFIDE","COVET",DAZZLINGGLEAM,"DOUBLETEAM",DRAINPUNCH,"DREAMEATER","EARTHQUAKE","ECHOEDVOICE","ENDEAVOR","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","GRASSKNOT",GRAVITY,"HAIL","HEALBELL","HELPINGHAND","HIDDENPOWER","HYPERBEAM","HYPERVOICE","ICEBEAM","ICEPUNCH","ICYWIND","IRONTAIL","LASERFOCUS","LASTRESORT","LIGHTSCREEN","POWERUPPUNCH","PROTECT","PSYCHIC","PSYCHUP","RAINDANCE",RECYCLE,"REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND","SAFEGUARD",SANDSTORM,"SHADOWBALL",SHOCKWAVE,"SKILLSWAP","SLEEPTALK",SNATCH,"SNORE","SOLARBEAM",STEALTHROCK,"STOMPINGTANTRUM","STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER",TELEKINESIS,THUNDER,THUNDERBOLT,"THUNDERPUNCH",THUNDERWAVE,"TOXIC","WATERPULSE",WILDCHARGE,"WORKUP","ZENHEADBUTT"
	//         EggMoves : AROMATHERAPY,"COUNTER","ENDURE",GRAVITY,"HEALBELL","HELPINGHAND",METRONOME,MUDBOMB,"NATURALGIFT",PRESENT,SEISMICTOSS
	//         Compatibility : Fairy
	//         StepsToHatch : 10240
	//         Height : 1.1
	//         Weight : 34.6
	//         Color : Pink
	//         Shape : BipedalTail
	//         Habitat : Urban
	//         Kind : Egg
	//         // Pokedex : Chansey lay nutritionally excellent eggs every day. The eggs are so delicious, they are eagerly devoured by even those who have lost their appetite.
	//         Generation : 1
	//         WildItemCommon : LUCKYPUNCH
	//         BattlerPlayerX : -1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 19
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : BLISSEY,Happiness,
	//         }
	//         [1monsterName : {
	//         Name : Tangela
	//         InternalName : TANGELA
	//         Type1 : GRASS
	//         BaseStats : 65,55,115,60,100,40
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 87
	//         EffortPoints : 0,0,1,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : "CHLOROPHYLL",LEAFGUARD
	//         HiddenAbility : REGENERATOR
	//         Moves : 1,"INGRAIN",1,CONSTRICT,4,"SLEEPPOWDER",7,"VINEWHIP",10,ABSORB,14,"POISONPOWDER",17,"BIND",20,"GROWTH",23,MEGADRAIN,27,"KNOCKOFF",30,"STUNSPORE",33,"NATURALGIFT",36,"GIGADRAIN",38,"ANCIENTPOWER",41,SLAM,44,"TICKLE",46,WRINGOUT,48,"GRASSYTERRAIN",50,"POWERWHIP"
	//         TutorMoves : "ATTRACT","BIND","CONFIDE","CUT","DOUBLETEAM","ENDEAVOR","ENERGYBALL","FACADE","FRUSTRATION","GIGADRAIN","GIGAIMPACT","GRASSKNOT","HIDDENPOWER","HYPERBEAM","INFESTATION","KNOCKOFF","NATUREPOWER",PAINSPLIT,"PROTECT","PSYCHUP",REFLECT,"REST","RETURN","ROCKSMASH","ROUND","SEEDBOMB",SHOCKWAVE,"SLEEPTALK",""SLUDGE"BOMB","SNORE","SOLARBEAM","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","SYNTHESIS","THIEF","TOXIC","WORRYSEED"
	//         EggMoves : "AMNESIA","CONFUSION","ENDEAVOR","FLAIL","GIGADRAIN","LEAFSTORM","LEECHSEED",MEGADRAIN,"NATURALGIFT","NATUREPOWER",POWERSWAP,"RAGEPOWDER",WAKEUPSLAP
	//         Compatibility : Grass
	//         StepsToHatch : 5120
	//         Height : 1.0
	//         Weight : 35.0
	//         Color : Blue
	//         Shape : HeadLegs
	//         Habitat : "Grassland"
	//         Kind : Vine
	//         // Pokedex : Its vines snap off easily and painlessly if they are grabbed, allowing it to make a quick getaway. The lost vines are replaced by new growth the very next day.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 22
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : TANGROWTH,HasMove,"ANCIENTPOWER"
	//         }
	//         [1monsterName : {
	//         Name : Kangaskhan
	//         InternalName : KANGASKHAN
	//         Type1 : NORMAL
	//         BaseStats : 105,95,80,90,40,80
	//         GenderRate : AlwaysFemale
	//         GrowthRate : Medium
	//         BaseEXP : 172
	//         EffortPoints : 2,0,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : EARLYBIRD,SCRAPPY
	//         HiddenAbility : INNERFOCUS
	//         Moves : 1,COMETPUNCH,1,LEER,7,"FAKEOUT",10,"TAILWHIP",13,"BITE",19,DOUBLEHIT,22,"RAGE",25,MEGAPUNCH,31,CHIPAWAY,34,DIZZYPUNCH,37,"CRUNCH",43,"ENDURE",46,"OUTRAGE",49,SUCKERPUNCH,50,REVERSAL
	//         TutorMoves : "AERIALACE","AQUATAIL","ATTRACT","BLIZZARD","BRICKBREAK","BULLDOZE","CONFIDE","COVET","CUT","DOUBLETEAM",DRAINPUNCH,"EARTHQUAKE","ENDEAVOR","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","HAIL","HELPINGHAND","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICEPUNCH","ICYWIND","IRONTAIL",LOWKICK,"OUTRAGE","POWERUPPUNCH","PROTECT","RAINDANCE","REST","RETURN","ROAR","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND","SAFEGUARD",SANDSTORM,"SHADOWBALL","SHADOWCLAW",SHOCKWAVE,"SLEEPTALK","SNORE","SOLARBEAM",SPITE,"STRENGTH","SUBSTITUTE","SUNNYDAY","SURF","SWAGGER","THIEF",THUNDER,THUNDERBOLT,"THUNDERPUNCH","TOXIC",UPROAR,"WATERPULSE","WORKUP"
	//         EggMoves : CIRCLETHROW,"COUNTER",CRUSHCLAW,DISABLE,"DOUBLEEDGE","ENDEAVOR","FOCUSENERGY","FOCUSPUNCH","FORESIGHT",HAMMERARM,STOMP,"TRUMPCARD",UPROAR
	//         Compatibility : Monster
	//         StepsToHatch : 5120
	//         Height : 2.2
	//         Weight : 80.0
	//         Color : Brown
	//         Shape : BipedalTail
	//         Habitat : "Grassland"
	//         Kind : Parent
	//         // Pokedex : If you come across a young Kangaskhan playing by itself, never try to catch it. The baby's parent is sure to be in the area, and it will become violently enraged.
	//         Generation : 1
	//         BattlerPlayerX : 3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 9
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [1monsterName : {
	//         Name : Horsea
	//         InternalName : HORSEA
	//         Type1 : WATER
	//         BaseStats : 30,40,70,60,70,25
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 59
	//         EffortPoints : 0,0,0,0,1,0
	//         Rareness : 225
	//         Happiness : 70
	//         Abilities : SWIFTSWIM,SNIPER
	//         HiddenAbility : DAMP
	//         Moves : 1,"BUBBLE",5,"SMOKESCREEN",9,LEER,13,"WATERGUN",17,TWISTER,21,BUBBLEBEAM,26,"FOCUSENERGY",31,"BRINE",36,"AGILITY",41,"DRAGONPULSE",46,"DRAGONDANCE",52,"HYDROPUMP"
	//         TutorMoves : "ATTRACT","BLIZZARD",BOUNCE,"CONFIDE","DIVE","DOUBLETEAM","DRAGONPULSE","FACADE","FLASHCANNON","FRUSTRATION","HAIL","HIDDENPOWER","ICEBEAM","ICYWIND","OUTRAGE","PROTECT","RAINDANCE","REST","RETURN","ROUND","SCALD","SIGNALBEAM","SLEEPTALK","SNORE","SUBSTITUTE","SURF","SWAGGER","TOXIC","WATERFALL","WATERPULSE"
	//         EggMoves : AURORABEAM,CLEARSMOG,DISABLE,DRAGONBREATH,"DRAGONRAGE","FLAIL","MUDDYWATER",OCTAZOOKA,"OUTRAGE",RAZORWIND,"SIGNALBEAM",SPLASH,"WATERPULSE"
	//         Compatibility : Water1,Dragon
	//         StepsToHatch : 5120
	//         Height : 0.4
	//         Weight : 8.0
	//         Color : Blue
	//         Shape : HeadBase
	//         Habitat : Sea
	//         Kind : Dragon
	//         // Pokedex : By cleverly flicking the fins on its back side to side, it moves in any direction while facing forward. It spits ink to escape if it senses danger.
	//         Generation : 1
	//         WildItemUncommon : DRAGONSCALE
	//         BattlerPlayerX : 1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 3
	//         BattlerEnemyY : 3
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 1
	//         Evolutions : SEADRA,"Level",32
	//         }
	//         [1monsterName : {
	//         Name : Seadra
	//         InternalName : SEADRA
	//         Type1 : WATER
	//         BaseStats : 55,65,95,85,95,45
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 154
	//         EffortPoints : 0,0,1,0,1,0
	//         Rareness : 75
	//         Happiness : 70
	//         Abilities : POISONPOINT,SNIPER
	//         HiddenAbility : DAMP
	//         Moves : 1,"HYDROPUMP",1,"BUBBLE",1,"SMOKESCREEN",1,LEER,1,"WATERGUN",5,"SMOKESCREEN",9,LEER,13,"WATERGUN",17,TWISTER,21,BUBBLEBEAM,26,"FOCUSENERGY",31,"BRINE",38,"AGILITY",45,"DRAGONPULSE",52,"DRAGONDANCE",60,"HYDROPUMP"
	//         TutorMoves : "ATTRACT","BLIZZARD",BOUNCE,"CONFIDE","DIVE","DOUBLETEAM","DRAGONPULSE","FACADE","FLASHCANNON","FRUSTRATION","GIGAIMPACT","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","LASERFOCUS","OUTRAGE","PROTECT","RAINDANCE","REST","RETURN","ROUND","SCALD","SIGNALBEAM","SLEEPTALK","SNORE","SUBSTITUTE","SURF","SWAGGER","TOXIC","WATERFALL","WATERPULSE"
	//         Compatibility : Water1,Dragon
	//         StepsToHatch : 5120
	//         Height : 1.2
	//         Weight : 25.0
	//         Color : Blue
	//         Shape : HeadBase
	//         Habitat : Sea
	//         Kind : Dragon
	//         // Pokedex : The poisonous barbs all over its body are highly valued as ingredients for making traditional herbal medicine. It shows no mercy to anything approaching its nest.
	//         Generation : 1
	//         WildItemUncommon : DRAGONSCALE
	//         BattlerPlayerX : -3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 9
	//         BattlerEnemyY : -1
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 1
	//         Evolutions : KINGDRA,TradeItem,DRAGONSCALE
	//         }
	//         [1monsterName : {
	//         Name : Goldeen
	//         InternalName : GOLDEEN
	//         Type1 : WATER
	//         BaseStats : 45,67,60,63,35,50
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 64
	//         EffortPoints : 0,1,0,0,0,0
	//         Rareness : 225
	//         Happiness : 70
	//         Abilities : SWIFTSWIM,WATERVEIL
	//         HiddenAbility : LIGHTNINGROD
	//         Moves : 1,PECK,1,"TAILWHIP",1,WATERSPORT,5,"SUPERSONIC",8,HORNATTACK,13,"FLAIL",16,"WATERPULSE",21,"AQUARING",24,"FURYATTACK",29,"AGILITY",32,"WATERFALL",37,HORNDRILL,40,SOAK,45,MEGAHORN
	//         TutorMoves : "AQUATAIL","ATTRACT","BLIZZARD",BOUNCE,"CONFIDE","DIVE","DOUBLETEAM","DRILLRUN","FACADE","FRUSTRATION","HAIL","HIDDENPOWER","ICEBEAM","ICYWIND","KNOCKOFF","POISONJAB","PROTECT","RAINDANCE","REST","RETURN","ROUND","SCALD","SIGNALBEAM","SLEEPTALK",SMARTSTRIKE,"SNORE","SUBSTITUTE","SURF","SWAGGER","THROATCHOP","TOXIC","WATERFALL","WATERPULSE"
	//         EggMoves : "AQUATAIL",BODYSLAM,"HAZE","HYDROPUMP",MUDSHOT,MUDSLAP,"MUDSPORT","PSYBEAM","SIGNALBEAM","SKULLBASH","SLEEPTALK"
	//         Compatibility : Water2
	//         StepsToHatch : 5120
	//         Height : 0.6
	//         Weight : 15.0
	//         Color : Red
	//         Shape : Finned
	//         Habitat : WatersEdge
	//         Kind : Goldfish
	//         // Pokedex : In the springtime, schools of Goldeen can be seen swimming up falls and rivers. It metes out staggering damage with its single horn.
	//         Generation : 1
	//         WildItemUncommon : MYSTICWATER
	//         BattlerPlayerX : -4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 5
	//         BattlerEnemyY : 4
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : SEAKING,"Level",33
	//         }
	//         [1monsterName : {
	//         Name : Seaking
	//         InternalName : SEAKING
	//         Type1 : WATER
	//         BaseStats : 80,92,65,68,65,80
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 158
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 60
	//         Happiness : 70
	//         Abilities : SWIFTSWIM,WATERVEIL
	//         HiddenAbility : LIGHTNINGROD
	//         Moves : 1,MEGAHORN,1,"POISONJAB",1,PECK,1,"TAILWHIP",1,WATERSPORT,1,"SUPERSONIC",5,"SUPERSONIC",8,HORNATTACK,13,"FLAIL",16,"WATERPULSE",21,"AQUARING",24,"FURYATTACK",29,"AGILITY",32,"WATERFALL",40,HORNDRILL,46,SOAK,54,MEGAHORN
	//         TutorMoves : "AQUATAIL","ATTRACT","BLIZZARD",BOUNCE,"CONFIDE","DIVE","DOUBLETEAM","DRILLRUN","FACADE","FRUSTRATION","GIGAIMPACT","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","KNOCKOFF","POISONJAB","PROTECT","RAINDANCE","REST","RETURN","ROUND","SCALD","SIGNALBEAM","SLEEPTALK",SMARTSTRIKE,"SNORE","SUBSTITUTE","SURF","SWAGGER","THROATCHOP","TOXIC","WATERFALL","WATERPULSE"
	//         Compatibility : Water2
	//         StepsToHatch : 5120
	//         Height : 1.3
	//         Weight : 39.0
	//         Color : Red
	//         Shape : Finned
	//         Habitat : WatersEdge
	//         Kind : Goldfish
	//         // Pokedex : It punches holes in boulders on stream- beds. This is a clever innovation that prevents its eggs from being attacked or washed away by the current.
	//         Generation : 1
	//         WildItemUncommon : MYSTICWATER
	//         BattlerPlayerX : -8
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 8
	//         BattlerEnemyY : -1
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Staryu
	//         InternalName : STARYU
	//         Type1 : WATER
	//         BaseStats : 30,45,55,85,70,55
	//         GenderRate : Genderless
	//         GrowthRate : Slow
	//         BaseEXP : 68
	//         EffortPoints : 0,0,0,1,0,0
	//         Rareness : 225
	//         Happiness : 70
	//         Abilities : ILLUMINATE,NATURALCURE
	//         HiddenAbility : ANALYTIC
	//         Moves : 1,"TACKLE",1,"HARDEN",4,"WATERGUN",7,"RAPIDSPIN",10,RECOVER,13,PSYWAVE,16,"SWIFT",18,BUBBLEBEAM,22,CAMOUFLAGE,24,"GYROBALL",28,"BRINE",31,MINIMIZE,35,REFLECTTYPE,37,POWERGEM,40,CONFUSERAY,42,"PSYCHIC",46,"LIGHTSCREEN",49,COSMICPOWER,53,"HYDROPUMP"
	//         TutorMoves : "BLIZZARD","CONFIDE",DAZZLINGGLEAM,"DIVE","DOUBLETEAM","FACADE","FLASHCANNON","FRUSTRATION",GRAVITY,"GYROBALL","HAIL","HIDDENPOWER","ICEBEAM","ICYWIND","LIGHTSCREEN",MAGICCOAT,PAINSPLIT,"PROTECT","PSYCHIC","PSYCHUP","RAINDANCE",RECYCLE,REFLECT,"REST","RETURN","ROUND","SCALD","SIGNALBEAM","SLEEPTALK","SNORE","SUBSTITUTE","SURF","SWAGGER",THUNDER,THUNDERBOLT,THUNDERWAVE,"TOXIC","WATERFALL","WATERPULSE"
	//         Compatibility : Water3
	//         StepsToHatch : 5120
	//         Height : 0.8
	//         Weight : 34.5
	//         Color : Brown
	//         Shape : HeadBase
	//         Habitat : Sea
	//         Kind : Star Shape
	//         // Pokedex : It gathers with others in the night and makes its red core glow on and off with the twinkling stars. It can regenerate limbs if they are severed from its body.
	//         Generation : 1
	//         WildItemCommon : STARDUST
	//         WildItemUncommon : STARPIECE
	//         BattlerPlayerX : 3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 4
	//         BattlerEnemyY : 10
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : STARMIE,Item,WATERSTONE
	//         }
	//         [1monsterName : {
	//         Name : Starmie
	//         InternalName : STARMIE
	//         Type1 : WATER
	//         Type2 : "PSYCHIC"
	//         BaseStats : 60,75,85,115,100,85
	//         GenderRate : Genderless
	//         GrowthRate : Slow
	//         BaseEXP : 182
	//         EffortPoints : 0,0,0,2,0,0
	//         Rareness : 60
	//         Happiness : 70
	//         Abilities : ILLUMINATE,NATURALCURE
	//         HiddenAbility : ANALYTIC
	//         Moves : 1,"HYDROPUMP",1,SPOTLIGHT,1,"WATERGUN",1,"RAPIDSPIN",1,RECOVER,1,"SWIFT",40,CONFUSERAY
	//         TutorMoves : ALLYSWITCH,"BLIZZARD","CONFIDE",DAZZLINGGLEAM,"DIVE","DOUBLETEAM","DREAMEATER","FACADE","FLASHCANNON","FRUSTRATION","GIGAIMPACT","GRASSKNOT",GRAVITY,"GYROBALL","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","LIGHTSCREEN",MAGICCOAT,PAINSPLIT,"PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE",RECYCLE,REFLECT,"REST","RETURN","ROUND","SCALD","SIGNALBEAM","SKILLSWAP","SLEEPTALK","SNORE","SUBSTITUTE","SURF","SWAGGER",TELEKINESIS,THUNDER,THUNDERBOLT,THUNDERWAVE,"TOXIC",TRICK,TRICKROOM,"WATERFALL","WATERPULSE",WONDERROOM
	//         Compatibility : Water3
	//         StepsToHatch : 5120
	//         Height : 1.1
	//         Weight : 80.0
	//         Color : Purple
	//         Shape : HeadBase
	//         Habitat : Sea
	//         Kind : Mysterious
	//         // Pokedex : People in ancient times imagined that Starmie were transformed from the reflections of stars that twinkled on gentle waves at night.
	//         Generation : 1
	//         WildItemCommon : STARDUST
	//         WildItemUncommon : STARPIECE
	//         BattlerPlayerX : 2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : 0
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Mr. Mime
	//         InternalName : MRMIME
	//         Type1 : "PSYCHIC"
	//         Type2 : FAIRY
	//         BaseStats : 40,45,65,90,100,120
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 161
	//         EffortPoints : 0,0,0,0,0,2
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : SOUNDPROOF,FILTER
	//         HiddenAbility : TECHNICIAN
	//         Moves : 1,MISTYTERRAIN,1,"MAGICALLEAF",1,QUICKGUARD,1,WIDEGUARD,1,POWERSWAP,1,GUARDSWAP,1,BARRIER,1,POUND,1,"CONFUSION",4,COPYCAT,8,MEDITATE,11,DOUBLESLAP,15,MIMIC,15,PSYWAVE,18,ENCORE,22,"LIGHTSCREEN",22,REFLECT,25,"PSYBEAM",29,"SUBSTITUTE",32,RECYCLE,36,TRICK,39,"PSYCHIC",43,ROLEPLAY,46,"BATONPASS",50,"SAFEGUARD"
	//         TutorMoves : "AERIALACE",ALLYSWITCH,"ATTRACT","BRICKBREAK",CALMMIND,CHARGEBEAM,"CONFIDE","COVET",DAZZLINGGLEAM,"DOUBLETEAM",DRAINPUNCH,"DREAMEATER","ENERGYBALL","FACADE","FIREPUNCH","FLING","FOCUSBLAST","FOCUSPUNCH",FOULPLAY,"FRUSTRATION","GIGAIMPACT","GRASSKNOT","HELPINGHAND","HIDDENPOWER","HYPERBEAM","ICEPUNCH","ICYWIND","INFESTATION","IRONDEFENSE","LIGHTSCREEN",MAGICCOAT,MAGICROOM,"PAYBACK","POWERUPPUNCH","PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE",RECYCLE,REFLECT,"REST","RETURN",ROLEPLAY,"ROUND","SAFEGUARD","SHADOWBALL",SHOCKWAVE,"SIGNALBEAM","SKILLSWAP","SLEEPTALK",SNATCH,"SNORE","SOLARBEAM","SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,TELEKINESIS,"THIEF",THUNDER,THUNDERBOLT,"THUNDERPUNCH",THUNDERWAVE,TORMENT,"TOXIC",TRICK,TRICKROOM,WONDERROOM,"ZENHEADBUTT"
	//         EggMoves : CONFUSERAY,"FAKEOUT",FUTURESIGHT,HYPNOSIS,"ICYWIND",MAGICROOM,MIMIC,NASTYPLOT,POWERSPLIT,TEETERDANCE,TRICK,WAKEUPSLAP
	//         Compatibility : Humanlike
	//         StepsToHatch : 6400
	//         Height : 1.3
	//         Weight : 54.5
	//         Color : Pink
	//         Shape : Bipedal
	//         Habitat : Urban
	//         Kind : Barrier
	//         // Pokedex : A Mr. Mime is a master of pantomime. It can convince others that something unseeable actually exists. Once believed, the imaginary object does become real.
	//         Generation : 1
	//         BattlerPlayerX : 5
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 13
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Scyther
	//         InternalName : SCYTHER
	//         Type1 : BUG
	//         Type2 : FLYING
	//         BaseStats : 70,110,80,105,55,80
	//         GenderRate : Female50Percent
	//         GrowthRate : Medium
	//         BaseEXP : 100
	//         EffortPoints : 0,1,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : SWARM,TECHNICIAN
	//         HiddenAbility : STEADFAST
	//         Moves : 1,VACUUMWAVE,1,"QUICKATTACK",1,LEER,5,"FOCUSENERGY",9,"PURSUIT",13,"FALSESWIPE",17,"AGILITY",21,"WINGATTACK",25,FURYCUTTER,29,"SLASH",33,RAZORWIND,37,"DOUBLETEAM",41,"XSCISSOR",45,NIGHTSLASH,49,DOUBLEHIT,50,"AIRSLASH",57,"SWORDSDANCE",61,FEINT
	//         TutorMoves : "AERIALACE","ATTRACT","BRICKBREAK","BRUTALSWING","BUGBITE","CONFIDE","CUT","DEFOG","DOUBLETEAM","FACADE","FALSESWIPE","FRUSTRATION","GIGAIMPACT","HIDDENPOWER","HYPERBEAM","KNOCKOFF","LASERFOCUS","LIGHTSCREEN","PROTECT","RAINDANCE","REST","RETURN","ROCKSMASH","ROOST","ROUND","SAFEGUARD","SLEEPTALK","SNORE","STEELWING","STRUGGLEBUG","SUBSTITUTE","SUNNYDAY","SWAGGER","SWORDSDANCE","TAILWIND","THIEF","TOXIC","UTURN","XSCISSOR"
	//         EggMoves : "BATONPASS","BUGBUZZ","COUNTER","DEFOG","ENDURE",NIGHTSLASH,QUICKGUARD,RAZORWIND,REVERSAL,"SILVERWIND","STEELWING"
	//         Compatibility : Bug
	//         StepsToHatch : 6400
	//         Height : 1.5
	//         Weight : 56.0
	//         Color : Green
	//         Shape : MultiWinged
	//         Habitat : "Grassland"
	//         Kind : Mantis
	//         // Pokedex : Its blindingly fast speed adds to the sharpness of its twin forearm scythes. The scythes can slice through thick logs in one wicked stroke.
	//         Generation : 1
	//         BattlerPlayerX : -5
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -9
	//         BattlerEnemyY : 9
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : SCIZOR,TradeItem,METALCOAT
	//         }
	//         [1monsterName : {
	//         Name : Jynx
	//         InternalName : JYNX
	//         Type1 : ICE
	//         Type2 : "PSYCHIC"
	//         BaseStats : 65,50,35,95,115,95
	//         GenderRate : AlwaysFemale
	//         GrowthRate : Medium
	//         BaseEXP : 159
	//         EffortPoints : 0,0,0,0,2,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : OBLIVIOUS,FOREWARN
	//         HiddenAbility : DRYSKIN
	//         Moves : 1,DRAININGKISS,1,PERISHSONG,1,POUND,1,LICK,1,LOVELYKISS,1,POWDERSNOW,5,LICK,8,LOVELYKISS,11,POWDERSNOW,15,DOUBLESLAP,18,"ICEPUNCH",21,HEARTSTAMP,25,MEANLOOK,28,"FAKETEARS",33,WAKEUPSLAP,39,AVALANCHE,44,BODYSLAM,49,WRINGOUT,55,PERISHSONG,60,"BLIZZARD"
	//         TutorMoves : ALLYSWITCH,"ATTRACT",AURORAVEIL,"BLIZZARD","BRICKBREAK",CALMMIND,"CONFIDE","COVET","DOUBLETEAM",DRAINPUNCH,"DREAMEATER","ECHOEDVOICE","ENERGYBALL","FACADE","FLING","FOCUSBLAST","FOCUSPUNCH",FROSTBREATH,"FRUSTRATION","GIGAIMPACT","GRASSKNOT","HAIL","HEALBELL","HELPINGHAND","HIDDENPOWER","HYPERBEAM","HYPERVOICE","ICEBEAM","ICEPUNCH","ICYWIND","LIGHTSCREEN",MAGICCOAT,MAGICROOM,"PAYBACK","POWERUPPUNCH","PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE",RECYCLE,REFLECT,"REST","RETURN",ROLEPLAY,"ROUND","SHADOWBALL","SIGNALBEAM","SKILLSWAP","SLEEPTALK","SNORE","SUBSTITUTE","SWAGGER",TAUNT,TELEKINESIS,"THIEF",TORMENT,"TOXIC",TRICK,TRICKROOM,"WATERPULSE",WONDERROOM,"ZENHEADBUTT"
	//         Compatibility : Humanlike
	//         StepsToHatch : 6400
	//         Height : 1.4
	//         Weight : 40.6
	//         Color : Red
	//         Shape : Bipedal
	//         Habitat : Urban
	//         Kind : Human Shape
	//         // Pokedex : A Jynx sashays rhythmically as if it were dancing. Its motions are so bouncingly alluring, people seeing it are compelled to shake their hips without noticing.
	//         Generation : 1
	//         BattlerPlayerX : 3
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -5
	//         BattlerEnemyY : 18
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [1monsterName : {
	//         Name : Electabuzz
	//         InternalName : ELECTABUZZ
	//         Type1 : ELECTRIC
	//         BaseStats : 65,83,57,105,95,85
	//         GenderRate : Female25Percent
	//         GrowthRate : Medium
	//         BaseEXP : 172
	//         EffortPoints : 0,0,0,2,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : STATIC
	//         HiddenAbility : VITALSPIRIT
	//         Moves : 1,"QUICKATTACK",1,LEER,1,THUNDERSHOCK,5,THUNDERSHOCK,8,LOWKICK,12,"SWIFT",15,SHOCKWAVE,19,THUNDERWAVE,22,ELECTROBALL,26,"LIGHTSCREEN",29,"THUNDERPUNCH",36,DISCHARGE,42,SCREECH,49,THUNDERBOLT,55,THUNDER
	//         TutorMoves : "ATTRACT","BRICKBREAK",CHARGEBEAM,"CONFIDE","COVET","DOUBLETEAM",DUALCHOP,"ELECTROWEB","FACADE","FIREPUNCH","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","HELPINGHAND","HIDDENPOWER","HYPERBEAM","ICEPUNCH","IRONTAIL","LIGHTSCREEN",LOWKICK,LOWSWEEP,MAGNETRISE,"POWERUPPUNCH","PROTECT","PSYCHIC","RAINDANCE","REST","RETURN","ROCKSMASH","ROUND",SHOCKWAVE,"SIGNALBEAM","SLEEPTALK","SNORE","STRENGTH","SUBSTITUTE","SWAGGER","THIEF",THUNDER,THUNDERBOLT,"THUNDERPUNCH",THUNDERWAVE,"TOXIC",VOLTSWITCH,WILDCHARGE
	//         Compatibility : Humanlike
	//         StepsToHatch : 6400
	//         Height : 1.1
	//         Weight : 30.0
	//         Color : Yellow
	//         Shape : BipedalTail
	//         Habitat : "Grassland"
	//         Kind : Electric
	//         // Pokedex : When a storm approaches, it competes with others to scale heights that are likely to be stricken by lightning. Some towns use Electabuzz as lightning rods.
	//         Generation : 1
	//         WildItemUncommon : ELECTIRIZER
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 13
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : ELECTIVIRE,TradeItem,ELECTIRIZER
	//         }
	//         [1monsterName : {
	//         Name : Magmar
	//         InternalName : MAGMAR
	//         Type1 : FIRE
	//         BaseStats : 65,95,57,93,100,85
	//         GenderRate : Female25Percent
	//         GrowthRate : Medium
	//         BaseEXP : 173
	//         EffortPoints : 0,0,0,0,2,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : FLAMEBODY
	//         HiddenAbility : VITALSPIRIT
	//         Moves : 1,SMOG,1,LEER,1,"EMBER",5,"EMBER",8,"SMOKESCREEN",12,FEINTATTACK,15,"FIRESPIN",19,CLEARSMOG,22,"FLAMEBURST",26,CONFUSERAY,29,"FIREPUNCH",36,LAVAPLUME,42,"SUNNYDAY",49,"FLAMETHROWER",55,"FIREBLAST"
	//         TutorMoves : "ATTRACT","BRICKBREAK","CONFIDE","COVET","DOUBLETEAM",DUALCHOP,"FACADE","FIREBLAST","FIREPUNCH","FLAMECHARGE","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","HEATWAVE","HELPINGHAND","HIDDENPOWER","HYPERBEAM","IRONTAIL",LOWKICK,LOWSWEEP,"OVERHEAT","POWERUPPUNCH","PROTECT","PSYCHIC","REST","RETURN","ROCKSMASH","ROUND","SLEEPTALK","SNORE","STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER","THIEF","THUNDERPUNCH","TOXIC","WILLOWISP"
	//         Compatibility : Humanlike
	//         StepsToHatch : 6400
	//         Height : 1.3
	//         Weight : 44.5
	//         Color : Red
	//         Shape : BipedalTail
	//         Habitat : Mountain
	//         Kind : Spitfire
	//         // Pokedex : In battle, it blows out intense flames from all over its body to intimidate its foe. These fiery bursts create heat waves that ignite grass and trees.
	//         Generation : 1
	//         WildItemUncommon : MAGMARIZER
	//         BattlerPlayerX : -1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -7
	//         BattlerEnemyY : 11
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : MAGMORTAR,TradeItem,MAGMARIZER
	//         }
	//         [1monsterName : {
	//         Name : Pinsir
	//         InternalName : PINSIR
	//         Type1 : BUG
	//         BaseStats : 65,125,100,85,55,70
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 175
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : HYPERCUTTER,MOLDBREAKER
	//         HiddenAbility : MOXIE
	//         Moves : 1,VICEGRIP,1,"FOCUSENERGY",4,"BIND",8,SEISMICTOSS,11,"HARDEN",15,REVENGE,18,VITALTHROW,22,DOUBLEHIT,26,"BRICKBREAK",29,"XSCISSOR",33,SUBMISSION,36,STORMTHROW,40,"SWORDSDANCE",43,THRASH,47,SUPERPOWER,50,GUILLOTINE
	//         TutorMoves : "ATTRACT","BIND","BRICKBREAK","BRUTALSWING","BUGBITE",BULKUP,"BULLDOZE","CONFIDE","CUT","DOUBLETEAM","EARTHQUAKE","FACADE","FALSESWIPE","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","HIDDENPOWER","HYPERBEAM","IRONDEFENSE","KNOCKOFF","PROTECT","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND","SLEEPTALK","SMACKDOWN","SNORE",STEALTHROCK,STONEEDGE,"STRENGTH","STRUGGLEBUG","SUBSTITUTE","SUNNYDAY",SUPERPOWER,"SWAGGER","SWORDSDANCE","THIEF","THROATCHOP","TOXIC","XSCISSOR"
	//         EggMoves : "BUGBITE",CLOSECOMBAT,FEINT,FEINTATTACK,"FLAIL","FURYATTACK",MEFIRST,"QUICKATTACK",SUPERPOWER
	//         Compatibility : Bug
	//         StepsToHatch : 6400
	//         Height : 1.5
	//         Weight : 55.0
	//         Color : Brown
	//         Shape : Bipedal
	//         Habitat : Forest
	//         Kind : Stag Beetle
	//         // Pokedex : Their pincers are strong enough to shatter thick logs. Because they dislike cold, Pinsir burrow and sleep under the ground on chilly nights.
	//         Generation : 1
	//         BattlerPlayerX : 5
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -3
	//         BattlerEnemyY : 10
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [1monsterName : {
	//         Name : Tauros
	//         InternalName : TAUROS
	//         Type1 : NORMAL
	//         BaseStats : 75,100,95,110,40,70
	//         GenderRate : AlwaysMale
	//         GrowthRate : Slow
	//         BaseEXP : 172
	//         EffortPoints : 0,1,0,1,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : INTIMIDATE,ANGERPOINT
	//         HiddenAbility : SHEERFORCE
	//         Moves : 1,"TACKLE",3,"TAILWHIP",5,"RAGE",8,HORNATTACK,11,"SCARYFACE",15,"PURSUIT",19,"REST",24,"PAYBACK",29,"WORKUP",35,"TAKEDOWN",41,"ZENHEADBUTT",48,"SWAGGER",55,THRASH,63,"DOUBLEEDGE",71,"GIGAIMPACT"
	//         TutorMoves : "ATTRACT","BLIZZARD","BULLDOZE","CONFIDE","DOUBLETEAM","EARTHQUAKE","ENDEAVOR","FACADE","FIREBLAST","FLAMETHROWER","FRUSTRATION","GIGAIMPACT","HELPINGHAND","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND",IRONHEAD,"IRONTAIL","OUTRAGE","PAYBACK","PROTECT","RAINDANCE","REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB",ROLEPLAY,"ROUND",SANDSTORM,SHOCKWAVE,"SLEEPTALK",SMARTSTRIKE,"SNORE","SOLARBEAM",SPITE,"STOMPINGTANTRUM",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY","SURF","SWAGGER",THUNDER,THUNDERBOLT,"TOXIC",UPROAR,"WATERPULSE",WILDCHARGE,"WORKUP","ZENHEADBUTT"
	//         Compatibility : Field
	//         StepsToHatch : 5120
	//         Height : 1.4
	//         Weight : 88.4
	//         Color : Brown
	//         Shape : "Quadruped"
	//         Habitat : "Grassland"
	//         Kind : Wild Bull
	//         // Pokedex : It is not satisfied unless it is rampaging at all times. If there is no opponent for Tauros to battle, it will charge at thick trees and knock them down to calm itself.
	//         Generation : 1
	//         BattlerPlayerX : -1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 13
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [1monsterName : {
	//         Name : Magikarp
	//         InternalName : MAGIKARP
	//         Type1 : WATER
	//         BaseStats : 20,10,55,80,15,20
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 40
	//         EffortPoints : 0,0,0,1,0,0
	//         Rareness : 255
	//         Happiness : 70
	//         Abilities : SWIFTSWIM
	//         HiddenAbility : RATTLED
	//         Moves : 1,SPLASH,15,"TACKLE",30,"FLAIL"
	//         TutorMoves : BOUNCE
	//         Compatibility : Water2,Dragon
	//         StepsToHatch : 1280
	//         Height : 0.9
	//         Weight : 10.0
	//         Color : Red
	//         Shape : Finned
	//         Habitat : WatersEdge
	//         Kind : Fish
	//         // Pokedex : Its swimming muscles are weak, so it is easily washed away by currents. In places where water pools, you can see many Magikarp deposited there by the flow.
	//         Generation : 1
	//         BattlerPlayerX : -1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : -1
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : GYARADOS,"Level",20
	//         }
	//         [1monsterName : {
	//         Name : Gyarados
	//         InternalName : GYARADOS
	//         Type1 : WATER
	//         Type2 : FLYING
	//         BaseStats : 95,125,79,81,60,100
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 189
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : INTIMIDATE
	//         HiddenAbility : MOXIE
	//         Moves : 0,"BITE",1,"BITE",1,THRASH,21,LEER,24,TWISTER,27,ICEFANG,30,"AQUATAIL",33,"SCARYFACE",36,"DRAGONRAGE",39,"CRUNCH",42,"HYDROPUMP",45,"DRAGONDANCE",48,HURRICANE,51,"RAINDANCE",54,"HYPERBEAM"
	//         TutorMoves : "AQUATAIL","ATTRACT","BLIZZARD",BOUNCE,"BRUTALSWING","BULLDOZE","CONFIDE","DARKPULSE","DIVE","DOUBLETEAM","DRAGONPULSE","DRAGONTAIL","EARTHQUAKE","FACADE","FIREBLAST","FLAMETHROWER","FRUSTRATION","GIGAIMPACT","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND",IRONHEAD,"IRONTAIL","OUTRAGE","PAYBACK","PROTECT","RAINDANCE","REST","RETURN","ROAR","ROCKSMASH","ROUND",SANDSTORM,"SCALD","SLEEPTALK","SNORE",SPITE,STONEEDGE,"STRENGTH","SUBSTITUTE","SURF","SWAGGER",TAUNT,THUNDER,THUNDERBOLT,THUNDERWAVE,TORMENT,"TOXIC",UPROAR,"WATERFALL","WATERPULSE"
	//         Compatibility : Water2,Dragon
	//         StepsToHatch : 1280
	//         Height : 6.5
	//         Weight : 235.0
	//         Color : Blue
	//         Shape : Serpentine
	//         Habitat : WatersEdge
	//         Kind : Atrocious
	//         // Pokedex : It is an extremely vicious and violent Pokémon. When humans begin to fight, it will appear and burn everything to the ground with intensely hot flames.
	//         Generation : 1
	//         BattlerPlayerX : 2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : -3
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [1monsterName : {
	//         Name : Lapras
	//         InternalName : LAPRAS
	//         Type1 : WATER
	//         Type2 : ICE
	//         BaseStats : 130,85,80,60,85,95
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 187
	//         EffortPoints : 2,0,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : WATERABSORB,SHELLARMOR
	//         HiddenAbility : HYDRATION
	//         Moves : 1,SING,1,"GROWL",1,"WATERGUN",4,"MIST",7,CONFUSERAY,10,ICESHARD,14,"WATERPULSE",18,BODYSLAM,22,"RAINDANCE",27,PERISHSONG,32,"ICEBEAM",37,"BRINE",43,"SAFEGUARD",47,"HYDROPUMP",50,SHEERCOLD
	//         TutorMoves : "AQUATAIL","ATTRACT","BLIZZARD","BLOCK","BULLDOZE","CONFIDE","DIVE","DOUBLETEAM","DRAGONPULSE","DREAMEATER","DRILLRUN","ECHOEDVOICE","FACADE",FROSTBREATH,"FRUSTRATION","GIGAIMPACT","HAIL","HEALBELL","HIDDENPOWER","HYPERBEAM","HYPERVOICE","ICEBEAM","ICYWIND",IRONHEAD,"IRONTAIL","OUTRAGE","PROTECT","PSYCHIC","RAINDANCE","REST","RETURN","ROAR","ROCKSMASH","ROUND","SAFEGUARD",SHOCKWAVE,"SIGNALBEAM","SLEEPTALK",SMARTSTRIKE,"SNORE","STRENGTH","SUBSTITUTE","SURF","SWAGGER",THUNDER,THUNDERBOLT,"TOXIC","WATERFALL","WATERPULSE","ZENHEADBUTT"
	//         EggMoves : "ANCIENTPOWER",AVALANCHE,"CURSE","DRAGONDANCE","DRAGONPULSE",FISSURE,"FORESIGHT",FREEZEDRY,FUTURESIGHT,HORNDRILL,"REFRESH","SLEEPTALK","TICKLE",WHIRLPOOL
	//         Compatibility : Monster,Water1
	//         StepsToHatch : 10240
	//         Height : 2.5
	//         Weight : 220.0
	//         Color : Blue
	//         Shape : Finned
	//         Habitat : Sea
	//         Kind : Transport
	//         // Pokedex : People have driven Lapras almost to the point of extinction. In the evenings, it is said to sing plaintively as it seeks what few others of its kind still remain.
	//         Generation : 1
	//         WildItemCommon : MYSTICWATER
	//         WildItemUncommon : MYSTICWATER
	//         WildItemRare : MYSTICWATER
	//         BattlerPlayerX : 1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 12
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [1monsterName : {
	//         Name : Ditto
	//         InternalName : DITTO
	//         Type1 : NORMAL
	//         BaseStats : 48,48,48,48,48,48
	//         GenderRate : Genderless
	//         GrowthRate : Medium
	//         BaseEXP : 101
	//         EffortPoints : 1,0,0,0,0,0
	//         Rareness : 35
	//         Happiness : 70
	//         Abilities : LIMBER
	//         HiddenAbility : IMPOSTER
	//         Moves : 1,TRANSFORM
	//         Compatibility : Ditto
	//         StepsToHatch : 5120
	//         Height : 0.3
	//         Weight : 4.0
	//         Color : Purple
	//         Shape : Head
	//         Habitat : Urban
	//         Kind : Transform
	//         // Pokedex : A Ditto rearranges its cell structure to transform itself. However, if it tries to change based on its memory, it will get details wrong.
	//         Generation : 1
	//         WildItemCommon : QUICKPOWDER
	//         WildItemUncommon : METALPOWDER
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 29
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	eevee: {
		Name: "Eevee",
		InternalName: "EEVEE",
		Type1: "NORMAL",
		BaseStats: [55, 55, 50, 55, 45, 65],
		GenderRate: "FemaleOneEighth",
		GrowthRate: "Medium",
		BaseEXP: 65,
		EffortPoints: [0, 0, 0, 0, 0, 1],
		Rareness: 45,
		Happiness: 70,
		Abilities: ["RUNAWAY", "ADAPTABILITY"],
		HiddenAbility: "ANTICIPATION",
		Moves: [1, "COVET", 1, "HELPINGHAND", 1, "GROWL", 1, "TACKLE", 1, "TAILWHIP", 5, "SANDATTACK", 9, "BABYDOLLEYES", 13, "QUICKATTACK", 17, "BITE", 17, "SWIFT", 20, "REFRESH", 25, "TAKEDOWN", 29, "CHARM", 33, "BATONPASS", 37, "DOUBLEEDGE", 41, "LASTRESORT", 45, "TRUMPCARD"],
		TutorMoves: ["ATTRACT", "CONFIDE", "COVET", "DOUBLETEAM", "ECHOEDVOICE", "FACADE", "FRUSTRATION", "HEALBELL", "HELPINGHAND", "HIDDENPOWER", "HYPERVOICE", "IRONTAIL", "LASERFOCUS", "LASTRESORT", "PROTECT", "RAINDANCE", "REST", "RETURN", "ROUND", "SHADOWBALL", "SLEEPTALK", "SNORE", "SUBSTITUTE", "SUNNYDAY", "SWAGGER", "TOXIC", "WORKUP"],
		EggMoves: ["CAPTIVATE", "CHARM", "COVET", "CURSE", "DETECT", "ENDURE", "FAKETEARS", "FLAIL", "NATURALGIFT", "STOREDPOWER", "SYNCHRONOISE", "TICKLE", "WISH", "YAWN"],
		Compatibility: "Field",
		StepsToHatch: 8960,
		Height: 0.3,
		Weight: 6.5,
		Color: "Brown",
		Shape: "Quadruped",
		Habitat: "Urban",
		Kind: "Evolution",
		// Pokedex : An Eevee has an unstable genetic makeup that suddenly mutates due to its environment. Radiation from various stones causes this Pokémon to evolve.
		Generation: 1,
		BattlerPlayerX: -7,
		BattlerPlayerY: 0,
		BattlerEnemyX: 0,
		BattlerEnemyY: 20,
		BattlerShadowX: 0,
		BattlerShadowSize: 2,
		Evolutions: ["VAPOREON", "Item", "WATERSTONE", "JOLTEON", "Item", "THUNDERSTONE", "FLAREON", "Item", "FIRESTONE", "LEAFEON", "Location", "28", "GLACEON", "Location", "34", "SYLVEON", "HappinessMoveType", "FAIRY", "ESPEON", "HappinessDay", , "UMBREON", "HappinessNight"],
	},
	//         [1monsterName : {
	//         Name : Vaporeon
	//         InternalName : VAPOREON
	//         Type1 : WATER
	//         BaseStats : 130,65,60,65,110,95
	//         GenderRate : FemaleOneEighth
	//         GrowthRate : Medium
	//         BaseEXP : 184
	//         EffortPoints : 2,0,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : WATERABSORB
	//         HiddenAbility : HYDRATION
	//         Moves : 0,"WATERGUN",1,"WATERGUN",1,"HELPINGHAND",1,"TACKLE",1,"TAILWHIP",5,"SANDATTACK",9,"BABYDOLLEYES",13,"QUICKATTACK",17,"WATERPULSE",20,AURORABEAM,25,"AQUARING",29,ACIDARMOR,33,"HAZE",37,"MUDDYWATER",41,"LASTRESORT",45,"HYDROPUMP"
	//         TutorMoves : "AQUATAIL","ATTRACT","BLIZZARD","CONFIDE","COVET","DIVE","DOUBLETEAM","ECHOEDVOICE","FACADE","FRUSTRATION","GIGAIMPACT","HAIL","HEALBELL","HELPINGHAND","HIDDENPOWER","HYPERBEAM","HYPERVOICE","ICEBEAM","ICYWIND","IRONTAIL","LASERFOCUS","LASTRESORT","PROTECT","RAINDANCE","REST","RETURN","ROAR","ROCKSMASH","ROUND","SCALD","SHADOWBALL","SIGNALBEAM","SLEEPTALK","SNORE","STRENGTH","SUBSTITUTE","SUNNYDAY","SURF","SWAGGER","TOXIC","WATERFALL","WATERPULSE","WORKUP"
	//         Compatibility : Field
	//         StepsToHatch : 8960
	//         Height : 1.0
	//         Weight : 29.0
	//         Color : Blue
	//         Shape : "Quadruped"
	//         Habitat : Urban
	//         Kind : Bubble Jet
	//         // Pokedex : Vaporeon underwent a spontaneous mutation and grew fins and gills that allow them to live underwater. They have the ability to freely control water.
	//         Generation : 1
	//         BattlerPlayerX : 4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 15
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Jolteon
	//         InternalName : JOLTEON
	//         Type1 : ELECTRIC
	//         BaseStats : 65,65,60,130,110,95
	//         GenderRate : FemaleOneEighth
	//         GrowthRate : Medium
	//         BaseEXP : 184
	//         EffortPoints : 0,0,0,2,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : VOLTABSORB
	//         HiddenAbility : QUICKFEET
	//         Moves : 0,THUNDERSHOCK,1,THUNDERSHOCK,1,"HELPINGHAND",1,"TACKLE",1,"TAILWHIP",5,"SANDATTACK",9,"BABYDOLLEYES",13,"QUICKATTACK",17,DOUBLEKICK,20,THUNDERFANG,25,"PINMISSILE",29,"AGILITY",33,THUNDERWAVE,37,DISCHARGE,41,"LASTRESORT",45,THUNDER
	//         TutorMoves : "ATTRACT",CHARGEBEAM,"CONFIDE","COVET","DOUBLETEAM","ECHOEDVOICE","FACADE","FRUSTRATION","GIGAIMPACT","HEALBELL","HELPINGHAND","HIDDENPOWER","HYPERBEAM","HYPERVOICE","IRONTAIL","LASERFOCUS","LASTRESORT","LIGHTSCREEN",MAGNETRISE,"PROTECT","RAINDANCE","REST","RETURN","ROAR","ROCKSMASH","ROUND","SHADOWBALL",SHOCKWAVE,"SIGNALBEAM","SLEEPTALK","SNORE","STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER",THUNDER,THUNDERBOLT,THUNDERWAVE,"TOXIC",VOLTSWITCH,WILDCHARGE,"WORKUP"
	//         Compatibility : Field
	//         StepsToHatch : 8960
	//         Height : 0.8
	//         Weight : 24.5
	//         Color : Yellow
	//         Shape : "Quadruped"
	//         Habitat : Urban
	//         Kind : Lightning
	//         // Pokedex : Its cells generate weak power that is amplified by its fur's static electricity to drop thunderbolts. The bristling fur is made of electrically charged needles.
	//         Generation : 1
	//         BattlerPlayerX : -4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -2
	//         BattlerEnemyY : 19
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Flareon
	//         InternalName : FLAREON
	//         Type1 : FIRE
	//         BaseStats : 65,130,60,65,95,110
	//         GenderRate : FemaleOneEighth
	//         GrowthRate : Medium
	//         BaseEXP : 184
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : FLASHFIRE
	//         HiddenAbility : GUTS
	//         Moves : 0,"EMBER",1,"EMBER",1,"HELPINGHAND",1,"TACKLE",1,"TAILWHIP",5,"SANDATTACK",9,"BABYDOLLEYES",13,"QUICKATTACK",17,"BITE",20,"FIREFANG",25,"FIRESPIN",29,"SCARYFACE",33,SMOG,37,LAVAPLUME,41,"LASTRESORT",45,"FLAREBLITZ"
	//         TutorMoves : "ATTRACT","CONFIDE","COVET","DOUBLETEAM","ECHOEDVOICE","FACADE","FIREBLAST","FLAMECHARGE","FLAMETHROWER","FRUSTRATION","GIGAIMPACT","HEALBELL","HEATWAVE","HELPINGHAND","HIDDENPOWER","HYPERBEAM","HYPERVOICE","IRONTAIL","LASERFOCUS","LASTRESORT","OVERHEAT","PROTECT","RAINDANCE","REST","RETURN","ROAR","ROCKSMASH","ROUND","SHADOWBALL","SLEEPTALK","SNORE","STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERPOWER,"SWAGGER","TOXIC","WILLOWISP","WORKUP"
	//         Compatibility : Field
	//         StepsToHatch : 8960
	//         Height : 0.9
	//         Weight : 25.0
	//         Color : Red
	//         Shape : "Quadruped"
	//         Habitat : Urban
	//         Kind : Flame
	//         // Pokedex : Flareon's fluffy fur releases heat into the air so that its body does not get excessively hot. Its body temperature can rise to a maximum of 1,650 degrees F.
	//         Generation : 1
	//         BattlerPlayerX : -7
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 4
	//         BattlerEnemyY : 17
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Porygon
	//         InternalName : PORYGON
	//         Type1 : NORMAL
	//         BaseStats : 65,60,70,40,85,75
	//         GenderRate : Genderless
	//         GrowthRate : Medium
	//         BaseEXP : 79
	//         EffortPoints : 0,0,0,0,1,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : TRACE,DOWNLOAD
	//         HiddenAbility : ANALYTIC
	//         Moves : 1,CONVERSION2,1,"TACKLE",1,CONVERSION,1,SHARPEN,7,"PSYBEAM",12,"AGILITY",18,RECOVER,23,MAGNETRISE,29,"SIGNALBEAM",34,RECYCLE,40,DISCHARGE,45,LOCKON,50,TRIATTACK,56,MAGICCOAT,62,ZAPCANNON
	//         TutorMoves : "AERIALACE",ALLYSWITCH,"BLIZZARD",CHARGEBEAM,"CONFIDE","DOUBLETEAM","DREAMEATER","ELECTROWEB","FACADE",FOULPLAY,"FRUSTRATION","GIGAIMPACT",GRAVITY,"HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","IRONTAIL","LASTRESORT",MAGICCOAT,MAGNETRISE,PAINSPLIT,"PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE",RECYCLE,"REST","RETURN","ROUND","SHADOWBALL",SHOCKWAVE,"SIGNALBEAM","SLEEPTALK","SNORE","SOLARBEAM","SUBSTITUTE","SUNNYDAY","SWAGGER",TELEKINESIS,"THIEF",THUNDER,THUNDERBOLT,THUNDERWAVE,"TOXIC",TRICK,TRICKROOM,WONDERROOM,"ZENHEADBUTT"
	//         Compatibility : Mineral
	//         StepsToHatch : 5120
	//         Height : 0.8
	//         Weight : 36.5
	//         Color : Pink
	//         Shape : HeadLegs
	//         Habitat : Urban
	//         Kind : Virtual
	//         // Pokedex : It is capable of reverting itself entirely back to program data in order to enter cyberspace. A Porygon is copy-protected so it cannot be duplicated.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 14
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : PORYGON2,TradeItem,UPGRADE
	//         }
	//         [1monsterName : {
	//         Name : Omanyte
	//         InternalName : OMANYTE
	//         Type1 : ROCK
	//         Type2 : WATER
	//         BaseStats : 35,40,100,35,90,55
	//         GenderRate : FemaleOneEighth
	//         GrowthRate : Medium
	//         BaseEXP : 71
	//         EffortPoints : 0,0,1,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : SWIFTSWIM,SHELLARMOR
	//         HiddenAbility : WEAKARMOR
	//         Moves : 1,CONSTRICT,1,"WITHDRAW",7,"BITE",10,"WATERGUN",16,ROLLOUT,19,LEER,25,MUDSHOT,28,"BRINE",34,"PROTECT",37,"ANCIENTPOWER",43,"TICKLE",46,ROCKBLAST,50,SHELLSMASH,55,"HYDROPUMP"
	//         TutorMoves : "ATTRACT","BIND","BLIZZARD","CONFIDE","DIVE","DOUBLETEAM",EARTHPOWER,"FACADE","FRUSTRATION","GYROBALL","HAIL","HIDDENPOWER","ICEBEAM","ICYWIND","IRONDEFENSE","KNOCKOFF","PROTECT","RAINDANCE","REST","RETURN",ROCKPOLISH,"ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SCALD","SLEEPTALK","SMACKDOWN","SNORE",STEALTHROCK,"SUBSTITUTE","SURF","SWAGGER","THIEF","TOXIC","WATERFALL","WATERPULSE"
	//         EggMoves : AURORABEAM,BIDE,BUBBLEBEAM,"HAZE","KNOCKOFF","MUDDYWATER",REFLECTTYPE,SLAM,SPIKES,"SUPERSONIC","TOXICSPIKES","WATERPULSE",WHIRLPOOL,WRINGOUT
	//         Compatibility : Water1,Water3
	//         StepsToHatch : 7680
	//         Height : 0.4
	//         Weight : 7.5
	//         Color : Blue
	//         Shape : Multiped
	//         Habitat : Sea
	//         Kind : Spiral
	//         // Pokedex : One of the ancient and long-since-extinct Pokémon that have been regenerated from fossils by humans. If attacked, it withdraws into its hard shell.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : 25
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : OMASTAR,"Level",40
	//         }
	//         [1monsterName : {
	//         Name : Omastar
	//         InternalName : OMASTAR
	//         Type1 : ROCK
	//         Type2 : WATER
	//         BaseStats : 70,60,125,55,115,70
	//         GenderRate : FemaleOneEighth
	//         GrowthRate : Medium
	//         BaseEXP : 173
	//         EffortPoints : 0,0,2,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : SWIFTSWIM,SHELLARMOR
	//         HiddenAbility : WEAKARMOR
	//         Moves : 0,SPIKECANNON,1,SPIKECANNON,1,"HYDROPUMP",1,CONSTRICT,1,"WITHDRAW",1,"BITE",7,"BITE",10,"WATERGUN",16,ROLLOUT,19,LEER,25,MUDSHOT,28,"BRINE",34,"PROTECT",37,"ANCIENTPOWER",48,"TICKLE",56,ROCKBLAST,67,SHELLSMASH,75,"HYDROPUMP"
	//         TutorMoves : "ATTRACT","BIND","BLIZZARD","CONFIDE","DIVE","DOUBLETEAM",EARTHPOWER,"FACADE","FRUSTRATION","GIGAIMPACT","GYROBALL","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","IRONDEFENSE","KNOCKOFF","PROTECT","RAINDANCE","REST","RETURN",ROCKPOLISH,"ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SCALD","SLEEPTALK","SMACKDOWN","SNORE",STEALTHROCK,STONEEDGE,"SUBSTITUTE","SURF","SWAGGER","THIEF","TOXIC","WATERFALL","WATERPULSE"
	//         Compatibility : Water1,Water3
	//         StepsToHatch : 7680
	//         Height : 1.0
	//         Weight : 35.0
	//         Color : Blue
	//         Shape : Multiped
	//         Habitat : Sea
	//         Kind : Spiral
	//         // Pokedex : An Omastar uses its tentacles to capture its prey. It is believed to have become extinct because its shell grew too large, making its movements slow and ponderous.
	//         Generation : 1
	//         BattlerPlayerX : 5
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : 16
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Kabuto
	//         InternalName : KABUTO
	//         Type1 : ROCK
	//         Type2 : WATER
	//         BaseStats : 30,80,90,55,55,45
	//         GenderRate : FemaleOneEighth
	//         GrowthRate : Medium
	//         BaseEXP : 71
	//         EffortPoints : 0,0,1,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : SWIFTSWIM,BATTLEARMOR
	//         HiddenAbility : WEAKARMOR
	//         Moves : 1,"SCRATCH",1,"HARDEN",6,ABSORB,11,LEER,16,MUDSHOT,21,"SANDATTACK",26,"ENDURE",31,"AQUAJET",36,MEGADRAIN,41,METALSOUND,46,"ANCIENTPOWER",50,WRINGOUT
	//         TutorMoves : "AERIALACE","ATTRACT","BLIZZARD","CONFIDE","DOUBLETEAM",EARTHPOWER,"FACADE","FRUSTRATION","GIGADRAIN","HAIL","HIDDENPOWER","ICEBEAM","ICYWIND","IRONDEFENSE","KNOCKOFF","PROTECT","RAINDANCE","REST","RETURN",ROCKPOLISH,"ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SCALD","SLEEPTALK","SMACKDOWN","SNORE",STEALTHROCK,"SUBSTITUTE","SURF","SWAGGER","THIEF","TOXIC","WATERFALL","WATERPULSE"
	//         EggMoves : AURORABEAM,BUBBLEBEAM,CONFUSERAY,"FLAIL","FORESIGHT","GIGADRAIN","ICYWIND","KNOCKOFF",MUDSHOT,"RAPIDSPIN",SCREECH,"TAKEDOWN"
	//         Compatibility : Water1,Water3
	//         StepsToHatch : 7680
	//         Height : 0.5
	//         Weight : 11.5
	//         Color : Brown
	//         Shape : Insectoid
	//         Habitat : Sea
	//         Kind : Shellfish
	//         // Pokedex : This Pokémon has been regenerated from a fossil. However, in rare cases, living examples have been discovered. Kabuto have not changed for 300 million years.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 26
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : KABUTOPS,"Level",40
	//         }
	//         [1monsterName : {
	//         Name : Kabutops
	//         InternalName : KABUTOPS
	//         Type1 : ROCK
	//         Type2 : WATER
	//         BaseStats : 60,115,105,80,65,70
	//         GenderRate : FemaleOneEighth
	//         GrowthRate : Medium
	//         BaseEXP : 173
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : SWIFTSWIM,BATTLEARMOR
	//         HiddenAbility : WEAKARMOR
	//         Moves : 0,"SLASH",1,"SLASH",1,NIGHTSLASH,1,FEINT,1,"SCRATCH",1,"HARDEN",1,ABSORB,1,LEER,6,ABSORB,11,LEER,16,MUDSHOT,21,"SANDATTACK",26,"ENDURE",31,"AQUAJET",36,MEGADRAIN,45,METALSOUND,54,"ANCIENTPOWER",63,WRINGOUT,72,NIGHTSLASH
	//         TutorMoves : "AERIALACE","AQUATAIL","ATTRACT","BLIZZARD","BRICKBREAK","CONFIDE","CUT","DIVE","DOUBLETEAM",EARTHPOWER,"FACADE","FRUSTRATION","GIGADRAIN","GIGAIMPACT","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","IRONDEFENSE","KNOCKOFF","LIQUIDATION",LOWKICK,"NATUREPOWER","PROTECT","RAINDANCE","REST","RETURN",ROCKPOLISH,"ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SCALD","SLEEPTALK","SMACKDOWN","SNORE",STEALTHROCK,STONEEDGE,"SUBSTITUTE",SUPERPOWER,"SURF","SWAGGER","SWORDSDANCE","THIEF","TOXIC","WATERFALL","WATERPULSE","XSCISSOR"
	//         Compatibility : Water1,Water3
	//         StepsToHatch : 7680
	//         Height : 1.3
	//         Weight : 40.5
	//         Color : Brown
	//         Shape : BipedalTail
	//         Habitat : Sea
	//         Kind : Shellfish
	//         // Pokedex : Kabutops once swam underwater to hunt for prey. It was apparently evolving from being a water dweller to living on land as evident from changes in its gills and legs.
	//         Generation : 1
	//         BattlerPlayerX : 7
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : 9
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [1monsterName : {
	//         Name : Aerodactyl
	//         InternalName : AERODACTYL
	//         Type1 : ROCK
	//         Type2 : FLYING
	//         BaseStats : 80,105,65,130,60,75
	//         GenderRate : FemaleOneEighth
	//         GrowthRate : Slow
	//         BaseEXP : 180
	//         EffortPoints : 0,0,0,2,0,0
	//         Rareness : 45
	//         Happiness : 70
	//         Abilities : ROCKHEAD,PRESSURE
	//         HiddenAbility : UNNERVE
	//         Moves : 1,IRONHEAD,1,ICEFANG,1,"FIREFANG",1,THUNDERFANG,1,"WINGATTACK",1,"SUPERSONIC",1,"BITE",1,"SCARYFACE",9,"ROAR",17,"AGILITY",25,"ANCIENTPOWER",33,"CRUNCH",41,"TAKEDOWN",49,"SKYDROP",57,IRONHEAD,65,"HYPERBEAM",73,"ROCKSLIDE",81,"GIGAIMPACT"
	//         TutorMoves : "AERIALACE","AQUATAIL","ATTRACT","BRUTALSWING","BULLDOZE","CONFIDE","DEFOG","DOUBLETEAM","DRAGONCLAW","DRAGONPULSE",EARTHPOWER,"EARTHQUAKE","FACADE","FIREBLAST","FLAMETHROWER","FLY","FRUSTRATION","GIGAIMPACT","HEATWAVE","HIDDENPOWER","HYPERBEAM",IRONHEAD,"IRONTAIL","LASERFOCUS","PAYBACK","PROTECT","RAINDANCE","REST","RETURN","ROAR",ROCKPOLISH,"ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROOST","ROUND",SANDSTORM,SKYATTACK,"SKYDROP","SLEEPTALK","SMACKDOWN","SNORE",STEALTHROCK,"STEELWING",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER","TAILWIND",TAUNT,"THIEF",TORMENT,"TOXIC"
	//         EggMoves : "ASSURANCE","CURSE",DRAGONBREATH,"FORESIGHT","PURSUIT","ROOST","STEELWING","TAILWIND","WHIRLWIND",WIDEGUARD
	//         Compatibility : Flying
	//         StepsToHatch : 8960
	//         Height : 1.8
	//         Weight : 59.0
	//         Color : Purple
	//         Shape : Winged
	//         Habitat : Mountain
	//         Kind : Fossil
	//         // Pokedex : Aerodactyl is a Pokémon from the age of dinosaurs. It was regenerated from DNA extracted from amber. It is imagined to have been the king of the skies.
	//         Generation : 1
	//         BattlerPlayerX : -4
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 2
	//         BattlerEnemyY : -2
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Snorlax
	//         InternalName : SNORLAX
	//         Type1 : NORMAL
	//         BaseStats : 160,110,65,30,65,110
	//         GenderRate : FemaleOneEighth
	//         GrowthRate : Slow
	//         BaseEXP : 189
	//         EffortPoints : 2,0,0,0,0,0
	//         Rareness : 25
	//         Happiness : 70
	//         Abilities : IMMUNITY,THICKFAT
	//         HiddenAbility : GLUTTONY
	//         Moves : 1,"TACKLE",4,DEFENSECURL,9,"AMNESIA",12,LICK,17,CHIPAWAY,20,"YAWN",25,BODYSLAM,28,"REST",28,"SNORE",33,"SLEEPTALK",35,"GIGAIMPACT",36,ROLLOUT,41,"BLOCK",44,"BELLYDRUM",49,"CRUNCH",50,HEAVYSLAM,57,HIGHHORSEPOWER
	//         TutorMoves : AFTERYOU,"ATTRACT","BLIZZARD","BLOCK","BRICKBREAK","BULLDOZE","CONFIDE","COVET","DOUBLETEAM","EARTHQUAKE","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT",GUNKSHOT,"HIDDENPOWER","HYPERBEAM","HYPERVOICE","ICEBEAM","ICEPUNCH","ICYWIND",IRONHEAD,"LASTRESORT","OUTRAGE","POWERUPPUNCH","PROTECT","PSYCHIC","RAINDANCE",RECYCLE,"REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROUND",SANDSTORM,"SEEDBOMB","SHADOWBALL",SHOCKWAVE,"SLEEPTALK","SMACKDOWN",SNATCH,"SNORE","SOLARBEAM","STOMPINGTANTRUM","STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERPOWER,"SURF","SWAGGER",THUNDER,THUNDERBOLT,"THUNDERPUNCH","TOXIC","WATERPULSE",WILDCHARGE,"WORKUP","ZENHEADBUTT"
	//         EggMoves : AFTERYOU,BELCH,"CHARM","COUNTER","CURSE","DOUBLEEDGE",FISSURE,LICK,"NATURALGIFT","POWERUPPUNCH","PURSUIT","WHIRLWIND"
	//         Compatibility : Monster
	//         StepsToHatch : 10240
	//         Height : 2.1
	//         Weight : 460.0
	//         Color : Black
	//         Shape : Bipedal
	//         Habitat : Mountain
	//         Kind : Sleeping
	//         // Pokedex : Snorlax's typical day consists of nothing more than eating and sleeping. It is such a docile Pokémon that there are children who use its big belly as a place to play.
	//         Generation : 1
	//         WildItemCommon : LEFTOVERS
	//         WildItemUncommon : LEFTOVERS
	//         WildItemRare : LEFTOVERS
	//         BattlerPlayerX : -1
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : 11
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [1monsterName : {
	//         Name : Articuno
	//         InternalName : ARTICUNO
	//         Type1 : ICE
	//         Type2 : FLYING
	//         BaseStats : 90,85,100,85,95,125
	//         GenderRate : Genderless
	//         GrowthRate : Slow
	//         BaseEXP : 261
	//         EffortPoints : 0,0,0,0,0,3
	//         Rareness : 3
	//         Happiness : 35
	//         Abilities : PRESSURE
	//         HiddenAbility : SNOWCLOAK
	//         Moves : 1,"GUST",1,POWDERSNOW,8,"MIST",15,ICESHARD,22,MINDREADER,29,"ANCIENTPOWER",36,"AGILITY",43,FREEZEDRY,50,REFLECT,57,"HAIL",64,"TAILWIND",71,"ICEBEAM",78,"BLIZZARD",85,"ROOST",92,HURRICANE,99,SHEERCOLD
	//         TutorMoves : "AERIALACE",AURORAVEIL,"BLIZZARD","CONFIDE","DEFOG","DOUBLETEAM","FACADE","FLY",FROSTBREATH,"FRUSTRATION","GIGAIMPACT","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","LASERFOCUS","PROTECT","RAINDANCE",REFLECT,"REST","RETURN","ROAR","ROCKSMASH","ROOST","ROUND",SANDSTORM,"SIGNALBEAM",SKYATTACK,"SKYDROP","SLEEPTALK","SNORE","STEELWING","SUBSTITUTE","SUNNYDAY","SWAGGER","TAILWIND","TOXIC","UTURN","WATERPULSE"
	//         Compatibility : Undiscovered
	//         StepsToHatch : 20480
	//         Height : 1.7
	//         Weight : 55.4
	//         Color : Blue
	//         Shape : Winged
	//         Habitat : Rare
	//         Kind : Freeze
	//         // Pokedex : Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.
	//         Generation : 1
	//         BattlerPlayerX : 8
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 6
	//         BattlerEnemyY : 8
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Zapdos
	//         InternalName : ZAPDOS
	//         Type1 : ELECTRIC
	//         Type2 : FLYING
	//         BaseStats : 90,90,85,100,125,90
	//         GenderRate : Genderless
	//         GrowthRate : Slow
	//         BaseEXP : 261
	//         EffortPoints : 0,0,0,0,3,0
	//         Rareness : 3
	//         Happiness : 35
	//         Abilities : PRESSURE
	//         HiddenAbility : STATIC
	//         Moves : 1,PECK,1,THUNDERSHOCK,8,THUNDERWAVE,15,"DETECT",22,PLUCK,29,"ANCIENTPOWER",36,CHARGE,43,"AGILITY",50,DISCHARGE,57,"RAINDANCE",64,"LIGHTSCREEN",71,DRILLPECK,78,THUNDER,85,"ROOST",92,MAGNETICFLUX,99,ZAPCANNON
	//         TutorMoves : "AERIALACE",CHARGEBEAM,"CONFIDE","DEFOG","DOUBLETEAM","FACADE","FLY","FRUSTRATION","GIGAIMPACT","HEATWAVE","HIDDENPOWER","HYPERBEAM","LASERFOCUS","LIGHTSCREEN","PROTECT","RAINDANCE","REST","RETURN","ROAR","ROCKSMASH","ROOST","ROUND",SANDSTORM,SHOCKWAVE,"SIGNALBEAM",SKYATTACK,"SKYDROP","SLEEPTALK","SNORE","STEELWING","SUBSTITUTE","SUNNYDAY","SWAGGER","TAILWIND",THUNDER,THUNDERBOLT,THUNDERWAVE,"TOXIC","UTURN",VOLTSWITCH,WILDCHARGE
	//         Compatibility : Undiscovered
	//         StepsToHatch : 20480
	//         Height : 1.6
	//         Weight : 52.6
	//         Color : Yellow
	//         Shape : Winged
	//         Habitat : Rare
	//         Kind : Electric
	//         // Pokedex : Zapdos is a legendary bird Pokémon that has the ability to control electricity. It usually lives in thunderclouds. It gains power if it is stricken by lightning bolts.
	//         Generation : 1
	//         BattlerPlayerX : 5
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 0
	//         BattlerEnemyY : -6
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [1monsterName : {
	//         Name : Moltres
	//         InternalName : MOLTRES
	//         Type1 : FIRE
	//         Type2 : FLYING
	//         BaseStats : 90,100,90,90,125,85
	//         GenderRate : Genderless
	//         GrowthRate : Slow
	//         BaseEXP : 261
	//         EffortPoints : 0,0,0,0,3,0
	//         Rareness : 3
	//         Happiness : 35
	//         Abilities : PRESSURE
	//         HiddenAbility : FLAMEBODY
	//         Moves : 1,"WINGATTACK",1,"EMBER",8,"FIRESPIN",15,"AGILITY",22,"ENDURE",29,"ANCIENTPOWER",36,"FLAMETHROWER",43,"SAFEGUARD",50,"AIRSLASH",57,"SUNNYDAY",64,"HEATWAVE",71,"SOLARBEAM",78,SKYATTACK,85,"ROOST",92,HURRICANE,99,BURNUP
	//         TutorMoves : "AERIALACE","CONFIDE","DEFOG","DOUBLETEAM","FACADE","FIREBLAST","FLAMECHARGE","FLAMETHROWER","FLY","FRUSTRATION","GIGAIMPACT","HEATWAVE","HIDDENPOWER","HYPERBEAM","LASERFOCUS","OVERHEAT","PROTECT","RAINDANCE","REST","RETURN","ROAR","ROCKSMASH","ROOST","ROUND","SAFEGUARD",SANDSTORM,SKYATTACK,"SKYDROP","SLEEPTALK","SNORE","SOLARBEAM","STEELWING","SUBSTITUTE","SUNNYDAY","SWAGGER","TAILWIND","TOXIC","UTURN","WILLOWISP"
	//         Compatibility : Undiscovered
	//         StepsToHatch : 20480
	//         Height : 2.0
	//         Weight : 60.0
	//         Color : Yellow
	//         Shape : Winged
	//         Habitat : Rare
	//         Kind : Flame
	//         // Pokedex : Moltres is a legendary bird Pokémon that can control fire. If injured, it is said to dip its body in the molten magma of a volcano to burn and heal itself.
	//         Generation : 1
	//         BattlerPlayerX : 0
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 1
	//         BattlerEnemyY : 5
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Dratini
	//         InternalName : DRATINI
	//         Type1 : DRAGON
	//         BaseStats : 41,64,45,50,50,50
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 60
	//         EffortPoints : 0,1,0,0,0,0
	//         Rareness : 45
	//         Happiness : 35
	//         Abilities : SHEDSKIN
	//         HiddenAbility : MARVELSCALE
	//         Moves : 1,WRAP,1,LEER,5,THUNDERWAVE,11,TWISTER,15,"DRAGONRAGE",21,SLAM,25,"AGILITY",31,"DRAGONTAIL",35,"AQUATAIL",41,"DRAGONRUSH",45,"SAFEGUARD",51,"DRAGONDANCE",55,"OUTRAGE",61,"HYPERBEAM"
	//         TutorMoves : "AQUATAIL","ATTRACT","BIND","BLIZZARD","BRUTALSWING","CONFIDE","DOUBLETEAM",DRACOMETEOR,"DRAGONPULSE","DRAGONTAIL","FACADE","FIREBLAST","FLAMETHROWER","FRUSTRATION","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","IRONTAIL","LIGHTSCREEN","OUTRAGE","PROTECT","RAINDANCE","REST","RETURN","ROUND","SAFEGUARD",SHOCKWAVE,"SLEEPTALK","SNORE","SUBSTITUTE","SUNNYDAY","SURF","SWAGGER",THUNDER,THUNDERBOLT,THUNDERWAVE,"TOXIC","WATERFALL","WATERPULSE"
	//         EggMoves : "AQUAJET",DRAGONBREATH,"DRAGONDANCE","DRAGONPULSE","DRAGONRUSH",EXTREMESPEED,"HAZE","IRONTAIL","MIST","SUPERSONIC","WATERPULSE"
	//         Compatibility : Water1,Dragon
	//         StepsToHatch : 10240
	//         Height : 1.8
	//         Weight : 3.3
	//         Color : Blue
	//         Shape : Serpentine
	//         Habitat : WatersEdge
	//         Kind : Dragon
	//         // Pokedex : A Dratini continually molts and sloughs off its old skin. It does so because the life energy within its body steadily builds to reach uncontrollable "level"s.
	//         Generation : 1
	//         WildItemUncommon : DRAGONSCALE
	//         BattlerPlayerX : -2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -3
	//         BattlerEnemyY : 19
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         Evolutions : DRAGONAIR,"Level",30
	//         }
	//         [1monsterName : {
	//         Name : Dragonair
	//         InternalName : DRAGONAIR
	//         Type1 : DRAGON
	//         BaseStats : 61,84,65,70,70,70
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 147
	//         EffortPoints : 0,2,0,0,0,0
	//         Rareness : 45
	//         Happiness : 35
	//         Abilities : SHEDSKIN
	//         HiddenAbility : MARVELSCALE
	//         Moves : 1,WRAP,1,LEER,1,THUNDERWAVE,1,TWISTER,5,THUNDERWAVE,11,TWISTER,15,"DRAGONRAGE",21,SLAM,25,"AGILITY",33,"DRAGONTAIL",39,"AQUATAIL",47,"DRAGONRUSH",53,"SAFEGUARD",61,"DRAGONDANCE",67,"OUTRAGE",75,"HYPERBEAM"
	//         TutorMoves : "AQUATAIL","ATTRACT","BIND","BLIZZARD","BRUTALSWING","CONFIDE","DOUBLETEAM",DRACOMETEOR,"DRAGONPULSE","DRAGONTAIL","FACADE","FIREBLAST","FLAMETHROWER","FRUSTRATION","HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICYWIND","IRONTAIL","LIGHTSCREEN","OUTRAGE","PROTECT","RAINDANCE","REST","RETURN","ROUND","SAFEGUARD",SHOCKWAVE,"SLEEPTALK","SNORE","SUBSTITUTE","SUNNYDAY","SURF","SWAGGER",THUNDER,THUNDERBOLT,THUNDERWAVE,"TOXIC","WATERFALL","WATERPULSE"
	//         Compatibility : Water1,Dragon
	//         StepsToHatch : 10240
	//         Height : 4.0
	//         Weight : 16.5
	//         Color : Blue
	//         Shape : Serpentine
	//         Habitat : WatersEdge
	//         Kind : Dragon
	//         // Pokedex : A Dragonair stores an enormous amount of energy inside its body. It is said to alter the weather around it by loosing energy from the crystals on its neck and tail.
	//         Generation : 1
	//         WildItemUncommon : DRAGONSCALE
	//         BattlerPlayerX : 2
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -1
	//         BattlerEnemyY : 10
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         Evolutions : DRAGONITE,"Level",55
	//         }
	//         [1monsterName : {
	//         Name : Dragonite
	//         InternalName : DRAGONITE
	//         Type1 : DRAGON
	//         Type2 : FLYING
	//         BaseStats : 91,134,95,80,100,100
	//         GenderRate : Female50Percent
	//         GrowthRate : Slow
	//         BaseEXP : 270
	//         EffortPoints : 0,3,0,0,0,0
	//         Rareness : 45
	//         Happiness : 35
	//         Abilities : INNERFOCUS
	//         HiddenAbility : MULTISCALE
	//         Moves : 0,"WINGATTACK",1,"WINGATTACK",1,HURRICANE,1,"FIREPUNCH",1,"THUNDERPUNCH",1,"ROOST",1,WRAP,1,LEER,1,THUNDERWAVE,1,TWISTER,5,THUNDERWAVE,11,TWISTER,15,"DRAGONRAGE",21,SLAM,25,"AGILITY",33,"DRAGONTAIL",39,"AQUATAIL",47,"DRAGONRUSH",53,"SAFEGUARD",61,"DRAGONDANCE",67,"OUTRAGE",75,"HYPERBEAM",81,HURRICANE
	//         TutorMoves : "AERIALACE","AQUATAIL","ATTRACT","BIND","BLIZZARD","BRICKBREAK","BRUTALSWING","BULLDOZE","CONFIDE","CUT","DEFOG","DIVE","DOUBLETEAM",DRACOMETEOR,"DRAGONCLAW","DRAGONPULSE","DRAGONTAIL","EARTHQUAKE","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FLY","FOCUSBLAST","FOCUSPUNCH","FRUSTRATION","GIGAIMPACT","HAIL","HEATWAVE","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICEPUNCH","ICYWIND",IRONHEAD,"IRONTAIL","LIGHTSCREEN","OUTRAGE","POWERUPPUNCH","PROTECT","RAINDANCE","REST","RETURN","ROAR","ROCKSLIDE","ROCKSMASH","ROCKTOMB","ROOST","ROUND","SAFEGUARD",SANDSTORM,SHOCKWAVE,"SKYDROP","SLEEPTALK","SNORE","STEELWING",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY",SUPERPOWER,"SURF","SWAGGER","TAILWIND",THUNDER,THUNDERBOLT,"THUNDERPUNCH",THUNDERWAVE,"TOXIC","WATERFALL","WATERPULSE"
	//         Compatibility : Water1,Dragon
	//         StepsToHatch : 10240
	//         Height : 2.2
	//         Weight : 210.0
	//         Color : Brown
	//         Shape : BipedalTail
	//         Habitat : WatersEdge
	//         Kind : Dragon
	//         // Pokedex : It can circle the globe in just 16 hours. It is a kindhearted Pokémon that leads lost and foundering ships in a storm to the safety of land.
	//         Generation : 1
	//         WildItemUncommon : DRAGONSCALE
	//         BattlerPlayerX : 5
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 6
	//         BattlerEnemyY : 6
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 3
	//         }
	//         [1monsterName : {
	//         Name : Mewtwo
	//         InternalName : MEWTWO
	//         Type1 : "PSYCHIC"
	//         BaseStats : 106,110,90,130,154,90
	//         GenderRate : Genderless
	//         GrowthRate : Slow
	//         BaseEXP : 306
	//         EffortPoints : 0,0,0,0,3,0
	//         Rareness : 3
	//         Happiness : 0
	//         Abilities : PRESSURE
	//         HiddenAbility : UNNERVE
	//         Moves : 1,"LASERFOCUS",1,PSYWAVE,1,"CONFUSION",1,DISABLE,1,"SAFEGUARD",8,"SWIFT",15,FUTURESIGHT,22,"PSYCHUP",29,MIRACLEEYE,36,PSYCHOCUT,43,POWERSWAP,43,GUARDSWAP,50,RECOVER,57,"PSYCHIC",64,BARRIER,70,"AURASPHERE",79,"AMNESIA",86,"MIST",93,MEFIRST,100,PSYSTRIKE
	//         TutorMoves : "AERIALACE","AQUATAIL","BLIZZARD","BRICKBREAK","BRUTALSWING",BULKUP,"BULLDOZE",CALMMIND,CHARGEBEAM,"CONFIDE","DIVE","DOUBLETEAM",DRAINPUNCH,"DREAMEATER","EARTHQUAKE",EMBARGO,"ENERGYBALL","FACADE","FIREBLAST","FIREPUNCH","FLAMETHROWER","FLING","FOCUSBLAST","FOCUSPUNCH",FOULPLAY,"FRUSTRATION","GIGAIMPACT","GRASSKNOT",GRAVITY,"HAIL","HIDDENPOWER","HYPERBEAM","ICEBEAM","ICEPUNCH","ICYWIND","IRONTAIL","LASERFOCUS","LIGHTSCREEN",LOWKICK,LOWSWEEP,MAGICCOAT,MAGICROOM,"POISONJAB","POWERUPPUNCH","PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,"RAINDANCE",RECYCLE,REFLECT,"REST","RETURN","ROCKSLIDE","ROCKSMASH","ROCKTOMB",ROLEPLAY,"ROUND","SAFEGUARD",SANDSTORM,"SHADOWBALL",SHOCKWAVE,"SIGNALBEAM","SKILLSWAP","SLEEPTALK",SNATCH,"SNORE","SOLARBEAM",STONEEDGE,"STRENGTH","SUBSTITUTE","SUNNYDAY","SWAGGER",TAUNT,TELEKINESIS,THUNDER,THUNDERBOLT,"THUNDERPUNCH",THUNDERWAVE,TORMENT,"TOXIC",TRICK,TRICKROOM,"WATERPULSE","WILLOWISP",WONDERROOM,"ZENHEADBUTT"
	//         Compatibility : Undiscovered
	//         StepsToHatch : 30720
	//         Height : 2.0
	//         Weight : 122.0
	//         Color : Purple
	//         Shape : BipedalTail
	//         Habitat : Rare
	//         Kind : Genetic
	//         // Pokedex : A Pokémon that was created by genetic manipulation. However, even though the scientific power of humans made its body, they failed to give it a warm heart.
	//         Generation : 1
	//         BattlerPlayerX : 14
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : 3
	//         BattlerEnemyY : 10
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 2
	//         }
	//         [1monsterName : {
	//         Name : Mew
	//         InternalName : MEW
	//         Type1 : "PSYCHIC"
	//         BaseStats : 100,100,100,100,100,100
	//         GenderRate : Genderless
	//         GrowthRate : Parabolic
	//         BaseEXP : 270
	//         EffortPoints : 3,0,0,0,0,0
	//         Rareness : 45
	//         Happiness : 100
	//         Abilities : SYNCHRONIZE
	//         Moves : 1,POUND,1,REFLECTTYPE,1,TRANSFORM,10,MEGAPUNCH,20,METRONOME,30,"PSYCHIC",40,BARRIER,50,"ANCIENTPOWER",60,"AMNESIA",70,MEFIRST,80,"BATONPASS",90,NASTYPLOT,100,"AURASPHERE"
	//         TutorMoves : "ACROBATICS","AERIALACE",AFTERYOU,ALLYSWITCH,"AQUATAIL","ATTRACT",AURORAVEIL,"BIND","BLIZZARD","BLOCK",BOUNCE,"BRICKBREAK","BRUTALSWING","BUGBITE",BULKUP,"BULLDOZE",CALMMIND,CHARGEBEAM,"CONFIDE","COVET","CUT","DARKPULSE",DAZZLINGGLEAM,"DEFOG","DIVE","DOUBLETEAM","DRAGONCLAW","DRAGONPULSE","DRAGONTAIL",DRAINPUNCH,"DREAMEATER","DRILLRUN",DUALCHOP,EARTHPOWER,"EARTHQUAKE","ECHOEDVOICE","ELECTROWEB",EMBARGO,"ENDEAVOR","ENERGYBALL",EXPLOSION,"FACADE","FALSESWIPE","FIREBLAST","FIREPUNCH","FLAMECHARGE","FLAMETHROWER","FLASHCANNON","FLING","FLY","FOCUSBLAST","FOCUSPUNCH",FOULPLAY,FROSTBREATH,"FRUSTRATION",GASTROACID,"GIGADRAIN","GIGAIMPACT","GRASSKNOT",GRAVITY,GUNKSHOT,"GYROBALL","HAIL","HEALBELL","HEATWAVE","HELPINGHAND","HIDDENPOWER","HYPERBEAM","HYPERVOICE","ICEBEAM","ICEPUNCH","ICYWIND","INFESTATION","IRONDEFENSE",IRONHEAD,"IRONTAIL","KNOCKOFF","LASERFOCUS","LASTRESORT",LEECHLIFE,"LIGHTSCREEN","LIQUIDATION",LOWKICK,LOWSWEEP,MAGICCOAT,MAGICROOM,MAGNETRISE,"NATUREPOWER","OUTRAGE","OVERHEAT",PAINSPLIT,"PAYBACK","POISONJAB","POWERUPPUNCH","PROTECT","PSYCHIC","PSYCHUP",PSYSHOCK,QUASH,"RAINDANCE",RECYCLE,REFLECT,"REST","RETURN","ROAR",ROCKPOLISH,"ROCKSLIDE","ROCKSMASH","ROCKTOMB",ROLEPLAY,"ROOST","ROUND","SAFEGUARD",SANDSTORM,"SCALD","SEEDBOMB","SHADOWBALL","SHADOWCLAW",SHOCKWAVE,"SIGNALBEAM","SKILLSWAP",SKYATTACK,"SKYDROP","SLEEPTALK",""SLUDGE"BOMB","SLUDGE"WAVE,"SMACKDOWN",SMARTSTRIKE,SNARL,SNATCH,"SNORE","SOLARBEAM",SPITE,STEALTHROCK,"STEELWING","STOMPINGTANTRUM",STONEEDGE,"STRENGTH","STRUGGLEBUG","SUBSTITUTE","SUNNYDAY",SUPERFANG,SUPERPOWER,"SURF","SWAGGER","SWORDSDANCE","SYNTHESIS","TAILWIND",TAUNT,TELEKINESIS,"THIEF","THROATCHOP",THUNDER,THUNDERBOLT,"THUNDERPUNCH",THUNDERWAVE,TORMENT,"TOXIC",TRICK,TRICKROOM,UPROAR,"UTURN","VENOSHOCK",VOLTSWITCH,"WATERFALL","WATERPULSE",WILDCHARGE,"WILLOWISP",WONDERROOM,"WORKUP","WORRYSEED","XSCISSOR","ZENHEADBUTT"
	//         Compatibility : Undiscovered
	//         StepsToHatch : 30720
	//         Height : 0.4
	//         Weight : 4.0
	//         Color : Pink
	//         Shape : BipedalTail
	//         Habitat : Rare
	//         Kind : New Species
	//         // Pokedex : A Mew is said to possess the genes of all Pokémon. It is capable of making itself invisible at will, so it entirely avoids notice even if it approaches people.
	//         Generation : 1
	//         WildItemCommon : LUMBERRY
	//         WildItemUncommon : LUMBERRY
	//         WildItemRare : LUMBERRY
	//         BattlerPlayerX : -8
	//         BattlerPlayerY : 0
	//         BattlerEnemyX : -9
	//         BattlerEnemyY : -3
	//         BattlerShadowX : 0
	//         BattlerShadowSize : 1
	//         }
	// }
};
