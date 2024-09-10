export default function Footer() {
    return (
      <footer className="bg-purple-200 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="mb-4">
              <div className="text-3xl font-bold text-purple-700">Logo</div>
            </div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-purple-700">
                <XIcon />
              </a>
              <a href="#" aria-label="Instagram" className="text-purple-700">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="YouTube" className="text-purple-700">
                <YouTubeIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-purple-700">
                <LinkedInIcon />
              </a>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-2">{section.title}</h4>
                <ul>
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-gray-700 hover:text-purple-700">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    );
  }
  
  const footerLinks = [
    {
      title: "Use cases",
      links: ["UI design", "UX design", "Wireframing", "Diagramming", "Brainstorming", "Online whiteboard"],
    },
    {
      title: "Explore",
      links: ["Design", "Prototyping", "Development features", "Design systems", "Collaboration features", "Design process"],
    },
    {
      title: "Resources",
      links: ["Blog", "Best practices", "Colors", "Color wheel", "Support", "Developers"],
    },
  ];
  
  function XIcon() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    );
  }
  
  function InstagramIcon() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37a4 4 0 1 1-4.33-4.33 4 4 0 0 1 4.33 4.33z" />
        <path d="M17.5 6.5h.01" />
      </svg>
    );
  }
  
  function YouTubeIcon() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42A2.78 2.78 0 0 0 20.64 4.7C18.74 4 12 4 12 4s-6.74 0-8.64.7A2.78 2.78 0 0 0 1.46 6.42 29.26 29.26 0 0 0 1 12a29.26 29.26 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.9 1.72c1.9.7 8.64.7 8.64.7s6.74 0 8.64-.7a2.78 2.78 0 0 0 1.9-1.72A29.26 29.26 0 0 0 23 12a29.26 29.26 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    );
  }
  
  function LinkedInIcon() {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  