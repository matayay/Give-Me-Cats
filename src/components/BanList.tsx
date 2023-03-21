import { FC } from "react";
import { Photo } from "./Photo";

interface Props {
    photo: Photo | undefined;
}

const BanList: FC<Props> = (props) => {
    return <div className="BanList"></div>;
};

export default BanList;
