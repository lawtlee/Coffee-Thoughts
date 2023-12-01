import React, { useState, useRef, Dispatch, SetStateAction } from "react";

interface props{
    setImage: Dispatch<SetStateAction<Array<any>>>;
    images: Array<any>;
}

const ImageUpload: React.FC<props> = (props) => {
    const [image, setImage] = useState();
    const inputFile = useRef(null);

    const handleFileUpload = e => {
        const { files } = e.target;
        if (files && files.length) {
        const filename = files[0].name;

        var parts = filename.split(".");
        const fileType = parts[parts.length - 1];
        // console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
        setImage(files[0]);
        // setImage(image.push(files[0]))
        // props.setImage(files[0])
        console.log(props)
    }
  };

    const onButtonClick = () => {
      inputFile.current.click();
    };

    // console.log("imageimage", image);
    return (
      <div className="flex flex-col justify-end h-[62px]">
          <input
              style={{ display: "none" }}
              accept=".jpg,.jpeg,.heic,.png"
              ref={inputFile}
              onChange={handleFileUpload}
              type="file"
          />
          <div
              className="w-[11vw] bg-[#547E88] text-[16px] text-center pt-2 pb-2 rounded-[27.5px]
        text-white flex flex-row justify-center items-center hover:cursor-pointer hover:text-black"
        onClick={onButtonClick}
          >
              <p>UPLOAD IMAGE</p>
          </div>
      </div>
  );
};

export default ImageUpload;
