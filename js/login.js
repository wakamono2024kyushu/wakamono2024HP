// gasのエンドポイント
const api_url = "https://script.google.com/macros/s/AKfycbx96C5DoWTdc7EF5LPZvuARAlVyoTI3Jj2UOLaCQvMlU-xoktEUz_wq4tyeCSSrqfDu/exec";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ページリロードを防止
    const username = document.getElementById("username").value;
    const birthDate = new Date(document.getElementById("birthdate").value);

    console.log(username, birthDate);

    const loadingOverlay = document.getElementById("loadingOverlay");
    loadingOverlay.style.display = "block"; // ローディングアニメーションを表示

    fetch(api_url, {
        method: "post",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encodeURI(`name=${username}&birth_date=${birthDate.toLocaleString()}`)
        })
        .then((response) => {
            response.json().then((json) => {
                if (json.statusCode !== 200) {
                    loadingOverlay.style.display = "none";
                    alert(json.message);
                    return;
                }
                // alert(json.message+"\nHello    "+json.name);
                loadingOverlay.style.display = "none";
                window.location.href = `/mypage.html#${json.name}`;
            });

        })
        .catch((error) => {
            alert(error.message);
        });
});
