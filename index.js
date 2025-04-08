const container = document.querySelector(".container");
let pixel = 16; // will update with prompt later
let pixels = pixel * pixel;

// Create div for pixels - start with 16x16 squares
function createSquareDivs() {
  for (let i = 0; i < pixels; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }
}
createSquareDivs();

// Handle the mouse to toggle click paint or no paint
