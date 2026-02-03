const promptField = document.querySelector("#prompt");
const chips = document.querySelectorAll(".chips span");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const value = chip.textContent.trim();
    if (!promptField.value.includes(value)) {
      promptField.value = `${promptField.value.trim()} ${value}`.trim();
    }
    promptField.focus();
  });
});
