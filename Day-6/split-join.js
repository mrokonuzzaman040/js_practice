const lyrics = 'Never gonna give you up. Never gonna let you down. Never gonna run around and desert you. Never gonna make you cry. Never gonna say goodbye. Never gonna tell a lie and hurt you';
//split with space
// console.log(lyrics.split(' '));

//split with comma
const words = lyrics.split('.');
// console.log(words);

//split with empty string
const withoutA = lyrics.split('');
// console.log(withoutA);

//slice
const smallSlice = lyrics.slice(0, 11);
// console.log(smallSlice);

//substr
const anotherPart = lyrics.substr(0, 11);
// console.log(anotherPart);

//substring
const anotherAnotherPart = lyrics.substring(0, 11);
// console.log(anotherAnotherPart);

//trim
const extraSpace = '    I love you    ';
// console.log(extraSpace.trim());


//concat
const first = 'Amader';
const second = 'City';
const fullString = first + second;
// console.log(fullString);


//join
const words2 = ['alim', 'badhon', 'cameron', 'david'];
const allJoined = words2.join('. ');
// console.log(allJoined);