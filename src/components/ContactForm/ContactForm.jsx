import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { FaUserTie } from 'react-icons/fa';
import { FaMobileRetro } from 'react-icons/fa6';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createContactOperation } from '../../store/contacts/operationsContact.js';

// import { styled } from '@emotion/styled';
import styled from '@emotion/styled';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!'),
  number: Yup.string()
    .required('Required')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!'),
});

const IconWrapper = styled('span')({
  position: 'absolute',
  left: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
});

function ContactForm() {
  const dispatch = useDispatch();
  return (
    <Container maxWidth="sm">
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          dispatch(createContactOperation(values));
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Typography variant="h4" component="h3" gutterBottom>
              Add contacts
            </Typography>
            <Box mb={2} position="relative">
              <IconWrapper>
                <FaUserTie />
              </IconWrapper>
              <Field
                as={TextField}
                name="name"
                label="Name"
                fullWidth
                error={touched.name && Boolean(errors.name)}
                helperText={<ErrorMessage name="name" />}
                InputProps={{
                  startAdornment: <FaUserTie />,
                }}
              />
            </Box>
            <Box mb={2} position="relative">
              <IconWrapper>
                <FaMobileRetro />
              </IconWrapper>
              <Field
                as={TextField}
                name="number"
                label="Number"
                fullWidth
                error={touched.number && Boolean(errors.number)}
                helperText={<ErrorMessage name="number" />}
                InputProps={{
                  startAdornment: <FaMobileRetro />,
                }}
              />
            </Box>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add contact
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default ContactForm;
