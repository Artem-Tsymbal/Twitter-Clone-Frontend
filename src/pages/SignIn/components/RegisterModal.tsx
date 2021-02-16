import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import {
  FormControl,
  FormGroup,
  TextField,
  Button,
} from '@material-ui/core';
import { Color } from '@material-ui/lab/Alert';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useStylesSignIn } from '../index';
import { ModalBlock } from '../../../components/ModalBlock';
import { Notification } from '../../../components/Notification';
import { fetchSignUp } from '../../../store/ducks/user/actionCreators';
import { selectUserStatus } from '../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../store/ducks/types';

interface IRegisterModalProps {
  open: boolean;
  onClose: () => void;
}

export interface IRegisterFormProps {
  fullName: string;
  username: string;
  email: string;
  password: string;
  password2: string;
}

const RegisterFormSchema = yup.object().shape({
  fullName: yup.string().required('Введите своё имя'),
  email: yup.string().email('Неверная почта').required('Введите почту'),
  username: yup.string().required('Введите логин'),
  password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
  password2: yup.string().oneOf([yup.ref('password')], 'Пароли не соответствуют'),
});

export const RegisterModal: React.FC<IRegisterModalProps> = ({
  open,
  onClose,
}: IRegisterModalProps): React.ReactElement => {
  const classes = useStylesSignIn();
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => { });
  const loadingStatus = useSelector(selectUserStatus);

  const { control, handleSubmit, errors } = useForm<IRegisterFormProps>({
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = async (data: IRegisterFormProps) => {
    dispatch(fetchSignUp(data));
  };

  React.useEffect(() => {
    if (loadingStatus === LoadingStatus.SUCCESS) {
      openNotificationRef.current('Регистрация успешна', 'success');
      onClose();
    } else if (loadingStatus === LoadingStatus.ERROR) {
      openNotificationRef.current('Ошибка при регистрации', 'error');
    }
  }, [loadingStatus]);

  return <Notification>
    {
      callback => {
        openNotificationRef.current = callback;
        return (
          <ModalBlock
            visible={open}
            onClose={onClose}
            classes={classes}
            title="Войти в аккаунт">
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                <FormGroup aria-label="position" row>
                  <Controller
                    as={TextField}
                    control={control}
                    name="email"
                    className={classes.registerField}
                    id="email"
                    label="E-Mail"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    type="email"
                    defaultValue=""
                    helperText={errors.email?.message}
                    error={!!errors.email}
                    fullWidth
                    autoFocus
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    name="username"
                    className={classes.registerField}
                    id="username"
                    label="Логин"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    type="text"
                    defaultValue=""
                    helperText={errors.username?.message}
                    error={!!errors.username}
                    fullWidth
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    name="fullName"
                    className={classes.registerField}
                    id="fullName"
                    label="Ваше имя"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    type="text"
                    defaultValue=""
                    helperText={errors.fullName?.message}
                    error={!!errors.fullName}
                    fullWidth
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    name="password"
                    className={classes.registerField}
                    id="password"
                    label="Пароль"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    type="password"
                    defaultValue=""
                    helperText={errors.password?.message}
                    error={!!errors.password}
                    fullWidth
                  />
                  <Controller
                    as={TextField}
                    control={control}
                    name="password2"
                    className={classes.registerField}
                    id="password2"
                    label="Пароль"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    type="password"
                    defaultValue=""
                    helperText={errors.password2?.message}
                    error={!!errors.password2}
                    fullWidth
                  />
                  <Button
                    disabled={loadingStatus === LoadingStatus.LOADING}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth>
                    Регистрация
                  </Button>
                </FormGroup>
              </FormControl>
            </form>
          </ModalBlock>
        );
      }
    }
  </Notification>;
};
