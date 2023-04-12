const totalInput = document.getElementById("total");
const peopleCount = document.getElementById("people-count");
const buttons = document.querySelectorAll("button");
const tipOutput = document.getElementById("tip");
const totalPerPersonOutput = document.getElementById("person-total");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const percentage = parseInt(button.value);
    const total = parseInt(totalInput.value);
    const people = parseInt(peopleCount.value);
    const tip = total * (percentage / 100);
    const totalWithTip = total + tip;
    const totalPerPerson = totalWithTip / people;
    tipOutput.textContent = `$${tip.toFixed(2)}`;

    totalPerPersonOutput.textContent = `$${totalPerPerson.toFixed(2)}`;
  });
});
