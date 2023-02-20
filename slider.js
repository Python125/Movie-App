//1930-1939
const sliderOneData = [
  {
    src: "",
    title: "Animal Crackers (1930)",
  },
  {
    src: "",
    title: "All Quiet on the Western Front (1930)",
  },
  {
    src: "",
    title: "Frankenstein (1931)",
  },
  {
    src: "",
    title: "Dracula (1931)",
  },
  {
    src: "",
    title: "The Public Enemy (1931)",
  },
];

const loadSliderOne = () => {
  const slider1 = document.getElementById("slider1");

  if (!slider1) {
    console.log("cant find slider1`");
    return;
  }

  sliderOneData.forEach((slide) => {
    const container = document.createElement("div");

    const title = document.createElement("p");
    title.textContent = slide.title;

    container.appendChild(title);

    const modalContainer = document.createElement("div");
    modalContainer.setAttribute("class", "modal");
    modalContainer.setAttribute("id", "modal1");

    const modalBody = document.createElement("div");
    modalBody.setAttribute("class", "modal-body");

    modalContainer.appendChild(modalBody);

    const modalHeader = document.createElement("div");
    modalHeader.setAttribute("class", "modal-header");

    modalContainer.appendChild(modalHeader);

    const closeButton = document.createElement("button");
    closeButton.setAttribute("data-close-button", true);
    closeButton.setAttribute("class", "close-button");
    closeButton.textContent = ">&times;";

    modalHeader.appendChild(closeButton);

    slider1.appendChild(container);
  });
};

//1940-1949
const sliderTwoData = [
  {
    src: "",
    title: "The Philadelphia Story (1940)",
  },
  {
    src: "",
    title: "Brother Orchid (1940)",
  },
  {
    src: "",
    title: "His Girl Friday (1940)",
  },
  {
    src: "",
    title: "The Letter (1940)",
  },
  {
    src: "",
    title: "They Drive by Night (1940)",
  },
];

const loadSliderTwo = () => {
  const slider2 = document.getElementById("slider2");

  if (!slider2) {
    console.log("cant find slider2`");
    return;
  }

  sliderTwoData.forEach((slide) => {
    const container = document.createElement("div");

    const title = document.createElement("p");
    title.textContent = slide.title;

    container.appendChild(title);

    const modalContainer = document.createElement("div");
    modalContainer.setAttribute("class", "modal");
    modalContainer.setAttribute("id", "modal2");

    const modalBody = document.createElement("div");
    modalBody.setAttribute("class", "modal-body");

    modalContainer.appendChild(modalBody);

    const modalHeader = document.createElement("div");
    modalHeader.setAttribute("class", "modal-header");

    modalContainer.appendChild(modalHeader);

    const closeButton = document.createElement("button");
    closeButton.setAttribute("data-close-button", true);
    closeButton.setAttribute("class", "close-button");
    closeButton.textContent = ">&times;";

    modalHeader.appendChild(closeButton);

    slider2.appendChild(container);
  });
};

//Golden Age Icons
const sliderThreeData = [
  {
    src: "",
    title: "Edward G. Robinson",
  },
  {
    src: "",
    title: "Bette Davis",
  },
  {
    src: "",
    title: "Humphrey Bogart",
  },
  {
    src: "",
    title: "Barbara Stanwyck",
  },
  {
    src: "",
    title: "James Cagney",
  },
];

const loadSliderThree = () => {
  const slider3 = document.getElementById("slider3");

  if (!slider3) {
    console.log("cant find slider3`");
    return;
  }

  sliderThreeData.forEach((slide) => {
    const container = document.createElement("div");

    const title = document.createElement("p");
    title.textContent = slide.title;

    container.appendChild(title);

    const modalContainer = document.createElement("div");
    modalContainer.setAttribute("class", "modal");
    modalContainer.setAttribute("id", "modal3");

    const modalBody = document.createElement("div");
    modalBody.setAttribute("class", "modal-body");

    modalContainer.appendChild(modalBody);

    const modalHeader = document.createElement("div");
    modalHeader.setAttribute("class", "modal-header");

    modalContainer.appendChild(modalHeader);

    const closeButton = document.createElement("button");
    closeButton.setAttribute("data-close-button", true);
    closeButton.setAttribute("class", "close-button");
    closeButton.textContent = ">&times;";

    modalHeader.appendChild(closeButton);

    slider3.appendChild(container);
  });
};

loadSliderOne();
loadSliderTwo();
loadSliderThree();

const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");

const prev1 = document.getElementById("prev1");
const next1 = document.getElementById("next1");
const prev2 = document.getElementById("prev2");
const next2 = document.getElementById("next2");
const prev3 = document.getElementById("prev3");
const next3 = document.getElementById("next3");

//  const image_width = parseFloat(window.getComputedStyle(slider1.querySelectorAll("img")[0]).getPropertyValue("width"));
const image_width = 0;
// const image_margin_right = parseFloat(window.getComputedStyle(slider1.querySelectorAll("img")[0]).getPropertyValue("margin-right"));
const image_margin_right = 0;

function image_copy_add(slider) {
  let images = slider.querySelectorAll("img");
  for (let i = 0; i <= 0; i++) {
    images.forEach(function (item) {
      let img = document.createElement("img");
      let a_tag = document.createElement("a");
      a_tag.href = "#";
      img.src = item.src;
      a_tag.appendChild(img);
      slider.appendChild(a_tag);
    });
  }
}

image_copy_add(slider1);
image_copy_add(slider2);
image_copy_add(slider3);

function previous_function(slider) {
  let left = parseFloat(
    window.getComputedStyle(slider).getPropertyValue("left")
  );
  if (left < 0) {
    left = left + (image_width + image_margin_right);
    slider.style.left = left + "px";
  }
}

function next_function(slider) {
  let left = parseFloat(
    window.getComputedStyle(slider).getPropertyValue("left")
  );
  slider.querySelectorAll("img");
  left = left - (image_width + image_margin_right);
  slider.style.left = left + "px";
}

prev1.addEventListener("click", () => {
  previous_function(slider1);
});

next1.addEventListener("click", () => {
  next_function(slider1);
});

prev2.addEventListener("click", () => {
  previous_function(slider2);
});

next2.addEventListener("click", () => {
  next_function(slider2);
});

prev3.addEventListener("click", () => {
  previous_function(slider3);
});

next3.addEventListener("click", () => {
  next_function(slider3);
});
