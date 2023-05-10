"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import InputHelpText, {
  inputStatusColor,
} from "../../components/input-help-text";

export default function TwitchBotPage(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

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
            Twitch Bot
          </h1>
        </header>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(updateConfig)}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="authenticationUsername">
                Twitch Bot Username <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="authenticationUsername"
              {...register("TWITCH_BOT_USERNAME", { required: true })}
              color={inputStatusColor(errors, "TWITCH_BOT_USERNAME")}
              type="input"
              placeholder="Twitch bot username"
            />
            <InputHelpText errors={errors} name="TWITCH_BOT_USERNAME">
              The username of your Twitch bot or main account
            </InputHelpText>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="authenticationOauth">
                Twitch OAuth Token <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="authenticationOauth"
              {...register("TWITCH_BOT_OAUTH", {
                required: true,
                pattern: /^oauth:.+$/,
              })}
              color={inputStatusColor(errors, "TWITCH_BOT_OAUTH")}
              type="password"
              placeholder="oauth:xxxxxxxxxxxxxxxx"
            />
            <InputHelpText errors={errors} name="TWITCH_BOT_OAUTH">
              The OAuth token for your Twitch bot or main account
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
