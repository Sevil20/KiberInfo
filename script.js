
function createAnchorTag() {
    var anchorContainer = document.querySelector('.btn-info');

    // Create the anchor element
    var anchor = document.createElement('a');
    anchor.href = '/assets/info.html'; // Set the href attribute

    // Append the anchor element to the container
    anchorContainer.appendChild(anchor);
    window.location.href = anchor.href;

  }

  // Add event listener to the button
  var createButton = document.querySelector('.btn-info');
  createButton.addEventListener('click', createAnchorTag);



  function createAnchorTag1() {
    var anchorContainer1 = document.querySelector('.btn-img');

    // Create the anchor element
    var anchor = document.createElement('a');
    anchor.href = '/assets/images.html'; // Set the href attribute

    // Append the anchor element to the container
    anchorContainer1.appendChild(anchor);
    window.location.href = anchor.href;

  }

  // Add event listener to the button
  var createButton2 = document.querySelector('.btn-img');
  createButton2.addEventListener('click', createAnchorTag1);