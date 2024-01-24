/* eslint-disable */

import { useForm } from "react-hook-form";

// import { useCountries } from 'hooks/useCountries';
import { useCreateGuest } from "./useCreateGuest";
import Spinner from "../../ui/Spinner";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import styled from "styled-components";

import { useUser } from "../authentication/useUser";
import { useGuestUser } from "./useGuestUser";
import { useGuest } from "./useGuest";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateGuest1 } from "./useCreateGuest1";
// import { updateCurrentUser } from "../../services/apiAuth";
// import { updateUser } from "../../services/apiGuests";

// With NEW modal
// function CreateGuest({ onSuccessNewGuest, setIsOpenForm }) {
function CreateGuestForm1({
  onSuccessNewGuest,
  oncloseModal,
  guestSession = false,
}) {
  // const { isLoading: isLoadingCountries, countries } = useCountries();
  const { isCreating, createGuest ,guest} = useCreateGuest1();
  const { user } = useUser();
  const { register, handleSubmit, formState, reset, getValues } = useForm();
  const { errors } = formState;
  const [action, setAction] = useState(false);
  const navigate = useNavigate();
  // // if (isLoadingCountries) return
  // const { guest, isLoading: guestLoading } = useGuestUser();
  // console.log(guest);
  // // if (guest) {
  // //   console.log("guest found");
  // // useEffect(() => {
  // //   // const guestID = guest[0]?.id;
  // //   if (guest?.length > 1) {
  //     const { guest: guestDetail, isLoading } = useGuest(guest[0]?.id);
  //     if (guest?.length > 1){
  //       if(isLoading)return <Spinner/>
  //     }
  // //     if (isLoading) return <Spinner />;
  // //     navigate("/cabins");
  //     console.log(guestDetail, 34);
  // //   }
  // // }, [action, guest]);
  // // // }
  // // // <Spinner />;
  

  // // const countryOptions = countries.map((country) => {
  // //   return {
  // //     value: country.name,
  // //     label: country.name,
  // //   };
  // // });
  // // useEffect(()=>{},[user,guest,gues])
  console.log(user.id, guestSession,guest);
  let adhar;
  const handleAction = () => {
    setAction((val) => true);
    
  };
  const onSubmit = function (data) {
    const { nationalId } = data;
    adhar = nationalId;
    const userId = user.id;
    console.log(data, userId);
    createGuest(
      { ...data, userId },
      {
        // In the mutate function, we can ALSO use the onSuccess handler, just like in useMutation. Both will get called. This one also gets access to the returned value of the mutation (new guest in this case)
        // This is how we can get access to the newly created object. Here we set it into state, because we want to display it in the UI
        onSuccess: (data) => {
          reset();
          {
            guestSession && handleAction();
          }
          oncloseModal?.();
        },
      }
    );
  };
  console.log(adhar);

  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="name"
          defaultValue={
            user?.user_metadata?.fullName || getValues("name") || " "
          }
          disabled={isCreating || action}
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          defaultValue={user?.email || getValues("email") || " "}
          disabled={isCreating || action}
          {...register("email", {
            required: "Email address is required",
            pattern: {
              // google: email regex JavaScript
              value: /\S+@\S+\.\S+/,
              message: "Please specify a valid email",
            },
          })}
        />
      </FormRow>

      <FormRow label="Mobile No" error={errors?.mobileNo?.message}>
        <Input
          type="text"
          id="mobileNo"
          defaultValue={getValues("mobileNo") || " "}
          disabled={isCreating || action}
          {...register("mobileNo")}
        />
      </FormRow>
      <FormRow label="Adhar Id" error={errors?.nationalId?.message}>
        <Input
          type="number"
          id="nationalId"
          disabled={isCreating || action}
          defaultValue={getValues("nationalId")}
          {...register("nationalId", {
            required: "Adhar Id is required",
            pattern: {
              // google: email regex JavaScript
              // value: /\S+@\S+\.\S+/,
              message: "Please specify a valid ID",
            },
          })}
        />
      </FormRow>

      <FormRow>
        {action || (
          <>
            <Button
              variation="secondary"
              type="reset"
              disabled={isCreating}
              onClick={() => oncloseModal?.()}
            >
              Cancel
            </Button>
            <Button disabled={isCreating}>Add guest details</Button>
          </>
        )}
      </FormRow>
    </Form>
  );
}

export default CreateGuestForm1;
