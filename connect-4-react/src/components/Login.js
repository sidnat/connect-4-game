import { useState } from "react";
import ProfilePage from './profile-page';
import { useNavigate } from "react-router-dom";

const Login = () => {
   const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const users = [{ username: "will@gmail.com", password: "password" }];
  const handleSubmit = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.username === username);
   if (account && account.password === password) {
        localStorage.setItem("authenticated", true);
        navigate("/profilepage");
    }
  };
  return (
      <div>
        <form onSubmit={handleSubmit}>
   <input
   type="text"
   name="Username"
   value={username}
   onChange={(e) => setusername(e.target.value)}
   />
   <input
   type="password"
   name="Password"
   onChange={(e) => setpassword(e.target.value)}
   />
   <input type="submit" value="Submit" />
   </form>
      </div>
    );
  };


export default Login;