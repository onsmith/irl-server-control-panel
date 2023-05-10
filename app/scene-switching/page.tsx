"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import InputHelpText, {
  inputStatusColor,
} from "../../components/input-help-text";

export default function SceneSwitchingPage(): JSX.Element {
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
            Scene Switching
          </h1>
        </header>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(updateConfig)}
        >
          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                {...register("switcher.bitrateSwitcherEnabled")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Automatically switch scenes
              </span>
            </label>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Automatically switch the active OBS scene based on the current
              bitrate
            </p>
          </div>

          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                {...register("switcher.onlySwitchWhenStreaming")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Only switch scenes when live
              </span>
            </label>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Only automatically switch scenes when the stream is live
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="switcherRetryAttempts">
                Retry attempts <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switcherRetryAttempts"
              type="number"
              {...register("switcher.retryAttempts", {
                required: true,
                min: 1,
              })}
              color={inputStatusColor(errors, "switcher.retryAttempts")}
              defaultValue={5}
            />
            <InputHelpText errors={errors} name="switcher.retryAttempts">
              Number of times the stream bitrate will be checked before
              switching scenes
            </InputHelpText>
          </div>

          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                {...register("switcher.instantlySwitchOnRecover")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Instantly switch scenes on stream recovery
              </span>
            </label>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Skip any <em>retry attempts</em> and immediately switch back to
              the normal OBS scene on stream recovery
            </p>
          </div>

          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                {...register("switcher.autoSwitchNotification")}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Send chat notification when switching scenes
              </span>
            </label>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Post a message in chat whenever switching scenes automatically
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="switcherTriggersLow">
                Low bitrate threshold <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switcherTriggersLow"
              type="number"
              {...register("switcher.triggers.low", {
                required: true,
                min: 1,
              })}
              color={inputStatusColor(errors, "switcher.triggers.low")}
              defaultValue={800}
            />
            <InputHelpText errors={errors} name="switcher.triggers.low">
              If the bitrate is detected to be below this value in kbps, the
              "low bitrate" scene will be made active
            </InputHelpText>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="switcherTriggersRtt">
                Disconnected RTT threshold{" "}
                <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switcherTriggersRtt"
              type="number"
              {...register("switcher.triggers.rtt", {
                required: true,
                min: 1,
              })}
              color={inputStatusColor(errors, "switcher.triggers.rtt")}
              defaultValue={2500}
            />
            <InputHelpText errors={errors} name="switcher.triggers.rtt">
              If the round-trip time is detected to exceed this value in
              milliseconds, the "disconnected" scene will be made active
            </InputHelpText>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="switcherTriggersOffline">
                Disconnected bitrate threshold
              </Label>
            </div>
            <TextInput
              id="switcherTriggersOffline"
              type="number"
              {...register("switcher.triggers.offline", { min: 1 })}
              color={inputStatusColor(errors, "switcher.triggers.offline")}
              placeholder="null"
            />
            <InputHelpText errors={errors} name="switcher.triggers.offline">
              If the bitrate is detected to be below this value in kbps, the
              "disconnected" scene will be made active
            </InputHelpText>
          </div>

          <div>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </section>
    </div>
  );
}
