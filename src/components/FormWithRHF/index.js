import { useForm } from 'react-hook-form'

const FormWithRHFController = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Имя:</label>
      <input {...register('name', { required: 'Обязательное поле' })} />
      <p>{errors.name?.message}</p>
      <label>Email:</label>
      <input
        {...register('email', {
          required: 'Обязательное поле',
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
            message: 'Введите валидный email'
          }
        })}
      />
      <p>{errors.email?.message}</p>
      <label>Возраст:</label>
      <input
        type='number'
        {...register('age', {
          required: 'Обязательное поле',
          min: {
            value: 18,
            message: 'Вам должно быть 18 лет или больше'
          }
        })}
      />
      <p>{errors.age?.message}</p>
      <label>Пол:</label>
      <input
        type='number'
        {...register('age', {
          required: 'Обязательное поле',
          min: {
            value: 18,
            message: 'Вам должно быть 18 лет или больше'
          }
        })}
      />
      <p>{errors.age?.message}</p>

      <label>Пол:</label>
      <div>
        <label>
          <input
            type='radio'
            {...register('gender', { required: 'Выберите пол' })}
            value='male'
          />
          Мужской
        </label>
        <label>
          <input
            type='radio'
            {...register('gender', { required: 'Выберите пол' })}
            value='female'
          />
          Женский
        </label>
      </div>
      <p>{errors.gender?.message}</p>
      <label>
        <input
          type='checkbox'
          {...register('acceptedTerms', {
            required: 'Вы должны принять условия'
          })}
        />
        Принимаю условия
      </label>
      <p>{errors.acceptedTerms?.message}</p>
      <button type='submit'>Отправить</button>
    </form>
  )
}

export default FormWithRHFController
