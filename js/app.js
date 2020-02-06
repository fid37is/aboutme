function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  document.querySelector('#contact-btn').addEventListener('click', function(e) {
      alert('I\'m sorry you can\'t submit the form at the moment. please use the contact details on the right side of this page or below if you\'re on mobile')
  })