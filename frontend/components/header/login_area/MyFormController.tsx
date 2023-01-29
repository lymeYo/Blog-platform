import React from 'react'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

function MyFormController(props: any) {
  const { errors, control, name, dataErrorMessage } = props

  const getFieldLengthParametrs = (
    fieldName: 'email' | 'username' | 'password'
  ) => {
    if (fieldName == 'email') return {}

    const parameters = {
      username: {
        min: 3,
        minMessage: 'Минимальная длина поля - 3 символа',
        max: 25,
        maxMessage: 'Минимальная длина поля - 25 символов',
      },
      password: {
        min: 6,
        minMessage: 'Минимальная длина поля - 6 символов',
        max: 30,
        maxMessage: 'Минимальная длина поля - 30 символов',
      },
    }

    return {
      minLength: {
        value: parameters[fieldName].min,
        message: parameters[fieldName].minMessage,
      },
      maxLength: {
        value: parameters[fieldName].max,
        message: parameters[fieldName].maxMessage,
      },
    }
  }

  return (
    <div className="input-field">
      <Controller
        name={name}
        control={control}
        rules={{
          required: props.required ? 'Поле должно быть заполненным' : false,
          ...getFieldLengthParametrs(props.name),
        }}
        render={({ field }) => (
          <TextField
            {...field}
            error={dataErrorMessage || Boolean(errors?.[name])}
            label={name}
            helperText={dataErrorMessage || errors?.[name]?.message}
            fullWidth
          />
        )}
      />
    </div>
  )
}

export default MyFormController
