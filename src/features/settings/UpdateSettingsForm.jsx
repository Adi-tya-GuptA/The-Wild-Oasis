// import Form from "ui/Form";
// import FormRow from "ui/Formwow";
// import Input from "ui/Input";
import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";
import useUpdateSetting from "./useUpdateSetting";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function UpdateSettingsForm() {
  const {
    settings: {
      minBookingLentgh,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
    isLoading,
  } = useSettings();
  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleBlur(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          defaultValue={minBookingLentgh}
          onBlur={(e) => handleBlur(e, "minBookingLentgh")}
          disabled={isUpdating}
          id="min-nights"
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          defaultValue={maxBookingLength}
          onBlur={(e) => handleBlur(e, "maxBookingLength")}
          disabled={isUpdating}
          id="max-nights"
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handleBlur(e, "maxGuestsPerBooking")}
          disabled={isUpdating}
          id="max-guests"
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleBlur(e, "breakFastPrice")}
          disabled={isUpdating}
          id="breakfast-price"
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
