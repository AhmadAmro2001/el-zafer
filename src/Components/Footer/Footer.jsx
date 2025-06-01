import React, { useEffect, useState } from "react";
import style from "./Footer.module.css";
import footerBg from "../../assets/footer-img.png";
export default function Footer() {
  const [data, setData] = useState();
  useEffect(() => {}, []);
  return (
    <>
      <footer
        className="bg-cover h-[559px] w-full bg-center bg-no-repeat   text-white p-8"
        style={{ backgroundImage: `url(${footerBg})` }}
      >
        <p className="text-center">© 2025 El Zafer. All rights reserved.</p>
      </footer>
    </>
  );
}
