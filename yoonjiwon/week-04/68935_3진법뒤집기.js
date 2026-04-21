function solution(n) {
    let str = "";
    while (n != 0){
        str += n %3;
        n = Math.floor(n/3);
    }
    return parseInt(str, 3);
}

// --풀이
// 3진법 상에서 앞뒤로 뒤집는건 str에 n을 3으로 나눈 나머지를 순서대로 넣으면 되고 
// Math.floor를 이용해 소수점이 없는 정수 몫을 구해 0이 아니면 반복하고 
// parseInt를 이용해 3진법 문자열을 10진법으로 바꿔 반환한다.