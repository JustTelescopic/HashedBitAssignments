// 4.1 

function swapTheme() {
    // Get references to the div and button elements
    const appDiv = document.getElementById('app');
    const swapButton = document.getElementById('swap');
    
    // Check the current theme and toggle it
    if (appDiv.classList.contains('day')) {
      appDiv.classList.remove('day');
      appDiv.classList.add('night');
      swapButton.classList.remove('button_day');
      swapButton.classList.add('button_night');
    } else {
      appDiv.classList.remove('night');
      appDiv.classList.add('day');
      swapButton.classList.remove('button_night');
      swapButton.classList.add('button_day');
    }
  }

// 4.2

//Write your code here
function createDiv(width, height, text) {
    // Create a new div element
    const newDiv = document.createElement('div');
  
    // Set the width and height with 'px' unit
    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
  
    // Set the text content
    newDiv.textContent = text;
  
    // Append the new div to the container
    const container = document.getElementById('container');
    container.appendChild(newDiv);
  }
  
  
  
  // Do not change this code
  Window.createDiv = createDiv;
  
  // Call the createDiv function to see the result
  Window.createDiv(200, 100, "Hello World!");
  Window.createDiv(150, 80, "Another div");


  // 4.3 

  function toggleVisibility() {
    const paragraph = document.getElementById('useless-paragraph');
    
    // Check if the paragraph is currently visible or not
    if (paragraph.style.display === 'none') {
        // If hidden, show the paragraph
        paragraph.style.display = 'block';
    } else {
        // If visible, hide the paragraph
        paragraph.style.display = 'none';
    }
}



// 4.4 

// Change color of the text based on the value in the textbox
document.getElementById('colorchange').addEventListener('click', function() {
    const color = document.getElementById('colorbox').value;
    document.getElementById('text-container').style.color = color;
});

// Change font size of the text based on the slider value
document.getElementById('fontsize').addEventListener('input', function() {
    const fontSize = document.getElementById('fontsize').value + 'px';
    document.getElementById('text-container').style.fontSize = fontSize;
});

// Toggle italic style
document.getElementById('italic').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    if (textContainer.style.fontStyle === 'italic') {
        textContainer.style.fontStyle = 'normal';
    } else {
        textContainer.style.fontStyle = 'italic';
    }
});

// Toggle underline style
document.getElementById('underline').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    if (textContainer.style.textDecoration === 'underline') {
        textContainer.style.textDecoration = 'none';
    } else {
        textContainer.style.textDecoration = 'underline';
    }
});

// Toggle bold style
document.getElementById('bold').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    if (textContainer.style.fontWeight === 'bold') {
        textContainer.style.fontWeight = 'normal';
    } else {
        textContainer.style.fontWeight = 'bold';
    }
});

// Change font family based on the selected value from the dropdown
document.getElementById('list').addEventListener('change', function() {
    const fontFamily = document.getElementById('list').value;
    document.getElementById('text-container').style.fontFamily = fontFamily;
});

// Get and display the CSS properties of the text
document.getElementById('getstyle').addEventListener('click', function() {
    const textContainer = document.getElementById('text-container');
    const cssProps = document.getElementById('css-props');
    
    // Extract the current CSS properties
    const color = window.getComputedStyle(textContainer).color;
    const fontSize = window.getComputedStyle(textContainer).fontSize;
    const fontStyle = window.getComputedStyle(textContainer).fontStyle;
    const textDecoration = window.getComputedStyle(textContainer).textDecoration;
    const fontWeight = window.getComputedStyle(textContainer).fontWeight;
    const fontFamily = window.getComputedStyle(textContainer).fontFamily;

    // Display the CSS properties in the paragraph with id 'css-props'
    cssProps.textContent = `color: ${color}; font-size: ${fontSize}; font-style: ${fontStyle}; text-decoration: ${textDecoration}; font-weight: ${fontWeight}; font-family: ${fontFamily};`;
});
