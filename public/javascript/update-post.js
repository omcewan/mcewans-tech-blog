async function deletePostHandler(event) {
  event.preventDefault();

  let location = window.location.href.split('/');
  const id = location[location.length - 1];
  const title = document.getElementById('post-title').value.trim();
  const post_contents = document.getElementById('post-contents').value.trim();

  const response = await fetch(`/api/posts/${id}`, {
    method: 'put',
    body: JSON.stringify({ title, post_contents }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    window.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#update-btn')
  .addEventListener('click', deletePostHandler);
