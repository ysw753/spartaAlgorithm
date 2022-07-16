//없는숫자더하기

function solution(numbers) {
  //0~9까지의 합은 45이다

  let numbers_sum = 0;
  for (let number of numbers) {
    numbers_sum += number;
  }

  //45에서 배열전체의 합을 빼주면 없는 숫자의 합을 구할수있다.
  return 45 - numbers_sum;
}
solution([5, 8, 4, 0, 6, 7, 9]);
