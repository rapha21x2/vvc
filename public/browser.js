
document.addEventListener("click", function(e) {
  // Delete Feature
  
    if (confirm("Do you really want to delete this item permanently?")) {
      axios.post('/delete-item', {id: e.target.getAttribute("data-id")}).then(function () {
        e.target.parentElement.parentElement.remove()
      }).catch(function() {
        console.log("Please try again later.")
      })
    }
  
})