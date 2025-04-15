import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
// Form components that pre-bind events from the form hook; check our "Form Composition" guide for more
import { TextInput, NumberInput } from "../ui/Input";
import { SubmitButton } from "../ui/Button";
// We also support Valibot, ArkType, and any other standard schema library
import { z } from "zod";
import { addDevice } from "../actions/addDeviceFn";

const { fieldContext, formContext } = createFormHookContexts();

// Allow us to bind components to the form to keep type safety but reduce production boilerplate
// Define this once to have a generator of consistent form instances throughout your app
const { useAppForm } = createFormHook({
  fieldComponents: {
    TextInput,
    NumberInput,
  },
  formComponents: {
    SubmitButton,
  },
  fieldContext,
  formContext,
});

const AddDeviceForm = () => {
  const form = useAppForm({
    defaultValues: {
      serialNumber: "",
      productGroup: "",
      deviceName: "",
    },
    validators: {
      // Pass a schema or function to validate
      onChange: z.object({
        serialNumber: z.string(),
        productGroup: z.string(),
        deviceName: z.string(),
      }),
    },
    onSubmit: async ({ value }) => {
      const response = await addDevice({ data: value });
      console.log(response);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      method="post"
    >
      <h1>Add device</h1>
      <form.AppField
        name="deviceName"
        children={(field) => (
          <field.TextInput
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            label="Device Name"
          />
        )}
      />
      <form.AppField
        name="serialNumber"
        children={(field) => (
          <field.TextInput
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            label="Serial Number"
          />
        )}
      />
      {/* The "name" property will throw+ a TypeScript error if typo'd  */}
      <form.AppField
        name="productGroup"
        children={(field) => (
          <field.TextInput
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            label="Product Group"
          />
        )}
      />
      {/* Components in `form.AppForm` have access to the form context */}
      <form.AppForm>
        <form.SubmitButton>Submit</form.SubmitButton>
      </form.AppForm>
    </form>
  );
};

export { AddDeviceForm };
