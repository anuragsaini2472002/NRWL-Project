import styles from './index.module.css';

/* eslint-disable-next-line */
export interface Page2Props {}

export function Page2(props: Page2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Page2!</h1>
    </div>
  );
}

export default Page2;
