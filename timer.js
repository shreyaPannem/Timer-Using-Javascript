let input = document.getElementById("getNumber");
let box = document.getElementById("box");
let Start = document.querySelector("#Start");
let Pause = document.querySelector("#Pause");
let Reset = document.querySelector("#Reset");
let Progress = document.querySelector("#Progress");
let intervalId;
let totalTime;
function reduceTime() {
  let currentTime = parseInt(box.innerHTML, 10);
  if (!isNaN(currentTime) && currentTime > 0) {
    box.innerHTML = currentTime - 1;
    let progressPercent = ((totalTime - currentTime + 1) / totalTime) * 100;
    Progress.value = progressPercent;
  } else {
    Progress.value = 0;
    clearInterval(intervalId);
  }
}

Start.addEventListener("click", () => {
  let time = parseInt(input.value, 10);
  // console.log(typeof time);
  if (time <= 0 || isNaN(time)) {
    alert("Please enter a valid number");
    return;
  } else {
    totalTime = time * 60;
    box.innerHTML = time * 60;
    Progress.value = 0;
    clearInterval(intervalId);
    intervalId = setInterval(reduceTime, 1000);
  }
});
Pause.addEventListener("click", () => {
  clearInterval(intervalId);
});

Reset.addEventListener("click", () => {
  clearInterval(intervalId);
  box.innerHTML = 0;
  input.value = "";
  Progress.value = 0;
});
