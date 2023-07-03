/*
Write a function called hasMoreVowels that takes in one argument, word. When the function is called, return true if that word contains more vowels than non-vowels; otherwise, return false. The word will always be a single word, without any punctuation or spaces. It will contain only uppercase and/or lowercase letters.

If the phrase is over half vowels, it should return true:

hasMoreVowels('moose')
// true
If it’s half vowels (or less), it’s false:

hasMoreVowels('mice')
// false

hasMoreVowels('graph')
// false
Don’t consider “y” as a vowel:

hasMoreVowels('yay')
// false
Uppercase vowels are still vowels:

hasMoreVowels('Aal')
// true
*/

// const hasMoreVowels = word => {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let vowelsCount = 0;
//     let consonantsCount = 0;

//     for (let i = 0; i < word.length; i++) {
//         const char = word[i].toLowerCase();
//         if (vowels.includes(char)) {
//             vowelsCount++;
//         } else {
//             consonantsCount++;
//         }
//     }

//     return vowelsCount > consonantsCount
// }

function hasMoreVowels(word){
    word = word.toUpperCase();
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    let sum = 0;
    for(let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            sum += 1
        }
    }
    return sum > word.length / 2
}

console.log(hasMoreVowels('moose'))
console.log(hasMoreVowels('mice'))
console.log(hasMoreVowels('graph'))
console.log(hasMoreVowels('yay'))
console.log(hasMoreVowels('Aa1'))