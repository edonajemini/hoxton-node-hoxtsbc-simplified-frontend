import { useEffect, useState } from "react";

type Transactions = {
  id: number;
  amount: number;
  userId: number;
};
type User = {
  id: number;
  username: string;
  email: string;
  password: string;
  transactions: [];
};
export function Login() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((resp) => resp.json())
      .then((usersFromServer) => setUsers(usersFromServer));
  }, []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("http://localhost:4000/sign-in", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: e.target.username.value,
              email: e.target.email.value,
              password: e.target.password.value,
            }),
          })
            .then((rsp) => rsp.json())
            .then((data) => {
              if (data.error) {
                alert(data.error);
              } else {
                data;
              }
            });
        }}
      >
        <h2>Log In Form</h2>
        <label>
          Username: <input type="username" name="username" required />
        </label>
        <label>
          Email: <input type="email" name="email" required />
        </label>

        <label>
          Password: <input type="password" name="password" required />
        </label>

        <button>Log In</button>
      </form>
    </>
  );
}
