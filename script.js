let yesBtnSize = 1;
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionSection = document.getElementById('question-selection');
const successSection = document.getElementById('success-section');
const bgm = document.getElementById('bgm');

// 1. 첫 클릭 시 음악 재생 시작 (브라우저 정책)
document.body.addEventListener('click', () => {
    bgm.play().catch(e => console.log("음악 재생 시작"));
}, { once: true });

// 2. 아니오 버튼 도망가는 기능
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 예 버튼 키우기
    yesBtnSize += 0.3;
    yesBtn.style.fontSize = `${yesBtnSize}rem`;
    yesBtn.style.padding = `${yesBtnSize * 10}px ${yesBtnSize * 20}px`;
});

// 3. 예 버튼 클릭 시 (성공)
yesBtn.addEventListener('click', () => {
    // 화면 전환
    questionSection.style.display = 'none';
    successSection.style.display = 'block';
    successSection.classList.remove('hidden');

    // 노래 교체 (after.mp3)
    bgm.src = "after.mp3";
    bgm.currentTime = 10; // 만약 10초부터 틀고 싶다면 수정 (0으로 두면 처음부터)
    bgm.play();
});
