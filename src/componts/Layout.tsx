import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};
