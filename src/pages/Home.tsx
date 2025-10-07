import { RightArrow } from "@assets";
import { HiredBlock } from "@components";
import styled from "@emotion/styled";
import { flex } from "@styled/flex";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <section className="mainSection">
      <List>
        <LeftItem>
          <Title>Make Life Easier for the Family:</Title>
          <Text>Find Babysitters Online for All Occasions</Text>
          <StartLink to={"/"}>
            Get started <RightArrow />
          </StartLink>
        </LeftItem>
        <RightItem>
          <HiredBlock />
        </RightItem>
      </List>
    </section>
  );
};

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100%;
  padding: 32px;
`;
const LeftItem = styled.li`
  ${flex({ align: "flex-start" })}
  background-color: ${(props) => props.theme.colors.main};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-inline: 96px 64px;
  border-bottom-left-radius: 30px;
  border-top-left-radius: 30px;
`;
const RightItem = styled.li`
  background-image: linear-gradient(0deg, rgba(18, 20, 23, 0.6) 0%, rgba(18, 20, 23, 0.6) 100%),
    image-set(
      url("/home/babyBg.webp") type("image/webp") 1x,
      url("/home/babyBg-2x.webp") type("image/webp") 2x,
      url("/home/babyBg.jpg") type("image/jpeg") 1x
    );

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  position: relative;
`;
const Title = styled.h1`
  color: ${(props) => props.theme.colors.whiteText};
  font-size: 70px;
  font-weight: 500;
  line-height: 70px;
  letter-spacing: -2.1px;
  margin-bottom: 28px;
`;
const Text = styled.p`
  color: ${(props) => props.theme.colors.whiteText};
  font-size: 28px;
  line-height: 30px;
  letter-spacing: -0.56px;
  margin-bottom: 64px;
`;
const StartLink = styled(Link)`
  display: flex;
  padding: 18px 50px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 30px;
  border: 1px solid rgba(251, 251, 251, 0.4);
  color: ${(props) => props.theme.colors.whiteText};
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.2px;
`;
