import Container from "@/components/shared/Container";
import logo from "@/assets/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/Theme/ModeToggle";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout, useCurrentToken } from "@/redux/features/auth/authSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrentToken);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <Container>
        <div className="py-4 flex items-center justify-between">
          <Link to={"/"}>
            <img
              className="w-16 md:w-20 lg:w-20 dark:invert transition-transform duration-300 hover:scale-105"
              src={logo}
              alt="logo"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `text-sm lg:text-base font-medium tracking-wide text-gray-800 dark:text-gray-200 hover:text-teal-500 transition duration-200 ${
                  isActive ? "border-b-2 border-teal-500" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `text-sm lg:text-base font-medium tracking-wide text-gray-800 dark:text-gray-200 hover:text-teal-500 transition duration-200 ${
                  isActive ? "border-b-2 border-teal-500" : ""
                }`
              }
            >
              About us
            </NavLink>
            <NavLink
              to={"/comparison"}
              className={({ isActive }) =>
                `text-sm lg:text-base font-medium tracking-wide text-gray-800 dark:text-gray-200 hover:text-teal-500 transition duration-200 ${
                  isActive ? "border-b-2 border-teal-500" : ""
                }`
              }
            >
              Comparison
            </NavLink>
          </nav>
          <div className="flex items-center gap-2 lg:gap-4">
            <ModeToggle />
            <div className="flex items-center md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isMenuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex items-center gap-2">
              {token ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-teal-500 hover:text-white transition"
                    >
                      <CircleUser className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                      <span className="sr-only">Toggle user menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="mt-2 bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 rounded-lg p-2"
                  >
                    <DropdownMenuSeparator className="border-gray-300 dark:border-gray-600" />
                    <DropdownMenuItem className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md">
                      <Link to={"/dashboard"}>Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="border-gray-300 dark:border-gray-600" />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
                    >
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link to={"/auth/register"}>
                    <Button className="bg-teal-500 text-white hover:bg-teal-600 transition">
                      Sign Up
                    </Button>
                  </Link>
                  <Link to={"/auth"}>
                    <Button className="bg-teal-500 text-white hover:bg-teal-600 transition">
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden flex flex-col gap-2 mt-2">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `text-base font-medium tracking-wide text-gray-800 dark:text-gray-200 hover:text-teal-500 transition duration-200 ${
                  isActive ? "border-b-2 border-teal-500" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `text-base font-medium tracking-wide text-gray-800 dark:text-gray-200 hover:text-teal-500 transition duration-200 ${
                  isActive ? "border-b-2 border-teal-500" : ""
                }`
              }
            >
              About us
            </NavLink>
            <NavLink
              to={"/comparison"}
              className={({ isActive }) =>
                `text-base font-medium tracking-wide text-gray-800 dark:text-gray-200 hover:text-teal-500 transition duration-200 ${
                  isActive ? "border-b-2 border-teal-500" : ""
                }`
              }
            >
              Comparison
            </NavLink>
            <div className="flex flex-col gap-2 mt-4">
              {token ? (
                <>
                  <Link to={"/dashboard"}>
                    <Button className="bg-teal-500 text-white hover:bg-teal-600 transition">
                      Dashboard
                    </Button>
                  </Link>
                  <Button
                    onClick={handleLogout}
                    className="bg-teal-500 text-white hover:bg-teal-600 transition"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to={"/auth/register"}>
                    <Button className="bg-teal-500 text-white hover:bg-teal-600 transition">
                      Sign Up
                    </Button>
                  </Link>
                  <Link to={"/auth"}>
                    <Button className="bg-teal-500 text-white hover:bg-teal-600 transition">
                      Login
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
