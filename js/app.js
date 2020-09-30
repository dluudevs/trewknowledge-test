const toggleMobile = () => {
  $('.toggle-mobile--open').click(function() {
    this.classList.add('inactive')
    $('.toggle-mobile--close').addClass('active')
  })

  $('.toggle-mobile--close').click(function() {
    this.classList.remove('active')
    $('.toggle-mobile--open').removeClass('inactive')
  })
}

$(document).foundation();
$(document).ready(() => {
  toggleMobile()
})