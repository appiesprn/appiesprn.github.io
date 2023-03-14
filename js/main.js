// console.log("JS Loaded")

// fetch('https://arda1gul.github.io/')
// .then(myData => myData.text())
// .then(textData => showInConsole(textData))

// function showInConsole(textData) {
//     console.log(textData)
// }

console.log("Main JS Loaded")

const rifleAmmoVerkoop = 800;
const rifleAmmoInkoop = 700;

function verkoopRifle() {
    const hoeveelRifle = prompt("Hoeveel Rifle Ammo?");
    const totaalPrijsRifle = rifleAmmoVerkoop * hoeveelRifle;
    const verschilRifle = rifleAmmoInkoop * hoeveelRifle;
    const winstRifle = totaalPrijsRifle - verschilRifle;
    document.querySelector(".winstRifle").innerHTML = "€" + winstRifle
    document.querySelector(".prijsRifle").innerHTML = "€" + totaalPrijsRifle

    return
}

const pistolAmmoVerkoop = 475;
const pistolAmmoInkoop = 400;

function verkoopPistol() {
    const hoeveelPistol = prompt("Hoeveel Pistol Ammo?");
    const totaalPrijsPistol = pistolAmmoVerkoop * hoeveelPistol;
    const verschilPistol = pistolAmmoInkoop * hoeveelPistol;
    const winstPistol = totaalPrijsPistol - verschilPistol;
    document.querySelector(".prijsPistol").innerHTML = "€" + totaalPrijsPistol
    document.querySelector(".winstPistol").innerHTML = "€" + winstPistol

    return
}

const shotgunAmmoVerkoop = 1200;
const shotgunAmmoInkoop = 1000;

function verkoopShotgun() {
    const hoeveelShotgun = prompt("Hoeveel Shotgun Ammo?");
    const totaalPrijsShotgun = shotgunAmmoVerkoop * hoeveelShotgun;
    const verschilShotgun = shotgunAmmoInkoop * hoeveelShotgun;
    const winstShotgun = totaalPrijsShotgun - verschilShotgun;
    document.querySelector(".prijsShotgun").innerHTML = "€" + totaalPrijsShotgun
    document.querySelector(".winstShotgun").innerHTML = "€" + winstShotgun

    return
}

const SmgAmmoVerkoop = 250;
const SmgAmmoInkoop = 150;

function verkoopSMG() {
    const hoeveelSmg = prompt("Hoeveel SMG Ammo?");
    const totaalPrijsSmg = SmgAmmoVerkoop * hoeveelSmg;
    const verschilSmg = SmgAmmoInkoop * hoeveelSmg;
    const winstSmg = totaalPrijsSmg - verschilSmg;
    document.querySelector(".prijsSmg").innerHTML = "€" + totaalPrijsSmg
    document.querySelector(".winstSmg").innerHTML = "€" + winstSmg

    return
}