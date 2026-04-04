function solution(str) {

  const len = (str.length === 4 || str.length === 6);
  const onlyNum = /^\d+$/.test(str);

  if (len && onlyNum) {
    return true;
  }
  return false;
};

// 문제 이해
// 파라미터 문자열 길이가 4 또는 6
// 숫자만 있을 때 true, 문자가 섞였을 때 false 반환

// 풀이 방법
// 정규식 이용해서 문자가 포함되어있는지 확인하기
// 문자가 하나라도 포함되어 있을 때를 기준으로 true/false를 구분지음
// /^\d+$/.test(str) 조건을 넣어줘서 파라미터(str)에 숫자로만 구성되어있는지 표현함
