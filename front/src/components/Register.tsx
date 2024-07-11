import { useEffect } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/clerk-react";
import { useCreateUserMutation } from "../gql/file";

const RegisterComponent = () => {
  const { user } = useUser();
  const [createUser, { data, loading, error }] = useCreateUserMutation();

  useEffect(() => {
    if (user) {
      const username = user.username;
      const password = "test"; // Ensure you handle passwords securely in your real application

      // Call the mutation function with the username and password
      createUser({
        variables: {
          username,
          password,
        },
      })
        .then((response) => {
          // Handle the response, e.g., show a success message
        })
        .catch((error) => {
          // Handle any errors, e.g., show an error message
        });
    }
  }, [user, createUser]);

  return (
    <div>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
};

export default RegisterComponent;
