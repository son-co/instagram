import {
  MUIBox,
  MUIButton,
  MUICard,
  MUIGrid,
  MUITypography
} from '@/components/MUIComponents';
import { ReactElement } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import Link from 'next/link';
import { PATH } from '@/config/router/routerConfig';

const SignIn = () => {
  const dispatch = useDispatch();
  return (
    <MUICard>
      <MUIGrid
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}>
        <MUIGrid item xs={4}>
          <MUIBox
            sx={{
              backgroundImage: `url(/images/auth/home-phones.png)`,
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '100vh'
            }}></MUIBox>
        </MUIGrid>
        <MUIGrid item xs={3}>
          <MUIBox sx={{ border: '1px solid', p: 1 }}>
            <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              onSubmit={(values, helpers) => {
                console.log(values, 'abc');
              }}>
              {({ handleSubmit, handleChange }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      name="email"
                      sx={{ width: '100%', my: 1 }}
                      label="Email"
                      variant="outlined"
                      size="small"
                      onChange={val => {
                        handleChange('email')(val);
                      }}
                    />

                    <TextField
                      name="password"
                      type="password"
                      sx={{ width: '100%', my: 1 }}
                      label="Password"
                      variant="outlined"
                      size="small"
                      onChange={val => {
                        handleChange('password')(val);
                      }}
                    />
                    <MUIButton type="submit">Sign In</MUIButton>
                    <MUITypography>
                      Do not have an accounts? Register{' '}
                      <Link href={PATH.SIGNUP}>
                        <strong>here</strong>
                      </Link>
                    </MUITypography>
                  </form>
                );
              }}
            </Formik>
          </MUIBox>
        </MUIGrid>
      </MUIGrid>
    </MUICard>
  );
};

export default SignIn;

SignIn.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};
