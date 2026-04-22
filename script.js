let yesBtnSize = 1.2;
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');

const messages = ["진짜루?", "다시 생각해봐..", "제발..ㅜㅜ", "정말 안돼?", "나 울 거야.."];
let msgIndex = 0;

noBtn.addEventListener('click', () => {
    // 예 버튼 커지기
    yesBtnSize += 0.5;
    yesBtn.style.fontSize = `${yesBtnSize}rem`;
    yesBtn.style.padding = `${yesBtnSize * 10}px ${yesBtnSize * 20}px`;
    
    // 아니오 버튼 문구 바꾸기
    noBtn.innerText = messages[msgIndex % messages.length];
    msgIndex++;
});

yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    successSection.classList.remove('hidden');
});
