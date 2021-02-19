import React from "react";
import {
  AiOutlineFolderView,
  AiFillEdit,
  AiOutlineReload,
} from "react-icons/ai";
import { Col, FormGroup, Input } from "reactstrap";
// import { Link } from "react-router-dom";
const ChecklistR = (props) => {
  const handleClickRead = (e) => {
    console.log("hi from read");
  };
  const handleClickEdit = (e) => {
    console.log("hi from edit");
  };
  const handleClickReload = (e) => {
    console.log("hi from reload");
  };
  return (
    <React.Fragment>
      <Col md={3}>
        <Input type="text" value={props.text} readOnly></Input>
      </Col>
      <Col style={{ marginLeft: "3%" }} md={-1}></Col>
      <Col md={-2}>
        <FormGroup>
          <Input
            className="custom-checkbox-lg"
            size={20}
            type="checkbox"
          ></Input>
        </FormGroup>
      </Col>
      <Col md={2}>
        <FormGroup>
          <Input
            type="file"
            name="file"
            value={props.file}
            onChange={props.onFileChange}
          ></Input>
        </FormGroup>
      </Col>
      <Col md={1}>
        <AiOutlineFolderView
          size={30}
          onClick={(e) => {
            handleClickRead(e);
          }}
        />
      </Col>
      <Col md={3}>
        <FormGroup>
          <select
            className={
              props.value === "Pending"
                ? "border-red custom-select"
                : "custom-select"
            }
            value={props.value || "Pending"}
            id="1"
            name={props.name}
            onChange={props.onChange}
          >
            <option value="Pending">Pending</option>
            <option value="Received">Received</option>
          </select>
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <AiFillEdit
            size={30}
            color={"green"}
            onClick={(e) => {
              handleClickEdit(e);
            }}
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <AiOutlineReload
            size={30}
            onClick={(e) => {
              handleClickReload(e);
            }}
          />
        </FormGroup>
      </Col>
    </React.Fragment>
  );
};
export default ChecklistR;
