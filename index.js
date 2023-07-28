class TrSeoUrl {
  constructor() {
    this.letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "ö",
      "p",
      "r",
      "s",
      "t",
      "u",
      "v",
      "y",
      "z",
      "-",
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
  }
  convertLettersForSeo = (value) => {
    return new Promise((resolve) => {
      (async () => {
        resolve(
          value
            .toLowerCase()
            .split(" ")
            .join("-")
            .split("ş")
            .join("s")
            .split("ç")
            .join("c")
            .split("ü")
            .join("u")
            .split("ı")
            .join("i")
            .split("ğ")
            .join("g")
            .split("ö")
            .join("o")
        );
      })();
    });
  };

  letterOrNumberChecker = (value) => {
    return new Promise((resolve) => {
      (async () => {
        const convertLettersForSeoResult = await this.convertLettersForSeo(
          value
        );
        let cleanedValue = "";
        for (let i = 0; i < convertLettersForSeoResult.length; i++) {
          const char = convertLettersForSeoResult.substring(i, i + 1);
          if (this.letters.indexOf(char) > -1) {
            cleanedValue += char;
          }
        }

        resolve(cleanedValue);
      })();
    });
  };

  convertSeoURL = (value) => {
    return new Promise((resolve) => {
      (async () => {
        let letterOrNumberCheckerResult = await this.letterOrNumberChecker(
          value
        );
        resolve(letterOrNumberCheckerResult);
      })();
    });
  };
}

module.exports = new TrSeoUrl();
