export function SignedInPage() {
  type User = {
    username: string;
    email: string;
    password: string;
    transactions: [];
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("http://localhost:4000/sign-up", {
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
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username?"
          required
        ></input>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email?"
          required
        ></input>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password?"
          required
        ></input>
        <button>Sign Up</button>
      </form>
    </>
  );
}
