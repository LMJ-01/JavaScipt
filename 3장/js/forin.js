const student = {
    major: "컴퓨터공학부",
    idNum: 202095066,
    name : '이명준'
}

for (key in student) {
    document.write(`${key} : ${student[key]}<br>`)
}