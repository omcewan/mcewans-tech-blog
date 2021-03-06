async function deletePostHandler(event) {
  event.preventDefault();

  let location = window.location.href.split('/');
  const id = location[location.length - 1];

  const response = await fetch(`/api/posts/${id}`, {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    window.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#delete-btn')
  .addEventListener('click', deletePostHandler);
