const container = document.querySelector(".container");
const changeBtn = document.querySelector("#change-btn");
const randomBtn = document.querySelector("#random-btn");
const blackBtn = document.querySelector("#black-btn");
const clearBtn = document.querySelector("#clear-btn");
const eraserBtn = document.querySelector("#eraser-btn");
const progressiveBtn = document.querySelector("#progressive-btn");

let gridDivs;
let color = "default";
let progressive = "off";
let isDrawing = false;
const DEFAULT_COLOR = "black";
const CONTAINER_WIDTH_HEIGHT = 800;

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
      "Please enter how many pixels between 16 as default to 100 max: ",
      "16"
    );
    // cancel prompt action and back to default
    if (input === null) return 16;

    inputPixels = parseInt(input);

    // Validate input
    if (isNaN(inputPixels) || inputPixels < 1 || inputPixels > 100) {
      alert("Please enter a valid number between 1 and 100.");
    } else {
      isValid = true;
    }
  } while (!isValid);

  return inputPixels;
}

// Initialize default pixels grid
createSquareDivs();

// Handle the mouse to paint on mousedown and mouseenter no paint on mouseup
function paintPixels() {
  gridDivs.forEach((div) => {
    div.addEventListener("mousedown", () => {
      isDrawing = true;
      setCurrentColor(div);
      container.style.cursor = "crosshair";
    });

    div.addEventListener("mouseup", () => {
      isDrawing = false;
      container.style.cursor = "default";
    });

    div.addEventListener("mouseenter", () => {
      if (!isDrawing) return; // stop drawing
      setCurrentColor(div);
      container.style.cursor = "crosshair";
    });
  });
}

// Random color for paint
const randomColorNum = () => Math.floor(Math.random() * 255);
function randomRGB() {
  return `rgb(${randomColorNum()}, ${randomColorNum()}, ${randomColorNum()})`;
}

// Set background color state
function setCurrentColor(div) {
  switch (color) {
    case "random":
      div.style.backgroundColor = randomRGB();
      break;
    case "eraser":
      div.style.backgroundColor = "white";
      break;
    default:
      div.style.backgroundColor = DEFAULT_COLOR;
      break;
  }
}

// Set paint to random colors
randomBtn.addEventListener("click", () => {
  color = "random";
});
// Back/set to default paint black
blackBtn.addEventListener("click", () => {
  color = "default";
});
// Erase pixels
eraserBtn.addEventListener("click", () => {
  color = "eraser";
});
// Clear the painted pixels
clearBtn.addEventListener("click", () => {
  gridDivs.forEach((div) => {
    div.style.backgroundColor = "white";
  });
});

// Progressive darkening effect
// 10% each 1 interaction - uses opacity
progressiveBtn.addEventListener("click", (e) => {
  const text = e.target.textContent;
  if (text === "Progressive On") {
    progressiveBtn.textContent = "Progressive Off";
    progressive = "on";
  } else {
    progressiveBtn.textContent = "Progressive On";
    progressive = "off";
  }
});

function setProgressive(div) {
  if (progressive === "on") {
    div.style.opacity = "10%";
  } else div.style.opacity = "100%";
}

// EXTENDED FEATURE:
// Color picker for paint
