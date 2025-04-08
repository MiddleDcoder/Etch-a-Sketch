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

// Prompt the values for pixel
// adjust the pixel sizes for every value pixel prompted

// Change the pixel values
// re-prompt

// Handle the mouse to toggle click paint or no paint - for alternate every click
// logic first with white to paint block - default state

// Clear the painted pixels
// back to all white

// Erase pixels

// EXTRA CREDIT:
// Random color for paint
// rather than squares being the same color throughout the grid, randomize the squares RGB values with each interaction.

// EXTENDED FEATURE:
// Color picker for paint
