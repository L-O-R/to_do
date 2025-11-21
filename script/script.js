document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("loggedIn")) {
    window.location.href = "login.html";
    return;
  }

  const addFormBtn =
    document.getElementById("add_todo_btn");
  const logoutBtn = document.getElementById("logout_btn");
  const addModal = document.getElementById("addModal");
  const closeBtn = document.getElementById("close_btn");

  addFormBtn.addEventListener("click", () => {
    addModal.classList.remove("hidden");
  });
  closeBtn.addEventListener("click", () => {
    addModal.classList.add("hidden");
  });
});
