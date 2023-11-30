
      document.addEventListener('DOMContentLoaded', function () {
    const statusParagraph = document.getElementById('status');
    const enterButton = document.getElementById('enterBtn');

    enterButton.addEventListener('click', function () {
      // Change the text content of the paragraph
      statusParagraph.textContent = 'Entered Metaverse';
    });
  });
    
