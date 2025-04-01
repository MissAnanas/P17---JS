function generateName() {
    const names = ["Aldric", "Elyana", "Kael", "Morgana", "Ragnar", "Selene"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    document.getElementById("char-name").innerText = "Nom : " + randomName;
}

function changeHair() {
    const value = document.getElementById("hair-select").value;
    document.getElementById("hair").src = `https://via.placeholder.com/150/0000FF/FFFFFF?text=${value}`;
}

function changeEyes() {
    const value = document.getElementById("eyes-select").value;
    document.getElementById("eyes").src = `https://via.placeholder.com/150/FF0000/FFFFFF?text=${value}`;
}

function changeClothes() {
    const value = document.getElementById("clothes-select").value;
    document.getElementById("clothes").src = `https://via.placeholder.com/150/00FF00/FFFFFF?text=${value}`;
}