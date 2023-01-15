export const saveOnLogin = (user) => {
  localStorage.setItem("testytest", JSON.stringify(user));
}

export const retrieveUser = () => {
  return JSON.parse(localStorage.getItem("testytest"))
}

export const clearUser = () => {
  localStorage.setItem("testytest", null)
}