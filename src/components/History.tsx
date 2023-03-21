import { FC } from "react";
import { Photo } from "./Photo";

interface Props {
    photo_array: Photo[];
}

const History: FC<Props> = (props) => {
    return (
        <div className="History">
            {props.photo_array.map((item, index) => (
                <div key={index} className="item">
                    <h3>{item.breeds[0].name}</h3>
                    <img src={item.url} alt={item.breeds[0].name} />
                </div>
            ))}
        </div>
    );
};

export default History;
