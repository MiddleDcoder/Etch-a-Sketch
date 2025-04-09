const container = document.querySelector(".container");
const gridDivs = container.querySelectorAll("div");
const changeBtn = document.querySelector("#change-btn");

const CONTAINER_WIDTH_HEIGHT = 500;

// Create div for pixels - start with 16x16 squares
function createSquareDivs(pixel = 16) {
  container.innerHTML = "";
  let pixels = pixel * pixel;
  for (let i = 0; i < pixels; i++) {
    const div = document.createElement("div");
    container.appendChild(div);
  }
  //width & height for divs populated
  const size = CONTAINER_WIDTH_HEIGHT / pixel;
  const gridDivs = container.querySelectorAll("div");
  gridDivs.forEach((div) => {
    div.style.cssText = `width: ${size}px; height: ${size}px;`;
  });
}

// Prompt the values for pixel
// adjust the pixel sizes for every value pixel prompted
changeBtn.addEventListener("click", () => {
  const pixelValues = changePixels();
  createSquareDivs(pixelValues);
});

// Change the pixel values re-prompt
function changePixels() {
  let inputPixels = parseInt(
    prompt(
      "Please enter how many pixels between 16 as default to 64 max: ",
      "16"
    )
  );
  // Validate input
  if (isNaN(inputPixels) || inputPixels < 1 || inputPixels > 64) {
    alert("Please enter a valid number between 1 and 64.");
    return 16; // fallback value
  }
  return inputPixels;
}

// Initialize default pixels grid
createSquareDivs();

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
