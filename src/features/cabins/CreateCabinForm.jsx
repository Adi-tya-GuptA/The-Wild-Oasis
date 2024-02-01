import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useCreateCabin } from "./useCreateCabin";
import useEditCabin from "./useEditCabin";
import styled from "styled-components";

const StyledButtons = styled.div`
  display: flex;
  gap: 3rem;
  padding: 2rem 4rem;
  position: relative;
  left: 430px;
  top: 10px;
  @media only screen and (max-width: 480px) {
    display: flex;
    gap: 2rem;
    padding: 2rem 3rem;
    margin: 0 1.5rem;
    left: 0px;
  top: 10px;
  }
`;

// setShowForm={setShowForm} showForm={showForm}
function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { isCreating, CreateCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const isWorking = isEditing || isCreating;
  // console.log(onCloseModal);
  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      CreateCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    // console.log(data);
  }
  function onError(err) {
    console.log(err);
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Cabin name">
        <Input
          type="text"
          disabled={isWorking}
          id="name"
          {...register("name", {
            required: "this field is required",
            min: {
              value: 1,
              message: "capacity should be atleast one",
            },
          })}
        />
      </FormRow>
      <FormRow label="Maximum capacity">
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "this field is required",
            min: {
              value: 1,
              message: "capacity should be atleast one",
            },
          })}
        />
      </FormRow>
      <FormRow label="Regular price">
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "this field is required",
            min: {
              value: 1,
              message: "capacity should be atleast one",
            },
          })}
        />
      </FormRow>
      <FormRow label="Discount">
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "this field is required",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular prize",
          })}
        />
      </FormRow>

      <FormRow label="Description for room">
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", {
            required: "this field is required",
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          type="file"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "this field is required",
            min: {
              value: 1,
              message: "capacity should be atleast one",
            },
          })}
        />
      </FormRow>

      <>
        <StyledButtons>
          <Button disabled={isWorking}>
            {isEditSession ? "Edit Cabin" : "Add cabin"}
          </Button>
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
        </StyledButtons>
      </>
    </Form>
  );
}

export default CreateCabinForm;
