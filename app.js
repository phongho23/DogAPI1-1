//question 1

"use strict";

function getDogImage(userNum) {
    if (userNum < 3 && userNum > 0) {
        fetch(`https://dog.ceo/api/breeds/image/random/${userNum}`)
            .then(response => response.json())
            .then(responseJson => console.log(responseJson));
    } else if (userNum > 50 || userNum < 1) {
        return alert("Enter a value between 1 and 50");
    } 
}

function watchForm() {
    $("#dog-number-form").submit(e => {
        e.preventDefault();
        let userNum = $(`#dog-number-user`).val();
        getDogImage(userNum);
    });
}

$(function () {
    console.log('App is running!  Submit to run.');
    watchForm();
});