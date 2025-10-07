import { PasswordHidden, PasswordShown } from "@assets";
import styled from "@emotion/styled";

type PasswordVisibility = "hidden" | "visible";

type Props = {
  value: PasswordVisibility;
  setValue: (state: PasswordVisibility) => void;
};

export const PasswordVisibilityButton: React.FC<Props> = ({ value, setValue }) => {
  const handleClick = () => {
    setValue(value === "hidden" ? "visible" : "hidden");
  };

  const Icon = ({ size = 24 }: { size?: number }) => {
    const Component = value === "visible" ? PasswordShown : PasswordHidden;
    return <Component width={size} height={size} />;
  };

  return (
    <Button type="button" onClick={handleClick}>
      <Icon size={20} />
    </Button>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
