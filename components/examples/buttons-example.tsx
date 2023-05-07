import { Button } from "flowbite-react";
function ButtonsExample(): JSX.Element {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button outline gradientDuoTone="purpleToBlue">
        Purple to blue
      </Button>
      <Button outline gradientDuoTone="cyanToBlue">
        Cyan to blue
      </Button>
      <Button outline gradientDuoTone="greenToBlue">
        Green to blue
      </Button>
      <Button outline gradientDuoTone="purpleToPink">
        Purple to pink
      </Button>
      <Button outline gradientDuoTone="pinkToOrange">
        Pink to orange
      </Button>
      <Button outline gradientDuoTone="tealToLime">
        Teal to lime
      </Button>
      <Button outline gradientDuoTone="redToYellow">
        Red to yellow
      </Button>
    </div>
  );
}
export default ButtonsExample;
