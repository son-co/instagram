import {
  MUIBox,
  MUIButton,
  MUICard,
  MUIGrid,
  MUITypography
} from '@/components/MUIComponents';
import { ReactElement } from 'react';
import { Formik } from 'formik';
// import { useDispatch } from '@/store';
import { store } from '@/store';
import { TextField } from '@mui/material';
import Link from 'next/link';
import { PATH } from '@/config/router/routerConfig';
import { loginUser } from '@/slices/auth/authThunk';
import { useRouter } from 'next/router';

const SignIn = () => {
  // const dispatch = useDispatch();
  const router = useRouter();
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
                password: '',
                submit: null
              }}
              onSubmit={(values, helpers) => {
                store
                  .dispatch(
                    loginUser({
                      email: values.email,
                      password: values.password
                    })
                  )
                  .unwrap()
                  .then(() => {
                    router.push(PATH.HOME);
                  })
                  .catch(err => {
                    helpers.setStatus({ success: false });
                    helpers.setErrors({ submit: err.message });
                    helpers.setSubmitting(false);
                  })
                  .finally(() => {});
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
