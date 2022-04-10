import styles from './test-comp1.module.css';

/* eslint-disable-next-line */
export interface TestComp1Props {}

export function TestComp1(props: TestComp1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TestComp1!</h1>
    </div>
  );
}

export default TestComp1;
