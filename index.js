(function () {
  var hour = document.querySelector(".hour");
  var min = document.querySelector(".minute");
  var sec = document.querySelector(".sec");
  var startBtn = document.querySelector(".start");
  var pauseBtn = document.querySelector(".pause");
  var resetBtn = document.querySelector(".reset");

  var countdownTimer = null;

  // Start Timer Button - START
  startBtn.addEventListener("click", function () {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) return;

    function startInterval() {
      startBtn.style.display = "none";
      pauseBtn.style.display = "initial";

      countdownTimer = setInterval(function () {
        timer();
      }, 1000);
    }
    startInterval();
  });
  // Start Timer Button - END

  function timer() {
    // Formatting the time - START
    if (sec.value > 60) {
      min.value++;
      sec.value = parseInt(sec.value) - 59;
    }
    if (min.value > 60) {
      hour.value++;
      min.value = parseInt(min.value) - 60;
    }
    min.value = min.value > 60 ? 60 : min.value;
    // Formatting the time - END

    // Updating the Time - START
    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      hour.value = "";
      min.value = "";
      sec.value = "";
      pauseInterval();
    } else if (sec.value != 0) {
      sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
    } else if (min.value != 0 && sec.value == 0) {
      sec.value = 59;
      min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
    } else if (hour.value != 0 && min.value == 0) {
      min.value = 60;
      hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
    }
    return;
    // Updating the Time - END
  }

  // pause Interval Logic - START
  function pauseInterval(state) {
    startBtn.innerHTML = state === "pause" ? "Continue" : "Start";

    pauseBtn.style.display = "none";
    startBtn.style.display = "initial";
    clearInterval(countdownTimer);
  }
  // pause Interval Logic - END

  // pause Timer Button - START
  pauseBtn.addEventListener("click", function () {
    pauseInterval("pause");
  });
  // Start Timer Button - END

  // Reset Timer Button - START
  resetBtn.addEventListener("click", function () {
    hour.value = "";
    min.value = "";
    sec.value = "";

    pauseInterval();
  });
  // Reset Timer Button - END
})();