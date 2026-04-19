function solution(phone_number) {
  let sum = "";
  for (let i = 0; i < phone_number.length - 4; i++) {
    sum += "*";
  }
  return sum + phone_number.slice(-4);
}

// --풀이
// phone_number의 뒷자리 4개 전까지 for문을 통해 *를 더한다. 그리고 slice를 통해 마지막 4자리를 더해 반환한다.
