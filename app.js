const images = [
  {
    img: "https://images.pexels.com/photos/7258838/pexels-photo-7258838.jpeg",
    caption:
      "Packed sports stadium buzzing with excitement as fans passionately cheer for their team, celebrating a 1:0 lead in the football match.",
  },
  {
    img: "https://images.pexels.com/photos/20658167/pexels-photo-20658167/free-photo-of-portrait-of-an-african-man-wearing-football-shirt.jpeg",
    caption:
      "A Real Madrid football fan beaming with joy, their face lit up with excitement and pride.",
  },
  {
    img: "https://images.pexels.com/photos/14984380/pexels-photo-14984380/free-photo-of-woman-in-football-uniform-posing-on-city-street.jpeg",
    caption:
      "A stunning lady in an Arsenal jersey sits gracefully on a short wall along the street, exuding elegance and team pride.",
  },
  {
    img: "https://images.pexels.com/photos/17464172/pexels-photo-17464172/free-photo-of-view-of-a-crowd-walking-on-a-street-with-a-flag-of-ghana-and-smiling.jpeg",
    caption:
      "A vibrant crowd walks down the street, proudly waving the Ghanaian flag and smiling with joy and unity.",
  },
  {
    img: "https://images.pexels.com/photos/11387388/pexels-photo-11387388.jpeg",
    caption:
      "A black man with a striking white face painting, adorned with a Ghanaian flag wrapped as a scarf on his head, showcasing his national pride.",
  },
  {
    img: "https://images.pexels.com/photos/1024984/pexels-photo-1024984.jpeg",
    caption:
      "Couples embrace each other while standing at the beach, illuminated by the shining sun.",
  },
  {
    img: "https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg",
    caption:
      "A basketball player soaring high, clutching the ball in mid-air, poised to score.",
  },
  {
    img: "https://images.pexels.com/photos/3183172/pexels-photo-3183172.jpeg",
    caption:
      "Collaborative work session: Brainstorming ideas around the table with laptops.",
  },
  {
    img: "https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg",
    caption:
      "Engrossed team watching attentively as one person shares something on the screen.",
  },
  {
    img: "https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg",
    caption: "Adventure awaits: Couple geared up for a swim at the waterfall.",
  },
  {
    img: "https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg",
    caption:
      "Interior view of a BMW car showcasing the steering wheel, gear lever, and front dashboard.",
  },
  {
    img: "https://images.pexels.com/photos/16650520/pexels-photo-16650520/free-photo-of-red-bmw-on-empty-road.jpeg",
    caption: "Red BMW cruising down an empty road.",
  },
];

const galleryContainer = document.getElementById("gallery-container");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.getElementById("close-lightbox");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

function closeLightbox() {
  lightbox.style.display = "none";
}

function openLightbox(index) {
  lightbox.style.display = "flex";
  lightboxImg.classList.remove("visible");

  setTimeout(() => {
    lightboxImg.src = images[index].img;
    lightboxCaption.textContent = images[index].caption;
    currentIndex = index;

    lightboxImg.classList.add("visible");
  }, 300);
}

function showNextImage() {
  if (currentIndex < images.length - 1) {
    openLightbox(currentIndex + 1);
  }
}

function showPrevImage() {
  if (currentIndex > 0) {
    openLightbox(currentIndex - 1);
  }
}

images.forEach((image, index) => {
  const thumbnailDiv = document.createElement("div");
  thumbnailDiv.classList.add("thumbnail");
  thumbnailDiv.setAttribute("data-index", index);

  const imgElement = document.createElement("img");
  imgElement.src = image.img;
  imgElement.alt = image.caption;

  thumbnailDiv.appendChild(imgElement);
  galleryContainer.appendChild(thumbnailDiv);
});

document.querySelectorAll(".thumbnail").forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    const index = parseInt(thumbnail.getAttribute("data-index"));
    openLightbox(index);
  });

  thumbnail.addEventListener("mouseover", () => {
    thumbnail.classList.add("hovered");
  });

  thumbnail.addEventListener("mouseout", () => {
    thumbnail.classList.remove("hovered");
  });
});

closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNextImage);
prevBtn.addEventListener("click", showPrevImage);

// Adding event listener for left and right arrow keys navigation
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "flex") {
    if (e.key === "ArrowRight") {
      showNextImage();
    } else if (e.key === "ArrowLeft") {
      showPrevImage();
    }
  }
});
