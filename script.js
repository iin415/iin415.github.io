document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const navList = document.querySelector('nav ul');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });
  }

  let previewOverlay = document.getElementById('image-preview-overlay');
  let previewImage = document.getElementById('image-preview-image');

  if (!previewOverlay) {
    previewOverlay = document.createElement('div');
    previewOverlay.id = 'image-preview-overlay';
    previewOverlay.className = 'image-preview-overlay';
    previewOverlay.hidden = true;
    previewOverlay.innerHTML = `
      <div class="image-preview-modal">
        <button class="image-preview-close" type="button" aria-label="Close preview">&times;</button>
        <img id="image-preview-image" src="" alt="Enlarged preview" />
      </div>
    `;
    document.body.appendChild(previewOverlay);
  }

  previewImage = document.getElementById('image-preview-image');
  const closeButton = previewOverlay.querySelector('.image-preview-close');

  const closePreview = () => {
    previewOverlay.hidden = true;
    document.body.classList.remove('preview-open');
  };

  document.querySelectorAll('img').forEach((img) => {
    if (img.id === 'image-preview-image') return;

    img.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!previewOverlay || !previewImage) return;

      previewImage.src = img.src;
      previewImage.alt = img.alt || 'Enlarged preview';
      previewOverlay.hidden = false;
      document.body.classList.add('preview-open');
    });
  });

  closeButton?.addEventListener('click', closePreview);

  previewOverlay.addEventListener('click', (event) => {
    if (event.target === previewOverlay) {
      closePreview();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !previewOverlay.hidden) {
      closePreview();
    }
  });
});
