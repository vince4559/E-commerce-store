import { useSelector } from "react-redux";
import { selectCurrentUser } from "./authSlice";
import { Link } from "react-router-dom";

const Welcome = () => {
    const user = useSelector(selectCurrentUser);
    const welcome = user ?  `Welcome ${user}!` : 'Welcome'
  return (
    <section>
        <h1>{welcome}</h1>
        <Link to={'/dashboard'}>Dashboard</Link>
    </section>
  )
}

export default Welcome
