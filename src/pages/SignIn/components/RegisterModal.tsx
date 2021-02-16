import { FormControl, FormGroup, TextField, Button } from '@material-ui/core';
import React from 'react';
import { ModalBlock } from '../../../components/ModalBlock';
import { useStylesSignIn } from '../../SignIn';

interface IRegisterModalProps {
  open: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<IRegisterModalProps> = ({
  open,
  onClose,
}: IRegisterModalProps): React.ReactElement => {
  const classes = useStylesSignIn();

  return (
    <ModalBlock
      visible={open}
      onClose={onClose}
      classes={classes}
      title="Создайте учетную запись">
      <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
        <FormGroup aria-label="position" row>
          <TextField
            className={classes.registerField}
            autoFocus
            id="name"
            label="Имя"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            type="name"
            fullWidth
          />
          <TextField
            className={classes.registerField}
            autoFocus
            id="email"
            label="E-Mail"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            type="email"
            fullWidth
          />
          <TextField
            className={classes.registerField}
            autoFocus
            id="password"
            label="Пароль"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            type="password"
            fullWidth
          />
          <Button variant="contained" color="primary" fullWidth>
            Далее
                </Button>
        </FormGroup>
      </FormControl>
    </ModalBlock>
  );
};
