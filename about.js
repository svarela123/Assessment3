console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('click', () => {
	alert('Form has been submitted successfully!');
  });

  let photo = document.querySelector('#cat');

photo.addEventListener('mouseover', () => {
	alert('give the user a compliment');
  });