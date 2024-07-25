import { useContext} from "react";
import UserContext from "../context/UserContext";

const ChangeUser = () => {
   const {user, setUser} = useContext(UserContext);
  return <button onClick={() => setUser(user === 'Alex' ? 'Vita' : 'Alex')}>ChangeUser</button>
};

export default ChangeUser;
