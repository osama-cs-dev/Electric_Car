const form = document.getElementById('contentForm');
const contentList = document.getElementById('contentList');
const addContentButton = document.getElementById('addContent');

addContentButton.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const imageUrl = document.getElementById('imageUrl').value;

  if (title && description && imageUrl) {
    // Add content to the page
    const contentItem = document.createElement('div');
    contentItem.classList.add('content-item');

    contentItem.innerHTML = `
      <h3>${title}</h3>
      <img src="${imageUrl}" alt="${title}">
      <p>${description}</p>
      <button class="deleteContent">Delete</button>
    `;

    // Append to the content list
    contentList.appendChild(contentItem);

    // Clear form
    form.reset();

    // Add delete functionality
    contentItem.querySelector('.deleteContent').addEventListener('click', () => {
      contentList.removeChild(contentItem);
    });
  } else {
    alert('Please fill in all fields!');
  }
});
let contentData = JSON.parse(localStorage.getItem('content')) || [];

addContentButton.addEventListener('click', () => {
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const imageUrl = document.getElementById('imageUrl').value;

  if (title && description && imageUrl) {
    const newContent = { title, description, imageUrl };
    contentData.push(newContent);
    localStorage.setItem('content', JSON.stringify(contentData));
    
    // Refresh content list
    displayContent();
    form.reset();
  } else {
    alert('Please fill in all fields!');
  }
});

function displayContent() {
  contentList.innerHTML = '';
  contentData.forEach((content, index) => {
    const contentItem = document.createElement('div');
    contentItem.classList.add('content-item');

    contentItem.innerHTML = `
      <h3>${content.title}</h3>
      <img src="${content.imageUrl}" alt="${content.title}">
      <p>${content.description}</p>
      <button class="deleteContent" data-index="${index}">Delete</button>
    `;

    contentList.appendChild(contentItem);
  });

  document.querySelectorAll('.deleteContent').forEach(button => {
    button.addEventListener('click', (e) => {
      const index = e.target.dataset.index;
      contentData.splice(index, 1);
      localStorage.setItem('content', JSON.stringify(contentData));
      displayContent();
    });
  });
}

// Initialize content
displayContent();
