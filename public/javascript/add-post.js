async function newPostFormHandler(event) {
  event.preventDefault();

  const title = document.getElementById('post-title').value.trim();
  const post_contents = document.getElementById('post-contents').value.trim();

  const response = await fetch('/api/posts', {
    method: 'Post',
    body: JSON.stringify({ title, post_contents }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#post-btn')
  .addEventListener('click', newPostFormHandler);
