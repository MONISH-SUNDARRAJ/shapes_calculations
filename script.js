function calculateCube() {
    let a = Number(document.getElementById("cubeSide").value);
    if (a <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }
    let csa = 4 * a * a;
    let tsa = 6 * a * a;
    let volume = a * a * a;
    document.getElementById("cubeResult").innerText =
        `Curved Surface Area: ${csa.toFixed(2)}, Total Surface area : ${tsa.toFixed(2)}, Volume: ${volume.toFixed(2)}`;
}

function calculateCuboid() {
    let l = Number(document.getElementById("cuboidLength").value);
    let w = Number(document.getElementById("cuboidWidth").value);
    let h = Number(document.getElementById("cuboidHeight").value);
    if (l <= 0 || w <= 0 || h <= 0) {
        alert("Please enter valid positive numbers.");
        return;
    }
    let csa = 2 * (l * h + w * h);
    let tsa = 2 * (l * w + w * h + h * l);
    let volume = l * w * h;
    document.getElementById("cuboidResult").innerText =
        `Curved Surface Area: ${csa.toFixed(2)}, Total surface Area: ${tsa.toFixed(2)}, Volume: ${volume.toFixed(2)}`;
}

function calculateCylinder() {
    let r = Number(document.getElementById("cylinderRadius").value);
    let h = Number(document.getElementById("cylinderHeight").value);
    if (r <= 0 || h <= 0) {
        alert("Please enter valid positive numbers.");
        return;
    }
    let csa = 2 * Math.PI * r * h;
    let tsa = 2 * Math.PI * r * (r + h);
    let volume = Math.PI * r * r * h;
    document.getElementById("cylinderResult").innerText =
        `Curved Surface Area: ${csa.toFixed(2)}, Total Surface Area: ${tsa.toFixed(2)}, Volume: ${volume.toFixed(2)}`;
}

function calculateCone() {
    let r = Number(document.getElementById("coneRadius").value);
    let h = Number(document.getElementById("coneHeight").value);
    if (r <= 0 || h <= 0) {
        alert("Please enter valid positive numbers.");
        return;
    }
    let l = Math.sqrt(r * r + h * h);
    let csa = Math.PI * r * l;
    let tsa = Math.PI * r * (r + l);
    let volume = (1 / 3) * Math.PI * r * r * h;
    document.getElementById("coneResult").innerText =
        `Curved Surface Area: ${csa.toFixed(2)}, Total Surface Area: ${tsa.toFixed(2)}, Volume: ${volume.toFixed(2)}`;
}

function calculateSphere() {
    let r = Number(document.getElementById("sphereRadius").value);
    if (r <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }
    let csa = 4 * Math.PI * r * r;
    let tsa = csa;
    let volume = (4 / 3) * Math.PI * r * r * r;
    document.getElementById("sphereResult").innerText =
        `Curved Surface Area: ${csa.toFixed(2)}, Total Surface Area: ${tsa.toFixed(2)}, Volume: ${volume.toFixed(2)}`;
}

function calculateHemisphere() {
    let r = Number(document.getElementById("hemisphereRadius").value);
    if (r <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }
    let csa = 2 * Math.PI * r * r;
    let tsa = 3 * Math.PI * r * r;
    let volume = (2 / 3) * Math.PI * r * r * r;
    document.getElementById("hemisphereResult").innerText =
        `Curved Surface Area: ${csa.toFixed(2)}, TSA: ${tsa.toFixed(2)}, Volume: ${volume.toFixed(2)}`;
}
