class Sprite {
	constructor(config) {
		// set up image
		this.image = new Image();
		this.image.src = config.src;
		this.image.onload = () => {
			this.isLoaded = true;
		};

		// shadow
		this.shadow = new Image();
		this.useShadow = true;

		if (this.useShadow) {
			this.shadow.src = "../assets/images/characters/shadow.png";
		}
		this.shadow.onload = () => {
			this.isShadowLoaded = true;
		};

		// configure animation and initial state
		this.animation = config.animation || {
			"idle-down": [[0, 0]],
			"idle-left": [[0, 1 + 0.5]],
			"idle-right": [[0, 2 + 1]],
			"idle-up": [[0, 3 + 1.5]],
			"walk-down": [
				[1, 0],
				[0, 0],
				[3, 0],
				[0, 0],
			],
			"walk-left": [
				[1, 1.5],
				[0, 1.5],
				[3, 1.5],
				[0, 1.5],
			],
			"walk-right": [
				[1, 3],
				[0, 3],
				[3, 3],
				[0, 3],
			],
			"walk-up": [
				[1, 4.5],
				[0, 4.5],
				[3, 4.5],
				[0, 4.5],
			],
		};
		this.currentAnimation = "walk-down"; // config.currentAnimation || "idle-down";
		this.currentAnimationFrame = 0;

		this.animationFrameLimit = config.animationFrameLimit || 8;
		this.animationFrameProgress = this.animationFrameLimit;

		// reference the game object
		this.gameObject = config.gameObject;
	}

	get frame() {
		return this.animation[this.currentAnimation][this.currentAnimationFrame];
	}

	setAnimation(key) {
		if (this.currentAnimation !== key) {
			this.currentAnimation = key;
			this.currentAnimationFrame = 0;
			this.animationFrameProgress = this.animationFrameLimit;
		}
	}

	updateAnimationProgress() {
		// Downtick frame progress
		if (this.animationFrameProgress > 0) {
			this.animationFrameProgress -= 1;
			return;
		}

		// reset counter
		this.animationFrameProgress = this.animationFrameLimit;
		this.currentAnimationFrame += 1;

		if (this.frame === undefined) {
			this.currentAnimationFrame = 0;
		}
	}

	draw(ctx) {
		const x = this.gameObject.x - 2;
		const y = this.gameObject.y - 2;

		this.isShadowLoaded && ctx.drawImage(this.shadow, x + 2, y + 18, 12, 6);

		const [frameX, frameY] = this.frame;

		this.isLoaded && ctx.drawImage(this.image, frameX * 32, frameY * 32, 32, 48, x, y, 16, 24);
		this.updateAnimationProgress();
	}
}
