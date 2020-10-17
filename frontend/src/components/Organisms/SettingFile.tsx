/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { useDropzone } from 'react-dropzone';

export interface SettingFileProps {
  setAcceptedFiles: (files: React.SetStateAction<File[]>) => void;
}

const SettingFile: FC<SettingFileProps> = ({
  setAcceptedFiles = () => undefined,
}) => {
  const onDrop = (acceptedFiles: File[]) => {
    setAcceptedFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag and drop some files here, or click to select files</p>
      </div>
    </>
  );
};

export default SettingFile;
