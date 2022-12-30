import "../styling/global.css";
import { auth, provider } from "../firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";
interface isAuth {
  isAuth: boolean;
  setIsAuth: Function;
}

export const Login = ({ setIsAuth }: isAuth) => {
  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
    });
  };
  console.log(auth.currentUser);

  return (
    <button
      onClick={() => {
        signIn();
      }} className='sign-in-button'
    >
      Sign in
    </button>
  );
};
