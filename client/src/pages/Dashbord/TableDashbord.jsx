import { Button } from "react-bootstrap";
import "../Main/style.css";
import { useEffect, useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import Pagination from "react-bootstrap/Pagination";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const TableDasbord = ({ searchQuery }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 5;
  const [handlePage, sethandlePage] = useState(1);
  const handleClickPage = async (pageNumber) => {
    try {
      const response = await fetch(
        `http://localhost:5000/getAll?page=${currentPage}&limit=${itemsPerPage}`
      );
      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData.data);
        setCurrentPage(pageNumber);
        setTotalPages(jsonData.pagination.totalPage);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (err) {
      console.error(err);
    }
  };
  let active = handlePage;
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => handleClickPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  useEffect(() => {
    handleClickPage(1);
  }, []);
  return (
    <>
      <MDBTable
        align="middle"
        className="rounded-bottom overflow-hidden mb-0 shadow-sm "
      >
        <MDBTableHead className="">
          <tr>
            <th scope="col" id="headtr" className="headtrfont-regulare">
              #
            </th>
            <th scope="col" className="headtr font-regulare ">
              Name client
            </th>
            <th scope="col" className="headtr font-regulare ms-1">
              Date_rv
            </th>
            <th scope="col" className="headtr font-regulare text-center">
              Heure_rv
            </th>
            <th scope="col" className="headtr font-regulare text-center">
              Actions
            </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody className="">
          {data.map((item, index) => {
            const fullName = `${item.nom_client} ${item.prenom_Client}`;
            if (!fullName.toLowerCase().includes(searchQuery.toLowerCase())) {
              return null; // Skip rendering if it doesn't match the search query
            }
            return (
              <tr key={item.id_Client}>
                <td className="font-regulare">{index + 1}</td>
                <td className="w-table">
                  <div className="d-flex align-items-center">
                    <img
                      src="/assets/images/icon-client.png"
                      alt=""
                      style={{ width: "45px", height: "45px" }}
                      className="rounded-circle"
                    />
                    <div className="ms-3">
                      <p className="fw-bold mb-1 font-regulare">{fullName}</p>
                      <p className="text-muted mb-0 font-regular">
                        {item.email_Client}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="w-25 font-regulare td-modified m-modified">
                  {item.formatted_date_rv}
                </td>
                <td className="font-regulare border font-regular text-center">
                  {item.heure_rv}
                </td>
                <td>
                  <div color="transparent" rounded size="sm" className="ms-5">
                    {item.status !== "Confirmé" ? (
                      <Link
                        to={{
                          pathname: "/dashbord/confirmation",
                          state: { userData: item },
                        }}
                      >
                        <Button className="ms-0 bg-success border-0">
                          Confirmer
                        </Button>
                        <Link to="/dashbord/reportation">
                          <Button className="ms-3 bg-warning border-0">
                            Reporter
                          </Button>
                        </Link>
                      </Link>
                    ) : (
                      <Button
                        className="ms-0 bg-success border-0 ms-5 font-regular"
                        disabled
                      >
                        Confirmé
                      </Button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>

      <div className=" rounded-bottom d-flex justify-content-center align-item-center w-100 m-modified  ">
        <Pagination className="mt-2 p-0">{items}</Pagination>
      </div>
      <div>
        <br />
      </div>
    </>
  );
};

export default TableDasbord;
