# Community-Event-website
This is a website this shows community event in bamenda
#charCount {
  display: block;
  text-align: right;
  font-size: 0.9rem;
  color: #555;
}

<p id="charCount">0/100</p>

const charCount = document.getElementById("charCount");
  nameInput.addEventListener(
    "input",
    () => (charCount.textContent = `${nameInput.value.length}/100`)
  );