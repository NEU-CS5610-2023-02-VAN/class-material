import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Profile from "../components/Profile";

let mockIsAuthenticated = true;

jest.mock("@auth0/auth0-react", () => ({
  ...jest.requireActual("@auth0/auth0-react"),
  Auth0Provider: ({ children }) => children,
  useAuth0: () => {
    return {
      isLoading: false,
      user: {
        sub: "subId",
        name: "cristian",
        email: "cris@gmail.com",
        email_verified: true,
      },
      isAuthenticated: mockIsAuthenticated,
      loginWithRedirect: jest.fn(),
    };
  },
}));

test("renders Profile", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Profile />
    </MemoryRouter>
  );

  expect(screen.getByText("Name: cristian")).toBeInTheDocument();
  expect(screen.getByText("📧 Email: cris@gmail.com")).toBeInTheDocument();
  expect(screen.getByText("🔑 Auth0Id: subId")).toBeInTheDocument();
  expect(screen.getByText("✅ Email verified: true")).toBeInTheDocument();
});
