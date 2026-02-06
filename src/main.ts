import "./style.css";

const textbox = document.getElementById("textbox") as HTMLTextAreaElement;

textbox.value = localStorage.getItem("key") ?? "";

textbox.addEventListener("keydown", (event) => {
  if (event.key == "Tab") {
    event.preventDefault();
    const start = textbox.selectionStart;
    const end = textbox.selectionEnd;

    // set textarea value to: text before caret + tab + text after caret
    textbox.value =
      textbox.value.substring(0, start) + "\t" + textbox.value.substring(end);

    // put caret at right position again
    textbox.selectionStart = textbox.selectionEnd = start + 1;
  }
});

textbox.addEventListener("input", () => {
  localStorage.setItem("key", textbox.value);
  textbox.style.height = "auto";
});
