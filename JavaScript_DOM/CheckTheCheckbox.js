/* Extend the JavaScript code below to interact with the displayed HTML elements. Once you click the button, the checkbox should be checked */

{/* <input id="checkbox" disabled/>
<label for="checkbox">checkbox</label>
<button type="button" id="button">Verify Code</button> */}

const button = document.getElementById('button');
button.addEventListener('click', () => {
  // type in your code here
  const checkbox = document.getElementById('checkbox');
  checkbox.checked = true;

});

