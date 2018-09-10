import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const telegram = require(process.env.REACT_APP_MEDIA_URL +
  'social/telegram.png');
const twitter = require(process.env.REACT_APP_MEDIA_URL + 'social/twitter.png');
const facebook = require(process.env.REACT_APP_MEDIA_URL +
  'social/facebook.png');
const instagram = require(process.env.REACT_APP_MEDIA_URL +
  'social/instagram.png');

const click = (link: string) => {
  window.open(link, '_blank');
};

const SocialSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #4d346a;
  position: fixed;
  top: 50%;
  left: 0;
  z-index: 10;
  max-width: 80px;
  border-radius: 0 4px 4px 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
  }

  @media (max-width: 979px) {
    display: none;
  }

  @media screen and (max-width: 979px) and (orientation: landscape) {
    top: 30%;
  }
`;

const wobble = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }
  5% {
    transform: scale3d(1.2, .7, 1);
  }
  10% {
    transform: scale3d(.8, 1.2, 1);
  }
  45% {
    transform: scale3d(1, 1, 1);
  }
  70% {
    transform: scale3d(1, 1, 1);
  }
  90% {
    transform: scale3d(1.2, .8, 1);
  }
  95% {
    transform: scale3d(.8, 1.2, 1);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const SocialSidebarImage = styled.img`
  max-width: 32px;
  width: auto;
  height: auto;
  max-height: 36px;
  cursor: pointer;

  &:hover {
    animation: ${wobble} 0.2s ease-in-out;
  }
`;

const SocialSidebar = () => {
  return (
    <SocialSidebarContainer className="social-sidebar">
      <div>
        <SocialSidebarImage
          src={telegram}
          alt="Telegram icon"
          onClick={() => click('https://t.me/gingrggcgroup')}
        />
      </div>
      <div>
        <SocialSidebarImage
          src={twitter}
          alt="Twitter icon"
          onClick={() => click('https://twitter.com/GingrICO')}
        />
      </div>
      <div>
        <SocialSidebarImage
          src={facebook}
          alt="Facebook icon"
          onClick={() => click('https://www.facebook.com/gingr.ch/')}
        />
      </div>
      <div>
        <SocialSidebarImage
          src={instagram}
          alt="Instagram icon"
          onClick={() => click('https://www.instagram.com/gingrerotic/')}
        />
      </div>
    </SocialSidebarContainer>
  );
};

export default SocialSidebar;
