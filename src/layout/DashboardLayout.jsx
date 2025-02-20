import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  LogOut,
  Menu,
} from "lucide-react";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  const MenuItems = () => (
    <div className="p-4 space-y-4">
      <Button variant="ghost" className="w-full justify-start space-x-2">
        <LayoutDashboard className="h-5 w-5" />
        job Provider
      </Button>

      <Button variant="ghost" className="w-full justify-start space-x-2">
        <Users className="h-5 w-5" />
        <span>Job Seeker</span>
      </Button>

      <Button
        variant="ghost"
        className="w-full justify-start space-x-2"
      ></Button>

      <div className="absolute bottom-4 left-4 right-4">
        <Button
          variant="ghost"
          className="w-full justify-start space-x-2 text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar for Mobile */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="lg:hidden">
          <ScrollArea className="h-full">
            <MenuItems />
          </ScrollArea>
        </SheetContent>
      </Sheet>

      {/* Sidebar for Desktop */}
      <aside className="hidden lg:fixed lg:w-64 lg:h-screen lg:bg-white lg:border-r lg:flex">
        <ScrollArea className="h-full w-full">
          <MenuItems />
        </ScrollArea>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64">
        <div className="p-6 bg-white min-h-screen">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
