
// 回頂端按鈕出現
var xhr = new XMLHttpRequest();
xhr.open('GET', 'navbar.html', true);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById('navbar').innerHTML = xhr.responseText;
  }
};
xhr.send();

// r18二選一
function showConfirmationModal() {
  const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
  const confirmationModalYesButton = document.getElementById('confirmationModalYesButton');

  confirmationModalYesButton.addEventListener('click', function() {
      confirmationModal.hide();
  });

  confirmationModal.show();
}

function showConfirmationModal2() {
  const confirmationModal2 = new bootstrap.Modal(document.getElementById('confirmationModal2'));
  const confirmationModalYesButton3 = document.getElementById('confirmationModalYesButton3');

  confirmationModalYesButton3.addEventListener('click', function() {
      window.location.href = '09_doujinn.html';
  });

  confirmationModal2.show();
}


// RPG對話框放大圖片
function openModal(element) {
  var imageSrc = element.querySelector('img').getAttribute('data-image-src');
  document.getElementById('modalImage').setAttribute('src', imageSrc);
  $('#imageModal').appendTo('body').modal('show');
  $('body').addClass('modal-open');
}

$('.reply').on('click', function() {
  openModal(this);
});

$('#imageModal').on('hidden.bs.modal', function (e) {
  $('body').removeClass('modal-open');
});




