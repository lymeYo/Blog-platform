import { IsEmail, IsOptional, Length } from "class-validator";

export class CreateUserDto {
  @Length(3, 25, {
    message: 'Ваше имя должно быть не менее 3 и не более 25 символов',
  })
  username: string;

  @IsEmail(undefined, { message: 'Почта указана в неверном формате' })
  @IsOptional()
  email: string;

  @Length(6, 30, {
    message: 'Пароль должен быть не менее 6 и не более 30 символов',
  })
  password: string;
}


