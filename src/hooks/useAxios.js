import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useAxios = (url) => {
    const [data, setData] = useState([]);
    const addData = async (restOfUrl="") => {
        console.log("restOfUrl", restOfUrl)
        
        const response = await axios.get(`${url}${restOfUrl}`);

        setData(data => [...data, { ...response.data, id: uuid() }]);
    }
    return [data, addData]; 
}


export default useAxios;
