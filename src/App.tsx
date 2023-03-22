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
    const [lock, setLock] = useState(false);
    const [specialLock, setSpecialLock] = useState(false);
    const [clicks, setClicks] = useState(0);
    const [photo_array, setArray] = useState<Photo[]>([]);
    const [photo, setPhoto] = useState<Photo>();

    const handleBan = (attr: string) => {
        setBans((prevBans) => [...prevBans, attr]);
    };

    const removeBan = (attr: string) => {
        setBans((prevBans) => prevBans.filter((value) => value !== attr));
    };

    const isBanned = (new_photo: Photo) => {
        if (photo) {
            // Check origin.
            for (let i = 0; i < bans.length; i++) {
                if (new_photo.breeds[0].origin == bans[i]) {
                    return true;
                }
            }
        }

        return false;
    };

    const handleClicks = () => {
        if (!lock || !specialLock) {
            setClicks(clicks + 1);
            setLock(true);
            setSpecialLock(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://api.thecatapi.com/v1/images/search?order=RAND&has_breeds=1&api_key=${API_KEY}`
            );

            if (!isBanned(response.data[0])) {
                setPhoto(response.data[0]);
                setLock(false);
            } else {
                setSpecialLock(true);
                handleClicks();
            }
        };

        if (clicks > 0 && lock) {
            fetchData();
            if (photo) {
                if (photo != photo_array[photo_array.length - 1]) {
                    setArray((prevArray) => [...prevArray, photo]);
                }
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
