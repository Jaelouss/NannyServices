import styled from "@emotion/styled";
import { useModalStore } from "@store/modalStore";
import { flex } from "@styled/flex";
import { PasswordVisibilityButton } from "@UI/Buttons";
import { useState } from "react";

type PasswordVisibility = "hidden" | "visible";

type RegisterModalState = {
  userName: string;
  email: string;
  password: string;
};

export const RegisterModal = () => {
  const [passVisibility, setPassVisibility] = useState<PasswordVisibility>("hidden");

  const { setModalState, modalState } = useModalStore();
  const state = (modalState ?? {}) as RegisterModalState;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModalState({ ...modalState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(modalState);
  };
  return (
    <List>
      <Item>
        <Title>Registration</Title>
        <Text>
          Thank you for your interest in our platform! In order to register, we need some
          information. Please provide us with the following information.
        </Text>
      </Item>
      <Item>
        <Form id="login" onSubmit={handleSubmit}>
          <Label htmlFor="userName">
            <Input
              id="userName"
              type="text"
              name="userName"
              placeholder="Name"
              onChange={handleChange}
              value={state?.userName ?? ""}
            />
          </Label>
          <Label htmlFor="email">
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={state?.email ?? ""}
            />
          </Label>
          <Label htmlFor="password">
            <Input
              id="password"
              type={passVisibility === "hidden" ? "password" : "text"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={state?.password ?? ""}
            />
            <PasswordVisibilityButton value={passVisibility} setValue={setPassVisibility} />
          </Label>
        </Form>
      </Item>
      <Item>
        <Button type="submit" form="login">
          Sign Up
        </Button>
      </Item>
    </List>
  );
};
const List = styled.ul`
  ${flex({ gap: "40px" })};
`;
const Item = styled.li`
  ${flex({ align: "flex-start", gap: "20px" })};
  width: 100%;
`;
const Title = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  letter-spacing: -0.8px;
`;
const Text = styled.p`
  color: ${(props) => props.theme.colors.grayText};
`;
const Button = styled.button`
  padding: 16px;
  border-radius: 30px;
  background: ${(props) => props.theme.colors.main};
  width: 100%;
  color: ${(props) => props.theme.colors.whiteText};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.16px;
`;
const Form = styled.form`
  ${flex({ align: "flex-start", gap: "18px" })}
  width: 100%;
`;
const Label = styled.label`
  padding: 16px 18px;
  border-radius: 12px;
  border: 1px solid rgba(17, 16, 28, 0.1);
  width: 100%;
  ${flex({ direction: "row", gap: "18px" })}
`;
const Input = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
  outline: none;
  &::placeholder {
    color: ${(props) => props.theme.colors.text};
  }
`;
