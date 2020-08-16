// UI elements
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';

import { apiKeys } from "../api-keys"

// import Dropzone from "react-dropzone";

export default function Upload() {
  return (
    <form data-testid="form">
      <Jumbotron className="my-2 py-4">
        <Form.Group as={Row}>
          <Form.Label column lg={2} md={3} sm={12}>
            Release name:
          </Form.Label>
          <Col lg={10} md={9} sm={12}>

          </Col>
        </Form.Group>
        <Row>
          <Form.Label column lg={2} md={3} sm={12}>
            Minimum price:
          </Form.Label>
          <Col lg={10} md={9} sm={12}>
            <InputGroup size="lg">
              <DropdownButton
                as={InputGroup.Prepend}
                variant="secondary"
                title="ETH"
              >
                <Dropdown.Item href="#">Ether (ETH)</Dropdown.Item>
              </DropdownButton>

              <InputGroup.Append>
                <InputGroup.Text>
                  ~$<span> USD</span>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
        </Row>
        <br/>

      </Jumbotron>


      <br />

      <Row>
        <Col className="my-auto">
          <div className="d-flex justify-content-center">
            <Button variant="secondary" size="sm">
              Upload art
            </Button>
          </div>
          <br/>
        </Col>
        <Col sm={8}>
          <Jumbotron className="my-2 py-3 px-3">
            <h4>Tracks</h4>
            <Form.Group as={Row}>
              <Form.Label column md="3" xs="4">
                Track artist:
              </Form.Label>
              <Col md="9" sm="8">

              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md="3" xs="4">
                Track title:
              </Form.Label>
              <Col md="9" sm="8">

              </Col>
            </Form.Group>
            <br/>
            <p className="my-2 small">Track ordering:</p>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col className="my-auto">
                    <span>
                      1. sdfgsdfg{" "}
                      {true && true
                        ? "—"
                        : ""}{" "}
                      hfdgfdsfgs
                    </span>
                  </Col>
                  <Col className="text-right">
                    <Button variant="light" size="sm">Up</Button>{" "}
                    <Button variant="light" size="sm">Down</Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Jumbotron>
        </Col>
      </Row>

      <br />

      <div className="text-center my-4">
        <Form.Group className="pt-2">
          <Form.Check
            type="checkbox"
            label="Upload IPFS hash to Ethereum network for extra redundancy (requires a small gas fee)"
          />
          <Form.Check
            required
            className="mt-2 text-danger"
            type="checkbox"
            label="I understand that I am responsible for all data uploaded to IPFS using this service"
          />
        </Form.Group>
        <Form.Group className="pt-3 my-4">
          <Button
            variant="secondary"
          >
            Clear
          </Button>{" "}
          <Button
            variant="success"
            type="submit"
          >
            Upload
          </Button>
        </Form.Group>
        <p className="small">
          Please double-check all information. Be mindful of files sizes as smaller
          files are faster to upload and download. Releases can be delisted from
          one's profile, but they will remain on IPFS and cannot be
          modified.
        </p>
      </div>
    </form>
  )
}