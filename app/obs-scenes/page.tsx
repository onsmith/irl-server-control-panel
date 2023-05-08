"use client";

import { Button, Label, TextInput } from "flowbite-react";
import React from "react";

export default function ObsScenesPage(): JSX.Element {
  // Handles the submit event on form submit.
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page
    event.preventDefault();

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch("/api/noalbs/config", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        switchingScenes: {
          normal: event.currentTarget["switchingScenesNormal"].value,
          low: event.currentTarget["switchingScenesLow"].value,
          offline: event.currentTarget["switchingScenesOffline"].value,
        },
        optionalScenes: {
          starting: event.currentTarget["optionalScenesStarting"].value,
          ending: event.currentTarget["optionalScenesEnding"].value,
          privacy: event.currentTarget["optionalScenesPrivacy"].value,
          refresh: event.currentTarget["optionalScenesRefresh"].value,
        },
      }),
    });

    // Get the response data from server as JSON
    const result = await response.json();

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

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="switchingScenesNormal">
                Main scene name <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switchingScenesNormal"
              name="switchingScenesNormal"
              type="input"
              placeholder="live"
              required
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Name of OBS scene to switch to if the bitrate is normal
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="switchingScenesLow">
                Low bitrate scene name <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switchingScenesLow"
              name="switchingScenesLow"
              type="input"
              placeholder="low"
              required
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Name of OBS scene to switch to if the bitrate is low
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="switchingScenesOffline">
                Disconnected scene name <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switchingScenesOffline"
              name="switchingScenesOffline"
              type="input"
              placeholder="disconnected"
              required
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Name of OBS scene to switch to if the connection drops
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="optionalScenesStarting">
                Starting scene name
              </Label>
            </div>
            <TextInput
              id="optionalScenesStarting"
              name="optionalScenesStarting"
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
              name="optionalScenesEnding"
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
              name="optionalScenesPrivacy"
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
              name="optionalScenesRefresh"
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
