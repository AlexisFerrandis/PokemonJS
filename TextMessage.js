class TextMessage {
	constructor({ text, onComplete }) {
		this.text = text;
		this.onComplete = onComplete;
		this.element = null;
	}

	createElement() {
		this.element = document.createElement("div");
		this.element.classList.add("text-message");

		this.element.innerHTML = `
        <div class="text-message-border">
            <p class="text-message-p"></p>
            <button class="text-message-btn">⯆</button>
        </div>
        `;

		// init typewritter
		this.revealingText = new RevealingText({
			element: this.element.querySelector(".text-message-p"),
			text: this.text,
		});

		this.element.querySelector("button").addEventListener("click", () => {
			// close text message
			this.done();
		});

		this.actionListener = new KeyPressListener("Enter", () => {
			this.done();
		});
	}

	done() {
		if (this.revealingText.isDone) {
			this.element.remove();
			this.actionListener.unbind();
			this.onComplete();
		} else {
			this.revealingText.warpToDone();
		}
	}

	init(container) {
		this.createElement();
		container.appendChild(this.element);
		this.revealingText.init();
	}
}
