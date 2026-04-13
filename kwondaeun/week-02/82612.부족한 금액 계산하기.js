function solution(price, money, count) {
  let totalPrice = 0;

  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }

  let rest = money - totalPrice;

  if (rest >= 0) {
    return 0;
  } else {
    return -rest;
  }
}

/*
문제 이해
기본 이용료 price원
count번째 이용할 때 = price * count
count번 타면, 가진 금액에서 얼마가 모자라는지 return
금액이 부족하지 않을 때는 0 반환
price = 3, money = 20, count = 4일 때 result = 10
*/

/*
문제 풀이
totalPrice 변수로 모자란 금액을 for문 사용해서 N번 탈 때마다 price * N배 되도록 조건을 넣은 후 총액을 모두 구하기
총액이 다 나온 뒤에 부족한 금액액 계산
금액이 부족하지 않을 때는 0 반환, 부족하면 차액을 양수로 변환해서 출력
*/
