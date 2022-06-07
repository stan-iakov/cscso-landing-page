/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Box, Heading, Text, Image, Button } from 'theme-ui';
import BannerImg from 'assets/banner-thumb.png';
import ShapeLeft from 'assets/shape-left.png';
import ShapeRight from 'assets/shape-right.png';
import FeatureThumb from 'assets/blog/2.jpg';
import Rating from 'components/rating';
import Avatar1 from 'assets/testimonial/avatar2.png';
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

export default function Banner() {

  
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
          url: 'https://server.com/app',
          data: JSON.stringify(user1[0]),
          headers: {
            'content-type': 'application/json',
            'x-buyer-id': buyer
          }
        })
        .then(res => {
          //setOauthToken(res.data.access_token);
  
          console.log(res.data.access_token);
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
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
          {appraisalCodes.filter(entry => entry.code===query.code).map(supplier => (
                  supplier.program
                ))} Program
            </Heading>
            <Text as="p" variant="heroSecondary">
              {appraisalCodes.filter(entry => entry.code===query.code).map(supplier => (
                  supplier.supplierName
                ))}, join This Program to have the Best Invoice Discounts
            </Text>
            {/* <CustomLink path="http://cscso-halo-uat.dev.echonet:8080"> */}
            {/* <CustomLink path="http://cscso-halo-uat.dev.echonet:8080/halo-aq0887"> */}
            <CustomLink path="https://server.com/app"> 
            
                <Button variant="primary" onClick={handleSubmit}>
                Join {appraisalCodes.filter(entry => entry.code===query.code).map(supplier => (
                  supplier.program
                ))}
                </Button>
             </CustomLink>
              
          </Box>
          
      </Container>
      <Container sx={styles.containerBox}>
      <Box sx={styles.contentBox}>
      <Box sx={styles.reviewCard} key='1'>
                <Rating rating="5"/>
                <Heading as="h3" sx={styles.title}>
                  "Efficient Supplier Financing"
                </Heading>
                <Text sx={styles.description}>
                  "Joining this program will drasticly speed up the process of financing your invoices with the Buyer Company. It is a reliable and secure way to do business with us."  
                </Text>
                <div className="card-footer">
                  <div className="image">
                    <Image src={Avatar1} alt="Client Image"/>  
                  </div>
                  <div className='reviewer-info'>
                    <Heading as="h4" sx={styles.heading}>
                      "Emmanuel Anjuere. CEO of Buyer Company"
                    </Heading>
                    <Text sx={styles.designation}>
                      "@em.anju"
                    </Text>

                  </div>
                </div>
            </Box>
            </Box>
            
            <Box sx={styles.thumbnail}>
               <Image src={FeatureThumb} alt="Thumbnail" />
            </Box>
            
    </Container>
    </section>
  );
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  reviewCard: {
    boxShadow: '0px 0px 1px rgba(38, 78, 118, 0.35)',
    transition: 'all 0.3s',
    borderRadius: '6px',
    p: [
      '30px 20px 35px',
      '30px 25px 35px',
      '30px 20px 35px',
      '35px 30px 40px 40px',
      '30px 30px 35px',
      '35px 30px 40px 40px',
    ],
    bg: 'white',
    textAlign: 'left',
    m: [
      '28px 5px 30px 5px',
      '28px 20px 30px 20px',
      '28px 15px 30px 15px',
      '28px 15px 30px 15px',
      '30px 20px 40px',
    ],
    '&:hover': {
      boxShadow: '0px 6px 30px rgba(38, 78, 118, 0.1)',
    },
    '.rating': {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: 'none',
        mb: 0,
        display: 'flex',
      },
      svg: {
        marginRight: '2px',
        '&:last-of-type': {
          marginRight: 0,
        },
      },
      '.star': {
        color: 'primary',
        mr: '1px',
      },
      '.star-o': {
        color: '#ddd',
        mr: '1px',
      },
      '.card-footer': {
        display: 'flex',
        alignItems: 'center',
        marginTop: [5, null, null, '33px'],
        '.image': {
          flexShrink: 0,
          mr: [3, null, null, 4],
          display: 'flex',
          img: {
            width: '55px',
            height: '55px',
            borderRadius: '50%',
            objectFit: 'cover',
          },
        },
      }
    }
  },
    title: {
      fontSize: [1, 2],
      fontWeight: 700,
      mb: [3, null, null, '22px'],
      color: 'text',
      lineHeight: 1.6,
    },
    description: {
      fontSize: [1, null, null, 2],
      fontWeight: 'normal',
      color: 'text',
      lineHeight: [1.85, null, 2],
    },
    heading: {
      fontSize: [1, null, null, 2],
      fontWeight: 700,
      mb: '3px',
      color: 'text',
      lineHeight: 1.3,
    },
    designation: {
      color: 'primary',
      fontWeight: '500',
      fontSize: 1,
      lineHeight: 1.4,
    },
  banner: {
    pt: ['140px', '145px', '155px', '170px', null, null, '180px', '215px'],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: 'relative',
    zIndex: 2,
    '&::before': {
      position: 'absolute',
      content: '""',
      bottom: 6,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom left',
      backgroundSize: '36%',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: '40px',
      right: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      backgroundImage: `url(${ShapeRight})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: 'bottom right',
      backgroundSize: '32%',
    },
    container: {
      minHeight: 'inherit',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    contentBox: {
      width: ['100%', '90%', '535px', null, '57%', '60%', '68%', '60%'],
      mx: 'auto',
      textAlign: 'center',
      mb: ['40px', null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: 'right',
      textAlign: 'center',
      display: 'inline-flex',
      mb: [0, null, -6, null, null, '-40px', null, -3],
      img: {
        position: 'relative',
        height: [245, 'auto'],
      },
    },
  },
};