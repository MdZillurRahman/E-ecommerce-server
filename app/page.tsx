import { useSession, signIn, signOut } from "next-auth/react";

// export default function Component() {
//   if(session) {
//     return <>
//       Signed in as {session.user.email} <br/>
//       <button onClick={() => signOut()}>Sign out</button>
//     </>
//   }

// }
export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button className="bg-white p-2 rounded">Login With Google</button>
        </div>
      </div>
    );
  }

  return <div>Logged in as {session.user.email}</div>;
}
