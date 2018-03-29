/**
 * Copyright (c) 2018. トリナー(@toliner_), みやゆー(@yuu1111main), そるてぃ(@salty_7), Keitan(@0505Keitan). All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

let count = 0;
let popu = 0;
let popute = 0;
let poputepi = 0;
let poputepi2 = 0;
let poputepi2ltu = 0;
let start = new Date();
let hour = 0;
let min = 0;
let sec = 0;
let now = 0;
let datet = 0;
let time;
const team = ['ナ', 'ポ', 'ア', 'ン', 'の', 'ク'];
const team2 = ['マ', 'イ', 'ク', 'ラ', 'ク'];
//よく分からんのでとりあえず即時関数
const take = (() => {
    const aa = [
        '　　　　　　　　　　　　　　　　　　　　　　　　　-------　､　ｒへ------､',
        '　　　　　　　　　　　　　　　　　　 ＿__､+\'\'"~　八 　　　　　~\'\'＜ つ　　　＼',
        '　　　　　　　　　　　　　　 _､+\'\'"~　 ./ ,:　　　　＾ 　 丶　　　　　ヽく＿＿　∧',
        '　　　　　　 , -r-　　　　 / 　 　 　 / / -､　　　　\'´￣!＼‘,　‘:,　 |　　　 ＼/',
        '　　　　　／ .∧　　 ＼..ﾞ|/＿,,.｡*\'/ /|,/＼＿_／^ヽ /,,_　`! 　 \',　|',
        '　　　 ／　　　∧　　　 ＼　〈〉.　,　.|　ｙ\'\'"ヽ______ 7´⌒ヽ _|　　ト;′',
        '　　 〈　　　　　 ∧ （竹） .∨...　｜｜ ,r　ヽ 三三/　　‘:, Y!　 .|,′',
        '　　　∨ 　 　 　 ∧　　　　∨...　|　.|八 °,!三三{.　° ﾉ 八　/---､',
        '.　　　 ∨ 　 　 　 ∧　　　　∨....∨（.＾ 　　 ､_,､_, `　　　,.ｨ^!./＿　　\',',
        '　　　　 ∨　　 ／三ﾐメ、　　∨　冫≧=‐------‐ｧ=≦/ .|/　　 } 　 !',
        '.　　　 　 ∨三三三三圦__.＼＼/　＼|ｲ `\'\'＜:＼/:::::／　　|　　（＿__）',
        '　　　 〈〉　　 ノ　ゞ三ｼ.　＼　＼;　　 { /　　　 ｀¨ﾍ⌒こフ　.∨ 〔､､､_）',
        '　　　　　　　）　　　 　 　 　 ＼八　　`^i､_ __　　　 ＼＼　　 .∨ ｀¨´',
        '　　　　 ＜ﾍ＿/三＼＿／｜＼､.＼　/::/　 ）　　　　 \`\'´　＿ ,∨､',
        '　　　　|＼三三三三:／　　|.　　＼/^ゞク≦---‐=≦::::::「:::::::::|::::/',
        '　　　　　　　　 　 　 　 　 　 　 　 /:::::::/:::::::/:::::::::;′:::::::::|::::::::::|:人',
        'happy end!! '
    ];
    let take_temp = ''
    aa.forEach((value) => {
        take_temp += value;
        take_temp += '<br>'
    })
    return take_temp;
})()

function pptp() {
    const pipimi = document.getElementById('pipimi');
    pipimi.textContent = '';

    const popuko = document.getElementById('popuko');
    popuko.textContent = '';
    const result = document.getElementById('kekka');
    const button = document.getElementById('bkb');
    button.style.visibility = 'hidden';
    button.disabled = true;
    xor.seed((new Date()).value)
    const pop = () => {
        now = new Date();
        datet = parseInt((now.getTime() - start.getTime()) / 1000);

        hour = parseInt(datet / 3600);
        min = parseInt((datet / 60) % 60);
        sec = datet % 60;

        const time = `${toZeroPadString(hour, 2)}時間${toZeroPadString(min, 2)}分${toZeroPadString(sec, 2)}秒`; // パターン2
        count++;
        if (pipimi.textContent.endsWith('ッ')) {
            pipimi.textContent += team2[getRandomInt(4)];;
        } else {
            pipimi.textContent += team[getRandomInt(5)];;
        }
        result.innerHTML = `ポプが出来た回数:${popu}<br>
ナポが出来た回数:${popute}<br>
ナポアが出来た回数:${poputepi}<br>
ナポアンのマが出来た回数:${poputepi2}<br>
ナポアンのマイクが出来た回数:${poputepi2ltu}<br>
経過時間:${time}<br>
`;

        if (pipimi.textContent.endsWith('ナポ')) {
            popu++;
        }
        if (pipimi.textContent.endsWith('ナポア')) {
            popute++;
        }
        if (pipimi.textContent.endsWith('ナポアン')) {
            poputepi++;
        }
        if (pipimi.textContent.endsWith('ナポアンの')) {
            poputepi2++;
        }
        if (pipimi.textContent.endsWith('ナポアンのマ')) {
            poputepi2ltu++;
        }
        if (pipimi.textContent.endsWith('ナポアンのマイク')) {
            button.disabled = false;
            button.style.visibility = 'visible';
            clearInterval(pop);
            const text = pipimi.textContent;
            const count = document.getElementById('count');
            count.innerHTML = team.reduce((prev, x) => `${prev ? `${prev}` : ''}'${x}'の文字数:${countChar(text, x)} <br>`);
            popuko.innerHTML = `${take}<br>${count.textContent}文字目だよ <br>
<a href="https://twitter.com/share?text=「ポ・プ・テ・ピ・ッ・ク」をランダムに出力して「ポプテピピック」が完成したら竹●房を破壊するやつを、${count.textContent}文字目、${time}で完成させました！(ポプテピピッまで完成した回数:${poputepi2ltu}%20https://toliner.github.io/gen_pptp/&hashtags=ポプテの破壊するJS" target="_blank">Twitterでシェアする</a>`.replace('\n', '<br>');
        } else {
            requestAnimationFrame(pop);
        }
        // 最下部にスクロールする
        document.documentElement.scrollTop = document.body.scrollHeight;
    };
    requestAnimationFrame(pop);
}

function toZeroPadString(num, padCount) {
    return String(num).padStart(padCount, '0');
}

const getRandomInt = (max) => {
    const val = xor.rand() % max
    return val < 0 ? -val : val;
}

const countChar = (str, seq) => str.split(seq).length - 1;

xor = {
    x: 123456789,
    y: 362436069,
    z: 521288629,
    w: 88675123
};

xor.seed = function (s) {
    xor.w = s;
}
xor.rand = function () {
    var t = xor.x ^ (xor.x << 11);
    xor.x = xor.y;
    xor.y = xor.z;
    xor.z = xor.w;
    return xor.w = (xor.w ^ (xor.w >>> 19)) ^ (t ^ (t >>> 8));
}
