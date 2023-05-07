"use client";

import { Button, Label, TextInput } from "flowbite-react";

export default function TwitchBotPage(): JSX.Element {
  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 text-4xl font-extrabold dark:text-white">
            Twitch Bot
          </h1>
        </header>

        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="authenticationUsername">
                Twitch Bot Username <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="authenticationUsername"
              type="input"
              placeholder="Twitch bot username"
              required
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              The username of your Twitch bot or main account
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="authenticationOauth">
                Twitch OAuth Token <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="authenticationOauth"
              type="password"
              placeholder="oauth:xxxxxxxxxxxxxxxx"
              required
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              The OAuth token for your Twitch bot or main account
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
