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
import { COLOR_AUTH_BORDER, COLOR_DISABLED_BUTTON, COLOR_ERROR_MESSAGE } from '@/config/style';
import * as Yup from 'yup';

const SignUp = () => {
  // const dispatch = useDispatch();

  const [backgroundIndex, setBackgroundIndex] = useState<number>(0)
  
  const errorMessage = Yup.object().shape({
    fullname: Yup.string().required('Required'),
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Password must greater than 8 characters').required('Required'),
  });

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
        <MUIGrid item xs={4} className="max-lg:hidden">
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
        <MUIGrid item xs={10} sm={8}  md={6} lg={4} xl={4}>
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
                password: '',
              }}
              validationSchema = {errorMessage}
              onSubmit={(values, helpers) => {
                console.log(values, helpers);
              }}>
              {({ handleSubmit, handleChange, errors }) => {
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
                      {errors.fullname && (
                        <MUIBox sx={{textAlign:'left', width:'80%', mb:1}}>
                          <MUITypography sx={{fontSize: '14px', color: `${COLOR_ERROR_MESSAGE}`}}>*{errors.fullname}</MUITypography>
                        </MUIBox>
                      )}

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

                      {errors.email && (
                        <MUIBox sx={{textAlign:'left', width:'80%', mb:1}}>
                          <MUITypography sx={{fontSize: '14px', color: `${COLOR_ERROR_MESSAGE}`}}>*{errors.email}</MUITypography>
                        </MUIBox>
                      )}
                       
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
                      {errors.username && (
                        <MUIBox sx={{textAlign:'left', width:'80%', mb:1}}>
                          <MUITypography sx={{fontSize: '14px', color: `${COLOR_ERROR_MESSAGE}`}}>*{errors.username}</MUITypography>
                        </MUIBox>
                      )}

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
                      {errors.password && (
                        <MUIBox sx={{textAlign:'left', width:'80%', mb:1}}>
                          <MUITypography sx={{fontSize: '14px', color: `${COLOR_ERROR_MESSAGE}`}}>*{errors.password}</MUITypography>
                        </MUIBox>
                      )}

                      <MUIButton sx={{width: '80%', 
                                      borderRadius: '8px',
                                    }} 
                                // disabled={errors.disabled === undefined ? true : errors.disabled ? true : false} 
                                variant="contained" 
                                type="submit">
                                  Sign Up
                      </MUIButton>
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
                
                  <MUITypography sx={{display:'inline', fontWeight:'bold', color: COLOR_DISABLED_BUTTON}}>
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
