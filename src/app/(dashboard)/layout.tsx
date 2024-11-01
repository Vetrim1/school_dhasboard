import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      {/* LEFT SIDEBAR */}
      {/* <div className="bg-slate-200 basis-1/6 h-full">Sidebar</div> */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link href={"/"} className="flex items-center justify-center lg:justify-start gap-2">
        <Image src={"/logo.png"} alt="logo" width={32} height={32} />
        <span className="hidden lg:block">Vetri School</span>
        </Link>
        <Menu/>
      </div>
      {/* content */}
      {/* <div className="bg-slate-500 basis-4/6 h-full">
      {children}
      </div> */}
      {/* RIGHT CONTENT */}
      {/* <div className="bg-slate-100 basis-1/6 h-full">Rightside</div> */}
      <div className="bg-[#F7F8FA] w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
