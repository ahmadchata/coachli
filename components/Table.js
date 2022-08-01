import React from "react";
import styled from "styled-components";
import {
  useTable,
  useGlobalFilter,
  useFilters,
  useSortBy,
  usePagination,
} from "react-table";

export default function ReactTable({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    state,
  } = useTable(
    { columns, data },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      <div className="">
        <Table {...getTableProps()}>
          <thead>
            {headerGroups?.map((headerGroup, index) => (
              <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    key={index}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page?.map((row, index) => {
              prepareRow(row);
              return (
                <tr key={index} {...row.getRowProps()}>
                  {row?.cells?.map((cell, index) => {
                    return (
                      <td key={index} {...cell.getCellProps()}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>

      <TableControls>
        <div>
          <label className="">
            <span className="small">
              Page <span className="">{state.pageIndex + 1}</span> of{" "}
              <span className="">{pageOptions.length}</span>
            </span>

            <select
              className="mt-1 block w-full rounded-md p-2 border-2 dark:bg-gray-900 border-gray-300 dark:border-gray-800  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              value={state.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[3, 5, 10, 20, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="btn-container">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            &lt;
          </button>
          {[1, 2, 3, "...", 230].map((pageSize) => (
            <span className="page" key={pageSize} value={pageSize}>
              {pageSize}
            </span>
          ))}
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            &gt;
          </button>
        </div>
      </TableControls>
    </>
  );
}

const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  border-collapse: collapse;
  text-align: left;
  overflow: hidden;
  font-size: 14px;
  position: relative;
  flex-direction: column;
  overflow-x: auto;

  p {
    padding: 0;
    margin: 0;
  }

  thead {
    background-color: #f8f7f8;
    color: #000;
  }

  th {
    padding: 1rem 2rem;
    text-transform: capitalize;
    letter-spacing: 0.1rem;
    font-size: 0.7rem;
    font-weight: 700;
    white-space: nowrap;
  }

  td {
    padding: 1.5rem 2.7rem;
    white-space: nowrap;
    text-transform: capitalize;
    border-bottom: 1px solid #dfdfdf;
  }
`;

const TableControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 20px;
  .btn-container {
    button {
      border: none;
      background-color: #f8f7f8;
      padding: 10px;
      border-radius: 5px;
      color: #030749;
      font-size: 14px;
      box-shadow: 1px 2px #eee;
      &:disabled {
        color: #aaa;
      }
      &:first-child {
        border-right: 1px solid #eee;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:last-child {
        border-left: 1px solid #eee;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }

  .small {
    font-size: 10px;
  }

  .page {
    background: #f8f7f8;
    border-radius: 5px;
    padding: 10px;
    margin-right: 3px;
  }
`;
