"use client";

import { Button, Label, TextInput } from "flowbite-react";

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
  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 text-4xl font-extrabold dark:text-white">
            Chat Commands
          </h1>
        </header>

        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="language">
                Chat Language <span className="text-red-600">*</span>
              </Label>
            </div>
            <select
              id="language"
              className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
              placeholder="Regular input"
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
                Twitch Username <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="chatUsername"
              type="input"
              placeholder="Twitch username"
              required
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Username of the Twitch account you will stream from
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="chatAdmins">Twitch Mod Usernames</Label>
            </div>
            <TextInput
              id="chatAdmins"
              type="input"
              placeholder="mod1, mod2"
              required
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Username of the Twitch accounts that can use commands, separated
              by commas
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="chatPrefix">
                Chat Command Prefix <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="chatPrefix"
              type="input"
              placeholder="!"
              maxLength={1}
              required
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Prefix to use in chat to specify a command
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
