
document.addEventListener("DOMContentLoaded", () => {
    // Voorbeeld: zet spelersaantal op een random getal
    const playerCount = document.getElementById("a");
    playerCount.textContent = Math.floor(Math.random() * 32);
});
