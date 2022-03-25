const utils = {
	withGrid(n) {
		return n * 16;
	},

	asGridCoords(x, y) {
		return `${x * 16},${y * 16}`;
	},

	nextPosition(initialX, initialY, direction) {
		let x = initialX;
		let y = initialY;
		const size = 16;
		if (direction === "left") {
			x -= size;
		} else if (direction === "right") {
			x += size;
		} else if (direction === "up") {
			y -= size;
		} else if (direction === "down") {
			y += size;
		}
		return { x, y };
	},

	oppositeDirection(direction) {
		if (direction === "left") {
			return "right";
		}
		if (direction === "right") {
			return "left";
		}
		if (direction === "up") {
			return "down";
		}
		return "up";
	},

	loadWall(mapCollision) {
		const boundaries = [];
		for (let i = 0; i < mapCollision.length; i += 100) {
			const mapCollisionArray = [];
			mapCollisionArray.push(mapCollision.slice(i, 100 + i));

			let k = (i / 100) * 16;
			mapCollisionArray.forEach((row, i) => {
				row.forEach((symbol, j) => {
					if (symbol === 916) boundaries.push([`${(x = j * 16)},${(y = k)}`, true]);
				});
			});
		}
		const boundariesObj = Object.fromEntries(boundaries);
		return boundariesObj;
	},

	wait(ms) {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, ms);
		});
	},

	randomFromArray(array) {
		return array[Math.floor(Math.random() * array.length)];
	},

	emitEvent(name, detail) {
		const event = new CustomEvent(name, {
			detail,
		});
		document.dispatchEvent(event);
	},
};
