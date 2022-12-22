export default class UserPhoto {
  constuctor(elem, onUpload) {
    this.elem = elem;
    this.onUpload = onUpload;

    this.elem.addEventListener('dragover', (e) => {
      if (e.dataTransfer.items.length && e.dataTransfer.items[0].kind === 'file') {
        e.preventDefault();
      }
    });

    this.elem.addEventListener('drop', (e) => {
      const file = e.dataTransfer.items[0].getAsFile();
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.addEventListener('load', () => this.onUpload(reader.result));
      e.preventDefault();
    });
  }

  set(photo) {
    this.elem.style.backgroundImage = `url(${photo})`;
  }
}
