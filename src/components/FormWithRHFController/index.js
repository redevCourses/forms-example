import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input, Radio, Checkbox, DatePicker, Button } from 'antd'

const FormWithRHFController = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email:</label>
        <Controller
          name='email'
          control={control}
          rules={{
            required: 'Поле обязательно для заполнения',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: 'Введите корректный email'
            }
          }}
          render={({ field }) => <Input {...field} placeholder='Email' />}
        />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label>Текст:</label>
        <Controller
          name='text'
          control={control}
          rules={{ required: 'Поле обязательно для заполнения' }}
          render={({ field }) => <Input {...field} placeholder='Текст' />}
        />
        <p>{errors.text?.message}</p>
      </div>

      <div>
        <label>Число:</label>
        <Controller
          name='number'
          control={control}
          rules={{ required: 'Поле обязательно для заполнения' }}
          render={({ field }) => (
            <Input type='number' {...field} placeholder='Число' />
          )}
        />
        <p>{errors.number?.message}</p>
      </div>

      <div>
        <label>Пол:</label>
        <Controller
          name='gender'
          control={control}
          rules={{ required: 'Выберите пол' }}
          render={({ field }) => (
            <Radio.Group {...field}>
              <Radio value='male'>Мужской</Radio>
              <Radio value='female'>Женский</Radio>
            </Radio.Group>
          )}
        />
        <p>{errors.gender?.message}</p>
      </div>

      <div>
        <label>Чекбокс:</label>
        <Controller
          name='checkbox'
          control={control}
          rules={{ required: 'Подтвердите выбор' }}
          render={({ field }) => <Checkbox {...field}>Я согласен</Checkbox>}
        />
        <p>{errors.checkbox?.message}</p>
      </div>

      <div>
        <label>Дата:</label>
        <Controller
          name='date'
          control={control}
          rules={{ required: 'Выберите дату' }}
          render={({ field }) => <DatePicker {...field} />}
        />
        <p>{errors.date?.message}</p>
      </div>

      <Button type='primary' htmlType='submit'>
        Отправить
      </Button>
    </form>
  )
}

export default FormWithRHFController
