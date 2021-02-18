import React from 'react'
import {
  AiOutlineFolderView,
  AiFillEdit,
  AiOutlineReload,
} from 'react-icons/ai'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

const styLabel = { border: '2px solid black', width: '50%' }
export const CheckList = () => {
  return (
    <div className='container'>
      <div>
        <h2>
          <span class='badge badge-success'>COMPANY INFORMATION </span>
        </h2>
      </div>

      <Form>
        <Row form>
          <Col md={3}>
            <Input
              type='text'
              value={'Fully Received Application Form'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Bank Information (Welcome Letter)'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Office Tenancy Agreement'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Acquiring Processing Statements'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Headline Website URL Address'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Fully Completed Application Form'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input type='text' value={'Website Compliance'} readOnly></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Website URL - Proof of Domain'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Ownership Structure Chart'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input type='text' value={'Business Plan'} readOnly></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Lead Director - Passport'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Lead Director - Proof of Address'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Fully Completed Application Form'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Power of Attorney Document:'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Second Director - Passport'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Second Director - Proof of Address'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Third Director - Passport'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Third Director - Proof of Address'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Fourth Director - Passport'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Fourth Director - Proof of Address'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Third Director - Proof of Address'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Certificate of Incorporation'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Memorandum of Association'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Articles of Association'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input type='text' value={'Share Register'} readOnly></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Share Certificate(s) - Signed'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Current Commercial Register Extract'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Corporate Bank Statements'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Personal Bank Statements'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input type='text' value={'Proof of Wealth'} readOnly></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input type='text' value={'Company AML Policy'} readOnly></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Gambling or Forex License'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Copywrite or Re-seller Agreement'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Fulfilment or Drop Shipping Agreement'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'FBO Company Registration'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Sales Handoff Sheet (CCBill Only)'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
          <Col md={3}>
            <Input
              type='text'
              value={'Confirmation & Declaration Form (GGS Only)'}
              readOnly
            ></Input>
          </Col>
          <Col style={{ marginLeft: '3%' }} md={-1}></Col>
          <Col md={-2}>
            <FormGroup>
              <Input
                className='custom-checkbox-lg'
                size={20}
                type='checkbox'
              ></Input>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Input type='file'></Input>
            </FormGroup>
          </Col>
          <Col md={1}>
            <AiOutlineFolderView size={30} />
          </Col>
          <Col md={3}>
            <FormGroup>
              <Input type='select'>
                <option>pending</option>
                <option>Received</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiFillEdit size={30} color={'green'} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <AiOutlineReload size={30} />
            </FormGroup>
          </Col>
        </Row>
        <Link>
          <Button>Update Details</Button>
        </Link>
      </Form>
    </div>
  )
}
