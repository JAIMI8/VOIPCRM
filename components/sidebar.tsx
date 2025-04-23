import Link from "next/link"
import { LayoutDashboard, Users, Phone, FileText, Settings, BarChart } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="bg-white w-14 md:w-56 border-r flex flex-col">
      <div className="h-14 flex items-center justify-center border-b">
        <Link href="/" className="flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-[#2a4caa] flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
        </Link>
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          <li>
            <Link href="/" className="flex items-center text-blue-600 py-2 px-3 mx-2 rounded-md">
              <LayoutDashboard className="h-5 w-5 mr-3" />
              <span className="hidden md:inline-block">Tableau de bord</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center text-gray-600 hover:text-blue-600 py-2 px-3 mx-2 rounded-md">
              <Users className="h-5 w-5 mr-3" />
              <span className="hidden md:inline-block">Agents</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center text-gray-600 hover:text-blue-600 py-2 px-3 mx-2 rounded-md">
              <Users className="h-5 w-5 mr-3" />
              <span className="hidden md:inline-block">Clients</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center text-gray-600 hover:text-blue-600 py-2 px-3 mx-2 rounded-md">
              <Phone className="h-5 w-5 mr-3" />
              <span className="hidden md:inline-block">Appels</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center text-gray-600 hover:text-blue-600 py-2 px-3 mx-2 rounded-md">
              <FileText className="h-5 w-5 mr-3" />
              <span className="hidden md:inline-block">Rapports</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center text-gray-600 hover:text-blue-600 py-2 px-3 mx-2 rounded-md">
              <BarChart className="h-5 w-5 mr-3" />
              <span className="hidden md:inline-block">Statistiques</span>
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center text-gray-600 hover:text-blue-600 py-2 px-3 mx-2 rounded-md">
              <Settings className="h-5 w-5 mr-3" />
              <span className="hidden md:inline-block">Paramètres</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
