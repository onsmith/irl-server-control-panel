import { Button, Sidebar as FlowbiteSidebar } from "flowbite-react";
import { useState } from "react";
import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiShoppingBag,
    HiTable,
    HiUser,
    HiViewBoards,
} from "react-icons/hi";

function SidebarExample(): JSX.Element {
  const [isOpen, setOpen] = useState(false);

  function toggle() {
    setOpen(!isOpen);
  }

  return (
    <>
      <Button color="warning" onClick={toggle}>
        Toggle sidebar
      </Button>
      <div className="my-6 h-96">
        <FlowbiteSidebar aria-label="Example sidebar" collapsed={isOpen}>
          <FlowbiteSidebar.Items>
            <FlowbiteSidebar.ItemGroup>
              <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
                Dashboard
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item
                href="#"
                icon={HiViewBoards}
                label="Pro"
                labelColor="gray"
              >
                Kanban
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={HiInbox} label="3">
                Inbox
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={HiUser}>
                Users
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </FlowbiteSidebar.Item>
              <FlowbiteSidebar.Item href="#" icon={HiTable}>
                Sign Up
              </FlowbiteSidebar.Item>
            </FlowbiteSidebar.ItemGroup>
          </FlowbiteSidebar.Items>
        </FlowbiteSidebar>
      </div>
    </>
  );
}
export default SidebarExample;
