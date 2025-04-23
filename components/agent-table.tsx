import { Badge } from "@/components/ui/badge"

export function AgentTable() {
  return (
    <div className="bg-white rounded-md mb-6">
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-800 mb-2">Les cinq meilleurs agents</h2>
        <p className="text-sm text-gray-600 mb-4">
          Les agents qui comptent le plus de clients avec{" "}
          <Badge className="bg-pink-500 text-white rounded-full text-xs font-normal">Rendez-vous</Badge> statut
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-sm text-gray-600 border-b">
                <th className="pb-2 font-medium">Nom complet</th>
                <th className="pb-2 font-medium">Email</th>
                <th className="pb-2 font-medium">Téléphone</th>
                <th className="pb-2 font-medium">Statut</th>
                <th className="pb-2 font-medium">Clients</th>
                <th className="pb-2 font-medium">Date de création</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm text-gray-500">
                <td className="py-4" colSpan={6}>
                  Il n'y a pas de résultat
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
