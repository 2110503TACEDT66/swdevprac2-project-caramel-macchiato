export default async function getUserProfile(token: string) {
  const response = await fetch(
    "https://presentation-day-1-caramel-macchiato.vercel.app/api/v1/auth/me",
    {
      method: "GET",
      cache: "no-cache",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  
  return await response.json();
}
