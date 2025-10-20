const startBtn = document.getElementById('Start');
const page1 = document.getElementById('Page1');
const gameArea = document.getElementById('gameArea');
const colorBox = document.getElementById('colorBox');
const answerInput = document.getElementById('answer');
const resultText = document.getElementById('result');
const colorS = document.getElementById('colors');
const Btn = document.getElementById('btn');
const submitGuess = document.getElementById('submitGuess');

submitGuess.style.cssText = "top: 20px; font-size: 24px; background-color: #0051ffff; border-radius:40px; width:45%; margin:8%;  ";

answerInput.style= "padding : 20px; font-size: 24px; border-radius:40px";

resultText.style="color:green; font-size:24px;";

const colors = ['red', 'orange', 'yellow', 'green', 'pink', 'purple', 'black', 'white', 'brown', 'bluee'];
let Index = 0;

// When Start Button is clicked
startBtn.addEventListener('click', function() {
  page1.style.display = 'none';
  colorS.style.display = 'none';
  Btn.style.display = 'none';
  gameArea.style.display = 'block';
  showColor();
});

// Show current color in the color box
function showColor() {
  const color = colors[Index];
  colorBox.style.backgroundColor = color
  answerInput.value = '';
  resultText.textContent = '';
}

const sleep = ms => new Promise(res => setTimeout(res, ms));

submitGuess.addEventListener('click', async function() {
  const userGuess = answerInput.value.trim().toLowerCase();
  const currentcolor = colors[Index];

  if (userGuess === currentcolor) {
   resultText.textContent = 'Correct!';
   await sleep(1000);
   Index++;
    if (Index < colors.length) {
      showColor();
    } else {
      resultText.textContent = 'You guessed all colors! Great job!';
      answerInput.disabled = true;
      submitGuess.disabled = true;
      colorBox.style.backgroundColor = 'transparent';
    }
    
  } else {
    resultText.textContent = 'Try again!';
  }
});


document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('mouseenter', () => {
    const color = box.textContent.trim().toLowerCase();
    const audio = document.getElementById(color + 'Audio');
    if (audio) {
      audio.currentTime = 0; // restart from beginning each time
      audio.play();
    }
  });

  // Optional: stop audio when the mouse leaves
  box.addEventListener('mouseleave', () => {
    const color = box.textContent.trim().toLowerCase();
    const audio = document.getElementById(color + 'Audio');
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
});

