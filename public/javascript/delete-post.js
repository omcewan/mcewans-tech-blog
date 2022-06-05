async function deletePostHandler(event) {
  event.preventDefault();
  const id = event.target.getAttribute('data-delete-id');
  console.log(id)
  const response = await fetch(`/api/posts/${id}`, {
    method: 'delete',
    body: JSON.stringify({id}),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    window.location.reload('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('.dashboard-posts')
  .addEventListener('click', deletePostHandler);
