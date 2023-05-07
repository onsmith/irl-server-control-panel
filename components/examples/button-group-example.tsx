import { Button } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";
function ButtonGroupExample(): JSX.Element {
  return (
    <Button.Group>
      <Button color="gray">
        <HiUserCircle className="mr-3 h-4 w-4" /> Profile
      </Button>
      <Button color="gray">
        <HiAdjustments className="mr-3 h-4 w-4" /> Settings
      </Button>
      <Button color="gray">
        <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
      </Button>
    </Button.Group>
  );
}

export default ButtonGroupExample;
