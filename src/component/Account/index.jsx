import React from "react";
import CardAccount from "./Card";
import { Container, Wrap } from "./style";
import icon from "../../assets/imgs/code.png";
import process from "../../assets/imgs/process.png";
import users from "../../assets/imgs/users.png";

export const Account = () => {
  return (
    <Container>
      <Wrap>
        <Container.Header>
          Create an account <br /> & choose a path
        </Container.Header>
      </Wrap>
      <Wrap main>
        <Container.Text>
          The best way to stake your claim in the ecosystem is by creating an
          account (wallet). Then, choose the first step in your journey.
        </Container.Text>
        <CardAccount
          url={icon}
          title="Build"
          text="Build decentralized apps on a developer-friendly platform that features low fees, high speeds, and infinite scalability."
          btnName="I’m a developer"
        />
        <Container.Hr />
        <CardAccount
          url={process}
          title="Grow"
          text="Startup or grow up on a platform that sets you up for success. Investors, partners, and users are waiting."
          btnName="I’m a founder/creator"
        />
        <Container.Hr />
        <CardAccount
          url={users}
          title="Belong"
          text="When you find your purpose, you find your people. Pick a wallet, create an account, and start contributing today."
          btnName="Explore community"
        />
      </Wrap>
    </Container>
  );
};

export default Account;
