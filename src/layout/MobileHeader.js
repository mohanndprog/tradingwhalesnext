import Link from "next/link";
import { useState } from "react";
import { Blog, Courses, Home, Pages } from "./Menu";

const MobileHeader = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <ul className="navigation clearfix d-block d-lg-none mobile-header">

      <li>
        <Link href="/">الرئيسية</Link>
      </li>
      <li>
        <Link href="/course-grid">الدورات</Link>
      </li>
      <li>
        <Link href="/faqs">الاسئلة الشائعة</Link>
      </li>
      <li>
        <Link href="/contact">تواصل معنا</Link>
      </li>
      <li>
        <Link href="/personal-account-data">حسابي</Link>
      </li>
      <li>
          <Link href="/login">
              <a  className="theme-btn text-center mb-2 mt-2">تسجيل دخول </a>
           </Link>
      </li>
      <li>
           <Link href="/signup">
              <a className="theme-btn style-two text-center" >انشاء حساب </a>
           </Link>
      </li>

    </ul>
  );
};
export default MobileHeader;
