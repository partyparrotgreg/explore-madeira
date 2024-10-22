"use client";
import { LogoMadeiraExplore } from "@/assets/brand/LogoMadeiraExplore";
import { nav } from "@/lib/nav";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "../ui/drawer";
import { Separator } from "../ui/separator";

export function MainNavigation() {
  return (
    <div className="flex flex-row justify-between bg-background/80  backdrop-blur-3xl items-center h-16 md:h-20 sticky top-0 z-10 -mx-3 px-3 md:-mx-0 md:px-0">
      <div className="flex flex-row gap-6">
        <Link href="/" className="block">
          <LogoMadeiraExplore className="h-12" />
        </Link>
        <div className="flex-row gap-4 hidden md:flex items-center">
          <DesktopMenu />
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <Button variant={"outline"}>Sign in</Button>
        <Button variant={"solid"}>Get started</Button>
        <div className="hidden md:block">
          <ModeToggle />
        </div>
        <div className="block md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button size={"icon"}>
                <MenuIcon />
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full ">
                <DrawerHeader>
                  <LogoMadeiraExplore className="h-10" />
                </DrawerHeader>

                <DrawerFooter>
                  <MobileMenu />
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

const MobileMenu = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      {nav.map((item) => (
        <DrawerClose asChild>
          <Button
            variant={"outline"}
            onClick={() => router.push(item.href)}
            key={item.slug}
          >
            {item.title}
          </Button>
        </DrawerClose>
      ))}

      <Separator />
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

const DesktopMenu = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-row gap-2">
      {nav.map(({ href, icon, slug, title }) => {
        const Icon = icon;
        return (
          <Link href={href} legacyBehavior passHref>
            <Button variant={pathname === href ? "solid" : "ghost"}>
              <Icon size={16} className="mr-2" /> {title}
            </Button>
          </Link>
        );
      })}
    </div>
  );
};
