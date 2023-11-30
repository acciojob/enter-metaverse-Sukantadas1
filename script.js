document.addEventListener('DOMContentLoaded', function () {
    const statusParagraph = document.getElementById('status');
    const enterButton = document.getElementById('enterBtn');

    enterButton.addEventListener('click', function () {
      // Create a new h1 element
      const h1Element = document.createElement('h1');
      
      // Set the text content of the h1 element
      h1Element.textContent = 'Entered Metaverse';

      // Replace the existing p tag with the new h1 element
      statusParagraph.replaceWith(h1Element);
    });
  });
