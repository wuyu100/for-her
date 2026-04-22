// 유튜브 API 로드
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'ODoc2YEyro', // 여기에 유튜브 주소의 v= 뒷부분 ID를 넣으세요!
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // 사용자가 페이지 어디든 클릭하면 노래 시작 (브라우저 정책 때문)
    document.body.addEventListener('click', () => {
        event.target.playVideo();
    }, { once: true });
}
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionSection = document.getElementById('question-selection'); // HTML의 id와 일치시킴
const successSection = document.getElementById('success-section');

let yesBtnSize = 1;

// '아니오' 버튼을 찾습니다.
const noBtn = document.getElementById('no-btn');

// '아니오' 버튼에 마우스를 올리기만 해도(mouseover) 도망가게 하려면 아래를 쓰세요.
// 만약 클릭할 때만 도망가게 하려면 'mouseover'를 'click'으로 바꾸면 됩니다!
noBtn.addEventListener('mouseover', () => {
    // 1. 화면의 가로, 세로 길이를 계산합니다.
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    // 2. 버튼의 위치를 절대값으로 바꾼 뒤 랜덤 좌표로 이동시킵니다.
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 3. (선택) 누를 때마다 '응' 버튼을 더 키우고 싶다면 기존 코드를 유지하세요.
    yesBtnSize += 0.2; 
    yesBtn.style.fontSize = `${yesBtnSize}rem`;
});

yesBtn.addEventListener('click', () => {
    // 1. 화면 전환 코드 (기존 유지)
    questionSection.style.display = 'none';
    successSection.classList.remove('hidden');
    successSection.style.display = 'block';

    // 2. 성공 시 노래 바꾸기 및 특정 시간부터 재생
    if (player) {
        player.loadVideoById({
            videoId: 'v3SaQZypZ_U', // 성공했을 때 나올 유튜브 영상 ID
            startSeconds: 70       // 시작하고 싶은 시간 (단위: 초)
        });
    }
    
    console.log("고백 성공! 노래가 70초부터 재생됩니다.");
});
