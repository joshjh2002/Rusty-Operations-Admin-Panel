import { auth } from "../firebaseInit.js";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Navbar() {
  const router = useRouter();

  useEffect(() => {
    if (auth.currentUser) {
      document.getElementById("username").innerHTML = auth.currentUser.email;
    }
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="px-16 border-b">
      <div className="rusty-font grid grid-cols-2 gap-8 content-center p-6 ">
        <h1 className="rusty-font-title text-3xl">Rusty Operations</h1>
        <div className="flex flex-cols justify-end items-center">
          <p id="username" className="text-center">
            USERNAME
          </p>

          <svg
            className="h-8 w-8 text-red-500 cursor-pointer ml-4 hover:text-red-700 transition duration-500 ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleSignout}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
