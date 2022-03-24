/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import axios from 'axios';
import qs from 'qs';
import React, { useState } from 'react';
import { CustomLink } from 'components/customLink';

const user1 = {
  firstName: "jojo",
  lastName: "jojo",
  email: "jojo@jojo.com",
  emailVerified: true,
  enabled: true,
  username: "jojo@jojo.com",
  attributes: {"locale": "en", "mobile_number": "+1234567890"},
  credentials: [
    {
      temporary: false,
      value: "password"
    }
  ]
};

export default function Header({ className }) {

  const [oauthToken, setOauthToken] = useState("");

  const jsonUser = JSON.stringify(user1);

  console.log(jsonUser);

const  handleSubmit = (e) => {
  axios({method: 'post',
        url: 'http://jojo:8090/landing/api/v1/authenticate',
        data: JSON.stringify(user1),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        //setOauthToken(res.data.access_token);

        console.log(res);
        //return axios({
         // method: 'post',
          //url: 'http://jojo:8090/auth/admin/realms/SCDTP/users',
          //data: qs.stringify(user1),
          //headers: {'content-type': 'application/json',
            //        'Authorization': 'Bearer ${oauthToken}'}
          //})
        })   
}
  
  return (
      <header sx={styles.header} className={className} id="header">
          <Container sx={styles.container}>
          <Logo src={LogoDark}/>
          <Flex as="nav" sx={styles.nav}>
            {menuItems.map((menuItems, i) => (
              <Link activeClass='active'
                    to={menuItems.path} 
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={i}>
                      {menuItems.label}
              </Link>
            ))}
          </Flex>
              <CustomLink path="http://jojo:8090">
          <Button className="donate__btn" variant="secondary" aria-label="Get Started" onClick={handleSubmit}>
                Join The Program
          </Button>
          </CustomLink>
          <MobileDrawer />

          </Container>
      </header>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }
  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};