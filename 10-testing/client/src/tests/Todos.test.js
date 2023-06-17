import { render, screen } from "@testing-library/react";
import Todos from "../components/Todos";
import { MemoryRouter } from "react-router-dom";
import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();

jest.mock("@auth0/auth0-react", () => ({
  ...jest.requireActual("@auth0/auth0-react"),
  Auth0Provider: ({ children }) => children,
  useAuth0: () => {
    return {
      isLoading: false,
      user: { sub: "foobar" },
      isAuthenticated: true,
      loginWithRedirect: jest.fn(),
    };
  },
}));

jest.mock("../AuthTokenContext", () => ({
  useAuthToken: () => {
    return { accessToken: "123" };
  },
}));

fetch.mockResponse(
  JSON.stringify([
    { id: 1, title: "item 1", completed: false },
    { id: 2, title: "item 2", completed: false },
    { id: 3, title: "item 3", completed: false },
  ])
);

test("renders todos list", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Todos />
    </MemoryRouter>
  );

  const todoItem = await screen.findByText("item 1");
  const todoItem2 = await screen.findByText("item 2");
  const todoItem3 = await screen.findByText("item 3");

  expect(todoItem).toBeInTheDocument();
  expect(todoItem2).toBeInTheDocument();
  expect(todoItem3).toBeInTheDocument();
});
