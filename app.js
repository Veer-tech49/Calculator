function calcProfit() {
  let cp = parseFloat(document.getElementById("cp").value);
  let sp = parseFloat(document.getElementById("sp").value);

  let profit = sp - cp;
  let percent = (profit / cp) * 100;

  document.getElementById("profitResult").innerText =
    `Profit: ${profit} | ${percent.toFixed(2)}%`;
}
