export const getToken = ()=>{
  const {user} = JSON.parse(localStorage.getItem("USER_ID"));
  return user.token;
};