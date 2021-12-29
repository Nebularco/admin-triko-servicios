import { useAppSelector } from "../../../redux/hooks/hooks";
import Pages from "../../common/Pages";

interface Props {}

const Home = (props: Props) => {
  const drawer = useAppSelector((state) => state.drawer.open);

  return (
    <>
      <Pages drawer={drawer}>
        <h1>Hola Triko</h1>
      </Pages>
    </>
  );
};

export default Home;
