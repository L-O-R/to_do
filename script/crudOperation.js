import renderTodo from "./RenderTodo.js";

const user_name = localStorage.getItem("name") || "";
function DataUpdate() {
  const user_list =
    JSON.parse(localStorage.getItem("userList")) || [];
  return user_list;
}

let user_list = DataUpdate();

let index_of_the_user_obj = user_list.findIndex(
  (user) => user.username === user_name
);

const User_details = user_list.find(
  (user) => user.username === user_name
);

export const deletTodo = (id, data) => {
  console.log(id, data);
  let todo = data.findIndex((el) => el.title === id);

  data.splice(todo, 1);

  console.log(data);

  User_details.todoList = data;
  user_list[index_of_the_user_obj] = User_details;

  localStorage.setItem(
    "userList",
    JSON.stringify(user_list)
  );
  renderTodo(User_details.todoList);
};
