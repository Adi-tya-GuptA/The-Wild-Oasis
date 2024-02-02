import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useUpdateUser } from './useUpdateUser';
import styled from 'styled-components';

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
  /* height: 40%; */
  }
`;

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { mutate: updateUser, isLoading: isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: () => reset() });
  }

  function handleReset(e) {
    // e.preventDefault();
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label='Password (min 8 characters)'
        error={errors?.password?.message}
      >
        <Input
          type='password'
          id='password'
          // this makes the form better for password managers
          autoComplete='current-password'
          disabled={isUpdating}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          })}
        />
      </FormRow>

      <FormRow
        label='Confirm password'
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type='password'
          autoComplete='new-password'
          id='passwordConfirm'
          disabled={isUpdating}
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              getValues().password === value || 'Passwords need to match',
          })}
        />
      </FormRow>
      <StyledButtons>
        <Button disabled={isUpdating}>Update password</Button>
        <Button onClick={handleReset} type='reset' variation='secondary'>
          Cancel
        </Button>
      </StyledButtons>
    </Form>
  );
}

export default UpdatePasswordForm;
