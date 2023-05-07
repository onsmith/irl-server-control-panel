import { ListGroup } from "flowbite-react";
import {
    HiCloudDownload,
    HiInbox,
    HiOutlineAdjustments,
    HiUserCircle,
} from "react-icons/hi";
function ListGroupExample(): JSX.Element {
  return (
    <div className="w-48">
      <ListGroup>
        <ListGroup.Item active icon={HiUserCircle}>
          Profile
        </ListGroup.Item>
        <ListGroup.Item icon={HiOutlineAdjustments}>Settings</ListGroup.Item>
        <ListGroup.Item icon={HiInbox}>Messages</ListGroup.Item>
        <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
      </ListGroup>
    </div>
  );
}
export default ListGroupExample;
