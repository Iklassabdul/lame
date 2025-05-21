document.addEventListener("DOMContentLoaded", function () {
  // === Welcome Screen ===
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
  const selectedWelcome = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
  welcomeMessage.textContent = selectedWelcome;
  setTimeout(() => {
    welcomeScreen.classList.add("welcome-hidden");
  }, 8000);

  // === Countdown ===
  const targetDate = new Date("2025-05-31T00:00:00+01:00").getTime();
  const countdownEl = document.getElementById("countdown");
  const birthdayMessage = document.getElementById("birthday-message");
  const audioPlayer = document.getElementById("audio-player");
  const rotatingTitle = document.getElementById("rotating-title");

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (now >= targetDate) {
      countdownEl.style.display = "none";
      rotatingTitle.textContent = "The moment is here, my love.";
      birthdayMessage.classList.remove("hidden");
      if (audioPlayer) audioPlayer.style.display = "none";
    } else {
      const d = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
      const h = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const m = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      const s = Math.max(0, Math.floor((diff % (1000 * 60)) / 1000));
      document.getElementById("days").textContent = String(d).padStart(2, "0");
      document.getElementById("hours").textContent = String(h).padStart(2, "0");
      document.getElementById("minutes").textContent = String(m).padStart(2, "0");
      document.getElementById("seconds").textContent = String(s).padStart(2, "0");
    }
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // === Rotating Title ===
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
  setInterval(() => {
    rotatingTitle.style.opacity = 0;
    setTimeout(() => {
      rotatingTitle.textContent = messages[msgIndex];
      rotatingTitle.style.opacity = 1;
      msgIndex = (msgIndex + 1) % messages.length;
    }, 300);
  }, 5000);

  // === Audio ===
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("play-button");
  const playIcon = document.getElementById("play-icon");
  const progress = document.getElementById("progress-bar");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");

  const randomLetter = "abcdefghijklmnopqrstuvwxyz".split("").sort(() => 0.5 - Math.random())[0];
  audio.src = `audio/${randomLetter}.mp3`;

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
  });

  // === Gift Unwrapping ===
  const giftHeading = document.getElementById("gift-heading");
  const giftPopup = document.getElementById("gift-popup");
  const finalGiftPopup = document.getElementById("final-gift-popup");
  const popupText = document.getElementById("popup-text");
  const now = new Date();
  const giftLines = [
    "A queen like you deserves to wait for a royal reveal. Patience, my love.",
    "Hmm… you too dey rush. Let’s unwrap it together on the 31st.",
    "Chill babygirl… we still dey cook your surprise. Come back on the 31st."
  ];
  let popupIndex = 0;

  giftHeading.addEventListener("click", () => {
    const today = new Date();
    const day = today.getDate();
    const hour = today.getHours();

    if (day === 31 && hour >= 12) {
      finalGiftPopup.classList.remove("hidden");
    } else if (day === 31 && hour < 12) {
      popupText.textContent = "Come back by 12pm to claim your gift my love.";
      giftPopup.classList.remove("hidden");
      setTimeout(() => giftPopup.classList.add("hidden"), 5000);
    } else {
      popupText.textContent = giftLines[popupIndex % giftLines.length];
      popupIndex++;
      giftPopup.classList.remove("hidden");
      setTimeout(() => giftPopup.classList.add("hidden"), 5000);
    }
  });

  document.getElementById("close-popup").addEventListener("click", () => {
    giftPopup.classList.add("hidden");
  });

  document.getElementById("close-final-popup").addEventListener("click", () => {
    finalGiftPopup.classList.add("hidden");
  });

  document.getElementById("submit-full-phrase").addEventListener("click", () => {
    const input = document.getElementById("full-phrase-input").value.trim();
    const correctPhrase = "Oluwakemi Loving You Brings Me Peace Joy Strength And Purpose";
    const error = document.getElementById("final-error-message");

    if (input === correctPhrase) {
      window.location.href = "gift.html";
    } else {
      error.textContent = "Incorrect phrase my love. Try again carefully.";
      error.classList.remove("hidden");
    }
  });

  // === Phrase Reveal Password Popup ===
  document.getElementById("submit-password").addEventListener("click", () => {
    const input = document.getElementById("password-input").value.trim();
    const phraseDates = [12, 14, 16, 17, 19, 20, 21, 23, 24, 29];
    const phrases = ["Oluwakemi", "Loving", "You", "Brings", "Me", "Peace", "Joy", "Strength", "And", "Purpose"];
    const currentDay = new Date().getDate();
    const errorMsg = document.getElementById("error-message");

    if (input === "TrustMeBabe") {
      if (phraseDates.includes(currentDay)) {
        document.getElementById("phrase-text").textContent = phrases[phraseDates.indexOf(currentDay)];
      } else {
        document.getElementById("phrase-text").textContent = "Sorry my love, no phrase today. Check back tomorrow.";
      }
      document.getElementById("password-popup").classList.add("hidden");
      document.getElementById("phrase-display").classList.remove("hidden");
    } else {
      errorMsg.textContent = "You entered the wrong password my love.";
      errorMsg.classList.remove("hidden");
    }
  });

  document.getElementById("close-password-popup").addEventListener("click", () => {
    document.getElementById("password-popup").classList.add("hidden");
  });
});
