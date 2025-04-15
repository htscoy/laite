import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
// Form components that pre-bind events from the form hook; check our "Form Composition" guide for more
import { TextInput, NumberInput } from "../ui/Input";
import { Button, SubmitButton } from "../ui/Button";
// We also support Valibot, ArkType, and any other standard schema library
import { z } from "zod";
import { addDevice } from "../actions/addDeviceFn";
import { useEffect, useRef, useState } from "react";

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
  const ref = useRef<HTMLVideoElement>(null);
  const [isCameraOn, setIsCameraOn] = useState<boolean | null>(null);
  const [videoObj, setVideoObj] = useState();
  const form = useAppForm({
    defaultValues: {
      id: "",
      serialNumber: "",
      productGroup: "",
      deviceName: "",
    },
    validators: {
      // Pass a schema or function to validate
      onChange: z.object({
        id: z.string(),
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

  useEffect(() => {
    if (
      navigator.mediaDevices &&
      navigator.mediaDevices.getUserMedia &&
      ref.current !== null
    ) {
      // Use video without audio
      const constraints = {
        video: true,
        audio: false,
      };
      // setVideoObj(ref.current);

      // Start video stream
      navigator.mediaDevices.getUserMedia(constraints).then(async (stream) => {
        ref.current.srcObject = stream;

        // check compatibility
        if (!("BarcodeDetector" in globalThis)) {
          console.log("Barcode Detector is not supported by this browser.");
        } else {
          console.log("Barcode Detector supported!");

          const formats = await BarcodeDetector.getSupportedFormats();

          console.log(formats);

          const detector = new BarcodeDetector({
            formats,
          });

          const detectCode = () => {
            // Start detecting codes on to the video element
            detector
              .detect(ref.current)
              .then((codes) => {
                // If no codes exit function
                if (codes.length === 0) return;

                for (const barcode of codes) {
                  // Log the barcode to the console
                  console.log("Detected code: ", barcode);
                }
              })
              .catch((err) => {
                // Log an error if one happens
                console.error(err);
              });
          };
          setInterval(detectCode, 50);
        }
      });
    }
  }, []);

  return (
    <div>
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

      {isCameraOn ? (
        <video ref={ref} id="video" width="640" height="480" autoPlay></video>
      ) : (
        <Button onClick={() => setIsCameraOn(!isCameraOn)}>Use camera</Button>
      )}
    </div>
  );
};

export { AddDeviceForm };
