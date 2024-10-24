import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useContext } from "react";
import { ThemeContext } from "./theme-provider";

import { Moon, Sun } from "lucide-react";

export default function Navbar() {

    const { theme, toggleTheme } = useContext(ThemeContext)


    return (
        <NavigationMenu className="flex min-w-full justify-between">
            <div className="w-40">

            </div>

            <NavigationMenuList className="flex w-full min-w-full py-3 px-4 md:px-8">
                <NavigationMenuItem>
                    <Button asChild variant={"ghost"}>
                        <Link to="/">Home</Link>
                    </Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Button asChild variant={"ghost"}>
                        <Link to="/favorites">Favorites</Link>
                    </Button>
                </NavigationMenuItem>
            </NavigationMenuList>

            <div className="w-40">
                <Button variant={"outline"} onClick={() => toggleTheme()} className="bg-transparent">
                    {
                        theme == "light" ? (
                            <div className="flex items-center gap-1">
                                <Moon />
                                Dark
                            </div>
                        ) : (
                            <div className="flex items-center gap-1">
                                <Sun />
                                Light
                            </div>
                        )
                    }
                </Button>
            </div>
        </NavigationMenu>
    )
}
