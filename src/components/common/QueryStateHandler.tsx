import { ReactNode } from "react";
import Error from "./Error";
import Loading from "./Loading";

type QueryStateHandlerProps<TData> = {
  data: TData | undefined | null;
  isPending: boolean;
  isError: boolean;
  children: ReactNode;
};

function QueryStateHandler<TData>({ data, isPending, isError, children }: QueryStateHandlerProps<TData>) {
  if (!data) return <Loading />;
  if (isPending) return <Loading />;
  if (isError) return <Error />;
  return <>{children}</>;
}
export default QueryStateHandler;
