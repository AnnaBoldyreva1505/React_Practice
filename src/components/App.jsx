import {Layout} from './Layout'
import Counter from "./Counter/Counter";
import Dropdown from "./Dropdown/Dropdown";

export const App = () => {
  return (
    <Layout>
        {/* <Counter initialValue={10}/> */}
        <Dropdown/>
    </Layout>
  );
};
