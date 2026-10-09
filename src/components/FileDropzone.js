import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { loadImage, getPixels } from "utils";

const FileDropzone = ({ setImages }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log("file reading was aborted");
        reader.onerror = () => console.log("file reading has failed");
        reader.onload = async () => {
          const url = reader.result;
          const img = await loadImage(url);

          const newImage = {
            name: file.name,
            width: img.width,
            height: img.height,
            image: img,
            url,
            pixels: getPixels(img),
          };

          setImages((oldImages) => {
            return { ...oldImages, [file.name]: newImage };
          });
        };

        reader.readAsDataURL(file);
      });
    },
    [setImages]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="flex items-center justify-center p-8 flex-1 cursor-pointer text-center hover:bg-gray-800 rounded-lg border-2 border-dashed border-gray-500"
    >
      <input {...getInputProps()} accept="image/*" />
      {isDragActive ? (
          <p>Solte os arquivos aqui...</p>
        ) : (
          <p>Arraste e solte alguns arquivos aqui ou clique para selecionar os arquivos</p>
        )
      }
    </div>
  );
};

export default React.memo(FileDropzone);
