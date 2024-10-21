function solution(babbling) {
  const possibleWords = ["aya", "ye", "woo", "ma"];
  let count = 0;

  babbling.forEach((babblingWord) => {
    possibleWords.forEach((possibleWord) => {
      babblingWord = babblingWord.replace(possibleWord, " ");
    });


    if (babblingWord.trim() === '') {
      count++;
    }
   });
    
   return count;
}