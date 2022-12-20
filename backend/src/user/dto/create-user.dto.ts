import { IsEmail, Length } from "class-validator";

export class CreateUserDto {
  id: string;
  
  @Length(3, 25, {message: "Ваше имя должно быть не менее 6 и не более 30 символов"})
  fullName: string;

  @IsEmail(undefined, { message: "Почта указана в неверном формате" })
  email: string;

  @Length(6, 30, {message: "Пароль должен быть не менее 6 и не более 30 символов"})
  password: string;
}
