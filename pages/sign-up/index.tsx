import {
  MUIBox,
  MUIButton,
  MUICard,
  MUIGrid,
  MUITypography
} from '@/components/MUIComponents';
import { ReactElement, useState, useEffect } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import Link from 'next/link';
import { PATH } from '@/config/router/routerConfig';
import Logo from '@/public/images/iconMenu/Logo.svg';
import SVG from 'react-inlinesvg';
import { COLOR_AUTH_BORDER, COLOR_AUTH_BUTTON } from '@/config/style';

const SignUp = () => {
  // const dispatch = useDispatch();

  const [backgroundIndex, setBackgroundIndex] = useState<number>(0)
  
  useEffect(() => {
    setTimeout(() => {
      if(backgroundIndex === 3) setBackgroundIndex(0)
      else{
        let index: number = backgroundIndex
        setBackgroundIndex(index+1)
      }
    }, 5000)
  }, [backgroundIndex])
  return (
    <>
    {/* <MUICard> */}
      <MUIGrid
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}>
        <MUIGrid item xs={4}>
          <MUIBox
            sx={{
              backgroundImage: `url(/images/auth/home-phones.png)`,
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '100vh',
              position: 'relative'
            }}>
              <MUIBox sx={{
                position:'absolute', 
                backgroundImage: `url(/images/auth/content-${backgroundIndex}.png)` ,
                width:'100%',
                height:'100vh',
                backgroundRepeat:'no-repeat',
                backgroundPosition: 'center',
                transition:'background-image 2s ease-in-out',
                left:48,
                top:-20,
              }}>
                {/* <img height="100px" src='/images/auth/content.png' className="absolute height-[100px]" alt=''/> */}
              </MUIBox>
              {/* <MUIBox sx={{backgroundImage: `url(/images/auth/content.png)`, 
                position:'absolute',
                backgroundRepeat: 'no-repeat', 
                height: '',  
                width: '100%',}}>
              </MUIBox> */}
            </MUIBox>
        </MUIGrid>
        <MUIGrid item xs={4}>
          <MUIBox sx={{ border: `1px solid ${COLOR_AUTH_BORDER}`, mx: 2 }}>
          <MUIBox
              sx={{
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 5
              }}>
          
              <SVG src={Logo} width="100%" height="51px" title="Logo" />
        
            </MUIBox>
            <Formik
              initialValues={{
                fullname: '',
                username: '',
                email: '',
                password: ''
              }}
              onSubmit={(values, helpers) => {
                console.log(values, 'abc');
              }}>
              {({ handleSubmit, handleChange }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <MUIBox sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                      <TextField
                        name="fullname"
                        sx={{ width: '80%'}}
                        label="Fullname"
                        variant="outlined"
                        size="small"
                        onChange={val => {
                          handleChange('fullname')(val);
                        }}
                      />
                      <TextField
                        name="email"
                        sx={{ width: '80%', my: 1 }}
                        label="Email"
                        variant="outlined"
                        size="small"
                        onChange={val => {
                          handleChange('email')(val);
                        }}
                      />
                      <TextField
                        name="username"
                        sx={{ width: '80%'}}
                        label="Username"
                        variant="outlined"
                        size="small"
                        onChange={val => {
                          handleChange('username')(val);
                        }}
                      />
                      <TextField
                        name="password"
                        type="password"
                        sx={{ width: '80%', my: 1}}
                        label="Password"
                        variant="outlined"
                        size="small"
                        onChange={val => {
                          handleChange('password')(val);
                        }}
                      />
                      <MUIButton  sx={{width: '80%', 
                            background: COLOR_AUTH_BUTTON, 
                            borderRadius:'8px', 
                            color:'white',
                            my:1
                            }} type="submit">Sign Up</MUIButton>
                    </MUIBox>
                  </form>
                );
              }}
            </Formik>
          </MUIBox>
          <MUIBox sx={{ 
                border: `1px solid ${COLOR_AUTH_BORDER}`, 
                mx: 2, my:1, p: 3,
                textAlign:'center'}}>

              Already have access? Login{' '}
                
                  <MUITypography sx={{display:'inline', fontWeight:'bold', color: COLOR_AUTH_BUTTON}}>
                    <Link href={PATH.SIGNIN}>
                      here
                    </Link>
                  </MUITypography>
            </MUIBox>
            <MUIBox sx={{textAlign: 'center'}}>
            <MUITypography sx={{my:3}}> 
              Download app.
            </MUITypography>
           <MUIGrid container sx={{justifyContent:'center'}}>
              <MUIGrid item xs={5} sx={{display:'flex', justifyContent:'end', mr:0.5}}>
                <Link target='_blank' href="https://play.google.com/store/search?q=Instagram&c=apps">
                  <img src='/images/auth/google-play.png' width="140" alt=''/>
                </Link>

              </MUIGrid>
              <MUIGrid item xs={5} sx={{display:'flex', justifyContent:'start', ml:0.5}}>
                <Link target='_blank' href="https://apps.microsoft.com/detail/9nblggh5l9xt?hl=vi-vn&gl=VN">
                  <img src='/images/auth/microsoft-store.png' width="120" alt=''/>
                </Link>
              </MUIGrid>
           </MUIGrid>
          </MUIBox>
        </MUIGrid>
      </MUIGrid>
    {/* </MUICard> */}
    </>
  );
};

export default SignUp;

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
