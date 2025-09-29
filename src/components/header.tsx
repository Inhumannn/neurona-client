import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "@radix-ui/react-navigation-menu";

export function Header() {
  return (
    <header>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <NavigationMenuLink asChild>
                <Link href="/">Neurona</Link>
              </NavigationMenuLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <NavigationMenuLink asChild>
                <Link href="/">Accueil</Link>
              </NavigationMenuLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Code</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink asChild>
                <Link href="/code">Documentation</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/code/tutorial">Tutoriel</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Communauté</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink asChild>
                <Link href="/forums">Forums</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Veille</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink asChild>
                <Link href="/veille">Articles</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
