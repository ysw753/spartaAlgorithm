function solution(absolutes, signs) {
  let result = 0;

  for (let i = 0; i < absolutes.length; i++) {
    //sign 이 true면 양수로계산 false면 음수로 계산
    if (signs[i]) {
      //배열에 저장된 값은 문자이므로 parseInt로 숫자변환후 계산
      result = result + parseInt(absolutes[i]);
    } else {
      result = result - parseInt(absolutes[i]);
    }
  }
  return result;
}

console.log(solution([4, 7, 12], [true, false, true]));
