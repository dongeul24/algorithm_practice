// 첫번째 시도: replace나 split, join 등으로 가능한 단어가 주어진 단어에 포함되어있을때 그 부분을 삭제(제거)시키고,
// 없어진 요소들을 count 할 생각이었으나 시도해본 결과 wyeoo같은 경우 ye가 단어안에 포함되어있고 이부분을 지우면 woo가 남아 결국
// woo도 지워져서 count가 되어버리는 문제점이 생김.

// 그래서 차라리 공백을 주고, 나중에 trim()을 이용해서 공백을 없앤뒤 '' 빈 문자열을 카운트하여 문제를 해결했다.

function solution(babbling) {
  const possibleWords = ["aya", "ye", "woo", "ma"];
  let count = 0;

  // 이중 forEach 구문 사용해서 각각 한 요소씩 비교했음!!
  babbling.forEach((babblingWord) => {
    possibleWords.forEach((possibleWord) => {
      babblingWord = babblingWord.replace(possibleWord, " ");
      // babblingWord.split(possibleWord).join(" ") 이렇게 써도 됨!
    });

    console.log(babblingWord) 
    // 요거로 결과가 어떤지 계속 track했음.
    //
    //  e
    // u
    //  a
    // w oo
    //공백을 추가하면 이런 식으로 나옴 그래서 위에서 말한 문제점인 woo가 한 단어가 안되고, w oo가 되어서 제거되지 않음!!
    

    // 여기서 trim()으로 공백 제거를 해서 count 되어야할 요소는 아무리 많은 공백이 추가되었어도, 공백이 사라져서 ''로 구분가능.
    // 그리고 trim()은 앞뒤 공백은 제거하지만, 단어사이의 공백은 그대로 유지함.
    // console.log(babblingWord.trim());

    if (babblingWord.trim() === '') {
      count++;
    }
  });
  console.log(count);
}

solution(["aya", "yee", "u", "maa", "wyeoo"]); //1
solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]); //3
