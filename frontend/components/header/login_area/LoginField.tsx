import { Button, TextField } from "@mui/material"
import { setCookie } from "nookies"
import React, { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { loginData, setLoginData } from "../../../redux/reducers/login/loginCreators"
import { UserAPI } from "../../../utils/api"
import { TAuthResData } from "../../../utils/api/types"


function DefaultFormController(props: any) {
  const { errors, control, name, dataErrorMessage, required } = props

  console.log(errors)
  
  return (
    <div className="input-field">
      <Controller
        name={name}
        control={control}
        rules={{
          required: props.required ? "Поле должно быть заполненным" : false,
          minLength: {
            value: 6,
            message: "Минимальная длина поля - 6 символа",
          },
          maxLength: {
            value: 20,
            message: "Максимальная длина поля - 20 символов",
          },
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

function LoginField(props: any) {
  const dispatch = useDispatch()
  const {
    register,
    reset,
    control,
    formState: { errors, isSubmitting },
    handleSubmit: externalHandleSubmit,
  } = useForm()

  const [dataErrorMessage, setDataErrorMessage] = useState('')

  const reduxFilling = (data: loginData) => {
    // console.log(data)

    dispatch(setLoginData(data))
  }

  const localHandleSubmit = async (fieldsData) => {
    try {
      reset({
        username: "",
        password: "",
        email: ""
      })
      
      let data: any = {
        username: fieldsData.username,
        password: fieldsData.password
      }
      
      if (fieldsData.email) data.email = fieldsData.email
      
      const res: TAuthResData = await(
        props.type == "registration"
          ? UserAPI.registration(data)
          : UserAPI.login(data)
      )

      setCookie(null, 'token', res.access_token, {
        maxAge: 30* 24 * 60 * 60,
        path: '/'
      })
      setDataErrorMessage('')
      if (props.type == "registration") props.changeTabTo("login")
      if (props.type == "login") props.modalClose()
      const { access_token, ...reduxData } = res
      reduxFilling(reduxData)
    } catch(err) {
      console.warn("Ошибка при авторизации", err.response?.data?.message)
      setDataErrorMessage(err.response?.data?.message || "Ошибка при авторизации")
    }
  }

  return (
    <div className="login-field">
      <form onSubmit={externalHandleSubmit(localHandleSubmit)}>
        <DefaultFormController
          dataErrorMessage={dataErrorMessage}
          errors={errors}
          control={control}
          name={"username"}
          required={true}
        />
        <DefaultFormController
          dataErrorMessage={dataErrorMessage}
          errors={errors}
          control={control}
          name={"password"}
          required={true}
        />
        {props.type == "registration" ? (
          <DefaultFormController
            dataErrorMessage={dataErrorMessage}
            errors={errors}
            control={control}
            name={"email"}
            required={false}
          />
        ) : (
          ""
        )}

        <Button disabled={isSubmitting} type="submit" variant="outlined">
          Отправить
        </Button>
      </form>
    </div>
  )
}

export default LoginField