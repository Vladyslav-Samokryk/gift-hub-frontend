import { useTranslation } from "react-i18next";
import type { Children } from "shared/types/CommonTypes";

interface TableProps {
  columns: string[];
  children: Children;
}

export default function Table({ columns, children }: TableProps): JSX.Element {
  const { t } = useTranslation();
  return (
    <div className="min-w-full overflow-hidden rounded-md border">
      <table className="min-w-full divide-y divide-gray-400">
        <thead className="bg-purple-100">
          <tr className="divide-x divide-gray-400">
            {columns.map((header, index) => {
              return (
                <th key={index} className="px-2 py-3 text-left">
                  {t(header)}
                </th>
              );
            })}
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
}
