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
  textareaOutput.setAttribute('spellcheck', false);

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

    const keys = keysContainer.querySelectorAll('.keyboard-key');

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


        //символьно-буквенный ввод
        if ((target.dataset.value.match(/[0-9a-zA-Zа-яА-ЯёЁ]/) ||
          target.dataset.value.match(/[- + = \\ . /]/)) &&
          target.dataset.value.length === 1) {

          textareaInput.focus();

          if (this.isCapsLock) {
            textareaInput.value += target.dataset.value.toUpperCase();
          } else {
            textareaInput.value += target.dataset.value;
          }
        }

        //нажатие на caps lock
        if (target.dataset.value === 'CapsLock') {
          if (this.isCapsLock) {
            this.isCapsLock = false;
          } else {
            this.isCapsLock = true;
          }

          this.switchCapsLock(keys);
          target.classList.toggle('keyboard-key-active');
        }

        const regexp = /Delete|Backspace|Enter|ArrowLeft|ArrowUp|ArrowDown|ArrowRight|Tab/i;

        if (target.dataset.value.match(regexp)) {
          this.changeCursorPosition(textareaInput, target.dataset.value);
        }
      }
    })
  }

  changeCursorPosition(area, command) {
    let cursorPos = area.selectionStart;

    if (command === 'Delete') {
      const left = area.value.slice(0, cursorPos);
      const right = area.value.slice(cursorPos + 1);
      area.value = `${left}${right}`;
      area.selectionStart = area.selectionEnd = cursorPos;
      area.focus();
      cursorPos++;
    }

    if (command === 'Backspace') {
      const left = area.value.slice(0, cursorPos - 1);
      const right = area.value.slice(cursorPos);
      area.value = `${left}${right}`;
      cursorPos--;
      area.selectionStart = area.selectionEnd = cursorPos;
      area.focus();
    }

    if (command === 'Enter') {
      const left = area.value.slice(0, cursorPos);
      const right = area.value.slice(cursorPos);
      area.value = `${left}\n${right}`;
      cursorPos++;
      area.selectionStart = area.selectionEnd = cursorPos;
      area.focus();
    }

    if (command === 'Tab') {
      const left = area.value.slice(0, cursorPos);
      const right = area.value.slice(cursorPos);
      area.value = `${left}\t${right}`;
      cursorPos++;
      area.selectionStart = area.selectionEnd = cursorPos;
      area.focus();
    }

    if (command === 'ArrowLeft') {
      cursorPos = (cursorPos - 1 >= 0) ? cursorPos - 1 : 0;
      area.selectionStart = area.selectionEnd = cursorPos;
      area.focus();
    }

    if (command === 'ArrowRight') {
      cursorPos++;
      area.selectionStart = area.selectionEnd = cursorPos;
      area.focus();
    }

    if (command === 'ArrowUp') {
      const left = area.value.slice(0, cursorPos);

      if (left.match(/(\n).*$(?!\1)/g)) {
        const strFromLeft = left.match(/(\n).*$(?!\1)/g);
        cursorPos -= strFromLeft[0].length;
      }

      area.selectionStart = area.selectionEnd = cursorPos;
      area.focus();
    }

    if (command === 'ArrowDown') {
      const right = area.value.slice(cursorPos);

      if (right.match(/(\n).*$(?!\1)/g)) {
        const strFromRight = right.match(/^.*(\n).*(?!\1)/);
        cursorPos += strFromRight[0].length + 1;
      }

      area.selectionStart = area.selectionEnd = cursorPos;
      area.focus();
    }
  }

  switchCapsLock(buttonsArr) {
    if (this.isCapsLock === true) {
      buttonsArr.forEach(btn => {
        if (btn.dataset.value.match(/[a-zA-Zа-яА-ЯёЁ]/) &&
          btn.dataset.value.length === 1) {
          let buttonValue = btn.querySelector('.text');
          buttonValue.textContent = buttonValue.textContent.toUpperCase();
        }
      })
    } else {
      buttonsArr.forEach(btn => {
        if (btn.dataset.value.match(/[a-zA-Zа-яА-ЯёЁ]/) &&
          btn.dataset.value.length === 1) {
          let buttonValue = btn.querySelector('.text');
          buttonValue.textContent = buttonValue.textContent.toLowerCase();
        }
      })
    }
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