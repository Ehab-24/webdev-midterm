import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { Link } from "react-router-dom";
import { Button } from "./ui/button";


export default function() {
    return (
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Button asChild variant={"ghost"}>
                            <Link to="/">Home</Link>
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
    )
}
