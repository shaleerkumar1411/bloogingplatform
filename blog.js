const blogForm = document.getElementById('blogForm');

blogForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  // Store the values in local storage
  localStorage.setItem('submittedTitle', title);
  localStorage.setItem('submittedContent', content);

  // Redirect to the confirmation page
  window.location.href = 'submission.html';
});
