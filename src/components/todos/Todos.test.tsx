import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { getTodos } from "../../hooks/todos/getTodos";
import Todos from "./Todos";

// getTodos 모킹
jest.mock("../../hooks/todos/getTodos");

const mockTodos = [
  { id: 1, title: "Todo 1", completed: false },
  { id: 2, title: "Todo 2", completed: true },
];

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderWithQueryClient = (component: React.ReactElement) => {
  return render(<QueryClientProvider client={queryClient}>{component}</QueryClientProvider>);
};

describe("Todos", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("정상적으로 할일 목록을 렌더링한다", () => {
    (getTodos as jest.Mock).mockReturnValue({
      todos: mockTodos,
      isPending: false,
      isError: false,
    });

    const { getByText } = renderWithQueryClient(<Todos />);

    expect(getByText("Todo 1")).toBeInTheDocument();
    expect(getByText("Todo 2")).toBeInTheDocument();
  });

  test("로딩 중일 때 로딩 상태를 보여준다", () => {
    (getTodos as jest.Mock).mockReturnValue({
      todos: [],
      isPending: true,
      isError: false,
    });

    const { getByText } = renderWithQueryClient(<Todos />);

    expect(getByText(/로딩/i)).toBeInTheDocument();
  });
});
