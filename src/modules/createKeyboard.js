
const createMainText = () => {
  const mainText = document.createElement('div');
  mainText.innerHTML = `
      <h1>RSS Virtual Keyboard</h1>
      <p>Windows keyboard has been made under Window.<br>
      Use left <kbd>Ctrl</kbd> + <kbd>Alt</kbd> to switch language
      </p>
      <textarea class="textarea" name="textarea" id="textarea"></textarea>
  `;
  return mainText;
};

class Keyboard {
  constructor(buttons) {
    this.buttons = buttons,
      this.isCapsLock = false
  }

  //firstPageLoad
  init() {
    //Create main Elements
    const main = document.createElement('div');
    const keysContainer = document.createElement('div');

    //Setup main elements
    main.classList.add('keyboard');
    keysContainer.classList.add('keyboard-keys');

    //Add to DOM
    document.body.prepend(createMainText());
    main.appendChild(keysContainer);
    document.body.append(main);
  }

}

export default Keyboard;