const API_END_POINT =
  "https://port-0-todo-server-lzyb7pqu6942a3da.sel4.cloudtype.app/todoList";
export const request = (url = "") => {
  return fetch(`${API_END_POINT}${url}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`${res.status}Error`);
    })
    .catch((error) => console.log(error));
};
