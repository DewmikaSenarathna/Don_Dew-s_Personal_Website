function toggleDropdown() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}


const textToType = "engineering undergraduate with a focus on web development, app creation, and embedded systems. Currently studying at the University of Jaffna, I have developed expertise across various technologies, including HTML, CSS, JavaScript, Python, Angular, and Arduino. This website offers a glimpse into my work, skills, and the experiences that drive my passion for innovation. For any professional inquiries or potential collaborations, please feel free to get in touch. Together, we can explore new possibilities and drive technological advancement.";
    let index = 0;
    const typingSpeed = 100; 

    function typeText() {
      if (index < textToType.length) {
        document.getElementById("text-animation").innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
      }
    }

    window.onload = typeText;

















