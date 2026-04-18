/**
 * 풀이 과정
 * 1. 번호 전체 길이를 len에 할당
 * 2. 끝 4자리만 숫자 그대로 잘라내서 nums에 저장
 * 3. 4자리를 제외한 길이만큼 '*'을 반복하여 star에 저장
 * 4. star 와 nums 를 더함
 */

const solution = (phone_number) => {
  let len = phone_number.length;
  let nums = phone_number.slice(len - 4);
  let star = "*".repeat(len - 4);
  return star + nums;
};
