import { useState } from "react";
import axios from "axios";


function useFlip(initialFlipState = true) {
    const [isFlipped, setIsFlipped] = useState(initialFlipState);

    const flip = () => {
        setIsFlipped(isUp => !isUp);
    };

    return [isFlipped, flip];
}


function useAxios(baseUrl) {
    const [responses, setResponses] = useState([]);
  
    const addResponseData = async (restOfUrl = "") => {
      try {
        const url = `${baseUrl}${restOfUrl}`;
        const response = await axios.get(url);
        setResponses(prevData => [...prevData, response.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    const clearResponses = () => {
      setResponses([]);
    };
  
    return [responses, addResponseData, clearResponses];
  }
  



export { useFlip, useAxios };
