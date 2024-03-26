export default async function UpdateReservation(
  id: string,
  token: string,
  reserveDate: Date
) {
  const body = JSON.stringify({ reserveDate }); // Construct the request body

  const response = await fetch(
    "https://presentation-day-1-caramel-macchiato.vercel.app/api/v1/reservation/" +
      id,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: body, // Include the request body
    }
  );

  if (!response.ok) {
    alert("Update failed");
  } else {
    alert("Update successful for reservation with ID: " + id);
    return await response.json();
  }
}
