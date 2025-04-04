const names = ["Anaïs", "Hugo", "Vincent", "Ilyès", "Raphaël", "Fabio"];
function randomizeName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    document.getElementById("namecharacter").value = names[randomIndex];
}

const assets = {
    face: ["Face/face1.png", "Face/face2.png", "Face/face3.png"],  // Modification du chemin
    hair: ["Hair/cheveux1.png", "Hair/cheveux2.png", "Hair/cheveux3.png"],  // Modification du chemin
    shirt: ["Shirt/shirt1.png", "Shirt/shirt2.png", "Shirt/shirt3.png"],  // Modification du chemin
    skin: ["Skin/tint1_head.png", "Skin/tint2_head.png", "Skin/tint3_head.png", "Skin/tint3_head.png", 
        "Skin/tint4_head.png", "Skin/tint5_head.png", "Skin/tint6_head.png",
    "Skin/tint7_head.png", "Skin/tint8_head.png",]   // Modification du chemin
};

let currentCategory = 'face';

function selectCategory(category) {
    currentCategory = category;
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    updateSelectionGrid();
}

function updateSelectionGrid() {
    const selectionArea = document.getElementById("selection-area");
    selectionArea.innerHTML = "";
    
    assets[currentCategory].forEach(asset => {
        let img = document.createElement("img");
        img.src = "images/" + asset;  // Assure-toi que le chemin commence par "images/"
        img.classList.add("selection-img");  // Classe pour styliser les images
        img.onclick = () => updateCharacter(asset);
        selectionArea.appendChild(img);
    });
}

function updateCharacter(asset) {
    document.getElementById("character").src = "images/" + asset;  // Mise à jour du personnage
}

updateSelectionGrid();


