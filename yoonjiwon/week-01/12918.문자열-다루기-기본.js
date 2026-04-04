function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] < '0' || s[i] > '9') {
            return false;
        }
    }

    return true;
}
// --풀이
// 문자열의 길이가 4와 6이 아닌 경우 false를 반환하고 아니면 for문을 통해 0과9사이의
// 사잇값이 아니면 false를 반환하고 for문을 빠져나오면 true를 반환