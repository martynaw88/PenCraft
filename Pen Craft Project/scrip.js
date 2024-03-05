function uploadWriting() {
  const fileInput = document.getElementById('fileInput');
  const descriptionInput = document.getElementById('descriptionInput');
  const files = fileInput.files;
  const description = descriptionInput.value.trim();

  if(files.length > 0) {
      const fileName = files[0].name;
      displayWriting(fileName, description);
  }

  // Clear the inputs after uploading
  fileInput.value = '';
  descriptionInput.value = '';
}

function displayWriting(fileName, description) {
  const writingsList = document.getElementById('writings-list');
  const writingItem = document.createElement('div');
  writingItem.textContent = fileName + (description ? ` - ${description}` : '');
  writingsList.appendChild(writingItem);
}
