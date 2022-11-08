import React from "react";
import { Button, InputGroup, FormControl, Form } from "react-bootstrap";

interface ClaimEventFormProps {
  addressHash: string;
  handleInput: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
  formError: string | null;
}

const ClaimEventForm: React.FC<ClaimEventFormProps> = ({
  addressHash,
  handleInput,
  handleSubmit,
  formError
}) => {
  const defaultFormError = "please enter your address";
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter your Pudge wallet address"
          aria-label="Pudge address"
          aria-describedby="Enter your Pudge wallet address"
          name="address_hash"
          value={addressHash}
          onChange={handleInput}
          className={formError !== "" ? "is-invalid" : ""}
          autoFocus
        />
        <InputGroup.Append>
          <Button variant="outline-light" type="submit">
            Claim
          </Button>
        </InputGroup.Append>
        <Form.Control.Feedback type="invalid">
          {formError || defaultFormError}
        </Form.Control.Feedback>
      </InputGroup>
    </Form>
  );
};

export default ClaimEventForm;
