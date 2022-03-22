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
			idleDown: [[0, 0]],
		};
		this.currentAnimation = config.currentAnimation || "idleDown";
		this.currentAnimationFrame = 0;

		// reference the game object
		this.gameObject = config.gameObject;
	}

	draw(ctx) {
		const x = this.gameObject.x;
		const y = this.gameObject.y;

		this.isShadowLoaded && ctx.drawImage(this.shadow, x + 2, y + 18, 12, 6);

		this.isLoaded && ctx.drawImage(this.image, 0, 0, 32, 48, x, y, 16, 24);
	}
}
