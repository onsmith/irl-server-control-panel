"use client";

import { Button, Label, TextInput } from "flowbite-react";

export default function ObsScenesPage(): JSX.Element {
  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 text-4xl font-extrabold dark:text-white">
            OBS Scenes
          </h1>
        </header>

        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="switchingScenesNormal">
                Normal Bitrate Scene <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switchingScenesNormal"
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
                Low Bitrate Scene <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switchingScenesLow"
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
                Disconnected Bitrate Scene{" "}
                <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switchingScenesOffline"
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
              <Label htmlFor="optionalScenesStarting">Starting Scene</Label>
            </div>
            <TextInput
              id="optionalScenesStarting"
              type="input"
              placeholder="starting"
              required
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Name of OBS scene to switch to when the chat command{" "}
              <code>!starting</code> is used
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="optionalScenesEnding">Ending Scene</Label>
            </div>
            <TextInput
              id="optionalScenesEnding"
              type="input"
              placeholder="ending"
              required
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Name of OBS scene to switch to when the chat command{" "}
              <code>!ending</code> is used
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="optionalScenesPrivacy">Privacy Scene</Label>
            </div>
            <TextInput
              id="optionalScenesPrivacy"
              type="input"
              placeholder="privacy"
              required
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Name of OBS scene to switch to when the chat command{" "}
              <code>!privacy</code> is used
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="optionalScenesRefresh">Refresh Scene</Label>
            </div>
            <TextInput
              id="optionalScenesRefresh"
              type="input"
              placeholder="refresh"
              required
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
