"use client";

import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import InputHelpText, {
  inputStatusColor,
} from "../../components/input-help-text";

const languages = [
  "de",
  "dk",
  "en",
  "es",
  "fr",
  "it",
  "nb",
  "nl",
  "pl",
  "pt_br",
  "ru",
  "sv",
  "tr",
  "zh_tw",
];

export default function ChatCommandsPage(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  // Handles the submit event on form submit.

  const updateConfig = (data: any) => {
    data.chat.admins = data.chat.admins.trim();
    data.chat.admins =
      data.chat.admins.length > 0 ? data.chat.admins.split(/\s+/g) : [];
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
            Chat Commands
          </h1>
        </header>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(updateConfig)}
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="language">
                Chat language <span className="text-red-600">*</span>
              </Label>
            </div>
            <select
              {...register("language", { required: true })}
              className="w-full h-10 pl-3 pr-6 text-base border bg-gray-50 dark:bg-gray-700 dark:text-white rounded-lg appearance-none focus:shadow-outline"
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              The selected language will be used by the Twitch chat bot
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="chatUsername">
                Twitch username <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="chatUsername"
              {...register("chat.username", { required: true, minLength: 1 })}
              type="input"
              placeholder="Twitch username"
              color={inputStatusColor(errors, "chat.username")}
            />
            <InputHelpText errors={errors} name="chat.username">
              Username of the streamer's Twitch account
            </InputHelpText>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="chatAdmins">Twitch admin usernames</Label>
            </div>
            <TextInput
              id="chatAdmins"
              {...register("chat.admins", {
                pattern: /^s*.+(s+.+)*s*$/,
              })}
              type="input"
              placeholder="admin1 admin2"
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Usernames of the Twitch accounts who should have full access to
              all of the stream server's chat commands, separated by spaces
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="chatPrefix">
                Chat command prefix character{" "}
                <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="chatPrefix"
              {...register("chat.prefix", {
                required: true,
                minLength: 1,
                maxLength: 1,
              })}
              type="input"
              color={inputStatusColor(errors, "chat.prefix")}
              defaultValue="!"
              placeholder="!"
            />
            <InputHelpText errors={errors} name="chat.prefix">
              Prefix character to use to specify a chat command
            </InputHelpText>
          </div>

          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                {...register("chat.enableModCommands")}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Enable mod-only commands
              </span>
            </label>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Gives mods permission to use certain chat commands
            </p>
          </div>

          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                {...register("chat.enablePublicCommands")}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Enable public commands
              </span>
            </label>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Allows anyone to use the <code>!bitrate</code> chat command
            </p>
          </div>

          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                {...register("chat.enableAutoStopStreamOnHostOrRaid")}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Automatic end stream on host or raid
              </span>
            </label>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Automatically ends the stream if the streamer initiates a raid or
              host
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
