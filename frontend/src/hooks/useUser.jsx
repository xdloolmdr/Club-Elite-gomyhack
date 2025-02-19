import { setUser } from "@/redux/Slices/user";
import { useDispatch, useSelector } from "react-redux";
export default function useUser() {
  const { user, isLoggedIn } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return {
    setUser: (newUser) => {
      dispatch(setUser(newUser));
    },
    user,
    isLoggedIn,
  };
}
