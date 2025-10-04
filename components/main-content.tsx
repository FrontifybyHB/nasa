export function MainContent() {
  return (
    <main className="flex-1 overflow-y-auto">
      <article className="max-w-4xl mx-auto px-6 py-8">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-2 text-balance">NASA</h1>
        <p className="text-sm text-muted-foreground mb-6">National Aeronautics and Space Administration</p>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-base leading-relaxed mb-4">
            The <strong>National Aeronautics and Space Administration (NASA)</strong> is an independent agency of the
            U.S. federal government responsible for the civil space program, aeronautics research, and space research.
            Established in 1958, NASA has been at the forefront of space exploration and scientific discovery.
          </p>
          <p className="text-base leading-relaxed mb-4">
            NASA's mission is to pioneer the future in space exploration, scientific discovery, and aeronautics
            research. The agency conducts research on the{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              International Space Station
            </a>
            , explores Mars with robotic rovers, studies Earth's climate, and develops new technologies for space
            travel.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Recent achievements include the successful deployment of the{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              James Webb Space Telescope
            </a>
            , the{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Artemis program
            </a>{" "}
            aimed at returning humans to the Moon, and the{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Perseverance rover
            </a>{" "}
            mission on Mars.
          </p>
        </section>

        {/* Table of Contents */}
        <div className="bg-secondary rounded-lg p-6 mb-8 border border-border">
          <h2 className="text-lg font-bold mb-4">Contents</h2>
          <nav className="space-y-2">
            <a href="#history" className="block text-sm text-link hover:text-link-hover">
              1. History
            </a>
            <a href="#missions" className="block text-sm text-link hover:text-link-hover pl-4">
              1.1 Apollo Program
            </a>
            <a href="#space-shuttle" className="block text-sm text-link hover:text-link-hover pl-4">
              1.2 Space Shuttle Era
            </a>
            <a href="#research" className="block text-sm text-link hover:text-link-hover">
              2. Current Research
            </a>
            <a href="#artemis" className="block text-sm text-link hover:text-link-hover pl-4">
              2.1 Artemis Program
            </a>
            <a href="#mars" className="block text-sm text-link hover:text-link-hover pl-4">
              2.2 Mars Exploration
            </a>
            <a href="#facilities" className="block text-sm text-link hover:text-link-hover">
              3. Facilities
            </a>
            <a href="#future" className="block text-sm text-link hover:text-link-hover">
              4. Future Missions
            </a>
          </nav>
        </div>

        {/* History Section */}
        <section id="history" className="mb-8">
          <h2 className="text-3xl font-bold mb-4 pb-2 border-b border-border">History</h2>
          <p className="text-base leading-relaxed mb-4">
            NASA was established on July 29, 1958, by the{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              National Aeronautics and Space Act
            </a>
            , replacing its predecessor, the National Advisory Committee for Aeronautics (NACA). The agency was created
            in response to the Soviet Union's launch of{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Sputnik 1
            </a>
            , the first artificial satellite, which marked the beginning of the Space Race.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Since its inception, NASA has led most American space exploration efforts, including the{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Apollo Moon landing missions
            </a>
            , the{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Skylab space station
            </a>
            , and the{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Space Shuttle program
            </a>
            . The agency also supports the International Space Station and oversees the development of the Orion
            spacecraft and Space Launch System.
          </p>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Apollo Program</h3>
          <p className="text-base leading-relaxed mb-4">
            The{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Apollo program
            </a>{" "}
            was NASA's third human spaceflight program, which succeeded in landing the first humans on the Moon from
            1969 to 1972. Apollo 11 was the first crewed mission to land on the Moon on July 20, 1969, with astronauts{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Neil Armstrong
            </a>{" "}
            and{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Buzz Aldrin
            </a>{" "}
            becoming the first humans to walk on the lunar surface.
          </p>
        </section>

        {/* Current Research Section */}
        <section id="research" className="mb-8">
          <h2 className="text-3xl font-bold mb-4 pb-2 border-b border-border">Current Research</h2>
          <p className="text-base leading-relaxed mb-4">
            NASA's current research spans multiple domains including space exploration, Earth science, heliophysics,
            planetary science, astrophysics, and aeronautics. The agency operates numerous missions and programs
            designed to expand our understanding of the universe and develop new technologies.
          </p>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Artemis Program</h3>
          <p className="text-base leading-relaxed mb-4">
            The{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Artemis program
            </a>{" "}
            is NASA's plan to return humans to the Moon by 2025 and establish a sustainable presence by 2028. The
            program aims to land the first woman and first person of color on the Moon, and will serve as a stepping
            stone for future human missions to Mars.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Key components include the{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Space Launch System
            </a>{" "}
            (SLS), the most powerful rocket ever built, the{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Orion spacecraft
            </a>
            , and the{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Lunar Gateway
            </a>
            , a space station that will orbit the Moon.
          </p>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Mars Exploration</h3>
          <p className="text-base leading-relaxed mb-4">
            NASA's Mars exploration program includes multiple robotic missions studying the Red Planet. The{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Perseverance rover
            </a>
            , which landed in February 2021, is searching for signs of ancient microbial life and collecting samples for
            future return to Earth. The{" "}
            <a href="#" className="text-link hover:text-link-hover underline">
              Ingenuity helicopter
            </a>{" "}
            has demonstrated powered flight on another planet for the first time.
          </p>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="mb-8">
          <h2 className="text-3xl font-bold mb-4 pb-2 border-b border-border">Facilities</h2>
          <p className="text-base leading-relaxed mb-4">
            NASA operates numerous facilities across the United States, each specializing in different aspects of space
            exploration and research:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
            <li className="text-base leading-relaxed">
              <a href="#" className="text-link hover:text-link-hover underline">
                Kennedy Space Center
              </a>{" "}
              - Launch operations in Florida
            </li>
            <li className="text-base leading-relaxed">
              <a href="#" className="text-link hover:text-link-hover underline">
                Johnson Space Center
              </a>{" "}
              - Human spaceflight training and mission control in Texas
            </li>
            <li className="text-base leading-relaxed">
              <a href="#" className="text-link hover:text-link-hover underline">
                Jet Propulsion Laboratory
              </a>{" "}
              - Robotic spacecraft development in California
            </li>
            <li className="text-base leading-relaxed">
              <a href="#" className="text-link hover:text-link-hover underline">
                Marshall Space Flight Center
              </a>{" "}
              - Propulsion systems in Alabama
            </li>
            <li className="text-base leading-relaxed">
              <a href="#" className="text-link hover:text-link-hover underline">
                Goddard Space Flight Center
              </a>{" "}
              - Earth and space science in Maryland
            </li>
          </ul>
        </section>

        {/* References */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">References</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
            <li>NASA Official Website. "About NASA". Retrieved 2024.</li>
            <li>National Archives. "National Aeronautics and Space Act of 1958".</li>
            <li>NASA History Office. "Apollo Program Overview".</li>
            <li>NASA. "Artemis Program: Returning to the Moon". 2024.</li>
            <li>JPL. "Mars 2020 Perseverance Rover Mission".</li>
          </ol>
        </section>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-border text-sm">
          <a href="#" className="text-link hover:text-link-hover">
            ← Previous: Space Agencies
          </a>
          <a href="#" className="text-link hover:text-link-hover">
            Next: ESA →
          </a>
        </div>
      </article>
    </main>
  )
}
