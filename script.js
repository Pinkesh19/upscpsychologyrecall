// Sample function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let shuffledTerms = [];
let currentWordIndex = 0;
let wordLimit = 0;
let totalSeconds = 0,
  wordSeconds = 0,
  countdownSeconds = 0;
let totalTimerInterval, wordTimerInterval, countdownInterval;
let answers = [];
let lockedAnswers = [];

// DOM elements
const testSetup = document.getElementById("testSetup");
const testArea = document.getElementById("testArea");
const currentWordElement = document.getElementById("currentWord");
const answerInput = document.getElementById("answerInput");
const wordTimer = document.getElementById("wordTimer");
const submitTestButton = document.getElementById("submitTest");
const resultList = document.getElementById("resultList");
const testResult = document.getElementById("testResult");
const nameInput = document.getElementById("nameInput");
const testCountdown = document.getElementById("testCountdown");
const userNameElement = document.getElementById("userName");
const testDateTimeElement = document.getElementById("testDateTime");

document.addEventListener("DOMContentLoaded", () => {
  toggleTestMode(); // Initialize with the default selection
});

// Function to toggle between "Select Chapters", "Enter Custom Words", and "Psychology PYQs"
function toggleTestMode() {
  const testMode = document.querySelector(
    'input[name="testMode"]:checked'
  ).value;
  const chapterSection = document.getElementById("chapterSection");
  const customSection = document.getElementById("customSection");
  const pyqSection = document.getElementById("pyqSection");

  // Hide all sections initially
  chapterSection.classList.add("hidden");
  customSection.classList.add("hidden");
  pyqSection.classList.add("hidden");

  // Show only the section corresponding to the selected mode
  if (testMode === "chapters") {
    chapterSection.classList.remove("hidden"); // Show Chapter selection
  } else if (testMode === "custom") {
    customSection.classList.remove("hidden"); // Show Custom Words input
  } else if (testMode === "pyqs") {
    pyqSection.classList.remove("hidden"); // Show Psychology PYQs
  }
}

// Function to toggle the visibility of "Word Time"
function toggleWordTime() {
  const wordTimeElement = document.getElementById("wordTimer");
  const isHidden = document.getElementById("wordTimeToggle").checked;

  if (isHidden) {
    wordTimeElement.classList.add("hidden");
  } else {
    wordTimeElement.classList.remove("hidden");
  }
}

// Function to toggle the visibility of "Test Duration"
function toggleTestDuration() {
  const testCountdownElement = document.getElementById("testCountdown");
  const isHidden = document.getElementById("testDurationToggle").checked;

  if (isHidden) {
    testCountdownElement.classList.add("hidden");
  } else {
    testCountdownElement.classList.remove("hidden");
  }
}

let userName = ""; // To store the user's name
let testStartTime = ""; // To store the test start date and time
let totalTestDuration = ""; // To store the total test duration

let testStartTimeInMillis;
let testEndTimeInMillis;

// Modify startTest function to capture the start time in milliseconds
function startTest() {
  userName = document.getElementById('nameInput').value;
  testStartTime = new Date();
  testStartTimeInMillis = Date.now();

  const formattedDate = testStartTime.toLocaleDateString();
  let formattedTime = testStartTime.toLocaleTimeString();
  formattedTime = formattedTime.replace('am', 'AM').replace('pm', 'PM');

  testStartTime = `${formattedDate} - ${formattedTime}`;
  const testHours = parseInt(document.getElementById('testHours').value) || 0;
  const testMinutes = parseInt(document.getElementById('testMinutes').value) || 10;
  totalTestDuration = `${testHours} H : ${testMinutes} M`;

  const wordLimit = parseInt(document.getElementById('wordLimit').value);

  if (!userName) {
    alert('Please enter your name.');
    return;
  }
  if (!wordLimit || wordLimit < 1) {
    alert('Please enter a valid number of words.');
    return;
  }

  const selectedTestMode = document.querySelector('input[name="testMode"]:checked').value;

  if (selectedTestMode === 'chapters') {
    const selectedChapter = document.getElementById('chapterSelect').value;
    if (!selectedChapter) {
      alert('Please select a chapter to test.');
      return;
    }

    if (psychologyTerms[selectedChapter]) {
      shuffledTerms = shuffleArray(psychologyTerms[selectedChapter]);
      shuffledTerms = shuffledTerms.slice(0, wordLimit);
    } else {
      alert('No terms available for the selected chapter.');
      return;
    }
  } else if (selectedTestMode === 'custom') {
    const customWords = document.getElementById('customWordsInput').value;
    
    // Updated logic to handle words correctly
    const parsedCustomWords = parseCustomWords(customWords);

    if (parsedCustomWords.length === 0) {
      alert('Please enter at least one custom word.');
      return;
    }

    shuffledTerms = shuffleArray(parsedCustomWords);
    shuffledTerms = shuffledTerms.slice(0, wordLimit);
  } else if (selectedTestMode === 'pyqs') {
    shuffledPYQs = loadPYQs();
    if (shuffledPYQs) {
      shuffledTerms = shuffledPYQs;
      shuffledTerms = shuffledTerms.slice(0, wordLimit);
    } else {
      return;
    }
  }

  testSetup.classList.add('hidden');
  testArea.classList.remove('hidden');
  startCountdownTimer();
  currentWordIndex = 0;
  displayCurrentWord();
}

// Function to parse custom words considering both comma-separated and quoted words
function parseCustomWords(input) {
  const words = [];
  const regex = /"([^"]+)"|([^,]+)/g; // Regex to match quoted text or comma-separated words
  let match;

  while ((match = regex.exec(input)) !== null) {
    if (match[1]) {
      // If the word is inside quotes, push it as a single "word"
      words.push(match[1].trim());
    } else if (match[2]) {
      // Otherwise, treat the comma-separated word
      words.push(match[2].trim());
    }
  }

  return words;
}

// Capture the end time when "Submit Test" is clicked and calculate elapsed time
document.getElementById("submitTest").addEventListener("click", () => {
  stopWordTimer(); // Stop the timer
  clearInterval(totalTimerInterval); // Stop the total test timer
  clearInterval(countdownInterval); // Stop the countdown timer
  saveAnswer(); // Save the final answer

  // Capture the end time in milliseconds
  testEndTimeInMillis = Date.now();

  // Display the test results, including both the total test duration and time taken
  displayResults();
});

// Function to calculate and format the total elapsed time (from start to submit)
function calculateElapsedTime() {
  const elapsedMillis = testEndTimeInMillis - testStartTimeInMillis;
  const elapsedSeconds = Math.floor(elapsedMillis / 1000);
  const h = String(Math.floor(elapsedSeconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((elapsedSeconds % 3600) / 60)).padStart(2, "0");
  const s = String(elapsedSeconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

// Function to shuffle the array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to display the current word/question
function displayCurrentWord() {
  // Ensure the shuffled terms array is not empty
  if (shuffledTerms.length === 0) {
    console.error("No terms available for the test.");
    return;
  }

  // Display the current word with sequential numbering based on the index
  currentWordElement.textContent = `${currentWordIndex + 1}. ${
    shuffledTerms[currentWordIndex]
  }`;

  // Reset the answer input for the current word/question
  answerInput.value = answers[currentWordIndex]?.answer || "";
  answerInput.focus();

  // Start the timer for the current word/question
  startWordTimer();

  // Check if this is the last word in the test
  if (currentWordIndex === shuffledTerms.length - 1) {
    // If we are on the last word, hide the "Next" button and show the "Submit" button
    document.getElementById("nextButton").classList.add("hidden");
    document.getElementById("submitTest").classList.remove("hidden");
  } else {
    // If we are not on the last word, show the "Next" button and hide the "Submit" button
    document.getElementById("nextButton").classList.remove("hidden");
    document.getElementById("submitTest").classList.add("hidden");
  }
}

// Handle the Next button click event
document.getElementById("nextButton").addEventListener("click", () => {
  stopWordTimer(); // Stop the timer for the current word
  saveAnswer(); // Save the user's answer for the current word

  // Increment the currentWordIndex by 1
  if (currentWordIndex < shuffledTerms.length - 1) {
    currentWordIndex++; // Increment the current word index sequentially
    displayCurrentWord(); // Display the next word with incremented number
  }
});

// Handle the Submit button click event
document.getElementById("submitTest").addEventListener("click", () => {
  stopWordTimer(); // Stop the timer
  clearInterval(totalTimerInterval); // Stop the total test timer
  clearInterval(countdownInterval); // Stop the countdown timer
  saveAnswer(); // Save the final answer
  displayResults(); // Display the test results
});

function startTotalTimer() {
  totalTimerInterval = setInterval(() => {
    totalSeconds++;
  }, 1000);
}

function startWordTimer() {
  wordSeconds = 0;
  wordTimerInterval = setInterval(() => {
    wordSeconds++;
    wordTimer.textContent = `Word Time: ${formatTime(wordSeconds)}`;
  }, 1000);
}

function stopWordTimer() {
  clearInterval(wordTimerInterval);
}

function formatTime(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

// Function to load PYQs based on year and paper selection
function loadPYQs() {
  const year = document.getElementById("pyqYearSelect").value;
  const paper = document.getElementById("paperSelect").value;

  // Ensure both year and paper are selected
  if (!year || !paper) {
    console.error("Please select both a year and a paper");
    return null; // Prevent further execution
  }

  if (psychologyPYQData[year] && psychologyPYQData[year][paper]) {
    const shuffledPYQs = shuffleArray(psychologyPYQData[year][paper]);
    return shuffledPYQs;
  } else {
    console.error("Invalid selection for year or paper");
    return null;
  }
}

function saveAnswer() {
  if (!lockedAnswers[currentWordIndex]) {
    const answerText = answerInput.value.trim(); // Get the answer text and trim extra spaces
    const wordCount = answerText ? answerText.split(/\s+/).length : 0; // Count words by splitting on spaces

    answers[currentWordIndex] = {
      word: shuffledTerms[currentWordIndex],
      answer: answerText,
      wordCount: wordCount, // Store the word count
      timeTaken: formatTime(wordSeconds),
    };
  }
}

function scrollTextarea(amount) {
  const textarea = document.querySelector(".custom-scroll");
  textarea.scrollTop += amount;
}

function displayResults() {
  testArea.classList.add("hidden");
  submitTestButton.classList.add("hidden");
  testResult.classList.remove("hidden");

  // Display the user's name, test start time, and total test duration
  document.getElementById("userName").textContent = userName;
  document.getElementById("testDateTime").textContent = testStartTime;

  // Format the total test duration like elapsed time
  const testDurationInSeconds =
    (parseInt(document.getElementById("testHours").value) || 0) * 3600 +
    (parseInt(document.getElementById("testMinutes").value) || 10) * 60;
  const formattedTestDuration = formatTime(testDurationInSeconds);

  // Display the test duration (formatted)
  document.getElementById(
    "testDuration"
  ).textContent = `Total Time Allocated: ${formattedTestDuration}`;

  // Calculate and display the actual time taken from start to submit
  const elapsedTime = calculateElapsedTime();
  document.getElementById(
    "testDuration"
  ).innerHTML += `<br>Total Time Taken: ${elapsedTime}`;

  // Display the test results with word count and format the answer text properly
  resultList.innerHTML = answers
  .map(
    (answer, i) => `
  <li>
      <strong>${i + 1}. ${answer.word}</strong><br>
      Answer:<pre style="word-wrap: break-word; white-space: pre-wrap;">${
        answer.answer
      }</pre><br> <!-- Used <pre> to preserve formatting -->
      <strong>Word Count:</strong> ${answer.wordCount} words<br>
      Time Taken: ${answer.timeTaken}
  </li>
  `
  )
  .join("");


  // Apply toggle state (if hiding options were selected)
  toggleWordTime();
  toggleTestDuration();
}

function startCountdownTimer() {
  const hours = parseInt(document.getElementById("testHours").value) || 0; // Default 0 hours
  const minutes = parseInt(document.getElementById("testMinutes").value) || 10; // Default 10 minutes

  // Calculate the total duration in seconds
  let countdownSeconds = hours * 3600 + minutes * 60;

  // Update the countdown timer UI
  testCountdown.textContent = `Time Left: ${formatTime(countdownSeconds)}`;

  // Start the countdown interval
  countdownInterval = setInterval(() => {
    countdownSeconds--;

    // Update the countdown timer on the UI every second
    testCountdown.textContent = `Time Left: ${formatTime(countdownSeconds)}`;

    // If the countdown reaches 0, auto-submit the test
    if (countdownSeconds <= 0) {
      clearInterval(countdownInterval);
      autoSubmitTest(); // Automatically submit the test when time is up
    }
  }, 1000);
}

function autoSubmitTest() {
  alert("Time is up! Your test will be auto-submitted.");
  stopWordTimer();
  clearInterval(totalTimerInterval);
  saveAnswer();
  displayResults();
}

// Print/Download functionality
document.getElementById("printBtn").addEventListener("click", () => {
  window.print();
});
