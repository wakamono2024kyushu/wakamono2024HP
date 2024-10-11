// 必要な場合のJSスクリプト
const params = new URLSearchParams();
params.append("name", "hoge");
params.append("password", "fuga");
fetch("https://script.google.com/macros/s/AKfycbzDutETPxxV1Zvc8-kqGN8qJN_maXmYKAc5w08PyepuTNuXCSo0HOBghMkg2Vo3ebiGEQ/exec", {
    method: "post",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params
})
    .then((response) => {
        response.text().then((text) => {
            alert(text);
        });
    })
    .catch((error) => {
        alert(error.message);
    });