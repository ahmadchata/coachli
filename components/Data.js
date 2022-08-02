/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import ReactTable from "./Table";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { IoPencilOutline, IoTrash } from "react-icons/io5";
import FakeData from "/public/data/data.json";

export default function Name() {
  const tableData = FakeData;

  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Contact",
      accessor: "contact",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: ({ cell }) => {
        const p = cell.row.original;
        return (
          <div>
            {p.status === "Come in" ? (
              <a id={p.id} className="come">
                Come in
              </a>
            ) : (
              <a id={p.id} className="notcome">
                Not Come
              </a>
            )}
          </div>
        );
      },
    },
    {
      Header: "Address",
      accessor: "address",
    },
    {
      Header: "Action",
      Cell: ({ cell }) => {
        const p = cell.row.original;
        return (
          <div>
            <a id={p.id} className="action">
              <IoPencilOutline />
            </a>
            <a id={p.id} className="action">
              <IoTrash />
            </a>
          </div>
        );
      },
    },
  ]);

  return (
    <Section>
      <div className="top">
        <div className="dropdown">
          <span>Show</span>
          <select className="space">
            <option>1</option>
            <option>2</option>
          </select>
          <span>Entries</span>
        </div>
        <div className="search">
          <span>
            <FaSearch className="glass" />
          </span>
          <input className="input" placeholder="Search..."></input>
        </div>
      </div>
      <ReactTable columns={columns} data={tableData} defaultPageSize={3} />
    </Section>
  );
}

const Section = styled.div`
  .come {
    background: rgb(244, 237, 250);
    color: rgb(171, 122, 200);
    padding: 10px 15px;
    border-radius: 10px;
  }

  .notcome {
    background: rgb(231, 250, 251);
    color: rgb(96, 187, 186);
    padding: 10px 15px;
    border-radius: 10px;
  }

  .action {
    margin-right: 10px;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dropdown {
    display: flex;
    align-items-center;
    font-size: 14px;
  }

  .search {
    display: flex;
    padding: 5px 8px 3px 8px;
    align-items: center;
    border: 2px solid gray;
    border-radius: 5px;
  }

  .glass {
    color: gray;
  }

  .input {
    border: none;
  }

  .space {
    margin: 0 8px;
  }
  @media (max-width: 768px) {
    .search {
      width: 50%;
      padding: 5px 4px 3px 4px;
    }

    .input {
      width: 50%;
    }
    .dropdown {
      display: none;
    }
  }
`;
