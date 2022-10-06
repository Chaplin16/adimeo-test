let btn = document.querySelector('#addMoreText');
let text = document.querySelector('#block__left--text');

let toggle = false;

btn.addEventListener("click", () => {
  toggle = !toggle;

  if (toggle) {
    text.style.display = "block";
    setTimeout(() => {
      text.style.opacity = 1;
    }, 200);
  } else if (toggle === false) {
      text.style.opacity = 0;
      setTimeout(() => {
        text.style.display = "none";
      }, 200);
  }
});
