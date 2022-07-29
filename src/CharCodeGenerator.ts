export class CharCodeGenerator {
  private characterCase: string;
  private inputNumber: boolean;
  private listAlphabet: Array<String> = [];

  private readonly charCodeA: number = "A".charCodeAt(0);
  private readonly charCodeZ: number = "Z".charCodeAt(0);

  // char_a ~ char_z ... length = 26
  private readonly ALPHABET_LENGTH: number = this.charCodeZ - this.charCodeA + 1;

  private readonly ALPHABET: string;

  constructor(characterCase: string, inputNumber: boolean = false) {
    this.characterCase = characterCase;
    this.inputNumber = inputNumber;
    // a ~ z, A ~ Z ...
    this.ALPHABET = this.alphabetGenerate();

    if (this.inputNumber) {
      this.listAlphabet.push(this.inputNumberGenerate());
    } else {
      return;
    }
  }

  public getAlphabet(): string {
    if (!(this.ALPHABET === '' || this.ALPHABET === null)) {
      this.listAlphabet.push(this.ALPHABET);
      return this.listAlphabet.join('');
    } else {
      throw new Error('Alphabet is null');
    }
  }

  private setAlphabetConfig(char: string): string {
    if (this.characterCase === 'upperCase' || this.characterCase === 'upper' || this.characterCase === '') {
      return char.toUpperCase();
    } else if (this.characterCase === 'lowerCase' || this.characterCase === 'lower') {
      return char.toLowerCase();
    } else if (this.characterCase === 'upperAndLower' || this.characterCase === 'lowerAndUpper') {
      return char.toUpperCase() + char.toLowerCase();
    } else {
      throw new Error('Value error for characterCase constructor!');
    }
  }

  private alphabetGenerate(): string {
    let alphabet: string = '';
    for (let i: number = 0; i < this.ALPHABET_LENGTH; i++) {
      alphabet += String.fromCharCode(this.charCodeA + i);
    }
    return this.setAlphabetConfig(alphabet);
  }

  private inputNumberGenerate(): string {
    let inputStringNumber = '';

    for (let i: number = 0; i < 10; i++) {
      inputStringNumber += i;
    }

    return inputStringNumber;
  }
}


