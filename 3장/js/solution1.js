const nums = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

// 반복문 for로 배열에서 10보다 큰 값 출력하기
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 10) {
        document.write(`${nums[i]},`);
    }
}


document.write(`<hr>`);
// 반복문 forEach로 배열에서 10보다 큰 값 출력하기

nums.forEach(function (num) {
    if (num > 10) {
        document.write(`${num},`);
    }
});
document.write(`<hr>`);
// 반복문 for...of로 배열에서 10보다 큰 값 출력하기
for (let num of nums) {
    if (num > 10) {
        document.write(`${num},`);
    }
    
}