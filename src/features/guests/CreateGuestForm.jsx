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

const FormSelect = styled(Select)`
  width: 100%;
`;

// With NEW modal
// function CreateGuest({ onSuccessNewGuest, setIsOpenForm }) {
function CreateGuestForm({ onSuccessNewGuest, oncloseModal }) {
  // const { isLoading: isLoadingCountries, countries } = useCountries();
  const { isCreating, createGuest } = useCreateGuest();

  const { register, handleSubmit, formState,reset } = useForm();
  const { errors } = formState;

  // if (isLoadingCountries) return <Spinner />;

  // const countryOptions = countries.map((country) => {
  //   return {
  //     value: country.name,
  //     label: country.name,
  //   };
  // });
  // console.log(oncloseModal);

  const onSubmit = function (data) {
    createGuest(
      { ...data },
      {
        // In the mutate function, we can ALSO use the onSuccess handler, just like in useMutation. Both will get called. This one also gets access to the returned value of the mutation (new guest in this case)
        // This is how we can get access to the newly created object. Here we set it into state, because we want to display it in the UI
        onSuccess: (data) => {
          reset();
          oncloseModal?.();

         
        },
      }
    );
  };

  return (
    <Form type="modal" onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isCreating}
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
      <FormRow label="Adhar Id" error={errors?.nationalId?.message}>
        <Input
          type="number"
          id="nationalId"
          disabled={isCreating}
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
        <Button
          variation="secondary"
          type="reset"
          disabled={isCreating}
          onClick={() => oncloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isCreating}>Add new guest</Button>
      </FormRow>
    </Form>
  );
}

export default CreateGuestForm;
