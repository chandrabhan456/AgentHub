import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import Delete1 from "./Delete";
import "./searchbar.css";
import {
  PresenceBadgeStatus,
  Avatar,
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
} from "@fluentui/react-components";

import { Field, Input } from "@fluentui/react-components";

import { FaSearch } from "react-icons/fa";
//import { TbArrowsDownUp } from "react-icons/tb";

import { HiLogout } from "react-icons/hi";
import { BiSortAlt2 } from "react-icons/bi";
import { HiLogin } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
//import { CiEdit } from "react-icons/ci";
import { RiEdit2Line } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import "./searchbar.css";
const columnWidths = ["10%", "15%", "15%", "23%", "25%","12%"]; // Adjust the widths as needed

const userHeader = [
  { Key: "user_id", label: "User ID" },
  { Key: "first_name", label: "First Name" },
  { Key: "last_name", label: "Last Name" },
  { Key: "email", label: "Email" },
  { Key: "designation", label: "Designation" },
  { Key: "Action", label: "Actions" }, // Additional column for actions
];

function Admin() {
  const [currentPage, setCurrentPage] = useState(1);
  const [inputText, setInputText] = useState("");
  const [selects, setSelects] = useState(8);
  const [sort, setSort] = useState({
    keyToSort: "first_name",
    direction: "asc",
  });
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deletemodalOpen, setdeleteModalOpen] = useState({
    Open: false,
    data: "",
  });
  const [editmodelOpen, seteditModalOpen] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  function handleedit(e) {
    console.log("HELLO", e);
  }
  useEffect(() => {
    // Function to fetch data from the API
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/users/get_all_users",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", // If you need to include cookies in the request
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error);
      }
    };

    // Call the fetch function
    fetchUsers();
  }, []);
  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  const ordersData3 = users;
  const recordsPerPage = selects;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records1 = ordersData3.filter((el) => {
    if (el === "") {
      return el;
    } else {
      return (
    (el.first_name?.includes(inputText) || '') ||
    (el.last_name?.includes(inputText) || '') ||
    (el.designation?.includes(inputText) || '')
      );
    }
  });
  const records = records1.slice(firstIndex, lastIndex);
  function hadleHeaderClick(column) {
    setSort({
      keyToSort: column.Key,
      direction: sort.direction === "asc" ? "desc" : "asc",
    });
  }

  function handleDataSort(records) {
    if (sort.direction === "asc") {
      return records.sort((a, b) =>
        a[sort.keyToSort] > b[sort.keyToSort] ? 1 : -1
      );
    } else {
      return records.sort((a, b) =>
        a[sort.keyToSort] > b[sort.keyToSort] ? -1 : 1
      );
    }
  }

  const npage = Math.ceil(records1.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  console.log("users", users);

  return (
    <div className="mt-0 h-screen bg-white">
      <div className="flex justify-between p-2 h-70 md:mx-0 relative w-full mt-10">
        <div className=" absolute inset-y-0 left-12 w-13 mt-7 justify-center">
          <div className=" mt-15 ">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex mt-4">
                  <p className="text-3xl font-extrabold tracking-tight text-black dark:text-white">
                    Users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="justify-end absolute w-50 right-20">
          <div className="input-wrapper bg-white ">
            <FaSearch className="text-black text-xl" />
            <Input
              className="text-black"
              placeholder="search"
              onChange={inputHandler}
            />
          </div>
        </div>
      </div>

      <Table
        basic="very"
        arial-label="Default table"
        style={{
          width: "96%",
          border: "1px solid #d3d3d3",
          borderRadius: "40px", // Add border radius here
        }}
        // style={{ minWidth: "475px" }}
      >
        <TableHeader>
          <TableRow
            id="tableheader"
            // style={(modalOpen) ? {height:'55px'} : {}}
            style={{ height: "55px" }}
            className="bg-[#d0dde7] dark:bg-[#52529a] text-black dark:text-white"
          >
            {userHeader.map((column,index) => (
              <TableHeaderCell
                key={column.Key}
                id="headercelle"
                style={{
                  paddingLeft: "60px",
                  width: columnWidths[index], // Apply the corresponding width from the array
                }}
              >
                {column.label}
                {
                  <BiSortAlt2
                    id="UpDown-icon"
                    className="text-[#d0dde7] dark:text-[#52529B]"
                    onClick={() => hadleHeaderClick(column)}
                  />
                }
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {handleDataSort(records)
            .filter((el) => {
              if (el === "") {
                return el;
              } else {
                return (
                  el.first_name.toLowerCase().includes(inputText) ||
                  el.last_name.toLowerCase().includes(inputText) ||
                  el.designation.toLowerCase().includes(inputText)
                );
              }
            })
            .map((item) => (
              <TableRow key={item.user_id}>
                <TableCell
                  className="bg-[#ffffff] dark:bg-[#352f6e] text-black dark:text-[#CAD5DF]"
                  style={{
                    border: "1px solid black",
                    borderRightWidth: "0",
                    borderLeft: "none",
                    fontSize: "14pt",
                  }}
                >
                  <TableCellLayout style={{ paddingLeft: "20px" }}>
                    <p className="ml-3">{item.user_id}</p>
                  </TableCellLayout>
                </TableCell>

                <TableCell
                  className="bg-[#ffffff] dark:bg-[#352f6e] text-black dark:text-[#CAD5DF]"
                  style={{
                    border: "1px solid black",
                    borderLeft: "none",
                    borderRight: "none",
                    fontSize: "14pt",
                  }}
                >
                  <TableCellLayout style={{ paddingLeft: "60px" }}>
                    {item.first_name}
                  </TableCellLayout>
                </TableCell>
                <TableCell
                  className="bg-[#ffffff] dark:bg-[#352f6e] text-black dark:text-[#CAD5DF]"
                  style={{
                    border: "1px solid black ",
                    borderLeft: "none",
                    borderRight: "none",
                    fontSize: "14pt",
                  }}
                >
                  <TableCellLayout style={{ paddingLeft: "60px" }}>
                    {item.last_name}
                  </TableCellLayout>
                </TableCell>
                <TableCell
                  className="bg-[#ffffff] dark:bg-[#352f6e] text-black dark:text-[#CAD5DF]"
                  style={{
                    border: "1px solid black",
                    borderLeft: "none",
                    borderRight: "none",
                    fontSize: "14pt",
                  }}
                >
                  <TableCellLayout style={{ paddingLeft: "60px" }}>
                    {item.email}
                  </TableCellLayout>
                </TableCell>
                <TableCell
                  className="bg-[#ffffff] dark:bg-[#352f6e] text-black dark:text-[#CAD5DF]"
                  style={{
                    border: "1px solid black",
                    borderLeft: "none",
                    borderRight: "none",
                    fontSize: "14pt",
                  }}
                >
                  <TableCellLayout style={{ paddingLeft: "60px" }}>
                    {item.designation}
                  </TableCellLayout>
                </TableCell>
                <TableCell
                  className="bg-[#ffffff] dark:bg-[#352f6e] text-black dark:text-[#9AAFC2]"
                  style={{
                    border: "1px solid black",
                    borderLeft: "none",
                    borderRight: "none",
                    fontSize: "14pt",
                  }}
                >
                  <TableCellLayout>
                    <MdDelete
                      id="deletecell"
                      style={{marginTop:'10%', height: "25px", width: "25px" }}
                      onClick={() =>
                        setdeleteModalOpen({ Open: true, data: item.first_name })
                      }
                    />
                  </TableCellLayout>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {console.log(deletemodalOpen.data)}
      {deletemodalOpen.Open && (
        <Delete1
          data={deletemodalOpen.data}
          closeModal={() => {
            setdeleteModalOpen(false);
          }}
        />
      )}
      <div className="flex justify-between p-2  md:mx-0 relative w-full">
        <div className="flex ml-10 mt-2">
          <div className="text-black dark:text-white">items per Page</div>
          <div className="ml-2">
            <select
              value={selects}
              onChange={(e) => setSelects(e.target.value)}
            >
              <option>10</option>
              <option>12</option>
              <option>15</option>
            </select>
          </div>
        </div>
        <div className="justify-end absolute  right-20 mt-2">
          <div className="flex">
            <div className=" right-80 text-black dark:text-white whitespace-nowrap">
              showing {currentPage}-{npage} of 8
            </div>
            <div className="flex ">
              <div className="ml-14 mt-1">
                <a
                  href="#"
                  className="text-black dark:text-white"
                  onClick={lastPage}
                >
                  <HiLogout />
                </a>
              </div>

              <div className="ml-5 mt-1">
                <a
                  href="#"
                  className="text-black dark:text-white"
                  onClick={prePage}
                >
                  <HiOutlineChevronLeft />
                </a>
              </div>

              <div className="ml-6 mt-1">
                <a
                  href="#"
                  className="text-black dark:text-white"
                  onClick={nextPage}
                >
                  <HiOutlineChevronRight />
                </a>
              </div>
              <div className="ml-5 mt-1">
                <a
                  href="#"
                  className="text-black dark:text-white"
                  onClick={firstPage}
                >
                  <HiLogin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  function prePage() {
    if (currentPage != firstIndex + 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function nextPage() {
    if (ordersData3.length > lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
  function firstPage() {
    setCurrentPage(1);
  }
  function lastPage() {
    setCurrentPage(npage);
  }
}

export default Admin;
