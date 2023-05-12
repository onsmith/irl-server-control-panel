"use client";

import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputHelpText, {
  inputStatusColor,
} from "../../components/input-help-text";

export default function AdvancedPage(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isSubmitSuccessful },
    reset,
  } = useForm();

  // user state for form
  const [config, setConfig] = useState(null);

  // Fetch config object from server on component load
  useEffect(() => {
    let isLoaded = true;
    axios({
      url: "/api/noalbs/config",
      method: "GET",
    }).then((response) => {
      if (isLoaded) {
        setConfig(response.data);
      }
    });
    return () => {
      isLoaded = false;
    };
  }, []);

  // Reset form when config object is updated
  useEffect(() => {
    reset(config!, { keepDirty: false });
  }, [config]);

  const updateConfig = async (data: any) => {
    return axios({
      url: "/api/noalbs/config",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    }).then((response) => {
      // TODO abort if component is unmounted
      setConfig(response.data);
    });
  };

  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 text-4xl font-extrabold dark:text-white">
            Advanced
          </h1>
        </header>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(updateConfig)}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="ingestKey">
                Ingest Key <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="ingestKey"
              {...register("switcher.streamServers.0.streamServer.publisher", {
                required: true,
              })}
              color={inputStatusColor(
                errors,
                "switcher.streamServers.0.streamServer.publisher"
              )}
            />
            <InputHelpText
              errors={errors}
              name="switcher.streamServers.0.streamServer.publisher"
            >
              The ingest key that authenticates the encoder, should begin with{" "}
              <code>producer/stream/</code>
            </InputHelpText>
          </div>

          <div>
            <Button
              type="submit"
              disabled={isSubmitting || !isDirty}
              className="btn btn-primary mr-1"
            >
              {isSubmitting && (
                <span className="spinner-border spinner-border-sm mr-1"></span>
              )}
              {isSubmitting
                ? "Saving"
                : isSubmitSuccessful || !isDirty
                ? "Saved"
                : "Save"}
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
