import { Button } from "./style";

const CustomButton = ({ primary, title, width, last }) => {
  return (
    <Button primary={primary} width={width} last={last}>
      {title}
    </Button>
  );
};

export default CustomButton;
