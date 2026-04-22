const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionSection = document.getElementById('question-selection'); // HTML의 id와 일치시킴
const successSection = document.getElementById('success-section');

let yesBtnSize = 1;

noBtn.addEventListener('click', () => {
    yesBtnSize += 0.5;
    yesBtn.style.fontSize = `${yesBtnSize}rem`;
    yesBtn.style.padding = `${yesBtnSize * 10}px ${yesBtnSize * 20}px`;
    
    const messages = ["정말?", "한 번 더 생각해봐..", "제발!", "나 울 거야.."];
    noBtn.innerText = messages[Math.floor(Math.random() * messages.length)];
});

yesBtn.addEventListener('click', () => {
    // 1. 질문 섹션 숨기기
    questionSection.style.display = 'none';
    
    // 2. 성공 섹션 보이기
    successSection.classList.remove('hidden');
    successSection.style.display = 'block';
});
