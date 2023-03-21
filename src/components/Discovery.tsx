import { FC } from "react";
import { Photo } from "./Photo";

interface Props {
    handleClicks: () => void;
    photo: Photo;
}

const Discovery: FC<Props> = (props) => {
    return (
        <div className="Discovery">
            <h1>UNLIMITED CATS!!!</h1>
            <div className="curr-cat"></div>
            <button onClick={props.handleClicks}>Give me CATS</button>
        </div>
    );
};

export default Discovery;
