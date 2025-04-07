const names = ["Anaïs", "Hugo", "Vincent", "Ilyès", "Raphaël", "Fabio"];
function randomizeName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    document.getElementById("namecharacter").value = names[randomIndex];
}

const assets = {
    face: ["Face/face1.png", "Face/face2.png", "Face/face3.png", "Face/face4.png"],
    hair: ["Hair/cheveux1.png", "Hair/cheveux2.png", "Hair/cheveux3.png", "Hair/cheveux4.png", "Hair/cheveux5.png", "Hair/cheveux6.png", "Hair/cheveux7.png", "Hair/cheveux8.png", 
        "Hair/cheveux9.png", "Hair/cheveux10.png", "Hair/cheveux11.png"],
    shirt: ["Shirts/Blue/blueShirt1.png", "Shirts/Blue/blueShirt2.png", "Shirts/Blue/blueShirt3.png", "Shirts/Blue/blueShirt4.png", "Shirts/Blue/blueShirt5.png", 
        "Shirts/Blue/blueShirt6.png", "Shirts/Blue/blueShirt7.png", "Shirts/Blue/blueShirt8.png",
        "Shirts/green/greenShirt1.png", "Shirts/green/greenShirt2.png", "Shirts/green/greenShirt3.png", "Shirts/green/greenShirt4.png", "Shirts/green/greenShirt5.png", 
        "Shirts/green/greenShirt6.png", "Shirts/green/greenShirt7.png", "Shirts/green/greenShirt8.png"],
    skin: ["Skin/tint1_head.png", "Skin/tint2_head.png", "Skin/tint3_head.png", "Skin/tint3_head.png", "Skin/tint4_head.png", "Skin/tint5_head.png", "Skin/tint6_head.png",
    "Skin/tint7_head.png", "Skin/tint8_head.png",]
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
    const imgPath = "images/" + asset;

    switch (currentCategory) {
        case 'face':
            document.getElementById("face-layer").src = imgPath;
            break;
        case 'hair':
            document.getElementById("hair-layer").src = imgPath;
            break;
        case 'shirt':
            document.getElementById("shirt-layer").src = imgPath;
            break;
        case 'skin':
            document.getElementById("skin-layer").src = imgPath;
            break;
    }
}


updateSelectionGrid();


