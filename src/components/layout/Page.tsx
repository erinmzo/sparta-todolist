import { PropsWithChildren } from "react";

function Page({ children }: PropsWithChildren) {
  return <div className="min-h-screen w-full max-w-[1440px] mx-auto px-8 py-8">{children}</div>;
}

export default Page;
