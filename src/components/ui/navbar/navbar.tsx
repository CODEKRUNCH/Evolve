import {
  LayoutDashboard,
  ListTodo,
  MessageSquare,
  Users,
  Settings,
  BarChart,
} from 'lucide-react';
import * as React from 'react';

export type NavbarProps = {};

export const Navbar = (props: NavbarProps) => {
  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard />, active: true },
    { name: 'Tasks', icon: <ListTodo /> },
    { name: 'Analytics', icon: <BarChart /> },
    { name: 'Messages', icon: <MessageSquare /> },
    { name: 'Partner Profile', icon: <Users /> },
    { name: 'Settings', icon: <Settings /> },
  ];

  return (
    <aside className="fixed left-0 top-16 z-40 w-64 -translate-x-full border-r bg-card transition-transform duration-300 lg:translate-x-0">
      <nav className="flex flex-col gap-2 p-4">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`inline-flex h-9 items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition-all 
              hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
              disabled:pointer-events-none disabled:opacity-50
              ${
                item.active
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                  : 'text-muted-foreground'
              }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};
