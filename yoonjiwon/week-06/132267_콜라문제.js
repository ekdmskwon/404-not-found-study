function solution(a, b, n) {
  let totalGot = 0;
  let currentBottles = n;

  while (currentBottles >= a) {
    const newCoke = Math.floor(currentBottles / a) * b;

    const remaining = currentBottles % a;

    totalGot += newCoke;

    currentBottles = newCoke + remaining;
  }

  return totalGot;
}
//--풀이
// 상빈이가 받은 총 콜라 수, 현재 보유 중인 빈 병을 변수로 두고 이번에 교환해서 받을 수 있는 콜라를 계산한다.
// 교환하고 남은 병 계산하고 총 받은 개수에 더하고 다음 턴의 빈 병은 새로 받은 콜라를 다 마신 병, 남은 병을 합친 것이 되고
// 빈 병이 a개 이상이면 계속 반복한다. 반복이 끝나면 총 받은 콜라 수를 반환한다.
