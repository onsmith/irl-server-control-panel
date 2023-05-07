import { Spinner } from "flowbite-react";
function SpinnersExample(): JSX.Element {
  return (
    <div className="flex flex-wrap gap-2">
      <Spinner color="info" aria-label="info spinner example" />
      <Spinner color="success" aria-label="success spinner example" />
      <Spinner color="failure" aria-label="failure spinner example" />
      <Spinner color="warning" aria-label="Yellow spinner example" />
      <Spinner color="pink" aria-label="Pink spinner example" />
      <Spinner color="purple" aria-label="Purple spinner example" />
    </div>
  );
}
export default SpinnersExample;
