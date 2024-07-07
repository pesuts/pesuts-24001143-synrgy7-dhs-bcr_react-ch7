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
        {/* <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          No
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          User Email
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Car
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Start Rent
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Finish Rent
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Price
        </th>
        <th
          scope="col"
          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
        >
          Status
        </th> */}
      </tr>
    </thead>
  );
}
