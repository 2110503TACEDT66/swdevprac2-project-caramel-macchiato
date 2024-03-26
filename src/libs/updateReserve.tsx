import Swal from "sweetalert2";
export default async function UpdateReservation(
  id: string,
  token: string,
  date: string
) {
  const body = JSON.stringify({ reserveDate: date }); // Construct the request body

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
    Swal.fire({
      title: "Error!",
      text: "fucck id " + id,
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Success!",
      text: "Reserved successfully",
      icon: "success",
    });

    if (!response.ok) {
      alert("Update failed");
    } else {
      alert("Update successful for reservation with ID: " + id);
      return await response.json();
    }
  }
}
