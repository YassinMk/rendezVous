import { Button } from "react-bootstrap";
import "../Main/style.css";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
const TableDasbord = () => {
  return (
    <>
    <MDBTable align="middle" className="rounded-bottom overflow-hidden mb-0">
      <MDBTableHead className="">
        <tr>
          <th scope="col" className="font-regulare">#</th>
          <th scope="col" className="font-regulare">Name client</th>
          <th scope="col" className="font-regulare text-center">Date_rv</th>
          <th scope="col" className="font-regulare text-center">Heure_rv</th>
          <th scope="col" className="font-regulare text-center">Actions</th>
        </tr>
      </MDBTableHead>
    </MDBTable>
    <div className="add-scrolling shadow-sm" >
      <MDBTable align="middle" className="rounded-bottom overflow-hidden mb-0">
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
          <td className="w-25 font-regulare   ">Some Time</td>
          <td className="font-regulare border text-center ">dfsdf</td>
          <td className="">
            <MDBBtn color="link" rounded size="sm">
              <div className=" d-flex justify-content-end gap-2 ">
                <Button></Button>
                <Button></Button>
              </div>         
            </MDBBtn>
          </td>
        </tr>
        {/* Add more rows as needed */}
      </MDBTableBody>
    </MDBTable>
    </div>
    </>
  );
};

export default TableDasbord;
