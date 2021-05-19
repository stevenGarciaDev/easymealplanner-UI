import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Label } from "../../shared/styles/forms";
import styled from "styled-components";

const DropzoneContainer = styled.div`
    border-radius: 5px;
    border: 1px solid #111;
    cursor: pointer;
    font-size: 2.3rem;
    text-align: center;
`;

const ImageDropzone = ({ file, setImage }) => {

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        console.log(file);

        if (!file.type.startsWith('image/')) {
            console.log("Not an image file");
            return;
        }

        setImage(file);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const getFileName = () => {
        return file != null ? file.name : '';
    }

    const determineDisplayText = () => {
        const imageName = getFileName();
        if (isDragActive) {
            return <p>Drop the image here ...</p>;
        } else if (imageName == '') {
            return <p>Drag and drop an image here, or click to select an image.</p>;
        } else {
            return <p>Image uploaded: {imageName}</p>
        }
    };

    return (
        <>
        <Label htmlFor="image">Add an image for the recipe</Label>
        <DropzoneContainer {...getRootProps()}>
            
            <input type="file" name="image" id="image" accept="image/*" {...getInputProps()} />
            {
                determineDisplayText()
            }
        </DropzoneContainer>
        </>
    );
};

export default ImageDropzone;