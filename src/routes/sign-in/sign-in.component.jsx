import { async } from "@firebase/util";
import Button from "../../components/button/buttton.component";

import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-in Page</h1>
      <button onClick={logGoogleUser}> Sign in with google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
