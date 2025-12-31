import { useEffect } from "react";


const initialState = true;

function ImageRecognition() {

  useEffect(() => {
    console.log("ImageRecognition mounted");
  }, []);

  return (
    <div>
      <h1>Image Recognition</h1>
     
    </div>
  );
}

export default ImageRecognition;
