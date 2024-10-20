"use client";
import { LogoMadeiraExplore } from "@/assets/brand/LogoMadeiraExplore";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
    <div className="flex flex-row justify-between bg-background items-center h-16 md:h-20 sticky top-0 z-10 -mx-3 px-3 md:-mx-0 md:px-0">
      <div className="flex flex-row gap-6">
        <Link href="/" className="block">
          <LogoMadeiraExplore className="h-10" />
        </Link>
        <div className="flex-row gap-4 hidden md:flex">
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
      <DrawerClose asChild>
        <Button variant={"outline"} onClick={() => router.push("/regions")}>
          Regions
        </Button>
      </DrawerClose>
      <DrawerClose asChild>
        <Button variant={"outline"} onClick={() => router.push("/regions")}>
          Places
        </Button>
      </DrawerClose>
      <DrawerClose asChild>
        <Button variant={"outline"} onClick={() => router.push("/regions")}>
          Hikes
        </Button>
      </DrawerClose>
      <DrawerClose asChild>
        <Button variant={"outline"} onClick={() => router.push("/news")}>
          News
        </Button>
      </DrawerClose>
      <Separator />
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

const DesktopMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/regions" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Regions
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/places" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Places
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/places" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Hikes
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/news" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              News
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
