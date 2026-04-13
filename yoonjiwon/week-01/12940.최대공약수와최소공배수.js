function solution(n, m) {
    let maxim = Math.max(n,m);
    let mini = Math.min(n,m);
    while(mini !== 0){
        let temp = mini;
        mini = maxim % mini;
        maxim = temp;
    }
    let gcd = maxim;
    let lcm = (n * m) / gcd;

    return [gcd, lcm];
}

// --풀이
// 두 수 중 큰값과 작은값을 구분하여 유클리드 호제법으로 최대공약수를 구하고,
// 최소공배수는 (n * m) / 최대공약수 공식을 이용해 계산하여 반환한다
