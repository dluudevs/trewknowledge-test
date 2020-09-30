const toggleMobileMenu = () => {
  $('.toggle-mobile--open').click(function() {
    this.classList.add('inactive')
    $('.toggle-mobile--close').addClass('active')
  })

  $('.toggle-mobile--close').click(function() {
    this.classList.remove('active')
    $('.toggle-mobile--open').removeClass('inactive')
  })
}

const toggleMobileModals = () => {
  // Language Toggle
  $('.languages__toggle--mobile').click(() => {
    $('#languages-mobile').addClass('active')
    $('html').addClass(['is-reveal-open', 'zf-has-scroll'])
  })
  $('#languages-mobile > .close-button').click(() => {
    $('html').removeClass(['is-reveal-open', 'zf-has-scroll'])
  })
  
  // Countries Toggle
  $('.country__toggle--mobile').click(() => {
    $('#country-select').addClass('active')
    $('html').addClass(['is-reveal-open', 'zf-has-scroll'])
  })
  $('#country-select > .close-button').click(() => {
    $('html').removeClass(['is-reveal-open', 'zf-has-scroll'])
  })
}

$(document).foundation();
$(document).ready(() => {
  toggleMobileMenu()
  toggleMobileModals()
})