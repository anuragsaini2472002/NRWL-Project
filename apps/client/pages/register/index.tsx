import styles from './index.module.css';
import Registr from 'libs/client/ui/src/lib/register/register'

/* eslint-disable-next-line */
export interface RegisterProps {}

export function Register(props: RegisterProps) {
  return (
    <div className="container">
      <Registr/>
    </div>
  );
}

export default Register;
