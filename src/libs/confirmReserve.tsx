import Swal from "sweetalert2";

export default async function Reserve(id: string, token: string, date: string) {
  const response = await fetch(
    "https://presentation-day-1-caramel-macchiato.vercel.app/api/v1/workingspace/" +
      id +
      "/reservation",
    {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        reserveDate: date,
      }),
    }
  );
  if (!response.ok) {
    const ans = await response.json();

    Swal.fire({
      title: "Error!",
      text: ans.message || "Register Failed",
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Success!",
      text: "Reserved successfully",
      icon: "success",
    });
    return await response.json();
  }
}
