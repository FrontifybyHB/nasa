import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function RightSidebar() {
  return (
    <aside className="hidden lg:flex w-80 flex-col border-l border-sidebar-border bg-sidebar-bg overflow-y-auto">
      <div className="p-6 space-y-6">
        {/* Info Box */}
        <Card className="p-4 bg-card">
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex flex-col items-center gap-3 pb-4 border-b border-border">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                <img src="/nasa-logo-blue-circle.jpg" alt="NASA Logo" className="w-28 h-28 object-contain" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg">NASA</h3>
                <p className="text-xs text-muted-foreground">National Aeronautics and Space Administration</p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="space-y-3 text-sm">
              <div>
                <dt className="font-semibold text-muted-foreground">Founded</dt>
                <dd>July 29, 1958</dd>
              </div>
              <div>
                <dt className="font-semibold text-muted-foreground">Headquarters</dt>
                <dd>Washington, D.C., United States</dd>
              </div>
              <div>
                <dt className="font-semibold text-muted-foreground">Administrator</dt>
                <dd>Bill Nelson</dd>
              </div>
              <div>
                <dt className="font-semibold text-muted-foreground">Budget</dt>
                <dd>$25.4 billion (2024)</dd>
              </div>
              <div>
                <dt className="font-semibold text-muted-foreground">Employees</dt>
                <dd>~18,000</dd>
              </div>
              <div>
                <dt className="font-semibold text-muted-foreground">Website</dt>
                <dd>
                  <a
                    href="https://www.nasa.gov"
                    className="text-link hover:text-link-hover inline-flex items-center gap-1"
                  >
                    nasa.gov
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </dd>
              </div>
            </div>
          </div>
        </Card>

        {/* Images Gallery */}
        <Card className="p-4 bg-card">
          <h3 className="font-bold mb-3">Gallery</h3>
          <div className="space-y-3">
            <div>
              <img
                src="/kennedy-space-center-building.jpg"
                alt="Kennedy Space Center"
                className="w-full h-40 object-cover rounded"
              />
              <p className="text-xs text-muted-foreground mt-1">Kennedy Space Center, Florida</p>
            </div>
            <div>
              <img
                src="/space-shuttle-launch.jpg"
                alt="Space Shuttle Launch"
                className="w-full h-40 object-cover rounded"
              />
              <p className="text-xs text-muted-foreground mt-1">Space Shuttle Atlantis launch</p>
            </div>
            <div>
              <img
                src="/international-space-station.jpg"
                alt="International Space Station"
                className="w-full h-40 object-cover rounded"
              />
              <p className="text-xs text-muted-foreground mt-1">International Space Station</p>
            </div>
            <div>
              <img src="/apollo-11-moon-landing.png" alt="Apollo 11" className="w-full h-40 object-cover rounded" />
              <p className="text-xs text-muted-foreground mt-1">Apollo 11 Moon landing, 1969</p>
            </div>
            <div>
              <img
                src="/mars-perseverance-rover.jpg"
                alt="Perseverance Rover"
                className="w-full h-40 object-cover rounded"
              />
              <p className="text-xs text-muted-foreground mt-1">Perseverance rover on Mars</p>
            </div>
            <div>
              <img
                src="/james-webb-space-telescope.jpg"
                alt="James Webb Telescope"
                className="w-full h-40 object-cover rounded"
              />
              <p className="text-xs text-muted-foreground mt-1">James Webb Space Telescope</p>
            </div>
          </div>
        </Card>

        {/* Related Topics */}
        <Card className="p-4 bg-card">
          <h3 className="font-bold mb-3">Related Topics</h3>
          <nav className="space-y-2 text-sm">
            <a href="#" className="block text-link hover:text-link-hover">
              Space exploration
            </a>
            <a href="#" className="block text-link hover:text-link-hover">
              International Space Station
            </a>
            <a href="#" className="block text-link hover:text-link-hover">
              Mars exploration
            </a>
            <a href="#" className="block text-link hover:text-link-hover">
              Apollo program
            </a>
            <a href="#" className="block text-link hover:text-link-hover">
              Space Shuttle program
            </a>
            <a href="#" className="block text-link hover:text-link-hover">
              Artemis program
            </a>
          </nav>
        </Card>
      </div>
    </aside>
  )
}
