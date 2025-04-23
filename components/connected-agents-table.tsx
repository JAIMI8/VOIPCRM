import { Badge } from "@/components/ui/badge"

export function ConnectedAgentsTable() {
  return (
    <div className="bg-white rounded-md">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium text-gray-800">Les agents qui sont actuellement connectés</h2>
          <Badge className="bg-emerald-500 text-white">En ligne</Badge>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left text-sm text-gray-600 border-b">
                <th className="pb-2 font-medium">Nom complet</th>
                <th className="pb-2 font-medium">Email</th>
                <th className="pb-2 font-medium">Téléphone</th>
                <th className="pb-2 font-medium">IP</th>
                <th className="pb-2 font-medium">Statut</th>
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
