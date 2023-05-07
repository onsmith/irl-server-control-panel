"use client";

import { Button, Label, TextInput } from "flowbite-react";

export default function SceneSwitchingPage(): JSX.Element {
  return (
    <div className="p-6">
      <section>
        <header>
          <h1 className="mb-6 text-4xl font-extrabold dark:text-white">
            Scene Switching
          </h1>
        </header>

        <form className="flex flex-col gap-4">
          <div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" name="switcherBitrateSwitcherEnabled" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Toggle me
              </span>
            </label>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="switcherRetryAttempts">
                Retry Attempts <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switcherRetryAttempts"
              type="number"
              min={1}
              defaultValue={5}
              required
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Number of times the stream bitrate will be checked before
              switching scenes
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="switcherTriggersLow">
                Low Bitrate Threshold <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switcherTriggersLow"
              type="number"
              min={1}
              defaultValue={800}
              required
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Low bitrate threshold in kbps
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="switcherTriggersOffline">
                Disconnected Bitrate Threshold
              </Label>
            </div>
            <TextInput
              id="switcherTriggersOffline"
              type="number"
              min={1}
              placeholder="null"
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Bitrate in kbps to switch to your offline scene
            </p>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="switcherTriggersRtt">
                Disconnected RTT Threshold{" "}
                <span className="text-red-600">*</span>
              </Label>
            </div>
            <TextInput
              id="switcherTriggersRtt"
              type="number"
              min={1}
              defaultValue={2500}
              required
            />
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Round-trip time threshold in milliseconds
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
