import "@testing-library/jest-dom";
import userLogIn from "@/libs/userLogIn";
import getUserProfile from "@/libs/getUserProfile";
import { screen, render, waitFor, cleanup } from "@testing-library/react";
import TopMenu from "@/components/TopMenu";
import Home from "@/app/page";
import Booking from "@/app/booking/page";

describe("Remote User Log-In", () => {
  var logInPromise: any;
  var logInJsonResult: any;

  beforeAll(async () => {
    const email = "casassaddl@gmail.com";
    const password = "123456";
    logInPromise = userLogIn(email, password);
    logInJsonResult = await logInPromise;
  });

  it("userLogIn must return correct results", () => {
    expect(logInJsonResult.success).toBeTruthy();
  });

  it("must get correct user profile", async () => {
    const profile = await getUserProfile(logInJsonResult.token);
    expect(profile.data.name).toEqual("caraasasddl");
    expect(profile.data.tel).toEqual("081");
    expect(profile.data.role).toEqual("user");
  });
  
});
