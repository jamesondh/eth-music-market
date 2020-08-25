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

// State
import { useMachine } from "@xstate/react";
import { useState, useEffect } from 'react';

import { GlobalStateContext, GlobalDispatchContext } from "../state/global";
import { Machine, assign } from "xstate";

import fleekStorage from '@fleekhq/fleek-storage-js'

import { apiKeys } from "../api-keys"

// import Dropzone from "react-dropzone";

const loginMachine = Machine({
  id: "login",
  initial: "editing",
  context: {
    releaseName: "",
    price: "",
    trackArtist: "",
    trackTitle: "",
    trackAudio: "",
    coverArt: "",
    error: null,
  },
  states: {
    editing: {
      on: {
        CHANGE_RELEASE_NAME: {
          actions: "changeReleaseName",
        },
        CHANGE_PRICE: {
          actions: "changePrice",
        },
        CHANGE_TRACK_ARTIST: {
          actions: "changeTrackArtist",
        },
        CHANGE_TRACK_TITLE: {
          actions: "changeTrackTitle",
        },
        CHANGE_COVER_ART: {
          actions: "changeCoverArt",
        },
        CHANGE_TRACK_AUDIO: {
          actions: "changeTrackAudio",
        },
        SUBMIT: "submitting",
      },
    },
    submitting: {
      invoke: {
        src: "submit",
        onDone: {
          target: "success",
          actions: "finishedSubmitting",
        },
        onError: {
          target: "failure",
          actions: "setError",
        },
      },
    },
    success: {
      type: "final",
    },
    failure: {
      on: {
        CHANGE_RELEASE_NAME: {
          target: "editing",
          actions: ["changeReleaseName", "clearError"],
        },
        CHANGE_PRICE: {
          target: "editing",
          actions: ["changePrice", "clearError"],
        },
        CHANGE_TRACK_ARTIST: {
          target: "editing",
          actions: ["changeTrackArtist", "clearError"],
        },
        CHANGE_TRACK_TITLE: {
          target: "editing",
          actions: ["changeTrackTitle", "clearError"],
        },
        CHANGE_COVER_ART: {
          target: "editing",
          actions: ["changeCoverArt", "clearError"],
        },
        CHANGE_TRACK_AUDIO: {
          target: "editing",
          actions: ["changeTrackAudio", "clearError"],
        }
      },
    },
  },
});

export default function Upload() {
  // State management
  const globalState = React.useContext(GlobalStateContext)
  const globalDispatch = React.useContext(GlobalDispatchContext)
  const [current, send] = useMachine(loginMachine, {
    actions: {
      changeReleaseName: assign({
        releaseName: (_ctx, evt) => evt.value,
      }),
      changePrice: assign({
        price: (_ctx, evt) => evt.value,
      }),
      changeTrackArtist: assign({
        trackArtist: (_ctx, evt) => evt.value,
      }),
      changeTrackTitle: assign({
        trackTitle: (_ctx, evt) => evt.value,
      }),
      changeCoverArt: assign({
        coverArt: (_ctx, evt) => evt.value,
      }),
      changeTrackAudio: assign({
        trackAudio: (_ctx, evt) => evt.value,
      }),
      setError: assign({
        error: (_ctx, evt) => evt.data,
      }),
      clearError: assign({
        error: (_ctx, _evt) => null,
      }),
    },
    services: {
      submit: (_ctx, _evt) =>
        new Promise(async (resolve, reject) => {
          const uploadedFile = await fleekStorage.upload({
            apiKey: apiKeys.fleekKey,
            apiSecret: apiKeys.fleekSecret,
            key: 'my-file-key',
            data: current.context.coverArt,
          })
          console.log(uploadedFile)
        }
    )}
  });

  // Form handling
  const handleReleaseNameChange = (e) => {
    send({ type: "CHANGE_RELEASE_NAME", value: e.currentTarget.value });
  };
  const handlePriceChange = (e) => {
    send({ type: "CHANGE_PRICE", value: e.currentTarget.value });
  };
  const handleTrackArtistChange = (e) => {
    send({ type: "CHANGE_TRACK_ARTIST", value: e.currentTarget.value });
  };
  const handleTrackTitleChange = (e) => {
    send({ type: "CHANGE_TRACK_TITLE", value: e.currentTarget.value });
  };
  const handleCoverArtChange = (e) => {
    send({ type: "CHANGE_COVER_ART", value: e.currentTarget.files[0] });
  };
  const handleTrackAudioChange = (e) => {
    send({ type: "CHANGE_TRACK_AUDIO", value: e.currentTarget.files[0] });
  };

  // Modal hooks
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleShow()
    send({ type: "SUBMIT" })
  }
  
  // Render
  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <Jumbotron className="my-2 py-4">
        <Form.Group as={Row}>
          <Form.Label column lg={2} md={3} sm={12}>
            Release name:
          </Form.Label>
          <Col lg={10} md={9} sm={12}>
            <Form.Control
              type="text"
              size="lg"
              placeholder="Name of single, EP, album, etc."
              value={current.context.releaseName}
              onChange={handleReleaseNameChange}
            ></Form.Control>
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
              <Form.Control
                placeholder="0.0"
                aria-label="Minimum price"
                value={current.context.price}
                onChange={handlePriceChange}
              />
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
                <Form.Control
                  type="text"
                  value={current.context.trackArtist}
                  onChange={handleTrackArtistChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column md="3" xs="4">
                Track title:
              </Form.Label>
              <Col md="9" sm="8">
                <Form.Control
                  type="text"
                  value={current.context.trackTitle}
                  onChange={handleTrackTitleChange}
                />
              </Col>
            </Form.Group>
            <br/>
            <p className="my-2 small">Track ordering:</p>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col className="my-auto">
                    <span>
                      1. artist{" "}
                      {true && true
                        ? "—"
                        : ""}{" "}
                      title
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