/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.svg';
//import LogoDark from 'assets/1822-1856-180onlinelogomaker-049.svg';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import axios from 'axios';
import qs from 'qs';
import React, { useState } from 'react';
import { CustomLink } from 'components/customLink';
import { useRouter } from 'next/router';  

// const user1 = {
//   firstName: "jojo",
//   lastName: "jojo",
//   email: "jojo@jojo.com",
//   emailVerified: true,
//   enabled: true,
//   username: "jojo@jojo.com",
//   attributes: {"locale": "en", "mobile_number": "+1234567890"},
//   credentials: [
//     {
//       temporary: false,
//       value: "password"
//     }
//   ]
// };

export default function Header({ className }) {

  const [oauthToken, setOauthToken] = useState("");

  const {query}= useRouter();


  const appraisalCodes = [
    {code: "ABC-123",supplierName: "Stanimir Iakov", supplierEmail: "stanimir.iakov@bnpparibas.com",buyer: "Tesla",program: "Ethereum Star"},
    {code: "DEF-456",supplierName: "Emmanuel Anjuere", supplierEmail: "emmanuel.anjuere@bnpparibas.com",buyer: "Thales",program: "Flying Bitcoin"},
    {code: "GHI-789",supplierName: "Rokhaya Gaye Esnault", supplierEmail: "rokhaya.gayeesnault@bnpparibas.com",buyer: "Auchan",program: "Solana Arrow"},
    {code: "JKL-011",supplierName: "Vincent Cognet", supplierEmail: "vincent.cognet@bnpparibas.com",buyer: "CAP Gemini",program: "Cardano Storm"},
    {code: "MNO-012",supplierName: "Karim Zouad", supplierEmail: "karim.zouad@asia.bnpparibas.com",buyer: "SingTel",program: "Matic Lions"},
    {code: "PQR-013",supplierName: "Ines Mohamed", supplierEmail: "ines.mohamed@bnpparibas.com",buyer: "GUINESS",program: "DAI Constellation"},
    {code: "STU-014",supplierName: "Tanmoy Konar", supplierEmail: "tanmoy.konar@bnpparibas.com",buyer: "Reliance",program: "Litecoin Magic"},
    {code: "VWX-015",supplierName: "Xavier Ly", supplierEmail: "xavier.ly@asia.bnpparibas.com",buyer: "HK Electric",program: "Polkadot Dream"},
    
    
    
    
  ];

  const buildUser = () => {
    return appraisalCodes.filter(entry => entry.code===query.code).map((supplier) => {
      return {
        firstName: supplier.supplierName,
        lastName: supplier.supplierName,
        email: supplier.supplierEmail,
        emailVerified: true,
        enabled: true,
        username: supplier.supplierEmail,
        attributes: {"locale": "en", "mobile_number": "+1234567890"},
        credentials: [
           {
             temporary: true,
             value: "password"
            }
        ]     
      }
    })
       
  }

  const jsonUser = JSON.stringify(buildUser()[0]);


    
    
  
  
  

const  handleSubmit = (e) => {
  let buyer = appraisalCodes.filter(entry => entry.code===query.code).map(supplier => (
   supplier.buyer
  ))
  let user1 = buildUser();
  
  
  
    axios({method: 'post',
          // url: 'http://cscso-marketing-uat.dev.echonet:8090/landing/api/v1/authenticate',
          url: 'https://server.com/qpp',
          data: JSON.stringify(user1[0]),
          headers: {
            'content-type': 'application/json',
            'x-buyer-id':  buyer
          }
        })
        .then(res => {
        //setOauthToken(res.data.access_token);

        
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
          {/* <CustomLink path="http://cscso-halo-uat.dev.echonet:8080"> */}
          {/* <CustomLink path="http://cscso-halo-uat.dev.echonet:8080/halo-aq0887"> */}
          <CustomLink path="https://server.com/app">
          <Button className="donate__btn" variant="secondary" aria-label="Get Started" onClick={handleSubmit}>
                Join The Program {appraisalCodes.filter(entry => entry.code===query.code).map(supplier => (
                  supplier.program
                ))}
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