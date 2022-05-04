
const createMainText = () => {
  const mainText = document.createElement('div');
  mainText.innerHTML = `
      <h1>RSS Virtual Keyboard</h1>
      <p>Virtual keyboard has been made under Window.<br>
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
    keysContainer.appendChild(this.createKeys())

    //Add to DOM
    document.body.prepend(createMainText());
    main.appendChild(keysContainer);
    document.body.append(main);
  }

  createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace",
      "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\",
      "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter",
      "Shift", "я", "ч", "с", "м", "и", "т", "ь", "ь", "б", "ю", "arrowUp", ".", "Shift2",
      "Ctrl", "Win", "Alt", "Space", "arrowUp", "arrowDown", "arrowRight", "Ctrl"
    ];

    keyLayout.forEach(elem => {
      const keyElement = document.createElement('button');
      const insertLineBreak = ['Backspace', '\\', 'Enter', 'Shift2'].indexOf(elem) !== -1;

      //Add classes or attributes for button
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard-key');
      keyElement.textContent = elem;

      switch (elem) {
        case 'Backspace':
          keyElement.classList.add('keyboard-key-wide');
          break;
        case 'Tab':
          keyElement.classList.add('keyboard-key-wide');
          break;
        case 'CapsLock':
          keyElement.classList.add('keyboard-key-wide', 'keyboard-key-activatable');
          break;
        case 'Enter':
          keyElement.classList.add('keyboard-key-wide');
          break;
        case 'Shift':
          keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
          break;
        case 'Shift2':
          keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
          break;
        case 'Ctrl':
          keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
          break;
        case 'Win':
          keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
          break;
        case 'Alt':
          keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
          break;
        case 'Space':
          keyElement.classList.add('keyboard-key-extra-wide');
          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));

      }
    });

    return fragment;
  }

}

export default Keyboard;