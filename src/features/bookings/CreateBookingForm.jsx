import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";

// import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
// import React, { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import { useGuest } from "../guests/useGuest";
import { useCabins } from "../cabins/useCabins";

import styled from "styled-components";
// import { useEffect } from "react";
import { subtractDates } from "../../utils/helpers";
import { useCreateBooking } from "./useCreatebooking";
// import { useCabin } from "../cabins/useCabin";
// import { useEffect } from "react";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;
// setShowForm={setShowForm} showForm={showForm}
function CreateBookingForm({ id, onCloseModal }) {
  const { cabins } = useCabins();
  // const { guest } = useGuest(id);
  const { isCreating, CreateBooking } = useCreateBooking();
  const { register, handleSubmit, reset } = useForm();

  const isWorking = false;

  function onSubmit(data) {
    // e.preventDefault(); // Remove this line
    console.log(data);
    const { startDate, endDate, numGuests, cabinId, observations } = data;
    const numNights = subtractDates(endDate, startDate);
    const cabin = cabins.find((cabin) => cabin.id === cabinId);
    // console.log(cabins,cabin)
    // const {cabin}=useCabin(cabinId);
    const cabinPrice = cabin?.regularPrice || 100;
    const totalPrice = cabinPrice * numNights;
    const status = "unconfirmed";
    const guestId = id;
    const finalBooking = {
      startDate,
      endDate,
      numNights,
      numGuests,
      cabinPrice,
      status,
      observations,
      cabinId,
      guestId,
      totalPrice,
    };
    console.log(finalBooking);
    CreateBooking(finalBooking, {
      onSuccess: (data) => {
        reset();
        onCloseModal?.();
      },
    });
    // onSuccess:
  }
  // console.log(guest);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label=" startDate">
        <Input
          type="date"
          disabled={isCreating}
          id="startDate"
          // onChange={(e)=>setStartDate(e.target.value)}
          {...register("startDate", {
            required: "this field is required",
            min: {
              value: 1,
              message: "please enter date",
            },
          })}
        />
      </FormRow>
      <FormRow label=" endDate">
        <Input
          type="date"
          disabled={isCreating}
          id="endDate"
          {...register("endDate", {
            required: "this field is required",
            min: {
              value: 1,
              message: "please enter date",
            },
          })}
        />
      </FormRow>

      <FormRow label="Total Guests">
        <Input
          type="number"
          id="numGuests"
          // defaultValue={guestCount}
          disabled={isCreating}
          // onChange={handleChange}
          {...register("numGuests", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least one",
            },
          })}
        />
      </FormRow>

      <FormRow label="Select Cabin">
        <StyledSelect
          // value={cabinId}
          // onChange={(e) => setCabinId(e.target.value)}
          id="cabinId"
          disabled={isCreating}
          {...register("cabinId")}
        >
          {cabins?.map((cabin) => (
            <option key={cabin.id} value={cabin.id}>
              {cabin.name}
            </option>
          ))}
        </StyledSelect>
      </FormRow>

      <FormRow label="Observations">
        <Input
          type="text"
          id="observations"
          disabled={isWorking}
          {...register("observations")}
        />
      </FormRow>
      {/* <FormRow label="Description for room">
        <Textarea
          type="number"
          id="description"
          disabled={isWorking}
          defaultValue=""
          {...register("description", {
            required: "this field is required",
          })}
        />
      </FormRow> */}

      {/* <FormRow label="Cabin photo">
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
      </FormRow> */}

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isCreating}>
          {/* {isEditSession ? "Edit Cabin" : "Add cabin"} */}
          Add Booking
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateBookingForm;
