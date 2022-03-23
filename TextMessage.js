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
            <p class="text-message-p">${this.text}</p>
            <button class="text-message-btn">⯆</button>
        </div>
        `;

		this.element.querySelector("button").addEventListener("click", () => {
			// close text message
			this.done();
		});

		this.actionListener = new KeyPressListener("Enter", () => {
			this.actionListener.unbind();
			this.done();
		});
	}

	done() {
		this.element.remove();
		this.onComplete();
	}

	init(container) {
		this.createElement();
		container.appendChild(this.element);
	}
}
