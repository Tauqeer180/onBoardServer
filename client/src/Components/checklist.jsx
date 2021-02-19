import React, { useState, useEffect } from "react";

import { Row, Button, Form } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import ChecklistR from "./CheckList/checklistR";
import { useDispatch, useSelector } from "react-redux";
import { Create } from "../actions/clAction";
import axios from "axios";
export const CheckList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const data = useSelector((state) => state.clReducer);

  console.log(data);
  const id = useSelector((state) => state.ciReducer.id);
  const [image, setImage] = useState("");

  const [CL, setCL] = React.useState({
    fcaf: { status: "pending", fileName: "fileName" },
    cdf: { status: "pending", fileName: "fileName" },

    bi: { status: "pending", fileName: "fileName" },
    ota: { status: "pending", fileName: "fileName" },
    aps: { status: "pending", fileName: "fileName" },
    hwua: { status: "pending", fileName: "fileName" },
    wc: { status: "pending", fileName: "fileName" },
    wuod: { status: "pending", fileName: "fileName" },
    owsc: { status: "pending", fileName: "fileName" },
    bp: { status: "pending", fileName: "fileName" },
    ldp: { status: "pending", fileName: "fileName" },
    ldpa: { status: "pending", fileName: "fileName" },
    pad: { status: "pending", fileName: "fileName" },
    sdp: { status: "pending", fileName: "fileName" },
    sdpa: { status: "pending", fileName: "fileName" },
    tdp: { status: "pending", fileName: "fileName" },
    tdpa: { status: "pending", fileName: "fileName" },
    fdp: { status: "pending", fileName: "fileName" },
    fdpa: { status: "pending", fileName: "fileName" },
    coi: { status: "pending", fileName: "fileName" },
    moa: { status: "pending", fileName: "fileName" },
    aoa: { status: "pending", fileName: "fileName" },
    sr: { status: "pending", fileName: "fileName" },
    scs: { status: "pending", fileName: "fileName" },
    ccre: { status: "pending", fileName: "fileName" },
    cbs: { status: "pending", fileName: "fileName" },
    pbs: { status: "pending", fileName: "fileName" },
    pow: { status: "pending", fileName: "fileName" },
    cap: { status: "pending", fileName: "fileName" },
    gofl: { status: "pending", fileName: "fileName" },
    cora: { status: "pending", fileName: "fileName" },
    fodsa: { status: "pending", fileName: "fileName" },
    fcR: { status: "pending", fileName: "fileName" },
    shs: { status: "pending", fileName: "fileName" },
    df: { status: "pending", fileName: "fileName" },
  });
  console.log(CL);
  useEffect(() => {
    setCL(data);
  }, [data]);
  console.log(CL);
  const handleChange =   (e) => {
   setCL({
      ...CL,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(CL);
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
            value={CL.fcaf.status}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR
            text={"Bank Information (Welcome Letter) "}
            name={"bi"}
            value={CL.bi.status}
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
            value={CL.ota.status}
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
            value={CL.aps.status}
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
            value={CL.hwua.status}
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
            value={CL.wc.status}
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
            value={CL.wuod.status}
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
            value={CL.owsc.status}
            onChange={(e) => {
              handleChange(e);
            }}
            onFileChange={(e) => {
              ImageHandler(e);
            }}
          />
          <ChecklistR text={"Business Plan"} name={"bp"} value={CL.bp.status} />
          <ChecklistR
            text={"Lead Director-Passport "}
            name={"ldp"}
            value={CL.ldp.status}
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
            value={CL.ldpa.status}
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
            value={CL.pad.status}
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
            value={CL.sdp.status}
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
            value={CL.sdpa.status}
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
            value={CL.tdp.status}
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
            value={CL.tdpa.status}
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
            value={CL.fdp.status}
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
            value={CL.fdpa.status}
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
            value={CL.coi.status}
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
            value={CL.moa.status}
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
            value={CL.aoa.status}
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
            value={CL.sr.status}
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
            value={CL.scs.status}
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
            value={CL.ccre.status}
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
            value={CL.cbs.status}
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
            value={CL.pbs.status}
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
            value={CL.pow.status}
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
            value={CL.cap.status}
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
            value={CL.gofl.status}
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
            value={CL.cora.status}
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
            value={CL.fodsa.status}
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
            value={CL.fcR.status}
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
            value={CL.shs.status}
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
            value={CL.cdf.status}
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
