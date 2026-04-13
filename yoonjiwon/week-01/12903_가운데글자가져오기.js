function solution(s) {
    const len = s.length;
    
    if (len % 2 === 0) {
        return s[len / 2 - 1] + s[len / 2];
    } else {
        return s[Math.floor(len / 2)];
    }
}



// --풀이
// 문자열 길이가 짝수인지 홀수인지 조건문으로 구분하고, 짝수인 경우 가운데 두 문자의 인덱스를 계산해 반환하며, 
// 홀수인 경우 Math.floor를 사용해 가운데 인덱스를 구해 한 글자를 반환한다.