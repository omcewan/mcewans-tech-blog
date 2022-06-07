async function addCommentHandler(event) {
  event.preventDefault();

  const comment_contents = document
    .getElementById('post-comments')
    .value.trim();

  let location = window.location.href.split('/');
  const post_id = location[location.length - 1];

  const response = await fetch('/api/comments', {
    method: 'post',
    body: JSON.stringify({ comment_contents, post_id }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .getElementById('comment-btn')
  .addEventListener('click', addCommentHandler);
