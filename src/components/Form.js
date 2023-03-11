import axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addPicture } from "../feature/picture.slice";

const Form = ({ getPictures }) => {
  const inputArt = useRef();
  const inputYear = useRef();
  const formRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      artist: inputArt.current.value,
      year: inputYear.current.value,
      photo: `https://picsum.photos/400/${Math.round(
        Math.random() * 200 + 300
      )}`,
    };

    axios
      .post("http://localhost:5000/pictures", data)
      .then(() => {
        dispatch(addPicture(data));
        formRef.current.reset();
      })
      .then(() => {
        dispatch(getPictures());
        // comme ça on interroge de nouveau la bdd car il a créé un id pour la data envoyée
      });
  };

  return (
    <div className="form-container">
      <div className="form">
        <h3>Enregistrer une nouvelle photo</h3>
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
          <input type="text" placeholder="Artiste" ref={inputArt} />
          <input type="text" placeholder="Année" ref={inputYear} />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default Form;
