function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); 
}

//  _."._."._."._."._."._."._."._."._."._."._."._."._."._."._."._ ."._."._."._."._."._."._."._."._."._."._."._."._."._."._."._ //
//  _."._."._."._."._."._."._."._."._."._."._."._."._."._."._."._ ."._."._."._."._."._."._."._."._."._."._."._."._."._."._."._ //


function draw() {
  background('#FAF5F5');

  let squareSize = 50; // Dimensione del quadrato principale
  let padding = 18.2; // Padding dai bordi della finestra

    // Calcola il numero massimo di colonne e righe
    //arrotonda il numero verso il basso all'intero più vicino
  let numColumns = Math.floor((windowWidth - padding * 2) / squareSize); 
  let numRows = Math.floor((windowHeight - padding * 2) / squareSize); 

  // origine x, y per centrare il disegno
  //dimensione della "forma" creata dall'insieme di righe e colonne
  let totalWidth = numColumns * squareSize;
  let totalHeight = numRows * squareSize;

  //il diviso 2 per indicare la spaziatura dai due lati
  let startX = (windowWidth - totalWidth) / 2; 
  let startY = (windowHeight - totalHeight) / 2; 

  // Iterazione sia attraverso le righe sia attraverso le colonne
  for (let i = 0; i < numColumns; i++) {
    for (let j = 0; j < numRows; j++) {
      let x = startX + i * squareSize; // Calcola la posizione x di ciascun quadrato
      let y = startY + j * squareSize; // Calcola la posizione y di ciascun quadrato

      // Chiamata alla funzione ConcentricSquares
      ConcentricSquares(x, y, squareSize);
    }
  }

} 

/*     | |
        | |
     __ | | __ 
    '. \   / .'
      '.\ /.'
        '.'

*/



// Funzione per disegnare quadrati concentrici
function ConcentricSquares(x, y, size) {
  // ARRAY con i colori della palette
  let palette = ["#00641E", "#000147", "#00286A", "#fffff", "#452A70", "#333103", "#176487", "#006470", "#452327", 
                 "#374F00", "#00008B", "#000047", "#2E6000", "#00001B", "#2D6341", "#3B0000", "#006383","#00377E",
                 "#002122", "#2C3E58", "#000B37", "#000080", "#005461"];

  let numConcentricSquares = 12; // Numero di quadrati concentrici
  let decrementSquares = size / numConcentricSquares; 

  // CONTORNI
  let minBorderWeight = 0.1;  // Spessore minimo del contorno
  let maxBorderWeight = 3;  // Spessore massimo del contorno

  for (let i = 0; i < numConcentricSquares; i++) {
    let currentSize = size - (i * decrementSquares); 

    // Colore random dello stroke a partire da una palette
    let randomColor = palette[floor(random(palette.length))]; // Seleziona un colore casuale dalla palette
    stroke(randomColor); // Usa il colore selezionato
    noFill();
    strokeWeight(random(minBorderWeight, maxBorderWeight)); // Lo spessore del contorno viene generato in maniera randomica

    // DISEGNA EFFETTIVAMENTE IL QUADRATO, centrato nella posizione
    rect(x + (size - currentSize) / 2, y + (size - currentSize) / 2, currentSize, currentSize);
  }
}

function windowResized() {
  // Quando cambiano le dimensioni della finestra, cambiano anche quelle della canvas
  resizeCanvas(windowWidth, windowHeight);
  redraw(); 
  // Il contenuto della canvas viene ridisegnato in base al ridimensionamento della finestra
}


















































































/*

  .-.-.   .-.-.   .-.-.   .-.-.   .-.-.   .-.-.   .-.-.   
 / / \ \ / / \ \ / / \ \ / / \ \ / / \ \ / / \ \ / / \ \ 
`-'   `-`-'   `-`-'   `-`-'   `-`-'   `-`-'   `-`-'   `-`


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
 noLoop();
  background("#3c3b4c");
  fill("Lightblue");
  noStroke();
  let height=25;
  let verticalGutter=10;

  //column=altezza/ (larghezza rect + spazio orizzontale)
  let columns = windowWidth/(verticalGutter + 5);
  //righe=altezza/ (altezza rect + spazio verticale)
  let rows = windowHeight/(height + verticalGutter);

 for(let i= 0; i < columns; i++)
{
  for (let r=0; r<rows; r++){
    let yPos=r*(height + verticalGutter) + random(-2.5, 2.5)
    let xPos=i*(verticalGutter+5)+random(-2.5, 2.5)
    //fill(random(0,120));
    rect(xPos, yPos, 10, 20);
  }
 
 }

}
 */





/*
.--..--..--..--..--..--..--..--..--..--..--..--..--..--..--..--.
/ .. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \.. \
\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/ /
 \/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /
 / /\/ /`' /`' /`' /`' /`' /`' /`' /`' /`' /`' /`' /`' /`' /\/ /\
/ /\ \/`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'\ \/\ \
\ \/\ \                                                    /\ \/ /
 \/ /\ \                                                  / /\/ /
 / /\/ /                template                          \ \/ /\
/ /\ \/                     originale                     \ \/\ \
\ \/\ \                                                   /\ \/ /
 \/ /\ \                                                  / /\/ /
 / /\/ /                                                  \ \/ /\
/ /\ \/                                                    \ \/\ \
\ \/\ \.--..--..--..--..--..--..--..--..--..--..--..--..--./\ \/ /
 \/ /\/ ../ ../ ../ ../ ../ ../ ../ ../ ../ ../ ../ ../ ../ /\/ /
 / /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\/ /\
/ /\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \/\ \
\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `'\ `' /
 `--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'`--'
*/

/*
function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // put setup code here
  const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);
}

function draw() {
  // put drawing code here
}*/

