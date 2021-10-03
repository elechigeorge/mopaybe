import api from "../util/api";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../component/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import Message from "../component/Message";
import Loader from "../component/Loader";
import { editProfile } from "../action/profile";

const CreateProfile = () => {
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [images, setImages] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [facebook, setFacebook] = useState("");
  const [address, setAddress] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const getProfile = useSelector((state) => state.getProfile);
  const { error, loading } = getProfile;

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("images", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await api.post("/upload", formData, config);

      setImages(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      editProfile({
        images,
        company,
        address,
        description,
        website,
        twitter,
        instagram,
        linkedin,
        facebook,
      })
    );
  };

  return (
    <div className="mt-5">
      <div>
        <h3 className="lead">Update Your Business Profile</h3>
      </div>
      <hr />
      <FormContainer>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="images">
              <Form.Label>Business Logo</Form.Label>
              <Form.Control
                type="images"
                placeholder="Enter image url"
                value={images}
                onChange={(e) => setImages(e.target.value)}
                disabled
              ></Form.Control>
              <Form.File
                type="file"
                name="images"
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Business Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your Business Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Label>Business Address</Form.Label>
              <Form.Control
                type="address"
                placeholder="Enter Your Business Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Introduce your business, to investors</Form.Label>
              <Form.Control
                as="textarea"
                row={3}
                placeholder="Describe Your Business"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="website">
              <Form.Label>Business Website</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your website link"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <h2 className="lead mt-2">Social Media Presence</h2>
            <Form.Group controlId="twitter">
              <Form.Label>Twitter Handle</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter twiiter handle i.e. https://twitter.com/elechipro"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="instagram">
              <Form.Label>Instagram</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Instagram handle"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="linkedin">
              <Form.Label>LinkedIn</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Linkedin handle"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="facebook">
              <Form.Label>Facebook</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Facebook handle"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="success">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </div>
  );
};

export default CreateProfile;
