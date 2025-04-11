const firstName = ["Anaïs", "Hugo", "Vincent", "Ilyès", "Raphaël", "Fabio"];
const lastName = ["Pinto", "Thinard", "Nelet", "Kaddouri", "Techer", "Agnello"];

function randomizeName() {
    const randomFirstName = firstName[Math.floor(Math.random() * firstName.length)];
    const randomSurname = lastName[Math.floor(Math.random() * lastName.length)];
    const fullName = `${randomFirstName} ${randomSurname}`;
    
    document.getElementById("namecharacter").value = fullName;
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
    document.querySelectorAll('.category').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    updateSelectionGrid();
}

function updateSelectionGrid() {
    const selectionArea = document.getElementById("bibliothequeassets");
    selectionArea.innerHTML = "";
    
    assets[currentCategory].forEach(asset => {
        let img = document.createElement("img");
        img.src = "images/" + asset;
        img.onclick = () => updateCharacter(asset);
        selectionArea.appendChild(img);
    });
}

function updateCharacter(asset) {
    const imgPath = "images/" + asset;

    switch (currentCategory) {
        case 'face':
            document.getElementById("faceassets").src = imgPath;
            break;
        case 'hair':
            document.getElementById("hairassets").src = imgPath;
            break;
        case 'shirt':
            document.getElementById("shirtassets").src = imgPath;
            break;
        case 'skin':
            document.getElementById("skinassets").src = imgPath;
            break;
    }
}


updateSelectionGrid();


