const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`

// const regexp = new RegExp('the', 'gi');
// console.log(str.match(regexp)); // ["the", "The","the"]
// const regexp = /the/gi;
// console.log(str.match(regexp)); // ["the", "The","the"]

// const regexp = /fox/gi;
// console.log(regexp.test(str)); // true
// console.log(str.replace(regexp, 'AAA')); // The quick brown AAA jumps over the lazy dog.

// console.log(str.match(/\.$/gim));
// console.log(
//   str.match(/d$/gm)
// ); // ["d"]
// console.log(
//   str.match(/^t/gim)
// ); // ["t", "T"]
// console.log(
//   str.match(/h..p/g)
// ); // http
// console.log(
//   str.match(/fox|dog/g)
// ); // ["fox", "dog"]
// console.log(
//   str.match(/https?/g)
// ); // ["https", "http"]
// console.log(
//   str.match(/\b\w{2,3}\b/g)
// ); // ["010", "com", "www", "com", "The", "fox", "the", "dog"]
// console.log(
//   str.match(/[0-9]{1,}/g)
// ) // ["010", "1234", "5678", "7035", "60", "1234"]
// console.log(
//   str.match(/[가-힣]{1,}/g)
// ) // ["동해물과", "백두산이", "마르고", "닳도록"]
// console.log(
//   str.match(/\w/g)
// ) //  ["0", "1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "t", "h", "e", "s", "e", "c", "o", "n", "g", "m", "a", "i", "l", "c", "o", "m", "h", "t", "t", "p", "s", "w", "w", "w", "o", "m", "d", "b", "a", "p", "i", "c", "o", "m", "a", "p", "i", "k", "e", "y", "7", "0", "3", "5", "c", "6", "0", "c", "s", "f", "r", "o", "z", "e", "n", "T", "h", "e", "q", "u", "i", "c", "k", "b", "r", "o", "w", "n", "f", "o", "x", "j", "u", "m", "p", "s", "o", "v", "e", "r", "t", "h", "e", "l", "a", "z", "y", "d", "o", …]
// console.log(
//   str.match(/\bf\w{1,}\b/g)
// ) // ["frozen", "fox"]
// console.log(
//   str.match(/\d/g)
// ) // ["0", "1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "7", "0", "3", "5", "6", "0", "1", "2", "3", "4"]
// console.log(
//   str.match(/\d{1,}/g)
// ) // ["010", "1234", "5678", "7035", "60", "1234"]
// console.log(
//   str.match(/\s/g)
// ) // ["\n", "\n", "\n", "\n", " ", " ", " ", " ", " ", " ", " ", " ", "\n", "\n", "\n", " ", " ", " ", "\n"]
const h = `  the hello world   !`
// console.log(
//   h.replace(/\s/g, '')
// ) // "thehelloworld!"
// console.log(
//   str.match(/.{1,}(?=@)/g)
// ) // ["thesecon"]
// console.log(
//   str.match(/.{1,}(?<=@)/g)
// ) // [thesecon@]
// console.log(
//   str.match(/(?<=@).{1,}/g)
// ) // ["gmail.com"]