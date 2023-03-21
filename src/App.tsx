import { useState, useEffect } from "react";
import "./stylesheets/App.css";
import History from "./components/History";
import Discovery from "./components/Discovery";
import BanList from "./components/BanList";
import axios from "axios";

interface Photo {
    id: number;
    sol: number;
    camera: {
        id: number;
        name: string;
        rover_id: number;
        full_name: string;
    };
    img_src: string;
    earth_date: string;
    rover: {
        id: number;
        name: string;
        landing_date: string;
        launch_date: string;
        status: string;
    };
}

function App() {
    const [photos, setPhotos] = useState<Photo[]>();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-11-13&api_key=BlUubwxNmhlkloB266e2MDcYRzk4ayjCHyhdWnjR"
            );

            setPhotos(response.data.photos);
        };
        fetchData();
    }, []);

    if (photos) {
        return (
            <div className="App">
                <History />
                <Discovery />
                <BanList />
            </div>
        );
    }
}

export default App;
