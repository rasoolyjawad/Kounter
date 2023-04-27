// set initial count

let count = 0;

// select values and buttons

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".button-6");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "#ACE1AF";
    }
    if (count < 0) {
      value.style.color = "#A52A2A";
    }
    if (count === 0) {
      value.style.color = "#f4f4f4";
    }

    value.textContent = count;
  });
});
