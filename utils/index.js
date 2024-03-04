export function copyTextToClipboard(text) {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    
    // Delay the removal of tempTextArea to ensure selection process completes
    setTimeout(() => {
      document.body.removeChild(tempTextArea);
    }, 100); // You can adjust the delay time as needed
  
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Error copying text to clipboard: ', err);
      });
  }