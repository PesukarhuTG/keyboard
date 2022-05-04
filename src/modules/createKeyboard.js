import rusSymbols from './rusSymbols.js';
//import engSymbols from './engSymbols.js';
import Key from './Key.js';

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
    this.keyBase = rusSymbols;
    //Create main Elements
    const main = document.createElement('div');
    const keysContainer = document.createElement('div');

    //Setup main elements
    main.classList.add('keyboard');
    keysContainer.classList.add('keyboard-keys');
    keysContainer.appendChild(this.generateButtons());

    //Add to DOM
    document.body.prepend(createMainText());
    main.appendChild(keysContainer);
    document.body.append(main);
  }

  generateButtons() {
    const fragment = document.createDocumentFragment();
    this.keyButtons = [];

    if (!this.buttons.length) {
      throw Error('Ooops, check input buttons!')
    }

    this.buttons.forEach((row) => {
      //создаем строку клавиатуры
      const rowElement = document.createElement('div');
      rowElement.classList.add('keyboard-row');
      rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;

      row.forEach(code => {
        //в пришедшей раскладке пройтись по всем ключам и сопоставить ключи массива и ключи расскладки
        const keyObj = this.keyBase.find(key => key.code === code);

        if (keyObj) {
          const keyButton = new Key(keyObj).createButton();
          rowElement.appendChild(keyButton);
        }
      });

      fragment.appendChild(rowElement);
    })

    return fragment;
  }
}

export default Keyboard;