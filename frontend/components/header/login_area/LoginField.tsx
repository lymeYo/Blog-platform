import { Button, TextField } from '@mui/material'
import { Action, ThunkAction } from '@reduxjs/toolkit'
import { setCookie } from 'nookies'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'

import { setLoginData } from '../../../redux/slices/login'
import { TloginData } from '../../../redux/slices/login/constants'
import { useAppDispatch } from '../../../redux/store'
import { MyApi } from '../../../utils/api'
import { TauthResData } from '../../../utils/api/types'
import MyFormController from './MyFormController'

function LoginField(props: any) {
  const dispatch = useAppDispatch()
  const {
    register,
    reset,
    control,
    formState: { errors, isSubmitting },
    handleSubmit: externalHandleSubmit,
  } = useForm()

  const [dataErrorMessage, setDataErrorMessage] = useState('')

  const reduxFilling = (res: TauthResData) => {
    const { access_token, ...reduxData }: { access_token: any } & TloginData =
      res
    dispatch(setLoginData(reduxData))
  }

  const localHandleSubmit = async (fieldsData) => {
    try {
      reset({
        username: '',
        password: '',
        email: '',
      })

      const data: any = {
        username: fieldsData.username,
        password: fieldsData.password,
      }

      if (fieldsData.email) data.email = fieldsData.email // для login это поле должно отсутствовать

      const res: TauthResData = await (props.type == 'registration'
        ? MyApi().user.registration(data)
        : MyApi().user.login(data))

      setCookie(null, 'token', res.access_token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      setDataErrorMessage('')
      if (props.type == 'registration') props.changeTabTo('login')
      if (props.type == 'login') {
        props.modalClose()
        reduxFilling(res)
      }
    } catch (err) {
      console.warn('Ошибка при авторизации', err.response?.data?.message)
      setDataErrorMessage(
        err.response?.data?.message || 'Ошибка при авторизации'
      )
    }
  }

  return (
    <div className="login-field">
      <form onSubmit={externalHandleSubmit(localHandleSubmit)}>
        <MyFormController
          dataErrorMessage={dataErrorMessage}
          errors={errors}
          control={control}
          name={'username'}
          required={true}
        />
        <MyFormController
          dataErrorMessage={dataErrorMessage}
          errors={errors}
          control={control}
          name={'password'}
          required={true}
        />
        {props.type == 'registration' ? (
          <MyFormController
            dataErrorMessage={dataErrorMessage}
            errors={errors}
            control={control}
            name={'email'}
            required={false}
          />
        ) : (
          ''
        )}

        <Button disabled={isSubmitting} type="submit" variant="outlined">
          Отправить
        </Button>
      </form>
    </div>
  )
}

export default LoginField
