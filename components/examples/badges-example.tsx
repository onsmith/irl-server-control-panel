import { Badge } from "flowbite-react";
function BadgesExample(): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge color="info" size="sm">
        Info
      </Badge>
      <Badge color="gray" size="sm">
        Gray
      </Badge>
      <Badge color="failure" size="sm">
        Failure
      </Badge>
      <Badge color="success" size="sm">
        Success
      </Badge>
      <Badge color="warning" size="sm">
        Warning
      </Badge>
      <Badge color="indigo" size="sm">
        Indigo
      </Badge>
      <Badge color="purple" size="sm">
        Purple
      </Badge>
      <Badge color="pink" size="sm">
        Pink
      </Badge>
    </div>
  );
}
export default BadgesExample;
