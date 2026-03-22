const updateResumeBtn = document.getElementById("updateResumeBtn");

updateResumeBtn?.addEventListener("click", () => {
  const newResumeLink = prompt("Enter updated resume file URL:");
  if (!newResumeLink) return;

  const downloadLink = document.querySelector('a[download]');
  if (downloadLink) {
    downloadLink.href = newResumeLink;
    alert("Resume link updated successfully.");
  }
});
