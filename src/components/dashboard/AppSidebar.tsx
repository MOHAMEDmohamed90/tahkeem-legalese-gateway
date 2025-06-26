
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Scale, Plus, MessageSquare, CreditCard, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    title: "قضاياي",
    url: "/dashboard",
    icon: Scale,
  },
  {
    title: "بدء قضية جديدة",
    url: "/case-submission",
    icon: Plus,
  },
  {
    title: "الرسائل",
    url: "/messages",
    icon: MessageSquare,
  },
  {
    title: "المدفوعات",
    url: "/payment",
    icon: CreditCard,
  },
  {
    title: "ملفي الشخصي",
    url: "/arbitrator/:id",
    icon: User,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Scale className="h-8 w-8 text-tahkeem-blue-600" />
          <span className="text-xl font-bold arabic-text">E-Tahkeem</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="arabic-text text-right">القائمة الرئيسية</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-3 arabic-text">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <Button onClick={() => {
          window.location.href = "/";
        }} variant="outline" className="w-full arabic-text">
          تسجيل الخروج
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
