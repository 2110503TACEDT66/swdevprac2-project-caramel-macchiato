import Swal from "sweetalert2";

export default async function registerUser(data: Object) {
  const response = await fetch(
    "https://presentation-day-1-caramel-macchiato.vercel.app/api/v1/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (!response.ok) {
    const ans = await  response.json();

    Swal.fire({
      title: "Error!",
      text: ans.message || "Register Failed",
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Success!",
      text: "Register successfully",
      icon: "success",
    });
    return await response.json();
  }
}
