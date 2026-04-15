function solution(left, right) {
    let result = 0;

    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            result -= i; 
        } else {
            result += i;
        }
    }

    return result;
}

// --풀이
// 약수의 개수가 홀수인 경우는 제곱수일때 이므로 if문으로 제곱수를 판별하여 result값을 구하고 반환한다.

