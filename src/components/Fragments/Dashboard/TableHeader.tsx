type Props = {
  columns: Array<string>;
};

export default function TableHeader({ columns }: Props) {
  return (
    <thead className="bg-indigo-200">
      <tr>
        {columns.map((column) => 
          (<th
            scope="col"
            className="px-6 py-3 text-left text-xs text-black font-extrabold uppercase tracking-wider"
          >
            {column}
          </th>)
        )}
      </tr>
    </thead>
  );
}
