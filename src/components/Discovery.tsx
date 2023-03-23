import { FC } from "react";
import { Photo } from "./Photo";
import "../stylesheets/Discovery.css";

interface Props {
    photo: Photo | undefined;
    handleClicks: () => void;
    handleBans: (attr: string) => void;
}

const Discovery: FC<Props> = (props) => {
    if (props.photo) {
        return (
            <div className="Discovery">
                <h1>UNLIMITED CATS!!!</h1>
                <div className="curr-cat">
                    <h2>{props.photo.breeds[0].name}</h2>
                    <div className="attributes">
                        <h3
                            className="origin"
                            onClick={() => {
                                if (props.photo) {
                                    props.handleBans(
                                        props.photo.breeds[0].origin
                                    );
                                }
                            }}
                        >
                            {props.photo.breeds[0].origin}
                        </h3>
                        <div className="nums">
                            <h3>{props.photo.breeds[0].life_span} yrs</h3>
                            <h3>{props.photo.breeds[0].weight.imperial} in</h3>
                        </div>
                    </div>
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
