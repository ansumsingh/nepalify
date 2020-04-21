const keyToNep = {
  "!": "!",
  "'": "'",
  "#": "#",
  "$": "$",
  "%": "%",
  "&": "&",
  "'": "'",
  "(": "(",
  ")": ")",
  "*": "*",
  "+": "\u200C", //Zero Width Non Joiner
  ",": ",",
  "-": "-",
  ".": "।",
  "/": "्",
  "0": "०",
  "1": "१",
  "2": "२",
  "3": "३",
  "4": "४",
  "5": "५",
  "6": "६",
  "7": "७",
  "8": "८",
  "9": "९",
  ":": ":",
  ";": ";",
  "<": "ङ",
  "=": "\u200D", // Zero Width Joiner
  ">": "॥",
  "?": "?",
  "@": "@",
  "A": "आ",
  "B": "भ",
  "C": "च",
  "D": "ध",
  "E": "ै",
  "F": "ऊ",
  "G": "घ",
  "H": "अ",
  "I": "ी",
  "J": "झ",
  "K": "ख",
  "L": "ळ",
  "M": "ं",
  "N": "ण",
  "O": "ओ",
  "P": "फ",
  "Q": "ठ",
  "R": "ृ",
  "S": "श",
  "T": "थ",
  "U": "ू",
  "V": "ँ",
  "W": "औ",
  "X": "ढ",
  "Y": "ञ",
  "Z": "ऋ",
  "[": "इ",
  "\\": "ॐ",
  "]": "ए",
  "^": "^",
  "_": "॒",
  "`": "ऽ",
  "a": "ा",
  "b": "ब",
  "c": "छ",
  "d": "द",
  "e": "े",
  "f": "उ",
  "g": "ग",
  "h": "ह",
  "i": "ि",
  "j": "ज",
  "k": "क",
  "l": "ल",
  "m": "म",
  "n": "न",
  "o": "ो",
  "p": "प",
  "q": "ट",
  "r": "र",
  "s": "स",
  "t": "त",
  "u": "ु",
  "v": "व",
  "w": "ौ",
  "x": "ड",
  "y": "य",
  "z": "ष",
  "{": "ई",
  "|": "ः",
  "}": "ऐ",
  "~": "़",
};

function formatKey(key) {
  return keyToNep[key];
}

function format(text) {
  return Array.from(text, c => formatKey(c)).join('');
}

var layout = {
  name: "romanized",
  format: format,
  formatKey: formatKey,
}

export default layout