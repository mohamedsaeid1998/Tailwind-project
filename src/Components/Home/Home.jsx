import styles from "./Home.module.scss"
import Landing from './../Landing/Landing';
import Features from './../Features/Features';
import StayProductive from './../StayProductive/StayProductive';
import Testmonial from './../Testmonial/Testmonial';
import GetStarted from './../GetStarted/GetStarted';


export default function Home() {
  return<>
<Landing/>
<Features/>
<StayProductive/>
<Testmonial/>
<GetStarted/>
  </>
}
