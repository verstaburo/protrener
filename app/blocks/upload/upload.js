/* eslint-disable max-len */
const $ = window.$;

export default function uploadFile() {
  function readURL(file, elem) {
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $(elem).find('.upload__image').attr('src', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function validateImage(file, elem) {
    if (file) {
      const validSize = $(elem).attr('data-correct-size');
      const validWidth = $(elem).attr('data-correct-resolution').split('x')[0];
      const validHeight = $(elem).attr('data-correct-resolution').split('x')[1];

      if (file.type.split('/')[0] !== 'image') {
        $(elem).find('[data-error="noimage"]').addClass('error');
        $(elem).closest('.form__row').addClass('error-label');
        return false;
      }

      if (file.size > validSize) {
        $(elem).find('[data-error="filesize"]').addClass('error');
        $(elem).closest('.form__row').addClass('error-label');
        return false;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        const image = new Image();
        image.src = e.target.result;
        image.onload = function () {
          const height = this.height;
          const width = this.width;
          if (height < validHeight || width < validWidth) {
            $(elem).find('[data-error="resolution"]').addClass('error');
            $(elem).closest('.form__row').addClass('error-label');
            return false;
          }
          return true;
        };
      };

      $(elem).find('[data-error="noimage"]').removeClass('error');
      $(elem).find('[data-error="filesize"]').removeClass('error');
      $(elem).find('[data-error="resolution"]').removeClass('error');
      $(elem).closest('.form__row').removeClass('error-label');
    }
    return true;
  }

  $('.upload input').on('change', function () {
    if (validateImage(this.files[0], $(this).closest('.upload'))) {
      readURL(this.files[0], $(this).closest('.upload'));
      $(this).closest('.upload').addClass('preload');
    }
  });

  $('.upload__dropzone').on('drag dragstart dragend dragover dragenter dragleave drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
  })
  .on('dragover dragenter', function () {
    $(this).addClass('dragover');
  })
  .on('dragleave dragend drop', function () {
    $(this).removeClass('dragover');
  })
  .on('drop', function (e) {
    const droppedFiles = e.originalEvent.dataTransfer.files;
    if (validateImage(droppedFiles[0], $(this).closest('.upload'))) {
      const reader = new FileReader();
      const tElem = $(this).closest('.upload');
      reader.readAsDataURL(droppedFiles[0]);
      reader.onload = function (evt) {
        $(tElem).append(`<input type="hidden" name="file[]" value="${evt.target.result}">`);
      };
      readURL(droppedFiles[0], $(this).closest('.upload'));
      $(this).closest('.upload').addClass('preload');
    }
  });
}
/* eslint-enable max-len */
