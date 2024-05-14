"use client";

import "./Sidebar.scss";
import { MdOutlineLocalLibrary } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAssessment } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { PiChatsTeardrop } from "react-icons/pi";
import { GrUserManager } from "react-icons/gr";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  return (
    <div className="side-container">
      <ul>
        <li onClick={() => router.push("/")}>
          <IoHomeOutline />
          Home
        </li>

        <li onClick={() => router.push("/library")}>
          <MdOutlineLocalLibrary />
          Library
        </li>

        <li>
          <MdOutlineAssessment />
          Assignment
        </li>

        <li>
          <HiOutlineDocumentReport />
          Reports
        </li>

        <li>
          <PiChatsTeardrop />
          Chats
        </li>

        <li>
          <GrUserManager />
          User Management
        </li>
      </ul>
    </div>
  );
}
