document.addEventListener("DOMContentLoaded", function () {
  // ========== Welcome Screen ==========
  const welcomeScreen = document.getElementById("welcome-screen");
  const welcomeMessage = document.getElementById("welcome-message");
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
  const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
  welcomeMessage.textContent = randomMessage;

  setTimeout(() => {
    welcomeScreen.classList.add("welcome-hidden");
  }, 8000);

  // ========== Countdown Logic ==========
  const countdownEl = document.getElementById("countdown");
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const rotatingTitle = document.getElementById("rotating-title");
  const giftHeading = document.getElementById("gift-heading");
  const audioSection = document.querySelector(".simple-audio-player");
  const birthdayMsgSection = document.getElementById("birthday-message");

  const birthday = new Date("2025-05-31T00:00:00+01:00");
  const giftUnlock = new Date("2025-05-31T09:00:00+01:00");

  const birthdayMessage = `
    <p><strong>Happy Birthday, Oluwakemi.</strong></p>
    <p>From the moment Allah destined our paths to cross, I knew you were special. Today, I raise my hands in du’a that Allah (SWT) showers you with joy, barakah, and endless serenity.</p>
    <p>You are not just my peace, you are my purpose. I pray you're always surrounded by people who uplift your soul and remind you of your worth.</p>
    <p>May He ease your worries, fill your heart with sakinah, and write beautiful stories for you this new year.</p>
    <p>I love you more than words can hold. More than code can express. More than promises can declare.</p>
    <p>With you, I've learned patience, gratitude, and what it truly means to care deeply.</p>
    <p>Never doubt how much I believe in you. You’re destined for greatness.</p>
    <p><strong>Barakallahu fii umrik, my love.</strong><br>May this year be your softest, strongest, and most beautiful yet.</p>
  `;

  function updateCountdown() {
    const now = new Date();
    const distance = birthday - now;

    if (now >= birthday) {
      countdownEl.style.display = "none";
      rotatingTitle.textContent = "The moment is here, my love.";
      birthdayMsgSection.innerHTML = birthdayMessage;
      birthdayMsgSection.classList.remove("hidden");
      audioSection.classList.add("hidden");
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysEl.textContent = String(days).padStart(2, "0");
      hoursEl.textContent = String(hours).padStart(2, "0");
      minutesEl.textContent = String(minutes).padStart(2, "0");
      secondsEl.textContent = String(seconds).padStart(2, "0");
    }
  }

  setInterval(updateCountdown, 1000);

  // ========== Rotating Titles ==========
  const titles = [
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

  let titleIndex = 0;
  setInterval(() => {
    if (new Date() < birthday) {
      rotatingTitle.style.opacity = 0;
      setTimeout(() => {
        rotatingTitle.textContent = titles[titleIndex];
        rotatingTitle.style.opacity = 1;
        titleIndex = (titleIndex + 1) % titles.length;
      }, 300);
    }
  }, 5000);

  // ========== Music Player ==========
  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("play-button");
  const playIcon = document.getElementById("play-icon");
  const progress = document.getElementById("progress-bar");
  const currentTimeEl = document.getElementById("current-time");
  const durationEl = document.getElementById("duration");

  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const randomLetter = letters[Math.floor(Math.random() * letters.length)];
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

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  }

  progress.addEventListener("mousedown", e => e.preventDefault());

  // ========== Gift Message Logic ==========
  const giftPopup = document.getElementById("gift-popup");
  const popupText = document.getElementById("popup-text");
  const now = new Date();

  giftHeading.addEventListener("click", () => {
    const now = new Date();
    if (now < giftUnlock) {
      popupText.textContent = "Come back by 9am to claim your gift my love.";
    } else {
      document.getElementById("phrase-unlock-popup").classList.remove("hidden");
    }
    giftPopup.classList.remove("hidden");
    setTimeout(() => giftPopup.classList.add("hidden"), 5000);
  });

  document.getElementById("close-popup").onclick = () => {
    giftPopup.classList.add("hidden");
  };

  // ========== Phrase Unlock ==========
  const correctPhrase = "Oluwakemi loving you brings me peace joy strength and purpose";
  const phraseInput = document.getElementById("phrase-input");
  const phraseSubmit = document.getElementById("submit-phrase");
  const phraseError = document.getElementById("phrase-error");

  phraseSubmit.addEventListener("click", () => {
    const userPhrase = phraseInput.value.trim();
    if (userPhrase.toLowerCase() === correctPhrase.toLowerCase()) {
      window.location.href = "gift.html";
    } else {
      phraseError.textContent = "That’s not the full phrase my love. Try again.";
    }
  });

  document.getElementById("close-phrase-popup").onclick = () => {
    document.getElementById("phrase-unlock-popup").classList.add("hidden");
  };

  // ========== Password Phrase Popup (after audio) ==========
  const PASSWORD = "TrustMeBabe";
  const phraseDates = [12, 14, 16, 17, 19, 20, 21, 23, 24, 29];
  const phrases = ["Oluwakemi", "Loving", "You", "Brings", "Me", "Peace", "Joy", "Strength", "And", "Purpose"];
  const currentDay = new Date().getDate();

  const passwordPopup = document.getElementById("password-popup");
  const passwordInput = document.getElementById("password-input");
  const submitBtn = document.getElementById("submit-password");
  const errorMsg = document.getElementById("error-message");
  const phraseText = document.getElementById("phrase-text");
  const phraseDisplay = document.getElementById("phrase-display");

  audio.addEventListener("ended", () => {
    isPlaying = false;
    playIcon.innerHTML = "&#9658;";
    passwordPopup.classList.remove("hidden");
    passwordInput.value = "";
    errorMsg.classList.add("hidden");
  });

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

  document.getElementById("close-password-popup").onclick = () => {
    passwordPopup.classList.add("hidden");
  };
});
