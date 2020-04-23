const keyToNep = {
  "+": '\u200C', // ZWNJ
  ".": '\u0964', // ।
  "/": '\u094D', // ्
  "0": '\u0966', // ०
  "1": '\u0967', // १
  "2": '\u0968', // २
  "3": '\u0969', // ३
  "4": '\u096A', // ४
  "5": '\u096B', // ५
  "6": '\u096C', // ६
  "7": '\u096D', // ७
  "8": '\u096E', // ८
  "9": '\u096F', // ९
  "<": '\u0919', // ङ
  "=": '\u200D', // ZWJ
  ">": '\u0965', // ॥
  "?": '\u003F', // ?
  "A": '\u0906', // आ
  "B": '\u092D', // भ
  "C": '\u091A', // च
  "D": '\u0927', // ध
  "E": '\u0948', // ै
  "F": '\u090A', // ऊ
  "G": '\u0918', // घ
  "H": '\u0905', // अ
  "I": '\u0940', // ी
  "J": '\u091D', // झ
  "K": '\u0916', // ख
  "L": '\u0933', // ळ
  "M": '\u0902', // ं
  "N": '\u0923', // ण
  "O": '\u0913', // ओ
  "P": '\u092B', // फ
  "Q": '\u0920', // ठ
  "R": '\u0943', // ृ
  "S": '\u0936', // श
  "T": '\u0925', // थ
  "U": '\u0942', // ू
  "V": '\u0901', // ँ
  "W": '\u0914', // औ
  "X": '\u0922', // ढ
  "Y": '\u091E', // ञ
  "Z": '\u090B', // ऋ
  "[": '\u0907', // इ
  "\\": '\u0950', // ॐ
  "]": '\u090F', // ए
  "^": '\u005E', // ^
  "_": '\u0952', // ॒
  "`": '\u093D', // ऽ
  "a": '\u093E', // ा
  "b": '\u092C', // ब
  "c": '\u091B', // छ
  "d": '\u0926', // द
  "e": '\u0947', // े
  "f": '\u0909', // उ
  "g": '\u0917', // ग
  "h": '\u0939', // ह
  "i": '\u093F', // ि
  "j": '\u091C', // ज
  "k": '\u0915', // क
  "l": '\u0932', // ल
  "m": '\u092E', // म
  "n": '\u0928', // न
  "o": '\u094B', // ो
  "p": '\u092A', // प
  "q": '\u091F', // ट
  "r": '\u0930', // र
  "s": '\u0938', // स
  "t": '\u0924', // त
  "u": '\u0941', // ु
  "v": '\u0935', // व
  "w": '\u094C', // ौ
  "x": '\u0921', // ड
  "y": '\u092F', // य
  "z": '\u0937', // ष
  "{": '\u0908', // ई
  "|": '\u0903', // ः
  "}": '\u0910', // ऐ
  "~": '\u093C', // ़
};

function formatKey(key) {
  return keyToNep[key];
}

function format(text) {
  return Array.from(text, c => formatKey(c) || c).join('');
}

var layout = {
  name: "romanized",
  format: format,
  formatKey: formatKey,
}

export default layout