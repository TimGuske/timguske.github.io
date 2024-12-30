// Funktion zur Aktualisierung der Binäranzeige
function updateBinary(inputId, outputId) {
    const num = parseInt(document.getElementById(inputId).value) || 0;
    const binary = num.toString(2).padStart(8, '0');
    document.getElementById(outputId).textContent = `Binär: ${binary}`;
}

// Funktion zur Durchführung der Addition
// Funktion zur Berechnung der binären Addition
function performAddition() {
    const num1 = parseInt(document.getElementById("num1").value) || 0;
    const num2 = parseInt(document.getElementById("num2").value) || 0;

    // Umwandlung in binäre Zahlen (8-Bit)
    const bin1 = num1.toString(2).padStart(8, '0');
    const bin2 = num2.toString(2).padStart(8, '0');

    let carry = 0;
    let result = '';
    const steps = [];

    // Addition der Bits
    for (let i = 7; i >= 0; i--) {
        const bit1 = parseInt(bin1[i]);
        const bit2 = parseInt(bin2[i]);
        const sum = bit1 ^ bit2 ^ carry; // XOR für Summe
        const newCarry = (bit1 & bit2) | (carry & (bit1 ^ bit2)); // Carry-Berechnung
        result = sum + result;
        steps.push({ bit1, bit2, carry, sum, newCarry });
        carry = newCarry;
    }

    // Anzeige der Ergebnisse
    document.getElementById("result-binary").textContent = `Binär: ${result}`;
    document.getElementById("result-decimal").textContent = `Dezimal: ${parseInt(result, 2)}`;

    // Starten der Visualisierung
    drawCircuit(steps, bin1, bin2);
}

// Funktion zur Erstellung des Schaltplans
function drawCircuit(steps, bin1, bin2) {
    const svg = d3.select("#circuit").html("").append("svg")
        .attr("width", 800)
        .attr("height", 600);

    // Eingabebits von A und B korrekt von unten nach oben
    bin1.split('').forEach((bit, i) => {
        const y = 100 + i * 60; // Y-Koordinaten angepasst: von unten nach oben
        svg.append("text").attr("x", 50).attr("y", y).text(`A${7 - i} (${bit})`).attr("class", "label");
    });

    bin2.split('').forEach((bit, i) => {
        const y = 100 + i * 60; // Y-Koordinaten angepasst: von unten nach oben
        svg.append("text").attr("x", 100).attr("y", y).text(`B${7 - i} (${bit})`).attr("class", "label");
    });

    // Ausgabe Bits (Summe und Carry)
    steps.forEach((step, i) => {
        const y = 100 + i * 60; // Y-Koordinaten angepasst: von unten nach oben

        // XOR-Gatter für Summe
        svg.append("rect")
            .attr("x", 200)
            .attr("y", y - 15)
            .attr("width", 40)
            .attr("height", 30)
            .attr("class", "gate")
            .attr("id", `xor${i}`);
        svg.append("text")
            .attr("x", 220)
            .attr("y", y + 5)
            .text("XOR")
            .attr("class", "label");

        // AND-Gatter für Carry
        svg.append("rect")
            .attr("x", 300)
            .attr("y", y - 15)
            .attr("width", 40)
            .attr("height", 30)
            .attr("class", "gate")
            .attr("id", `and${i}`);
        svg.append("text")
            .attr("x", 320)
            .attr("y", y + 5)
            .text("AND")
            .attr("class", "label");

        // Ergebnis-Lampen (Summe)
        svg.append("circle")
            .attr("cx", 600)
            .attr("cy", y)
            .attr("r", 10)
            .attr("class", "lamp")
            .attr("id", `sum${7 - i}`); // Reihenfolge umkehren
        svg.append("text")
            .attr("x", 620)
            .attr("y", y + 5)
            .text(`S${7 - i}`) // Reihenfolge umkehren
            .attr("class", "label");

        // Carry-Beschriftung
        if (i < 7) { // Carry nur anzeigen, wenn es nicht das letzte Bit ist
            svg.append("text")
                .attr("x", 150)
                .attr("y", y + 30)
                .text(`C${6 - i} = ${steps[6-i].newCarry}`) // Reihenfolge umkehren
                .attr("id", `carry${6 - i}`)
                .attr("class", "label");
        }
    });

    // Animation der Schaltung (Änderung hier)
    animateCircuit(steps, bin1, bin2);
}

// Funktion, die für die Animation zuständig ist
function animateCircuit(steps, bin1, bin2) {

    steps.forEach((step, i) => {
        // XOR und AND Gatter
        if (bin1[i] === '1' ^ bin2[i] === '1') { // Wenn Bit A oder B aktiv oder ein Übertrag kommt
            d3.select(`#xor${i}`).transition().duration(500).style("fill", "green");        
        }

        if (steps[7-i].carry == 1) { // Wenn ein Übertrag da ist, dann den Wert auch grün machen
            d3.select(`#xor${i}`).transition().duration(500).style("fill", "green");        
        }

        if(bin1[i] === '1' && bin2[i] === '1') {
            d3.select(`#and${i}`).transition().duration(500).style("fill", "green");
        }

        // Ergebnis Lampen (Summe) - Um sicherzustellen, dass sie korrekt angezeigt werden
        d3.select(`#sum${i}`).transition().duration(500).style("fill", step.sum === 1 ? "green" : "gray"); // Summe aktivieren

        if (i < 7) {
            d3.select(`#carry${i}`).transition().duration(500).style("fill", step.newCarry === 1 ? "yellow" : "gray"); // Carry aktivieren
        }
    });
}