"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import InputHelpText, {
  inputStatusColor,
} from "../../components/input-help-text";

export default function ObsScenesPage(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  // Handles the submit event on form submit.

  const updateConfig = (data: any) => {
    alert(JSON.stringify(data));
    // const response = fetch("/api/noalbs/config", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    // TODO use result
  };

  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 text-4xl font-extrabold dark:text-white">
            OBS Scenes
          </h1>
        </header>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(updateConfig)}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="switchingScenesNormal">
                Main scene name <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switchingScenesNormal"
              {...register("switcher.switchingScenes.normal", {
                required: true,
              })}
              type="input"
              placeholder="live"
              color={inputStatusColor(
                errors,
                "switcher.switchingScenes.normal"
              )}
            />
            <InputHelpText
              errors={errors}
              name="switcher.switchingScenes.normal"
            >
              Name of OBS scene to switch to if the bitrate is normal
            </InputHelpText>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="switchingScenesLow">
                Low bitrate scene name <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switchingScenesLow"
              {...register("switcher.switchingScenes.low", { required: true })}
              type="input"
              placeholder="low"
              color={inputStatusColor(errors, "switcher.switchingScenes.low")}
            />
            <InputHelpText errors={errors} name="switcher.switchingScenes.low">
              Name of OBS scene to switch to if the bitrate is low
            </InputHelpText>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="switchingScenesOffline">
                Disconnected scene name <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switchingScenesOffline"
              {...register("switcher.switchingScenes.offline", {
                required: true,
              })}
              type="input"
              placeholder="disconnected"
              color={inputStatusColor(
                errors,
                "switcher.switchingScenes.offline"
              )}
            />
            <InputHelpText
              errors={errors}
              name="switcher.switchingScenes.offline"
            >
              Name of OBS scene to switch to if the connection drops
            </InputHelpText>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="optionalScenesStarting">
                Starting scene name
              </Label>
            </div>
            <TextInput
              id="optionalScenesStarting"
              {...register("optionalScenes.starting")}
              type="input"
              placeholder="starting"
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Name of OBS scene to switch to when the chat command{" "}
              <code>!starting</code> is used
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="optionalScenesEnding">Ending scene name</Label>
            </div>
            <TextInput
              id="optionalScenesEnding"
              {...register("optionalScenes.ending")}
              type="input"
              placeholder="ending"
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Name of OBS scene to switch to when the chat command{" "}
              <code>!ending</code> is used
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="optionalScenesPrivacy">Privacy scene name</Label>
            </div>
            <TextInput
              id="optionalScenesPrivacy"
              {...register("optionalScenes.privacy")}
              type="input"
              placeholder="privacy"
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Name of OBS scene to switch to when the chat command{" "}
              <code>!privacy</code> is used
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="optionalScenesRefresh">Refresh scene name</Label>
            </div>
            <TextInput
              id="optionalScenesRefresh"
              {...register("optionalScenes.refresh")}
              type="input"
              placeholder="refresh"
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Name of OBS scene to switch to when the chat command{" "}
              <code>!refresh</code> is used
            </p>
          </div>

          <div>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </section>
    </div>
  );
}
