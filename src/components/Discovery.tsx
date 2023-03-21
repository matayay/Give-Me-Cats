import { FC } from "react";
import { Photo } from "./Photo";
import "../stylesheets/Discovery.css";

interface Props {
    handleClicks: () => void;
    photo: Photo | undefined;
}

const Discovery: FC<Props> = (props) => {
    if (props.photo) {
        return (
            <div className="Discovery">
                <h1>UNLIMITED CATS!!!</h1>
                <div className="curr-cat">
                    <h2>{props.photo.breeds[0].name}</h2>
                    <img src={props.photo.url} />
                </div>
                <button onClick={props.handleClicks}>Give me CATS</button>
            </div>
        );
    } else {
        return (
            <div className="Discovery">
                <h1>UNLIMITED CATS!!!</h1>
                <div className="curr-cat"></div>
                <button onClick={props.handleClicks}>Give me CATS</button>
            </div>
        );
    }
};

export default Discovery;
