async function deletePostHandler(event) {
  event.preventDefault();
  // const id = document.querySelector('value').value;
  const idEl = document.getElementsByClassName('delete-btn')
  const id = idEl.getAttribute('value')
  console.log(idEl);
  // const response = fetch('api/posts/:id', {
  //   method: 'delete',
  //   body: JSON.stringify({ id }),
  //   headers: { 'Content-Type': 'application/json' },
  // });

  // if (response.ok) {
  //   document.location.replace('/dashboard');
  // } else {
  //   alert(response.statusText);
  // }
}

// document
//   .querySelector('.delete-btn')
//   .addEventListener('click', deletePostHandler);
