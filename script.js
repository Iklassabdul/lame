document.addEventListener("DOMContentLoaded", function () {
  // ========== Welcome Screen ==========
  const welcomeMessages = [
    "System status: Waiting for Oluwakemi’s birthday...\nProgrammed with love, patience, and a little surprise.",
    "Before anything else, just know, this page is love in digital form.\nCount it down with me.",
    "Every sunrise brings us closer.\nThis countdown? It’s my silent way of saying “I’m thinking of you.”",
    "Some people write letters. I build webpages.\nAnd this one? It’s all for you.",
    "Hey beautiful,\nI didn’t just build a page... I planted a surprise that blooms on your birthday.",
    "You may not see the effort...\nBut every second behind this was for one thing. Making your birthday feel a little more special, Oluwakemi.",
    "Oluwakemi,\nThey say love is shown in little things.\nSo here’s a page, counting down to a day that means everything to me.",
    "Oluwakemi,\nI coded a surprise into the future.\nKeep checking... it’s going to be sweet.",
    "Some gifts come wrapped in ribbons,\nOthers in intention.\nThis one is wrapped in code, crafted for you, Oluwakemi.",
    "This isn’t just a countdown...\nIt’s my way of showing how much I care.\nBuilt with love just for you."
  ];

  const welcomeScreen = document.getElementById("welcome-screen");
  const welcomeMessage = document.getElementById("welcome-message");
  const selectedMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
  welcomeMessage.textContent = selectedMessage;

  setTimeout(() => {
    welcomeScreen.classList.add("welcome-hidden");
  }, 8000);

  // ========== Countdown and Birthday Logic ==========
  const rotatingTitle = document.getElementById("rotating-title");
  const countdown = document.getElementById("countdown");
  const birthdayMessage = document.getElementById("birthday-message");
  const audioPlayer = document.querySelector(".simple-audio-player");
  const giftHeading = document.getElementById("gift-heading");

  const giftPopup = document.getElementById("gift-popup");
  const popupText = document.getElementById("popup-text");
  const unlockPopup = document.getElementById("unlock-popup");
  const unlockInput = document.getElementById("unlock-input");
  const unlockBtn = document.getElementById("submit-unlock");
  const unlockError = document.getElementById("unlock-error");

  const now = new Date();
  const current = new Date(now.toLocaleString("en-US", { timeZone: "Africa/Lagos" }));
  const year = current.getFullYear();
  const birthdayStart = new Date(`${year}-05-31T00:00:00+01:00`).getTime();
  const giftTime = new Date(`${year}-05-31T09:00:00+01:00`).getTime();

  let currentIndex = 0;
  const rotatingMessages = [
    "Something beautiful is brewing for the one who makes me smile.",
    "My woman, my everything, your surprise is almost ready.",
    "You’ve been my peace… now let me return the joy.",
    "I get one small thing wey go make your heart do gbim gbim…",
    "Hey love, something special is coming…",
    "You no go expect the love wey I package for you…",
    "Something dey load wey go make you blush tire…",
    "Get ready to scream ‘awww’, it’s coming…",
    "My love, something crafted just for you is almost here…",
    "My love, May 31st go loud… just wait.",
    "This surprise na just a piece of how I feel for you.",
    "I dey express the love wey words no fit capture.",
    "What’s coming is a small version of the big love I carry for you.",
    "This one no be ordinary, na love coded in a moment."
  ];

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthdayStart - now;

    if (distance <= 0) {
      rotatingTitle.textContent = "The moment is here, my love.";
      countdown.style.display = "none";
      audioPlayer.style.display = "none";
      birthdayMessage.classList.remove("hidden");
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = d.toString().padStart(2, "0");
    document.getElementById("hours").textContent = h.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = m.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = s.toString().padStart(2, "0");
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  if (current.getTime() < birthdayStart) {
    setInterval(() => {
      rotatingTitle.style.opacity = 0;
      setTimeout(() => {
        rotatingTitle.textContent = rotatingMessages[currentIndex];
        rotatingTitle.style.opacity = 1;
        currentIndex = (currentIndex + 1) % rotatingMessages.length;
      }, 300);
    }, 5000);
  }

  // ========== Random Music Loader ==========
  const audio = document.getElementById("audio");
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
  audio.src = `audio/${randomLetter}.mp3`;

  const playBtn = document.getElementById("play-button");
  const playIcon = document.getElementById("play-icon");
  const progress = document.getElementById("progress-bar");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");

  let isPlaying = false;

  playBtn.addEventListener("click", () => {
    isPlaying ? audio.pause() : audio.play();
  });

  audio.addEventListener("play", () => {
    isPlaying = true;
    playIcon.innerHTML = "&#10074;&#10074;";
  });

  audio.addEventListener("pause", () => {
    isPlaying = false;
    playIcon.innerHTML = "&#9658;";
  });

  audio.addEventListener("timeupdate", () => {
    progress.value = audio.currentTime;
    progress.max = audio.duration;
    currentTimeEl.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
  });

  progress.addEventListener("mousedown", e => e.preventDefault());

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  }

  audio.addEventListener("ended", () => {
    isPlaying = false;
    playIcon.innerHTML = "&#9658;";
    document.getElementById("password-popup").classList.remove("hidden");
    document.getElementById("password-input").value = "";
    document.getElementById("error-message").classList.add("hidden");
  });

  // ========== Gift Header Click ==========
  const phrasePopup = document.getElementById("password-popup");

  giftHeading.addEventListener("click", () => {
    const now = new Date().getTime();
    if (now < giftTime) {
      popupText.textContent = "Come back by 9am to claim your gift my love.";
      giftPopup.classList.remove("hidden");
      setTimeout(() => giftPopup.classList.add("hidden"), 5000);
    } else {
      unlockPopup.classList.remove("hidden");
    }
  });

  document.getElementById("close-popup").addEventListener("click", () => {
    giftPopup.classList.add("hidden");
  });

  document.getElementById("close-unlock-popup").addEventListener("click", () => {
    unlockPopup.classList.add("hidden");
  });

  // ========== Phrase Unlock ==========
  const correctPhrase = "Oluwakemi loving you brings me peace joy strength and purpose";

  unlockBtn.addEventListener("click", () => {
    const input = unlockInput.value.trim().toLowerCase();
    if (input === correctPhrase.toLowerCase()) {
      window.location.href = "gift.html";
    } else {
      unlockError.textContent = "You entered the wrong phrase my love.";
      unlockError.classList.remove("hidden");
    }
  });

  // ========== Phrase Password Logic ==========
  const passwordInput = document.getElementById("password-input");
  const submitBtn = document.getElementById("submit-password");
  const errorMsg = document.getElementById("error-message");
  const phraseDisplay = document.getElementById("phrase-display");
  const phraseText = document.getElementById("phrase-text");
  const closePasswordPopup = document.getElementById("close-password-popup");

  const PASSWORD = "TrustMeBabe";
  const phraseDates = [12, 14, 16, 17, 19, 20, 21, 23, 24, 29];
  const phrases = ["Oluwakemi", "Loving", "You", "Brings", "Me", "Peace", "Joy", "Strength", "And", "Purpose"];
  const today = new Date().getDate();

  submitBtn.addEventListener("click", () => {
    const input = passwordInput.value.trim();
    if (input === PASSWORD) {
      if (phraseDates.includes(today)) {
        phraseText.textContent = phrases[phraseDates.indexOf(today)];
      } else {
        phraseText.textContent = "Sorry my love, no phrase today. Check back tomorrow.";
      }
      phrasePopup.classList.add("hidden");
      phraseDisplay.classList.remove("hidden");
    } else {
      errorMsg.textContent = "You entered the wrong password my love.";
      errorMsg.classList.remove("hidden");
    }
  });

  closePasswordPopup.addEventListener("click", () => {
    phrasePopup.classList.add("hidden");
  });
});
