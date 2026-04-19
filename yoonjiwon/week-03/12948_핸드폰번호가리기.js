function solution(phone_number) {
  let sum = "";
  for (let i = 0; i < phone_number.length - 4; i++) {
    sum += "*";
  }
  return sum + phone_number.slice(-4);
}
