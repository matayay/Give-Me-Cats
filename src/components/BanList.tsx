import { FC } from "react";
import { useState, useEffect } from "react";
import "../stylesheets/BanList.css";

interface Props {
    bans: string[];
    removeBan: (attr: string) => void;
}

const BanList: FC<Props> = (props) => {
    const [list, setList] = useState<React.ReactNode>(null);

    useEffect(() => {
        const renderList = async () => {
            setList(
                props.bans.map((item, index) => (
                    <h3
                        key={index}
                        className="ban"
                        onClick={() => props.removeBan(item)}
                    >
                        {item}
                    </h3>
                ))
            );
        };
        renderList();
    }, [props.bans.length]);

    return (
        <div className="BanList">
            <h1>Ban List</h1>
            {list}
        </div>
    );
};

export default BanList;
