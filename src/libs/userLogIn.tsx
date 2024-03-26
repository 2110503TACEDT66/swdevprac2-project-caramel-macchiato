
export default async function userLogIn( username:string, userPassword:string) {
  const response = await fetch(
    "https://presentation-day-1-caramel-macchiato.vercel.app/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: userPassword,
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to login");
  }
  return await response.json();
}
