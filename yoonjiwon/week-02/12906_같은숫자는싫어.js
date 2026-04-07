function solution(arr)
{
    const newArr = [];
    for(let i=0; i< arr.length; i++){
        if( !newArr || (arr[i-1] !== arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// --풀이
// 빈 배열을 하나 만들고 for문을 통해 arr의 원소를 다 확인하면서 if문을 통해 빈 배열이거나 전 배열요소의 값과
// 같은 값이 아니면 배열에 값을 추가하는 방식이다.