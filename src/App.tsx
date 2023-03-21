import React, { useState, useEffect } from "react";
import "./stylesheets/App.css";
import History from "./components/History";
import Discovery from "./components/Discovery";
import BanList from "./components/BanList";
import axios from "axios";
import { Photo } from "./components/Photo";

function App() {
    const [photo_array, setArray] = useState<Photo[]>([]);
    const [fetch, setFetch] = useState(true);

    const [clicks, setClicks] = useState(0);
    const handleClicks = () => {
        setClicks(clicks + 1);
    };

    const [photo, setPhoto] = useState<Photo>();
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                "https://api.thecatapi.com/v1/images/search?order=RAND&has_breeds=1&api_key=live_BCotpnlCcvjeC7WEza4FwLN7jhW4QnqySiKgFUgv9ejyAxB9d7xoswbs9bY9IbdI"
            );
            setPhoto(response.data[0]);
            setFetch(true);
        };

        if (clicks > 0 && fetch) {
            fetchData();
            if (photo) {
                photo_array.push(photo);
                setArray(photo_array);
                setFetch(false);
            }
        }
    }, [clicks]);

    return (
        <div className="App">
            <History photo_array={photo_array} />
            <Discovery handleClicks={handleClicks} photo={photo} />
            <BanList />
        </div>
    );
}

export default App;
