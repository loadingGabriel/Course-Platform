import React from 'react';

import { Container, Bar, Logo, ButtonLink, ButtonsContainer, ExitButton } from './styles';
import ClassIcon from '../../styles/assets/icons/class.svg';
import ConfigIcon from '../../styles/assets/icons/config.svg';
import ExitIcon from '../../styles/assets/icons/exit.svg';
import HomeIcon from '../../styles/assets/icons/home.svg';
import MessageIcon from '../../styles/assets/icons/message.svg';
import UserIcon from '../../styles/assets/icons/user.svg';

const Sidebar: React.FC = () => {
  return (
      <Container>
          <Bar>
            <Logo>F.</Logo>

            <ButtonsContainer>
                <ButtonLink>
                    <img src={HomeIcon} alt=""/>
                </ButtonLink>
                <ButtonLink>
                    <img src={ClassIcon} alt="" />
                </ButtonLink>
                <ButtonLink>
                    <img src={UserIcon} alt="" />
                </ButtonLink>
                <ButtonLink>
                    <img src={MessageIcon} alt="" />
                </ButtonLink>
                <ButtonLink>
                    <img src={ConfigIcon} alt="" />
                </ButtonLink>
            </ButtonsContainer>

            <ExitButton>
                <img src={ExitIcon} alt="" />
            </ExitButton>
          </Bar>
      </Container>
  );
}

export default Sidebar;