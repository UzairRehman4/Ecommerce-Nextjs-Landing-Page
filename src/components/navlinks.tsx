"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Searchinput from "./searchinput";
// import { Icons } from "@/components/icons"

// Array of components with title, href, and description
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Tops",
    href: "#",
    description:
      "A Collection of beautiful tops for your wardrobe to sleek your look",
  },
  {
    title: "Pants",
    href: "#",
    description:
      "A Collection of beautiful Pants for your wardrobe to sleek your look",
  },
  {
    title: "Accessories/Jewelry",
    href: "#",
    description:
      "A Collection of beautiful Jewelry for your wardrobe to sleek your look",
  },
  {
    title: "Shoes",
    href: "#",
    description:
      "A Collection of beautiful Shoes for your wardrobe to sleek your look",
  },
];

// Function component: NavigationMenuDemo
// Renders a navigation menu with multiple items
export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-3 text-base ">
        {/* NavigationMenuItem: Home */}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* NavigationMenuItem: Women */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Women</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {/* Render components dynamically */}
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* NavigationMenuItem: men */}
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Men
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* NavigationMenuItem: kids */}
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Kids
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* NavigationMenuItem: About */}
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* NavigationMenuItem: Contact */}
        <NavigationMenuItem>
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <Searchinput />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// Function component: ListItem
// Renders a list item for the navigation menu
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block bg-slate-300 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-400 hover:text-black focus:bg-slate-300 focus:text-black text-bold",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none group-hover:text-black">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-black">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
