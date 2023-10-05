import { Button } from "react-bootstrap";
import "../Main/style.css";
import { useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import Pagination from 'react-bootstrap/Pagination';

const TableDasbord = () => {
  const [handlePage, sethandlePage] = useState(1);
  const handleClickPage=(number)=>{
    sethandlePage(number)
  }
  let active = handlePage;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={()=>handleClickPage(number)} >
        {number}
      </Pagination.Item>
    );
  }
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
          <tr>
            <td className="font-regulare">1</td>
            <td className="w-table">
              <div className="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">John Doe</p>
                  <p className="text-muted mb-0">john.doe@gmail.com</p>
                </div>
              </div>
            </td>
            <td className="w-25 font-regulare td-modified m-modified">Some Time</td>
            <td className="font-regulare border font-regular text-center  ">
              dfsdf
            </td>
            <td className="">
              <div color="transparant" rounded size="sm" className="ms-5">
                  <Button className="ms-0 bg-success border-0"> Confirmer</Button>
                  <Button className="ms-3 bg-warning border-0">Repoter</Button>
              </div>
            </td>
          </tr>
          
          {/* Add more rows as needed */}
        </MDBTableBody>
       
      </MDBTable>
      
      <div className=" rounded-bottom d-flex justify-content-center align-item-center w-100 m-modified  ">
          <Pagination className="mt-2 p-0" >{items}</Pagination>
      </div>
    <div>
   
    <br />
    </div>

    </>
  );
};

export default TableDasbord;
