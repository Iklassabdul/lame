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
  const randomMsg = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
  if (welcomeScreen) {
    welcomeMessage.textContent = randomMsg;
    setTimeout(() => {
      welcomeScreen.style.opacity = 0;
      setTimeout(() => {
        welcomeScreen.style.display = "none";
      }, 500);
    }, 8000);
  }

  // ========== Core Elements ==========
  const now = new Date();
  const isMay31 = now.getMonth() === 4 && now.getDate() === 31;
  const currentHour = now.getHours();

  const countdown = document.getElementById("countdown");
  const rotatingTitle = document.getElementById("rotating-title");
  const birthdayMessage = document.getElementById("birthday-message");
  const audioPlayer = document.querySelector(".simple-audio-player");

  // ========== Show Birthday Wishes ==========
  if (isMay31 && currentHour >= 0) {
    if (countdown) countdown.classList.add("hidden");
    if (rotatingTitle) rotatingTitle.textContent = "The moment is here, my love.";
    if (birthdayMessage) birthdayMessage.classList.remove("hidden");
    if (audioPlayer) audioPlayer.classList.add("hidden");
  }

  // ========== Countdown Timer ==========
  const targetDate = new Date("2025-05-31T00:00:00+01:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;
    const d = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
    const h = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const m = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
    const s = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));
    if (!isMay31) {
      document.getElementById("days").textContent = String(d).padStart(2, "0");
      document.getElementById("hours").textContent = String(h).padStart(2, "0");
      document.getElementById("minutes").textContent = String(m).padStart(2, "0");
      document.getElementById("seconds").textContent = String(s).padStart(2, "0");
    }
  }, 1000);

  // ========== Rotating Titles ==========
  const messages = [
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
  let msgIndex = 0;
  if (!isMay31) {
    setInterval(() => {
      rotatingTitle.style.opacity = 0;
      setTimeout(() => {
        rotatingTitle.textContent = messages[msgIndex];
        rotatingTitle.style.opacity = 1;
        msgIndex = (msgIndex + 1) % messages.length;
      }, 300);
    }, 5000);
  }

  // ========== Random Music on Every Load ==========
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("play-button");
  const playIcon = document.getElementById("play-icon");
  const progress = document.getElementById("progress-bar");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");

  if (!isMay31) {
    const letters = "abcdefghijklmnopqrstuvwxyz".split("");
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    audio.src = `audio/${randomLetter}.mp3`;
  }

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

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  }

  progress.addEventListener("mousedown", e => e.preventDefault());

  // ========== Unlock Gift on May 31 at 9AM ==========
  const giftHeading = document.getElementById("gift-heading");
  const giftPopup = document.getElementById("gift-unlock-popup");
  const unlockBtn = document.getElementById("unlock-gift");
  const giftInput = document.getElementById("gift-phrase-input");
  const giftError = document.getElementById("gift-error-message");
  const closeGiftPopup = document.getElementById("close-gift-unlock-popup");

  const correctPhrase = "oluwakemi loving you brings me peace joy strength and purpose";

  giftHeading.addEventListener("click", () => {
    if (isMay31 && currentHour >= 9) {
      giftPopup.classList.remove("hidden");
      giftInput.value = "";
      giftError.classList.add("hidden");
    } else if (isMay31) {
      const giftPopupText = document.getElementById("popup-text");
      giftPopupText.textContent = "Come back by 9am to claim your gift my love.";
      document.getElementById("gift-popup").classList.remove("hidden");
      setTimeout(() => document.getElementById("gift-popup").classList.add("hidden"), 5000);
    } else {
      const giftLines = [
        "A queen like you deserves to wait for a royal reveal. Patience, my love.",
        "Hmm… you too dey rush. Let’s unwrap it together on the 31st.",
        "Chill babygirl… we still dey cook your surprise. Come back on the 31st."
      ];
      const giftPopupText = document.getElementById("popup-text");
      giftPopupText.textContent = giftLines[Math.floor(Math.random() * giftLines.length)];
      document.getElementById("gift-popup").classList.remove("hidden");
      setTimeout(() => document.getElementById("gift-popup").classList.add("hidden"), 5000);
    }
  });

  unlockBtn.addEventListener("click", () => {
    const input = giftInput.value.trim().toLowerCase();
    if (input === correctPhrase) {
      window.location.href = "gift.html";
    } else {
      giftError.textContent = "You entered the wrong phrase, my love.";
      giftError.classList.remove("hidden");
    }
  });

  closeGiftPopup.addEventListener("click", () => {
    giftPopup.classList.add("hidden");
  });

  document.getElementById("close-popup").addEventListener("click", () => {
    document.getElementById("gift-popup").classList.add("hidden");
  });

  // ========== Password Phrase Unlock ==========
  const passwordPopup = document.getElementById("password-popup");
  const passwordInput = document.getElementById("password-input");
  const submitBtn = document.getElementById("submit-password");
  const errorMsg = document.getElementById("error-message");
  const closePasswordPopup = document.getElementById("close-password-popup");

  const phraseDisplay = document.getElementById("phrase-display");
  const phraseText = document.getElementById("phrase-text");

  const PASSWORD = "TrustMeBabe";
  const phraseDates = [12, 14, 16, 17, 19, 20, 21, 23, 24, 29];
  const phrases = ["Oluwakemi", "Loving", "You", "Brings", "Me", "Peace", "Joy", "Strength", "And", "Purpose"];
  const currentDay = new Date().getDate();

  submitBtn.addEventListener("click", () => {
    const input = passwordInput.value.trim();
    if (input === PASSWORD) {
      if (phraseDates.includes(currentDay)) {
        phraseText.textContent = phrases[phraseDates.indexOf(currentDay)];
      } else {
        phraseText.textContent = "Sorry my love, no phrase today. Check back tomorrow.";
      }
      passwordPopup.classList.add("hidden");
      phraseDisplay.classList.remove("hidden");
    } else {
      errorMsg.textContent = "You entered the wrong password my love.";
      errorMsg.classList.remove("hidden");
    }
  });

  closePasswordPopup.addEventListener("click", () => {
    passwordPopup.classList.add("hidden");
  });
});
