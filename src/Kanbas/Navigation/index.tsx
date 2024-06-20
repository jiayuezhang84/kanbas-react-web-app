// import React from 'react';
// import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { FaRegCircleUser, FaInbox } from "react-icons/fa6";
// import { BsGear } from "react-icons/bs";
// import { LiaBookSolid } from "react-icons/lia";
// import './style.css'; // Ensure the CSS file is correctly linked

// type NavLinkProps = {
//   id: string;
//   href: string;
//   icon: React.ElementType | string;
//   text: string;
//   target?: string;
// };

// const links: NavLinkProps[] = [
//   { id: 'neu', href: 'https://www.northeastern.edu/', icon: '/images/NEU.png', target: '_blank', text: '' },
//   { id: 'account', href: '/Kanbas/Account', icon: FaRegCircleUser, text: 'Account' },
//   { id: 'dashboard', href: '/Kanbas/Dashboard', icon: AiOutlineDashboard, text: 'Dashboard' },
//   { id: 'courses', href: '/Kanbas/Courses', icon: LiaBookSolid, text: 'Courses' },
//   { id: 'calendar', href: '/Kanbas/Calendar', icon: IoCalendarOutline, text: 'Calendar' },
//   { id: 'inbox', href: '/Kanbas/Inbox', icon: FaInbox, text: 'Inbox' },
//   { id: 'labs', href: '/Kanbas/Labs', icon: BsGear, text: 'Labs' }
// ];

// export default function KanbasNavigation() {
//   const location = useLocation();
//   const isActive = (href: string) => location.pathname === href || (href === '/Kanbas/Dashboard' && location.pathname === '/');

//   return (
//     <nav className="navbar">
//       <ul className="nav-list">
//         {links.map(link => {
//           const active = isActive(link.href);
//           return (
//             <li key={link.id} className={`nav-item ${active ? 'active' : ''}`}>
//               <RouterNavLink to={link.href} target={link.target || '_self'} className="nav-link">
//                 {typeof link.icon === 'string' ?
//                   <img src={link.icon} alt={link.id} className="icon" />
//                   :
//                   React.createElement(link.icon, {
//                     className: 'icon-svg',
//                     style: {
//                       color: active && link.id === 'account' ? 'red' : (link.id === 'account' ? 'white' : 'red'),
//                       fontSize: '24px'
//                     }
//                   })
//                 }
//                 <span>{link.text}</span>
//               </RouterNavLink>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// }
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];
  return (
    <div id="wd-kanbas-navigation" className="list-group rounded-0">
      <a id="wd-account-link" target="_blank" href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0">
        <img src="/images/NEU.png" width="75px" /></a>
      <Link key="/Kanbas/Account" to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
);}
