function solution(price, money, count) {
    let sum=0;
    for(let i=1; i<=count; i++){
        sum += price*i;
        
    }
    if(money > sum){
        return 0;
    }
    return sum-money;
}

// --풀이
// 놀이기구를 탈때 지불한 총 비용을 sum이라고 하고 for문을 통해 count개수만큼 price에 배수를 더해 비용을 더한다.
// 그리고 if문을 통해 money값이 sum보다 큰 지를 확인하여 크면 0, 아니면 부족한 금액만큼을 반환한다.