import { useState, useEffect } from "react";
import "./stylesheets/App.css";
import History from "./components/History";
import Discovery from "./components/Discovery";
import BanList from "./components/BanList";
import axios from "axios";
import { Photo } from "./components/Photo";

function App() {
    let photo_array: Photo[] = [];

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
        };

        if (clicks > 0) {
            fetchData();
            if (photo_array && photo) {
                photo_array.push(photo);
            }
        }
    }, [clicks]);

    return (
        <div className="App">
            <History photo_array={photo_array} />
            <Discovery handleClicks={handleClicks} photo={photo} />
            <BanList photo={photo} />
        </div>
    );
}

export default App;
