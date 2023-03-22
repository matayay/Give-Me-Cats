import React, { useState, useEffect } from "react";
import "./stylesheets/App.css";
import History from "./components/History";
import Discovery from "./components/Discovery";
import BanList from "./components/BanList";
import axios from "axios";
import { Photo } from "./components/Photo";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
    const [bans, setBans] = useState<string[]>([]);
    const handleBan = (attr: string) => {
        setBans((prevBans) => [...prevBans, attr]);
    };

    const removeBan = (attr: string) => {
        setBans((prevBans) => prevBans.filter((value) => value !== attr));
    };

    const [lock, setLock] = useState(false);
    const [clicks, setClicks] = useState(0);
    const handleClicks = () => {
        if (!lock) {
            setClicks(clicks + 1);
            setLock(true);
        }
    };

    const [photo_array, setArray] = useState<Photo[]>([]);
    const [photo, setPhoto] = useState<Photo>();
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://api.thecatapi.com/v1/images/search?order=RAND&has_breeds=1&api_key=${API_KEY}`
            );
            setPhoto(response.data[0]);
            setLock(false);
        };

        if (clicks > 0 && lock) {
            fetchData();
            if (photo) {
                setArray((prevArray) => [...prevArray, photo]);
            }
        }
    }, [clicks]);

    return (
        <div className="App">
            <History photo_array={photo_array} />
            <Discovery
                handleClicks={handleClicks}
                handleBans={handleBan}
                photo={photo}
            />
            <BanList bans={bans} removeBan={removeBan} />
        </div>
    );
}

export default App;
