import enterPng from '../img/icon-enter.png';
import arrowTop from '../img/icon-top.png';
import arrowBottom from '../img/icon-bottom.png';
import arrowLeft from '../img/icon-left.png';
import arrowRight from '../img/icon-right.png';

class Key {
  //на основании конструктора создаются все объекты-кнопки
  //массив кнопок передается в Keyboard - там генерируются кнопки
  constructor(options) {
    this.small = options.small;
    this.shift = options.shift;
    this.code = options.code;
    this.keycode = options.keycode;
  }

  createButton() {
    const keyElement = document.createElement('button');
    keyElement.setAttribute('type', 'button');
    keyElement.classList.add('keyboard-key');

    //если shift существует (верхнее левое значение) и оно содержит символы
    if (this.shift && this.shift.match(/[^a-zA-Zа-яА-ЯёЁ0-9]/g)) {
      const shiftSymbol = document.createElement('div');
      shiftSymbol.classList.add('subtitle');
      shiftSymbol.textContent = this.shift;
      keyElement.appendChild(shiftSymbol);
    }

    //если значение кнопки существует (основное)
    if (this.small) {
      keyElement.dataset.value = this.small;
      keyElement.dataset.code = this.code;
      const mainSymbol = document.createElement('div');
      mainSymbol.classList.add('text');
      mainSymbol.textContent = this.small;
      keyElement.appendChild(mainSymbol);
    }

    const createImg = (url, container) => {
      const img = document.createElement('img');
      img.className = 'img';
      img.src = url;
      container.appendChild(img);
    };

    switch (this.code) {
      case 'Backspace':
        keyElement.classList.add('keyboard-key-wide');
        break;
      case 'Tab':
        keyElement.classList.add('keyboard-key-wide');
        break;
      case 'CapsLock':
        keyElement.classList.add('keyboard-key-middle-wide', 'keyboard-key-activatable');
        break;
      case 'Enter':
        keyElement.classList.add('keyboard-key-middle-wide');
        keyElement.textContent = '';
        createImg(enterPng, keyElement);
        break;
      case 'ShiftLeft':
        keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
        break;
      case 'ShiftRight':
        keyElement.classList.add('keyboard-key-shift-wide', 'keyboard-key-dark');
        break;
      case 'ControlLeft':
        keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
        break;
      case 'ControlRight':
        keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
        break;
      case 'ArrowLeft':
        keyElement.textContent = '';
        createImg(arrowLeft, keyElement);
        break;
      case 'ArrowRight':
        keyElement.textContent = '';
        createImg(arrowRight, keyElement);
        break;
      case 'ArrowUp':
        keyElement.textContent = '';
        createImg(arrowTop, keyElement);
        break;
      case 'ArrowDown':
        keyElement.textContent = '';
        createImg(arrowBottom, keyElement);
        break;
      case 'MetaLeft':
        keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
        break;
      case 'AltLeft':
        keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
        break;
      case 'AltRight':
        keyElement.classList.add('keyboard-key-wide', 'keyboard-key-dark');
        break;
      case 'Space':
        keyElement.classList.add('keyboard-key-extra-wide');
        keyElement.textContent = ' ';
        break;
    }

    return keyElement;
  }
}

export default Key;