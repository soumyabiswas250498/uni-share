import { ReactNode } from "react";
import { ModeToggle } from "../../mode-toggle";

interface IProps {
  children: ReactNode;
  isLoggedIn: boolean;
}

function Header({ children, isLoggedIn }: IProps) {
  console.log(isLoggedIn, "***");
  return (
    <div className="w-screen">
      <div className="flex justify-between w-full border border-red-200">
        <ModeToggle />
      </div>
      {children}
    </div>
  );
}

export default Header;
