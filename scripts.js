function stars() {
    const count = 300;
    const stars = document.getElementById('stars');
    const starElements = []; // Array to store the created star elements
    var i = 0;
    while(i < count) {
      const star = document.createElement('i');
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      const size = Math.random() * 5;
      star.style.left = x+'px';
      star.style.top = y+'px';
      star.style.height = 1+size+'px';
      star.style.width = 1+size+'px';
      const duration = Math.random() * 2;
      star.style.animationDuration = 2+duration+'s';
      stars.appendChild(star);
      starElements.push(star); // Add the star element to the array
      i++;
    }
    return starElements; // Return the array of star elements
}

const starElements = stars(); // Get the array of star elements

const scene = document.querySelector('#scene');

function createDiv(starElements) {
    starElements.forEach(star => {
        const div = document.createElement('div');
        // Use the same style for div as the star
        div.style.left = star.style.left;
        div.style.top = star.style.top;
        div.style.position = 'absolute'; // this is important for correct positioning
        div.style.height = star.style.height;
        div.style.width = star.style.width;
        scene.appendChild(div);
    });
}

createDiv(starElements); // Create div elements using the positions of the star elements


//   document.getElementById("landingPage").addEventListener("click", function(){
//     // Select all stars
//     const stars = document.querySelectorAll('#stars i');

//     // Modify the animation for each star
//     stars.forEach(star => {
//         star.style.animation = 'none'; // Remove current animation
//         // Force reflow, enabling new animation to be applied
//         void star.offsetWidth;
        
//         // Remove any previous animation class if present
//         star.classList.remove('animate'); // Replace 'animate' with the class name of the initial animation if it's different
//         star.classList.add('animate2'); // Add new animation class        
//     });

//     // Wait for the new animation to complete, then change display
//     setTimeout(() => {
//         this.style.opacity = "0"; // fade out the landing page
//         this.addEventListener('transitionend', () => {
//             this.style.display = "none"; // hide it after the transition
//         });

//         // Display the main content with a fade-in effect
//         const mainContent = document.getElementById("mainContent");
//         mainContent.style.display = "block";
//         void mainContent.offsetWidth; // trigger reflow
//         mainContent.style.opacity = "1";
//     }, 3000); // Adjust time if needed, should match the length of the 'animate2' animation
// });

let shouldAnimateIntro = false;


// Assuming the menu is hidden by default via CSS
// For example, using the property visibility: hidden; or display: none;
document.getElementById("menu").style.display = "none";
document.getElementById("landingPage").addEventListener("click", function(){
    // Immediately hide the landingPage
    this.style.display = "none";

    // Immediately show the iPage
    const iPage = document.getElementById("iPage");
    iPage.style.display = "block";
    iPage.style.opacity = "1";

    // After a 3-second delay, initiate a fade-out transition for the iPage
    setTimeout(() => {
        iPage.style.opacity = "0";
    }, 3000); // 3 seconds before starting the transition to mainContent
});

document.getElementById("iPage").addEventListener('transitionend', function() {
    // This will be executed when iPage's transition ends
    this.style.display = "none";
    
    // Now that iPage is hidden, we can show the menu
    const menu = document.getElementById("menu");
    menu.style.display = "block"; // Or menu.style.display = "block"; depending on how you initially hide it
    
    // Set shouldAnimateIntro to true if it's a variable controlling the intro animation
    shouldAnimateIntro = true;

    const mainContent = document.getElementById("mainContent");
    mainContent.style.display = "block";
    mainContent.style.opacity = "1";


});





// Select the #scene element instead of .scene
// const scene = document.querySelector('#scene');

// const CreateDiv = () => {
//     for (let i = 0; i < 210; i++) {
//         // This will create 210 div elements within your #scene element
//         scene.innerHTML += "<div></div>";
//     }
// }

// CreateDiv();

// Select only the divs that are direct children of #scene
const g = document.querySelectorAll('#scene > div');

g.forEach(s => {
    let x = `${Math.random() * 200}vmax`;
    let y = `${Math.random() * 100}vh`;
    let z = `${Math.random() * 200 - 100}vmin`;
    let rx = `${Math.random() * 360}deg`;

    // Apply these styles to each star
    s.style.setProperty('--x', x);
    s.style.setProperty('--y', y);
    s.style.setProperty('--z', z);
    s.style.setProperty('--rx', rx);

    // Random delay for the animation
    let delay = `${Math.random() * 1.5}s`;
    s.style.animationDelay = delay;
});


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);

    // Removed the lines that change the background and text color
  
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
}

document.querySelector("h1").onmouseleave = event => {
    clearInterval(interval);
    event.target.innerText = event.target.dataset.value;
}




window.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('nav ul li');
    var dot = document.getElementById('cursorDot'); 
    var circ = document.getElementById('cursorCircle');

    navLinks.forEach(function(link) {
        link.addEventListener('mouseover', function() {
            // Set opacity of the hovered link to 1
            link.style.opacity = '1';

            // Set opacity of all other links to 0
            navLinks.forEach(function(otherLink) {
                if (otherLink !== link) {
                    otherLink.style.opacity = '0';
                }
            });

            // Change the dot color by adding a class
            dot.classList.add('dot-hover');
            circ.classList.add('circle-hover');
        });

        link.addEventListener('mouseout', function() {
            // Reset opacity of all links to 0.5
            navLinks.forEach(function(otherLink) {
                otherLink.style.opacity = '0.5';
            });

            // Reset the dot color by removing the class
            dot.classList.remove('dot-hover');
            circ.classList.remove('circle-hover');
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    let dot = document.getElementById('cursorDot');
    let circle = document.getElementById('cursorCircle');

    let mouseX = 0, mouseY = 0, posX = 0, posY = 0, speedX = 0, speedY = 0;
    let lastMouseX = 0, lastMouseY = 0, lastFrameTime = 0;
    let isMouseMoving = false;

    function mouseCoords(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        let now = Date.now();

        // Calculate the speed
        let timeDiff = now - lastFrameTime;
        speedX = (mouseX - lastMouseX) / timeDiff;
        speedY = (mouseY - lastMouseY) / timeDiff;

        isMouseMoving = !(lastMouseX === mouseX && lastMouseY === mouseY);

        // Update last known positions and time
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        lastFrameTime = now;
    }

    function followMouse() {
        // Update the position with a lag effect
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;

        // Damping factor
        const dampingFactor = 0.05;
        if (!isMouseMoving) {
            speedX -= speedX * dampingFactor;
            speedY -= speedY * dampingFactor;

            // When speed is very low, set it to 0
            if (Math.abs(speedX) < 0.01) speedX = 0;
            if (Math.abs(speedY) < 0.01) speedY = 0;
        }

        // Calculate the maximum displacement of the dot from the center of the circle
        let maxDisplacement = 20; // maximum displacement in pixels
        let displacementX = speedX * maxDisplacement;
        let displacementY = speedY * maxDisplacement;

        // Cap the displacement to the maximum value
        displacementX = Math.min(Math.max(displacementX, -maxDisplacement), maxDisplacement);
        displacementY = Math.min(Math.max(displacementY, -maxDisplacement), maxDisplacement);

        // Calculate the center position of the circle
        let circleCenterX = posX + (circle.offsetWidth / 2);
        let circleCenterY = posY + (circle.offsetHeight / 2);

        // Apply the positions with the displacement for the dot
        dot.style.top = (circleCenterY - (dot.offsetHeight / 2) + displacementY) + 'px';
        dot.style.left = (circleCenterX - (dot.offsetWidth / 2) + displacementX) + 'px';

        // Position the circle
        circle.style.top = posY + 'px';
        circle.style.left = posX + 'px';

        requestAnimationFrame(followMouse);
    }

    document.addEventListener('mousemove', mouseCoords);

    followMouse();
});

const button = document.getElementById("menu-toggle");
const nav = document.getElementById("navigation");
const solarSystem = document.querySelector(".solar-syst"); 
const toggle = () => {
    nav.classList.toggle("menu-toggled");
    
    // Check if the menu is being opened or closed
    if (nav.classList.contains("menu-toggled")) {
      // Menu is being opened, hide the solar system immediately
      solarSystem.classList.add("hidden");
    } else {
      // Menu is being closed, wait 3 seconds then show the solar system
      setTimeout(() => {
        solarSystem.classList.remove("hidden");
      }, 500); 
    }
  }
  
  button.onclick = () => toggle();

setTimeout(toggle, 200);

// // Function to create and append words with staggered animation
// const createAndAppendWords = (element, text) => {
//   const words = text.split(" ");
//   words.forEach((word, index) => {
//     const wordSpan = document.createElement("span");
//     wordSpan.classList.add("word-animation");
//     wordSpan.style.transitionDelay = `${index * 0.5}s`; // Staggered delay for each word
//     wordSpan.innerText = word + " ";
//     element.appendChild(wordSpan);
//   });
// };

// // Function to animate the text in each small card
// const animateTextInCard = (card) => {
//   const h3 = card.querySelector("h3");
//   const p = card.querySelector("p");
//   const ul = card.querySelector("ul");

//   // Store original text and clear it
//   const pText = p.innerText;
//   const ulText = ul.innerText;
//   p.innerText = '';
//   ul.innerText = '';

//   // Append animated words
//   createAndAppendWords(p, pText);
//   createAndAppendWords(ul, ulText);
// };

// // Add hover event listener to each small card
// document.querySelectorAll('.small-card').forEach(card => {
//   card.addEventListener('mouseenter', () => {
//     animateTextInCard(card);
//   });
// });



const yearInSeconds = 30; // 1 Earth year = 30 sec

function revolution(planetYearInDays) {
    // Earth's year in days is taken as 365.2563
    return (planetYearInDays * yearInSeconds) / 365.2563; // Returns duration in seconds
  }
  
  // Set the CSS variables for each planet
  document.documentElement.style.setProperty('--mercury-rev', `${revolution(87.5)}s`);
  document.documentElement.style.setProperty('--venus-rev', `${revolution(224.7)}s`);
  document.documentElement.style.setProperty('--earth-rev', `${revolution(365.2563)}s`);
  document.documentElement.style.setProperty('--moon-rev', `${revolution(27.3)}s`);
  document.documentElement.style.setProperty('--mars-rev', `${revolution(687)}s`);
  document.documentElement.style.setProperty('--jupiter-rev', `${revolution(4331)}s`);
  document.documentElement.style.setProperty('--saturn-rev', `${revolution(10747)}s`);
  document.documentElement.style.setProperty('--uranus-rev', `${revolution(30589)}s`);
  document.documentElement.style.setProperty('--neptune-rev', `${revolution(59802)}s`);
  document.documentElement.style.setProperty('--asteroids-belt-rev', `${revolution(2191)}s`);
  document.documentElement.style.setProperty('--pluto-rev', `${revolution(90580)}s`);

function alphaRandom() {
  return Math.random();
}

function stars2(count, maxArea, minArea = 0, starSize = 0) {
    let stars2 = '';
    for (let i = 0; i < count; i++) {
      const x = Math.floor(minArea + Math.random() * (maxArea - minArea)) + 'px ';
      const y = Math.floor(minArea + Math.random() * (maxArea - minArea)) + 'px ';
      const blur = starSize + 'px ';
      const alpha = alphaRandom();
      const color = `rgba(0,0,0,${alpha})`;
      stars2 += `${x}${y}0 ${blur}${color}, `;
    }
    // Remove the trailing comma and space
    return stars2.slice(0, -2);
  }
  
  // Calculate the box-shadow value for the stars
  const boxShadowValue = stars2(390, 290, -145, -104);
  
  // Set the CSS variable on the root element (or any other element that wraps your .asteroids-belt element)
  document.documentElement.style.setProperty('--asteroids-box-shadow', boxShadowValue);
  
  
  document.addEventListener('DOMContentLoaded', (event) => {
    const links = document.querySelectorAll('.link');
    const cardOverlay = document.getElementById('card-overlay');
    const cardContent = cardOverlay.querySelector('.card-content');
    const closeButton = document.getElementById('close-card');
  
    function showCard(content) {
      cardContent.innerHTML = content;
      cardOverlay.style.display = 'grid'; // Show the overlay
    }
  
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const content = document.querySelector(link.getAttribute('href')).innerHTML;
        showCard(content);
      });
    });
  
    closeButton.addEventListener('click', () => {
      cardOverlay.style.display = 'none'; // Hide the overlay
    });
  });
  