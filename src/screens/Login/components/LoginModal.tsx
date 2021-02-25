import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { fetchSignIn } from '../../../store/ducks/user/actionCreators';
import { selectUserStatus } from '../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../store/ducks/types';
import { ModalBlock } from '../../../components/common/ModalBlock';

interface ILoginModalProps {
  open: boolean;
  onClose: () => void;
}

export interface ILoginFormProps {
  email: string;
  password: string;
}

const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неыерная почта').required('Ввeдите почту'),
  password: yup.string().min(6, 'Минимальная длина пароля 6 симвлов').required(),
});

const LoginModal: React.FC<ILoginModalProps> = ({
  open,
  onClose,
}: ILoginModalProps): React.ReactElement => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectUserStatus);

  const { control, handleSubmit, errors } = useForm<ILoginFormProps>({
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = async (data: ILoginFormProps) => {
    dispatch(fetchSignIn(data));
  };

  return (
    <ModalBlock
      visible={open}
      onClose={onClose}
      title="Войти в аккаунт">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className="form__control" component="fieldset" fullWidth>
          <FormGroup aria-label="position" row>
            <Controller
              as={TextField}
              control={control}
              name="email"
              className="form__login-field"
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
              name="password"
              className="form__login-field"
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
            <Button
              disabled={loadingStatus === LoadingStatus.LOADING}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth>
              Войти
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  );
};

export default LoginModal;
