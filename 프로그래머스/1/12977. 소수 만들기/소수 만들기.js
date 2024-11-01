function solution(nums) {
  const isPrimeNumber = (number) => {
    for (let i = 2; i <= Math.sqrt(number); i++){
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  const allCases = [];
  for (let i = 0; i < nums.length - 2; i++){
    for (let j = i+1; j < nums.length - 1; j++){
      for (let k = j + 1; k < nums.length; k++){
        allCases.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  let count = 0;

  allCases.forEach((number) => {
    if (isPrimeNumber(number)) {
      count++;
    }
  })


  return count;
}
