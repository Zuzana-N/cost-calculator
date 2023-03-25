const numTrans = document.getElementById("num-transaction");
const avgTrans = document.getElementById("avg-transaction");
const calcBtn = document.getElementById("calculate");
const addNewBtn = document.getElementById("add-new");

const table = document.querySelector(".output-table");
const lines = [...table.querySelectorAll(".line")];
const error = document.querySelector(".error");
const valInputs = [...document.querySelectorAll(".validate")];

valInputs.forEach(function(valInput) {
  valInput.addEventListener("input", function(event) {
    const value = event.target.value;
    const newValue = value.replace(",", ".");
    if (!isNaN(newValue)) {
      valInput.value = newValue;
    }
  });
});

function getTotal() {
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const percFee = line.querySelector(".perc-fee");
        const fixedFee = line.querySelector(".fixed-fee");
        const mnthFee = line.querySelector(".mnth-fee");
        const total = line.querySelector(".total");
        totalValue = ((numTrans.value/avgTrans.value) * fixedFee.value) + (numTrans.value * (percFee.value / 100)) + (mnthFee.value * 1);
        if (isNaN(totalValue) || totalValue == Infinity || totalValue === 0) {
            total.innerText = "";
        } else {
        total.innerText = Math.round(totalValue * 1000) / 1000 + " Kč";
        }
    }
}

addNewBtn.addEventListener("click", function addNew() {
    const newLine = document.createElement("div");
    newLine.className += "line";
    newLine.innerHTML = `
    <div class="form-field">
        <label for="fld-provider" class="no-show">Poskytovatel</label>
        <input class="input" placeholder="Nepovinné">
    </div>
    <div class="form-field">
        <label for="perc-fee" class="no-show">% poplatek z transakce</label>
        <input type="text" pattern="^[0-9]*([,.][0-9]+)?$" class="validate input perc-fee" step="0.00000001" inputmode="decimal" placeholder="Vložte jen číslo, př. 0.5" oninput="getTotal()">
    </div>
    <div class="form-field">
        <label for="fixed-fee" class="no-show">Fixní poplatek z transakce</label>
        <input type="text" pattern="^[0-9]*([,.][0-9]+)?$" class="validate input fixed-fee" step="0.00000001" inputmode="decimal" placeholder="Vložte jen číslo, př. 2,1" oninput="getTotal()">
    </div>
    <div class="form-field">
        <label for="mnth-fee" class="no-show">Fixní měsíční poplatek</label>
        <input type="text" pattern="^[0-9]*([,.][0-9]+)?$" class="validate input mnth-fee" step="0.00000001" inputmode="decimal" placeholder="Vložte jen číslo, př. 99" oninput="getTotal()">
    </div>
    <div class="form-field-end fw-bold">
        <label for="total" class="no-show">CELKEM MĚSÍČNĚ</label>
        <div id="total" class="total"></div>
    </div>`;
    document.querySelector(".output-table").append(newLine);
    lines.push(newLine);
    const newInputs = [...newLine.querySelectorAll(".validate")];
    newInputs.forEach(function(newInput) {
        newInput.addEventListener("input", function(event) {
          const value = event.target.value;
          const newValue = value.replace(",", ".");
          if (!isNaN(newValue)) {
            newInput.value = newValue;
          }
        });
      });
});

const emailIcon = document.getElementById("email-icon");
emailIcon.addEventListener("click", function() {
    navigator.clipboard.writeText("info@zuzana-n.cz");
});

const phoneIcon = document.getElementById("phone-icon");
phoneIcon.addEventListener("click", function() {
    navigator.clipboard.writeText("+420604828515");
});