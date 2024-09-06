import type { ReactNode } from "react";

type TConainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TConainerProps) => {
  return <div className="max-w-screen-lg mx-auto h-screen">{children} </div>;
};
export default Container;
