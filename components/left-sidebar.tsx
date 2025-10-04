import { ChevronRight, Home, BookOpen, Telescope, Rocket, Globe, Users } from "lucide-react"

const navigationItems = [
  { icon: Home, label: "Main page", href: "/" },
  { icon: BookOpen, label: "Contents", href: "/contents" },
  { icon: Telescope, label: "Featured research", href: "/featured" },
  { icon: Rocket, label: "Recent discoveries", href: "/recent" },
  { icon: Globe, label: "Missions", href: "/missions" },
  { icon: Users, label: "Community", href: "/community" },
]

const categories = [
  "Space Exploration",
  "Astrophysics",
  "Planetary Science",
  "Earth Science",
  "Aeronautics",
  "Technology",
]

export function LeftSidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-sidebar-border bg-sidebar-bg">
      <div className="flex-1 overflow-y-auto py-6">
        {/* Navigation */}
        <nav className="space-y-1 px-3">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors"
            >
              <item.icon className="h-4 w-4 text-muted-foreground" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div className="my-4 border-t border-sidebar-border" />

        {/* Categories */}
        <div className="px-3">
          <h3 className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Categories</h3>
          <nav className="space-y-1">
            {categories.map((category) => (
              <a
                key={category}
                href={`/category/${category.toLowerCase().replace(" ", "-")}`}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors"
              >
                <ChevronRight className="h-3 w-3 text-muted-foreground" />
                <span>{category}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-sidebar-border" />

        {/* Tools */}
        <div className="px-3">
          <h3 className="mb-2 px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Tools</h3>
          <nav className="space-y-1">
            <a
              href="/upload"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors"
            >
              Upload paper
            </a>
            <a
              href="/cite"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors"
            >
              Cite this page
            </a>
            <a
              href="/print"
              className="flex items-center gap-3 rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors"
            >
              Printable version
            </a>
          </nav>
        </div>
      </div>
    </aside>
  )
}
