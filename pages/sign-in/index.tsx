import { MUIBox, MUICard, MUIGrid } from '@/components/MUIComponents';
import { ReactElement } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

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
          <MUIBox sx={{ border: '1px solid' }}>
            <Formik
              initialValues={{
                email: '',
                password: '',
                submit: null
              }}
              onSubmit={(values, helpers) => {}}>
              {({ handleSubmit, handleChange }) => {
                return <form onSubmit={handleSubmit}></form>;
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
