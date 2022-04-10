import styles from './index.module.css';
import Link from 'next/link';
// import Detail from 'libs/client/ui/src/lib/detail-comp/detail-comp'
import Home from 'libs/client/ui/src/lib/home/home'

export function Index() {
  return (<div>
   {/* <h1>This is index page or main page</h1> */}
   {/* <Link href="/register"><a>Registration</a></Link> */}
   {/* <Detail/> */}
   <Link href="/page1"><a>Path Page</a></Link>
   <Home/>

  </div>);
}

export default Index;
