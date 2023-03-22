import { FC } from "react";
import { Photo } from "./Photo";
import "../stylesheets/History.css";

interface Props {
    photo_array: Photo[];
}

const History: FC<Props> = (props) => {
    return (
        <div className="History">
            <h1>History</h1>
            {props.photo_array.map((item, index) => (
                <div key={index} className="hist-item">
                    <h3>{item.breeds[0].name}</h3>
                    <img src={item.url} alt={item.breeds[0].name} />
                </div>
            ))}
        </div>
    );
};

export default History;
