document.addEventListener('DOMContentLoaded', function() {
    var downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', function() {
      var fileUrl = './img/ResumeDurga.pdf'; 
      window.open(fileUrl);
    });
  });
  