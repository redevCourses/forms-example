import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormWithFormik = () => {
  const initialValues = {
    name: '',
    email: '',
    age: '',
    acceptedTerms: false,
    gender: ''
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Имя обязательно'),
    email: Yup.string().email('Неверный email').required('Email обязателен'),
    age: Yup.number()
      .typeError('Возраст должен быть числом')
      .integer('Возраст должен быть целым числом')
      .required('Возраст обязателен'),
    acceptedTerms: Yup.boolean()
      .oneOf([true], 'Вы должны принять условия')
      .required('Вы должны принять условия'),
    gender: Yup.string().required('Пол обязателен')
  })

  const handleSubmit = values => {
    console.log(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor='name'>Имя</label>
          <Field type='text' id='name' name='name' />
          <ErrorMessage name='name' component='div' />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='email' component='div' />
        </div>

        <div>
          <label htmlFor='age'>Возраст</label>
          <Field type='number' id='age' name='age' />
          <ErrorMessage name='age' component='div' />
        </div>

        <div>
          <label>
            <Field type='checkbox' name='acceptedTerms' />
            Принять положения и условия
          </label>
          <ErrorMessage name='acceptedTerms' component='div' />
        </div>

        <div>
          <label>
            <Field type='radio' name='gender' value='male' />
            Мужчина
          </label>
          <label>
            <Field type='radio' name='gender' value='female' />
            Женщина
          </label>
          <label>
            <Field type='radio' name='gender' value='trans' />
            Трансформер 🤖
          </label>
          <ErrorMessage name='gender' component='div' />
        </div>

        <button type='submit'>Submit</button>
      </Form>
    </Formik>
  )
}

export default FormWithFormik
