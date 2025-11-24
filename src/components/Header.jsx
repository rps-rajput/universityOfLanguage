import { useLocation } from "react-router";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/services", label: "Services" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(href);
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 shadow-sm z-50 bg-[rgb(232,238,240)]"
      style={{ backgroundColor: 'rgba(232, 238, 240, 1)' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/">
              <img
                src="https://ucarecdn.com/c1c1dab1-1119-49ef-b9b2-a918dd005127/-/format/auto/"
                alt="University of Languages Logo"
                className="h-16 w-auto"
              />
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={
                  isActive(item.href)
                    ? "text-primary font-medium hover:opacity-80"
                    : "text-gray-700 hover:text-primary"
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

