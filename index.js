const container = document.querySelector(".container");
const changeBtn = document.querySelector("#change-btn");
let gridDivs;

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
  gridDivs = container.querySelectorAll("div");
  gridDivs.forEach((div) => {
    div.style.cssText = `width: ${size}px; height: ${size}px;`;
  });
  paintPixels();
}

// Trigger button to call the prompt and create divs
changeBtn.addEventListener("click", () => {
  const pixelValues = changePixels();
  createSquareDivs(pixelValues);
});

// Change the pixel values & re-prompt
function changePixels() {
  let inputPixels, input;
  let isValid = false;
  do {
    input = prompt(
      "Please enter how many pixels between 16 as default to 64 max: ",
      "16"
    );
    // cancel prompt action and back to default
    if (input === null) return 16;

    inputPixels = parseInt(input);

    // Validate input
    if (isNaN(inputPixels) || inputPixels < 1 || inputPixels > 64) {
      alert("Please enter a valid number between 1 and 64.");
    } else {
      isValid = true;
    }
  } while (!isValid);

  return inputPixels;
}

// Initialize default pixels grid
createSquareDivs();

// Handle the mouse to toggle click paint or no paint - for alternate every click
// logic first with white to paint block - default state
function paintPixels() {
  gridDivs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      div.style.backgroundColor = "black";
    });
  });
}
// Clear the painted pixels
// back to all white

// Erase pixels

// EXTRA CREDIT:
// Random color for paint
// rather than squares being the same color throughout the grid, randomize the squares RGB values with each interaction.

// EXTENDED FEATURE:
// Color picker for paint
