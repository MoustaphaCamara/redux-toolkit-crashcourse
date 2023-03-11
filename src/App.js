import { useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import PicCard from "./components/PicCard";
import { useDispatch, useSelector } from "react-redux";
import { setPictureData } from "./feature/picture.slice";

const App = () => {
  const dispatch = useDispatch();
  const picsData = useSelector((state) => state.pictures.picture);

  const getPictures = () => {
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => dispatch(setPictureData(res.data)));
  };

  useEffect(() => {
    getPictures();
  }, []);

  return (
    <>
      <h1>Gallery</h1>
      <Form getPictures={getPictures} />
      <div className="cards-container">
        {picsData?.map((pic, index) => (
          <PicCard key={index} pic={pic} />
        ))}
      </div>
    </>
  );
};

export default App;
