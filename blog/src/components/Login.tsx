import "../styling/global.css";
import { auth, provider } from "../firebase/firebase-config";
import { signInWithRedirect } from "firebase/auth";
interface isAuth {
  isAuth: boolean;
  setIsAuth: Function;
}

export const Login = ({ setIsAuth }: isAuth) => {
  const signIn = () => {
    signInWithRedirect(auth, provider).then((result) => {
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
      sign in
    </button>
  );
};
