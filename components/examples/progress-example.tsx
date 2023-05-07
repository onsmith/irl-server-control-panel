import { Progress } from "flowbite-react";

function ProgressExample(): JSX.Element {
  return (
    <Progress
      progress={45}
      label="Flowbite"
      labelPosition="outside"
      labelProgress
    />
  );
}
export default ProgressExample;
