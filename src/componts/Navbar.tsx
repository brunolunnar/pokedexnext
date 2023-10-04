import { NavBarStyled } from "@/styles/components/navbar";
import Link from "next/link";

export const Navbar = () => {
  return (
    <NavBarStyled>
      <div className="logo">
        <p>Logo</p>
      </div>
      <ul className="link-itens">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </NavBarStyled>
  );
};
