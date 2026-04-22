let yesBtnSize = 1;
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionSection = document.getElementById('question-selection');
const successSection = document.getElementById('success-section');

// 1. 유튜브 API 로드
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: 'ZODoc2YEyro', // 처음 나올 노래 ID
        events: {
            'onReady': (event) => {
                // 화면 아무데나 누르면 첫 노래 재생
                document.body.addEventListener('click', () => {
                    event.target.playVideo();
                }, { once: true });
            }
        }
    });
}

// 2. 아니오 버튼 도망가는 기능
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 응 버튼 키우기
    yesBtnSize += 0.2;
    yesBtn.style.fontSize = `${yesBtnSize}rem`;
    yesBtn.style.padding = `${yesBtnSize * 10}px ${yesBtnSize * 20}px`;
});

// 3. 예 버튼 클릭 시 (성공)
yesBtn.addEventListener('click', () => {
    questionSection.style.display = 'none';
    successSection.style.display = 'block';
    successSection.classList.remove('hidden');

    // 성공 노래로 바꾸고 30초부터 틀기
    if (player) {
        player.loadVideoById({
            videoId: 'v3SaQZypZ_U', // 성공 노래 ID (원하는걸로 바꾸세요)
            startSeconds: 70       // 시작 시간(초)
        });
    }
});
