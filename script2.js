// const spanEl = document.querySelector("header span");
// const handelSpanEl = (event) => {
//   alert("JS DOM -Anbu");
// };

// spanEl.addEventListener("click", handelSpanEl, { once: true });

const formEl = document.querySelector("form");
const DivEl = document.querySelector("form div");
const pEl = document.querySelector("form p");

formEl.addEventListener("click", (event) => {
  alert("Form");
  console.log(formEl);
  //   console.log(`Target : ${event.target.tagName} , This : ${formEl.tagName}`);
});

DivEl.addEventListener("click", (event) => {
  alert("Div");
  console.log(DivEl);

  //Stop Event UpTo This Elements:
  //Lower Element Only Not Execute ,Another sibling Elements are Execute:
  //event.stopPropagation();

  //It can stop UpTo Current Elements:
  //   event.stopImmediatePropagation();
});

pEl.addEventListener("click", () => {
  alert("Para");
  console.log(pEl);
});

// DivEl.addEventListener("click", (event) => {
//   alert("Another Div");
//   console.log(DivEl);
// });

// Capturing Elements:
formEl.addEventListener("click", (event) => {}, { capture: true });

for (let elements of document.querySelectorAll("form,form *")) {
  console.log(elements);

  // Capturing Phase:
  elements.addEventListener(
    "click",
    () => {
      console.log(`Capturing Phase : ${elements.tagName}`);
    },
    true
  );

  // Bubbling Phase:
  elements.addEventListener(
    "click",
    () => {
      console.log(`Bubbling Phase : ${elements.tagName}`);
    },
    false
  );
}
