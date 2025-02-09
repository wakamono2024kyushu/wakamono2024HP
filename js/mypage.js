const OPEN_CHAT_ACTIVITY = {
    "A": "https://line.me/ti/g2/P9TBWMTEf0k-tFAMxg3KSXROw2KyrXUOYSlwMA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "B": "https://line.me/ti/g2/pAsJ2ZvH_-Nin5QMb4AltPNuzITMMtNaX4ws2g?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "C": "https://line.me/ti/g2/uLhpdb9hnzlx-Q7GgQAplYdc1d7RXlR4jIvO4A?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "D": "https://line.me/ti/g2/2wRVcesAU40cjjL00lbfkfrcb0qlvslernNHNA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "E": "https://line.me/ti/g2/wUPU4xc-u_rW-XYXemDkWFISV1-7BstX_Ye9UQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "F": "https://line.me/ti/g2/jOLolsnfNXhVRSQkowhsGQ5bub6sgWoGfXl1Uw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "G": "https://line.me/ti/g2/KRbHjBiGW7h_X31bw5mtlA5Wml0xqhI8O0wFzg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "H": "https://line.me/ti/g2/JAXgkrEPaIgXgISwt_luRPXLquz7mX6jn58_fQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
}

const OPEN_CHAT_GRADE = {
    "1": "https://line.me/ti/g2/cuoBwRsmfvLJI4oRQgTE92e7rX06b5GbUuuTjw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "2": "https://line.me/ti/g2/nQRN38wQVbCZE7oyiTQMglojMferZ1orlsjUQw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "3": "https://line.me/ti/g2/5npSDMagU9Iqh8rTDtKX2gpGdMzDx70xRosiww?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "4": "https://line.me/ti/g2/_BOsHL7VidhV_m23NS68CJnXlz77zcIZteg7rQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
}

const OPEN_CHAT_MIX_A = {
    "ばりばりパニック運動会": "https://line.me/ti/g2/Q-ylG5F2LVmyo-t3_USWOKa3qIbMQZYbQrs3kA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "うたフェス〜歌おう少年になって〜": "https://line.me/ti/g2/Ro8EGFtHCZJ6wtnE1VDJkN7ZY4l2FdRlbi8PFg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "あの日始めたラボが今": "https://line.me/ti/g2/NQ0lKpDGCVjPrEPuEmrVZTietXnxiWBwxg2hlw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "決戦！わかものVSわかもの！？": "https://line.me/ti/g2/7g7BOsUIovgtxJ5w1DcJ7JaMHzrDSf2lZ-dYFA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "はちゃめちゃ！てげ！だご！ぶったテーマ活動": "https://line.me/ti/g2/8Lob9JMY74IWPgrsCvqfGvhKABJ6iOAGTjVolw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
}

const OPEN_CHAT_MIX_B = {
    "ラボ・パーティイベント開発部 ～好きをカタチに～": "https://line.me/ti/g2/sBqORWnAWnF1YLQS_vZVfixjMFXbSmeLHEebmw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "Action! Produce The Video.": "https://line.me/ti/g2/gxySAEfAp_vTJ5Q0Pr9Y6Me3RUTFV-vvgJqdHA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "ラボ・パーティイベント開発部 ～好きをカタチに～": "https://line.me/ti/g2/tZhtFfdIiu9_dxol8HawjtoTWxw655OUDEErPQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "思い立ったが吉日！ライブラリー聖地巡礼！": "https://line.me/ti/g2/tZhtFfdIiu9_dxol8HawjtoTWxw655OUDEErPQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "「めあて：よりよいラボについて考えよう！」": "https://line.me/ti/g2/Rpy20uTJLK3T5iBUflensq5UM_nx9SkoEWw6fw?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
    "祝還暦！！ラボ・パーティ盛り上げ隊！": "https://line.me/ti/g2/lBRSj1kvLA_zBJ6B6-M0ZVHhJYokqIWoVRBV9A?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
}


// プロフィール情報を取得
const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const branch = userInfo.branch;
const district = userInfo.district;
const party = userInfo.party;
const grade = userInfo.grade;
const name = userInfo.name;
const nickname = userInfo.nickname;
const activityGroup = userInfo.activityGroup;
const bus = userInfo.bus;
const mixA = userInfo.mixA;
const mixB = userInfo.mixB;

// プロフィール情報を表示
document.getElementById('branch').textContent = branch;
document.getElementById('district').textContent = district;
document.getElementById('party').textContent = party;
document.getElementById('grade').textContent = grade;
document.getElementById('name').textContent = name;
document.getElementById('nickname').textContent = nickname;
document.getElementById('bus').textContent = bus;

document.getElementById('group').textContent = activityGroup;
document.getElementById('group-open-chat').href = OPEN_CHAT_ACTIVITY[activityGroup];
document.getElementById('mixA').textContent = mixA;
document.getElementById('mixA-open-chat').href = OPEN_CHAT_MIX_A[mixA];
document.getElementById('mixB').textContent = mixB;
document.getElementById('mixB-open-chat').href = OPEN_CHAT_MIX_B[mixB];
