export default async function DeleteReservation(id: string, token: string) {
  const response = await fetch(
    "https://presentation-day-1-caramel-macchiato.vercel.app/api/v1/reservation/" +
      id ,
    {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    alert("nooooo");
  } else {
    alert("delete"+id+"success");
    return await response.json();
  }
}
