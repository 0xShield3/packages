import { usePrivy } from "@privy-io/react-auth";

const IndexPage = () => {
  const { login, logout, authenticated, user, ready } = usePrivy();

  if (!ready) return <div>Loading...</div>;

  if (authenticated && user)
    return (
      <div>
        <div>Logged in as {user?.wallet?.address}</div>
        <button onClick={logout}>Logout</button>
      </div>
    );

  return <button onClick={login}>Log in</button>;
};

export default IndexPage;
