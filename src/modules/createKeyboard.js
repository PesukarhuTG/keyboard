import language from './language.js';
import Key from './Key.js';

const createMainText = () => {
  const mainText = document.createElement('div');

  const mainHeadling = document.createElement('h1');
  mainHeadling.textContent = 'RSS Virtual Keyboard';

  const p = document.createElement('p');
  p.innerHTML = `Virtual keyboard has been made under Window.<br>
  Use <kbd>ShiftLeft</kbd> + <kbd>AltLeft</kbd> to switch language`;

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
      this.isCapsLock = false,
      this.isShiftLeft = false
  }

  init(lang, isCaps) {
    localStorage.setItem('pageLang', lang);
    this.keyBase = language[lang];

    //Create main Elements
    this.main = document.createElement('div');
    this.keysContainer = document.createElement('div');

    //Setup main elements
    this.main.classList.add('keyboard');
    this.keysContainer.classList.add('keyboard-keys');
    this.keysContainer.dataset.language = lang;
    this.keysContainer.appendChild(this.generateButtons());

    //Add to DOM
    this.mainTextDescription = createMainText();
    document.body.prepend(this.mainTextDescription);
    this.main.appendChild(this.keysContainer);
    document.body.append(this.main);

    //Add event listener on click and push botton
    this.textareaInput = this.mainTextDescription.querySelector('.textarea');
    this.getPushButton();
    this.clickListener();

    if (isCaps === 'on') {
      this.isCapsLock = 'on';
      this.switchCapsLock();
    }
  }

  changeCursorPosition(command) {
    let cursorPos = this.textareaInput.selectionStart;

    if (command === 'Delete') {
      const left = this.textareaInput.value.slice(0, cursorPos);
      const right = this.textareaInput.value.slice(cursorPos + 1);
      this.textareaInput.value = `${left}${right}`;
      this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
      this.textareaInput.focus();
      cursorPos++;
    }

    if (command === 'Backspace') {
      const left = this.textareaInput.value.slice(0, cursorPos - 1);
      const right = this.textareaInput.value.slice(cursorPos);
      this.textareaInput.value = `${left}${right}`;
      cursorPos--;
      this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
      this.textareaInput.focus();
    }

    if (command === 'Space') {
      const left = this.textareaInput.value.slice(0, cursorPos);
      const right = this.textareaInput.value.slice(cursorPos);
      this.textareaInput.value = `${left} ${right}`;
      cursorPos++;
      this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
      this.textareaInput.focus();
    }

    if (command === 'Enter') {
      const left = this.textareaInput.value.slice(0, cursorPos);
      const right = this.textareaInput.value.slice(cursorPos);
      this.textareaInput.value = `${left}\n${right}`;
      cursorPos++;
      this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
      this.textareaInput.focus();
    }

    if (command === 'Tab') {
      const left = this.textareaInput.value.slice(0, cursorPos);
      const right = this.textareaInput.value.slice(cursorPos);
      this.textareaInput.value = `${left}\t${right}`;
      cursorPos++;
      this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
      this.textareaInput.focus();
    }

    if (command === 'ArrowLeft') {
      cursorPos = (cursorPos - 1 >= 0) ? cursorPos - 1 : 0;
      this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
      this.textareaInput.focus();
    }

    if (command === 'ArrowRight') {
      cursorPos++;
      this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
      this.textareaInput.focus();
    }

    if (command === 'ArrowUp') {
      const left = this.textareaInput.value.slice(0, cursorPos);

      if (left.match(/(\n).*$(?!\1)/g)) {
        const strFromLeft = left.match(/(\n).*$(?!\1)/g);
        cursorPos -= strFromLeft[0].length;
      }

      this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
      this.textareaInput.focus();
    }

    if (command === 'ArrowDown') {
      const right = this.textareaInput.value.slice(cursorPos);

      if (right.match(/(\n).*$(?!\1)/g)) {
        const strFromRight = right.match(/^.*(\n).*(?!\1)/);
        cursorPos += strFromRight[0].length + 1;
      }

      this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
      this.textareaInput.focus();
    }
  }

  switchCapsLock() {
    const keys = this.keysContainer.querySelectorAll('.keyboard-key');

    if (localStorage.getItem('isCapsLock') === 'on') {
      this.isCapsLock === 'on';
      keys.forEach(btn => {
        if (btn.dataset.value.match(/[a-zA-Zа-яА-ЯёЁ]/) &&
          btn.dataset.value.length === 1) {
          let buttonValue = btn.querySelector('.text');
          buttonValue.textContent = buttonValue.textContent.toUpperCase();
        }
      })
    } else {
      this.isCapsLock === 'off';
      keys.forEach(btn => {
        if (btn.dataset.value.match(/[a-zA-Zа-яА-ЯёЁ]/) &&
          btn.dataset.value.length === 1) {
          let buttonValue = btn.querySelector('.text');
          buttonValue.textContent = buttonValue.textContent.toLowerCase();
        }
      })
    }
  }

  generateButtons(langValue) {
    this.keyBase = langValue ? langValue : this.keyBase;

    const fragment = document.createDocumentFragment();
    this.keyButtons = [];

    if (!this.buttons.length) throw Error('Ooops, check input buttons!');

    this.buttons.forEach((row) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('keyboard-row');
      rowElement.style.gridTemplateColumns = `repeat(${row.length}, 1fr)`;

      row.forEach(code => {
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

  changeLanguage() {
    this.keysContainer.textContent = '';

    if (this.keysContainer.dataset.language === 'ru') {
      this.keysContainer.dataset.language = 'en';
      this.keysContainer.appendChild(this.generateButtons(language[this.keysContainer.dataset.language]));
      localStorage.setItem('pageLang', this.keysContainer.dataset.language);
      this.clickListener();
      this.getPushButton();
    } else {
      this.keysContainer.dataset.language = 'ru';
      this.keysContainer.appendChild(this.generateButtons(language[this.keysContainer.dataset.language]));
      localStorage.setItem('pageLang', this.keysContainer.dataset.language);
      this.clickListener();
      this.getPushButton();
    }
  }

  clickListener() {
    this.keysContainer.addEventListener('click', e => {
      e.stopImmediatePropagation();

      const target = e.target.closest('.keyboard-key');
      if (!target) return;
      const { dataset: { value } } = e.target.closest('.keyboard-key');

      if (target) {
        if ((value.match(/[0-9a-zA-Zа-яА-ЯёЁ]/) ||
          value.match(/[- + `' < = \\ . , ; /]/) ||
          value === '[' || value === ']') &&
          value.length === 1) {

          this.textareaInput.focus();

          if (this.isCapsLock === 'on') {
            this.textareaInput.value += value.toUpperCase();
          } else {
            this.textareaInput.value += value;
          }
        }

        if (value === 'CapsLock') {
          if (this.isCapsLock === 'on') {
            this.isCapsLock = 'off';
            localStorage.setItem('isCapsLock', this.isCapsLock);
          } else {
            this.isCapsLock = 'on';
            localStorage.setItem('isCapsLock', this.isCapsLock);
          }

          this.switchCapsLock();
          target.classList.toggle('keyboard-key-active');
        }

        const regexp = /Delete|Backspace|Enter|ArrowLeft|ArrowUp|ArrowDown|ArrowRight|Tab|Space|[a-zA-Zа-яА-Я0-9]/i;

        if (value.match(regexp)) {
          this.changeCursorPosition(value);
        }
      }
    })
  }

  getPushButton() {
    const buttons = this.keysContainer.querySelectorAll('.keyboard-key');

    const deleteActiveClass = () => {
      buttons.forEach(btn => {
        btn.classList.remove('keyboard-btn-active');
      });
    };

    document.addEventListener('keydown', e => {
      this.textareaInput.focus();

      buttons.forEach(btn => {
        if (btn.dataset.code === e.code) {
          btn.classList.add('keyboard-btn-active');
          setTimeout(deleteActiveClass, 500);

          if (e.code === 'ShiftLeft') {
            this.isShiftLeft = true;
          }

          if (e.code === 'AltLeft' && this.isShiftLeft) {
            this.changeLanguage();
            this.isShiftLeft = false;
          }

          if (e.code === 'Tab') {
            e.preventDefault();
            this.changeCursorPosition(e.code);
          }

          if (e.code === 'CapsLock') {
            if (this.isCapsLock === 'on') {
              this.isCapsLock = 'off';
              localStorage.setItem('isCapsLock', this.isCapsLock);
            } else {
              this.isCapsLock = 'on';
              localStorage.setItem('isCapsLock', this.isCapsLock);
            }

            this.switchCapsLock();
            btn.classList.toggle('keyboard-key-active');
          }
        }
      });
    })
  }
}

export default Keyboard;