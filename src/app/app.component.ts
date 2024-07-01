import { Component } from '@angular/core';

// function isDanger(str: String) {
//   if (str.length === 0) {
//     return false
//   }

//   return str.length < 8 ? true : false;
// }

function hasLetter(str: String) {
  return str.split('').some(char => letters.includes(char.toLowerCase()));
}

function hasNumber(str: String) {
  return str.split('').some(char => numbers.includes(char));
}

function hasSymbol(str: String) {
  return str.split('').some(char => symbols.includes(char));
}

const letters = 'qwertyuioplkjhgfdsazxcvbnm';
const numbers = '0123456789';
const symbols = '[]{}()*&^%$#@!?><,./\|;:*-+'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'my-app';
  inputString = '';

  isDanger(str: String) {
    if (str.length === 0) {
      return false
    }

    return str.length < 8 ? true : false;
  }

  isHard(str: String) {
    if (str.length < 8) {
      return false;
    }

    if (hasLetter(str) && hasNumber(str) && hasSymbol(str)) {
      return true;
    }

    return false;
  }

  isMedium(str: String) {
    if (str.length < 8) {
      return false;
    }

    if ( (hasLetter(str) && hasNumber(str))
      || (hasLetter(str) && hasSymbol(str))
      || (hasNumber(str) && hasSymbol(str))
    ) {
      return true;
    }

    return false;
  }

  isEasy(str: String) {
    if (str.length < 8) {
      return false;
    }

    if ( (!hasLetter(str) && !hasNumber(str))
      || (!hasLetter(str) && !hasSymbol(str))
      || (!hasNumber(str) && !hasSymbol(str))
    ) {
      return true;
    }

    return false;
  }
}
