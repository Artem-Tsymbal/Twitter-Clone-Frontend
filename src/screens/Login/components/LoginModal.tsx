import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';
import ModalWindow from '../../../components/common/ModalWindow/ModalWindow';

import { fetchSignIn } from '../../../store/ducks/user/actionCreators';
import { selectStatusOfUser } from '../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../store/types';


interface ILoginModalProps {
  open: boolean;
  onClose: () => void;
}

export interface ILoginFormProps {
  email: string;
  password: string;
}

const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').required('Ввeдите почту'),
  password: yup.string().min(6, 'Минимальная длина пароля 6 симвлов').required(),
});

const LoginModal: React.FC<ILoginModalProps> = ({
  open,
  onClose,
}: ILoginModalProps) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const loadingStatus = useSelector(selectStatusOfUser);

  React.useEffect(() => {
    if (loadingStatus === LoadingStatus.SUCCESS) {
      history.push('/home');
    }
  }, [loadingStatus]);

  const { control, handleSubmit, errors } = useForm<ILoginFormProps>({
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data: ILoginFormProps) => {
    dispatch(fetchSignIn(data));
  };

  return (
    <ModalWindow visible={open} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className="form-control" component="fieldset" fullWidth>
          <FormGroup aria-label="position" row>
            <Controller
              as={TextField}
              control={control}
              name="email"
              className="form__field"
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
              className="form__field"
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
            <div className="form__button-wrapper">
              <Button
                className="form__button"
                disabled={loadingStatus === LoadingStatus.LOADING}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth>
                Войти
            </Button>
            </div>
          </FormGroup>
        </FormControl>
      </form>
    </ModalWindow>
  );
};

export default LoginModal;
