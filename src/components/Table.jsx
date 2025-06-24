import React from 'react';

const Table = ({ content }) => {
    const { columns, rows } = content;

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-slate-300 dark:border-slate-700 rounded-t-lg shadow-md">
                <thead className="bg-slate-200 dark:bg-slate-800 rounded-t-lg">
                    <tr>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-slate-200 border-b border-slate-300 dark:border-slate-700 first:rounded-tl-lg last:rounded-tr-lg"
                            >
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={`${
                                rowIndex % 2 === 0
                                    ? 'bg-white dark:bg-slate-900'
                                    : 'bg-slate-100 dark:bg-slate-800'
                            }`}
                        >
                            {row.map((cell, cellIndex) => (
                                <td
                                    key={cellIndex}
                                    className="px-6 py-4 text-sm text-slate-700 dark:text-slate-300 border-b border-slate-300 dark:border-slate-700 first:rounded-bl-lg last:rounded-br-lg"
                                >
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;