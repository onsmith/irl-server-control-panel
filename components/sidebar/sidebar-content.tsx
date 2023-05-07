import Link from "next/link";
import Sidebar from "./sidebar";

import { BiWindows } from "react-icons/bi";
import { BsChatDots, BsFileEarmarkText } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { GoSettings } from "react-icons/go";
import { MdSwapHoriz } from "react-icons/md";

const SidebarContent = function (): JSX.Element {
  return (
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/obs-scenes" as={Link} icon={BiWindows}>
            OBS Scenes
          </Sidebar.Item>
          <Sidebar.Item href="/scene-switching" as={Link} icon={MdSwapHoriz}>
            Scene Switching
          </Sidebar.Item>
          <Sidebar.Item href="/chat-commands" as={Link} icon={BsChatDots}>
            Chat Commands
          </Sidebar.Item>
          <Sidebar.Item href="/twitch-bot" as={Link} icon={FaRobot}>
            Twitch Bot
          </Sidebar.Item>
          <Sidebar.Item href="/advanced" as={Link} icon={GoSettings}>
            Advanced
          </Sidebar.Item>
          <Sidebar.Item href="/server-log" as={Link} icon={BsFileEarmarkText}>
            Server Log
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SidebarContent;
