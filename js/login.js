// gasのエンドポイント
// const api_url = "https://script.google.com/macros/s/AKfycbx96C5DoWTdc7EF5LPZvuARAlVyoTI3Jj2UOLaCQvMlU-xoktEUz_wq4tyeCSSrqfDu/exec";
const api_url = "https://script.google.com/macros/s/AKfycbwUO7wS09X4jcvKZhyNFUoHgyoRbRSrXHiW4avArZSeIDD0A0A4iAsRFIP-2B3dezsd/exec";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ページリロードを防止
    const username = document.getElementById("username").value;
    // const birthDate = new Date(document.getElementById("birthdate").value);

    console.log(username);

    const loadingOverlay = document.getElementById("loadingOverlay");
    loadingOverlay.style.display = "block"; // ローディングアニメーションを表示

    fetch(api_url, {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: encodeURI(`name=${username}`)
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

                // 個人ID,名前,ナマエ,あだ名,支部,地区,パーティ,学年,性別,活動グループ,グループチャット,移動バス,まじりあえA,まじりあえB
                const userInfo = {
                    "id": decodeURIComponent(json.id),
                    "name": decodeURIComponent(json.name),
                    "nickname": decodeURIComponent(json.nickname),
                    "branch": decodeURIComponent(json.branch),
                    "district": decodeURIComponent(json.district),
                    "party": decodeURIComponent(json.party),
                    "grade": decodeURIComponent(json.grade),
                    "activityGroup": decodeURIComponent(json.activityGroup),
                    "activityGroupRoom": decodeURIComponent(json.activityGroupRoom),
                    "groupChat": decodeURIComponent(json.groupChat),
                    "bus": decodeURIComponent(json.bus),
                    "mixA": decodeURIComponent(json.mixA),
                    "mixARoom": decodeURIComponent(json.mixARoom),
                    "mixB": decodeURIComponent(json.mixB),
                    "mixBRoom": decodeURIComponent(json.mixBRoom),
                    "accomodationRoom": decodeURIComponent(json.accomodationRoom),
                }
                console.log(userInfo);
                // ローカルストレージに保存
                localStorage.setItem("userInfo", JSON.stringify(userInfo));
                console.log(JSON.parse(localStorage.getItem("userInfo")));
                // マイページに遷移`
                window.location.href = `/mypage.html#${userInfo.id}`;
            });

        })
        .catch((error) => {
            alert(error.message);
        });
});
