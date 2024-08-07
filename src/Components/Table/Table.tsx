type Props = {
    configs: any;
    data: any;
  };
  
  const Table = ({ configs, data }: Props) => {
    const renderedRows = data.map((company: any) => {
      return (
        <tr key={company.cik}>
          {configs.map((val: any) => {
            return <td className="p-3">{val.render(company)}</td>;
          })}
        </tr>
      );
    });
  
    const renderedHeaders = configs.map((config: any) => {
      return (
        <th
          className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          key={config.label}
        >
          {config.label}
        </th>
      );
    });
  
    return (
      <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 m-5">
            <thead className="bg-gray-50">
              <tr>{renderedHeaders}</tr>
            </thead>
            <tbody>{renderedRows}</tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Table;
  