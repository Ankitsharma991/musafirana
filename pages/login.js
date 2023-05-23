import { getProviders, signIn } from "next-auth/react";

function Login({ providers }) {
  console.log("Providers : ", providers);
  return (
    <div>
      <img
        className="w-52 mb-5"
        src="https://img.icons8.com/?size=512&id=iefkXAGbJmaP&format=png"
        alt="picture"
      />
      {/* {Object.values(providers).map((provider) => (
        <div>
          <button>Login with {provider.name}</button>
        </div>
      ))} */}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
