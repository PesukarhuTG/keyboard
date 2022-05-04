import rusSymbols from './rusSymbols.js';
//import engSymbols from './engSymbols.js';
import Key from './Key.js';

const createMainText = () => {
  const mainText = document.createElement('div');

  const mainHeadling = document.createElement('h1');
  mainHeadling.textContent = 'RSS Virtual Keyboard';

  const p = document.createElement('p');
  p.innerHTML = `Virtual keyboard has been made under Window.<br>
  Use left <kbd>Ctrl</kbd> + <kbd>Alt</kbd> to switch language`;

  const textareaOutput = document.createElement('textarea');
  textareaOutput.classList.add('textarea');
  textareaOutput.setAttribute('placeholder', 'Write something...');
  textareaOutput.setAttribute('autocorrect', 'off');

  mainText.append(mainHeadling, p, textareaOutput);
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
    const mainTextDescription = createMainText();
    document.body.prepend(mainTextDescription);
    main.appendChild(keysContainer);
    document.body.append(main);

    //Add event listener and show symbols
    const textareaInput = mainTextDescription.querySelector('.textarea');

    keysContainer.addEventListener('click', e => {
      let target = e.target.closest('.keyboard-key');
      if (target) {
        if ((target.dataset.value.match(/[0-9a-zA-Zа-яА-ЯёЁ]/) ||
          target.dataset.value.match(/[- + = \\ . /]/)) &&
          target.dataset.value.length === 1) {
          textareaInput.value += target.dataset.value;
        }
      }
    })
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