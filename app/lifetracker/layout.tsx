'use client'
import SideBar from "@/components/ui/SideBar";
import User from "@/components/ui/User";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <div className="flex flex-col h-screen w-full">
      <main className="flex-1 p-5 overflow-y-auto">
      <div className="flex justify-between">
        <SideBar />
          <div>
        {children}
          </div>
        <div>
          </div>
        </div>
      </main>
      <footer className="text-center text-xs p-3 bg-gray-100">
        © 2024 Tom
      </footer>
    </div>
  );
}



