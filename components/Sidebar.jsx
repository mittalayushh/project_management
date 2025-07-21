'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, CheckSquare, FolderPlus, Plus, ChevronDown, ChevronRight } from 'lucide-react';

export default function Sidebar({ isOpen }) {
  const pathname = usePathname();
  const router = useRouter();
  const [projectsExpanded, setProjectsExpanded] = useState(true);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [projects, setProjects] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem('projects');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  // Add project if navigated to /dashboard/[slug]
  useEffect(() => {
    if (pathname && pathname.startsWith('/dashboard/')) {
      const slug = pathname.split('/dashboard/')[1];
      if (
        slug &&
        !slug.includes('/') &&
        slug !== 'my-tasks' &&
        slug !== 'dashboard' &&
        slug !== 'new-project' &&
        !projects.some(p => p.slug === slug)
      ) {
        const name = slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        const newProjects = [...projects, { name, slug }];
        setProjects(newProjects);
        sessionStorage.setItem('projects', JSON.stringify(newProjects));
      }
    }
  }, [pathname, projects]);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 5);

  const menuItems = [
    { href: '/dashboard', icon: Home, label: 'Home' },
    { href: '/dashboard/my-tasks', icon: CheckSquare, label: 'My Tasks' },
  ];

  return (
    <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
      <div className="p-4">
        {/* Main Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                pathname === item.href
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          ))}

          {/* Projects Section */}
          <div className="pt-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setProjectsExpanded(!projectsExpanded)}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {projectsExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                <span className="font-medium">Projects</span>
              </button>
              <Link
                href="/dashboard/new-project"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Plus size={16} />
              </Link>
            </div>

            {projectsExpanded && (
              <div className="mt-2 space-y-1">
                {displayedProjects.map((project, index) => (
                  <Link
                    key={index}
                    href={`/dashboard/${project.slug}`}
                    className="block px-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition-colors"
                  >
                    {project.name}
                  </Link>
                ))}
                {projects.length > 5 && (
                  <button
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className="block px-6 py-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {showAllProjects ? 'Show Less' : 'View More'}
                  </button>
                )}
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}