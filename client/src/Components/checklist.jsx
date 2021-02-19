import React, { useState, useEffect } from "react";
 
import {   Row, Button, Form,   } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import ChecklistR from "./CheckList/checklistR";
import { useDispatch, useSelector } from "react-redux";
import { Create } from "../actions/clAction";
import axios from "axios";
export const CheckList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state) => state.clReducer);
  const id = useSelector((state) => state.ciReducer.id);
  const [image, setImage] = useState("");

  const [CL, setCL] = React.useState({});
  useEffect(() => {
    setCL(data);
  }, [data]);
  console.log(CL);
  const handleChange = async (e) => {
    await setCL({
      ...CL,
      [e.target.name]: e.target.value,
    });
  };
  //ImageHandler
  const ImageHandler = async (e) => {
    const file = e.target.files[0];
    const fileName = e.target.files[0].name;
    console.log(fileName);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = axios.post("api/upload", formData, config);
      setImage(data);
    } catch (error) {}
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(Create(CL, id));
    history.push("/");
  };

  return (
    <div className="container">
      <div>
        <h2>
          <span class="badge badge-success">COMPANY INFORMATION </span>
        </h2>
      </div>

      <Form>
        <Row form>
          <ChecklistR
            text={"Fully Completed Application Form "}
            name={"fcaf"}
            value={CL.fcaf}
            onChange={(e) => {
              console.log("changing");
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Bank Information (Welcome Letter) "}
            name={"bi"}
            value={CL.bi}
            onChange={(e) => {
              console.log("changing");
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Office Tenancy Agreement "}
            name={"ota"}
            value={CL.ota}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={" Acquiring Processing Statements"}
            name={"aps"}
            value={CL.aps}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Headline Website URL Address"}
            name={"hwua"}
            value={CL.hwua}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Website Compliance "}
            name={"wc"}
            value={CL.wc}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Website URL-Proof of Domain"}
            name={"wuod"}
            value={CL.wuod}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Ownership Structure Chart "}
            name={"owsc"}
            value={CL.owsc}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR text={"Business Plan"} name={"bp"} value={CL.bp} />
          <ChecklistR
            text={"Lead Director-Passport "}
            name={"ldp"}
            value={CL.ldp}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Lead Director-Proof of Address"}
            name={"ldpa"}
            value={CL.ldpa}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Power of Attorney Document: "}
            name={"pad"}
            value={CL.pad}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Second Director-Passport"}
            name={"sdp"}
            value={CL.sdp}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Second Director-Proof of Address"}
            name={"sdpa"}
            value={CL.sdpa}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Third Director-Passport"}
            name={"tdp"}
            value={CL.tdp}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Third Director-Proof of Address"}
            name={"tdpa"}
            value={CL.tdpa}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Fourth Director-Passport"}
            name={"fdp"}
            value={CL.fdp}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Fourth Director-Proof of Address"}
            name={"fdpa"}
            value={CL.fdpa}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Certificate of Incorporation "}
            name={"coi"}
            value={CL.coi}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Memorandum of Association"}
            name={"moa"}
            value={CL.moa}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Articles of Association"}
            name={"aoa"}
            value={CL.aoa}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Share Register"}
            name={"sr"}
            value={CL.sr}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Share Certificate(s)-Signed"}
            name={"scs"}
            value={CL.scs}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Current Commercial Register Extract"}
            name={"ccre"}
            value={CL.ccre}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Corporate Bank Statements"}
            name={"cbs"}
            value={CL.cbs}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Personal Bank Statements"}
            name={"pbs"}
            value={CL.pbs}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Proof of Wealth"}
            name={"pow"}
            value={CL.pow}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Company AML Policy"}
            name={"cap"}
            value={CL.cap}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Gambling or Forex License"}
            name={"gofl"}
            value={CL.gofl}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Copywrite or Re-seller Agreement"}
            name={"cora"}
            value={CL.cora}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Fulfilment or Drop Shipping Agreement"}
            name={"fodsa"}
            value={CL.fodsa}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"FBO Company Registration"}
            name={"fcR"}
            value={CL.fcR}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Sales Handoff Sheet (CCBill Only)"}
            name={"shs"}
            value={CL.shs}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Confirmation & Declaration Form (GGS Only)"}
            name={"cdf"}
            value={CL.cdf}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
        </Row>
        <Link>
          <Button onClick={onSubmit}>Update Details</Button>
        </Link>
      </Form>
    </div>
  );
};
