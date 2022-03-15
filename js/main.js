(function($) {
  "use strict"; // Start of use strict

  function openLightBox() {
    $('#about').style.display = 'block';
  }

  function closeLightbox() {
    console.log(this)
    $('#about').attr('style', 'display: none')
  }

  $('a.nav-link').click(function(e) {
    $('.lightbox').each(function() {
      this.style.display = 'none'
    })

    var lightbox = this.dataset.lightbox
    $('#'+lightbox).attr('style', 'display: block')
  })

  $('span.close').click(function() {
    this.parentElement.style.display = 'none'
  })

  $(document).ready(function() {
    $('.skill').each(function(e) {
      var percentage = this.dataset.percentage
      var bar = this.querySelector('.progress-bar')
      var pDisplay = this.querySelector('.skill-info')
      $(bar).css('width', percentage + '%')
      $(pDisplay).css('width', percentage + '%')
    })
  })

})(jQuery);