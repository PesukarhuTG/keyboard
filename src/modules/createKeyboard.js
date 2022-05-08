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
      this.isCapsLock = 'off',
      this.isShiftLeft = false
  }

  init(lang) {
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
  }

  switchCapsLock() {
    const keys = this.keysContainer.querySelectorAll('.keyboard-key');
    const capsButton = this.keysContainer.querySelector('[data-code="CapsLock"]');

    console.log('2 отрисовка: ', this.isCapsLock);

    if (this.isCapsLock === 'on') {
      capsButton.classList.add('keyboard-key-active');

      keys.forEach(btn => {
        if (btn.dataset.value.match(/[a-zA-Zа-яА-ЯёЁ]/) &&
          btn.dataset.value.length === 1) {
          let buttonValue = btn.querySelector('.text');
          buttonValue.textContent = buttonValue.textContent.toUpperCase();
        }
      })
    }

    if (this.isCapsLock === 'off') {
      capsButton.classList.remove('keyboard-key-active');

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
      this.switchCapsLock();
      this.clickListener();

    } else if (this.keysContainer.dataset.language === 'en') {
      this.keysContainer.dataset.language = 'ru';
      this.keysContainer.appendChild(this.generateButtons(language[this.keysContainer.dataset.language]));
      localStorage.setItem('pageLang', this.keysContainer.dataset.language);
      this.switchCapsLock();
      this.clickListener();
    }

    this.getPushButton();
  }

  clickListener() {
    this.keysContainer.addEventListener('click', e => {
      e.stopImmediatePropagation();

      const target = e.target.closest('.keyboard-key');
      if (!target) return;
      const { dataset: { value } } = e.target.closest('.keyboard-key');

      if (target) {
        let cursorPos = this.textareaInput.selectionStart;

        if ((value.match(/[0-9a-zA-Zа-яА-ЯёЁ]/) || value.match(/[- + `' < = \\ . , ; /]/) || value === ']' || value === '[') && value.length === 1) {

          const left = this.textareaInput.value.slice(0, cursorPos);
          const right = this.textareaInput.value.slice(cursorPos);

          if (this.isCapsLock === 'on' && this.isShiftLeft === true) {
            this.textareaInput.value = `${left}${target.dataset.shift}${right}`;
          } else if (this.isCapsLock === 'on' && this.isShiftLeft === false) {
            this.textareaInput.value = `${left}${value.toUpperCase()}${right}`;
          } else if (this.isCapsLock === 'off' && this.isShiftLeft === true) {
            this.textareaInput.value = `${left}${target.dataset.shift}${right}`;
          } else if (this.isCapsLock === 'off' && this.isShiftLeft === false) {
            this.textareaInput.value = `${left}${value.toLowerCase()}${right}`;
          }

          cursorPos++;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.focus();
        }

        if (value === 'CapsLock') {
          if (this.isCapsLock === 'on') {
            this.isCapsLock = 'off';
          } else if (this.isCapsLock === 'off') {
            this.isCapsLock = 'on';
          }

          this.switchCapsLock();
        }

        if (value === 'Delete') {
          const left = this.textareaInput.value.slice(0, cursorPos);
          const right = this.textareaInput.value.slice(cursorPos + 1);
          this.textareaInput.value = `${left}${right}`;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.focus();
          cursorPos++;
        }

        if (value === 'Backspace') {
          const left = this.textareaInput.value.slice(0, cursorPos - 1);
          const right = this.textareaInput.value.slice(cursorPos);
          this.textareaInput.value = `${left}${right}`;
          cursorPos--;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.focus();
        }

        if (value === 'Space') {
          const left = this.textareaInput.value.slice(0, cursorPos);
          const right = this.textareaInput.value.slice(cursorPos);
          this.textareaInput.value = `${left} ${right}`;
          cursorPos++;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.focus();
        }

        if (value === 'Enter') {
          const left = this.textareaInput.value.slice(0, cursorPos);
          const right = this.textareaInput.value.slice(cursorPos);
          this.textareaInput.value = `${left}\n${right}`;
          cursorPos++;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.focus();
        }

        if (value === 'Tab') {
          const left = this.textareaInput.value.slice(0, cursorPos);
          const right = this.textareaInput.value.slice(cursorPos);
          this.textareaInput.value = `${left}\t${right}`;
          cursorPos++;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.focus();
        }

        if (value === 'ArrowLeft') {
          cursorPos = (cursorPos - 1 >= 0) ? cursorPos - 1 : 0;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.focus();
        }

        if (value === 'ArrowRight') {
          cursorPos++;
          this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.focus();
        }

        if (value === 'ArrowUp') {
          const left = this.textareaInput.value.slice(0, cursorPos);

          if (left.match(/(\n).*$(?!\1)/g)) {
            const strFromLeft = left.match(/(\n).*$(?!\1)/g);
            cursorPos -= strFromLeft[0].length;
          }

          this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.focus();
        }

        if (value === 'ArrowDown') {
          const right = this.textareaInput.value.slice(cursorPos);

          if (right.match(/(\n).*$(?!\1)/g)) {
            const strFromRight = right.match(/^.*(\n).*(?!\1)/);
            cursorPos += strFromRight[0].length + 1;
          }

          this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
          this.textareaInput.focus();
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

    const listenerKeyDown = (e) => {
      //e.stopImmediatePropagation();
      this.textareaInput.focus();

      buttons.forEach(btn => {
        if (btn.dataset.code === e.code) {
          btn.classList.add('keyboard-btn-active');
          setTimeout(deleteActiveClass, 500);

          if (e.code === 'ShiftLeft') {
            this.isShiftLeft = true;

            /*buttons.forEach(btn => {
              let childSubtitle = btn.querySelector('.subtitle');
              let childText = btn.querySelector('.text');
              let shiftText = btn.dataset.shift;
              let mainText = btn.dataset.value;

              if (childSubtitle) childSubtitle.style.opacity = '0';
              if (childText) {
                if (shiftText !== 'null') {
                  childText.textContent = shiftText ? shiftText : mainText.toUpperCase();
                }
              }
              this.clickListener();
              this.getPushButton();
            })*/
          }

          if (e.code === 'AltLeft' && this.isShiftLeft) {
            document.removeEventListener('keydown', listenerKeyDown);
            this.changeLanguage();
            this.isShiftLeft = false;
          }

          if (e.code === 'Tab') {
            e.preventDefault();
            let cursorPos = this.textareaInput.selectionStart;
            const left = this.textareaInput.value.slice(0, cursorPos);
            const right = this.textareaInput.value.slice(cursorPos);
            this.textareaInput.value = `${left}\t${right}`;
            cursorPos++;
            this.textareaInput.selectionStart = this.textareaInput.selectionEnd = cursorPos;
            this.textareaInput.focus();
          }

          if (e.code === 'CapsLock') {
            if (this.isCapsLock === 'on') {
              this.isCapsLock = 'off';
            } else if (this.isCapsLock === 'off') {
              this.isCapsLock = 'on';
            }

            this.switchCapsLock();
          }
        }
      });
    };


    document.addEventListener('keydown', listenerKeyDown);

    /*document.addEventListener('keyup', e => {
      e.stopImmediatePropagation();
      if (e.code === 'ShiftLeft') {
        this.isShiftLeft = false;

        buttons.forEach(btn => {
          let childSubtitle = btn.querySelector('.subtitle');
          let childText = btn.querySelector('.text');
          let mainText = btn.dataset.value;

          if (childSubtitle) childSubtitle.style.opacity = '';
          if (childText) {
            if (this.isCapsLock === 'on' && mainText.length === 1) {

              childText.textContent = mainText.toUpperCase();
            } else {
              childText.textContent = mainText;
            }
          }

          this.clickListener();
          this.getPushButton();
        })
      }
    });*/
  }
}

export default Keyboard;