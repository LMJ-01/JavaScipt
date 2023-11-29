function whatsYourFavorite() {
    let fav = "Javascript";
    // resolve 일때 Javascript를 반환
    return new Promise((resolve, reject) => resolve(fav));
}

function displaySubject(subject) {
    // resolve 일떄 whatsYourFavorite() 함수의 결과를 받아서 Hello와 함께 프로미스 반환
                                            // Javascript
    return new Promise((resolve, reject) => resolve(`Hello, ${subject}`));
}

whatsYourFavorite()
    .then(displaySubject) //.then(Response => displaySubject(Response))
    .then(console.log);   //.then(result => console.log(result));