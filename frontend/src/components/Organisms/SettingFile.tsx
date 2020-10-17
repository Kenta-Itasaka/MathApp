/* eslint-disable react/jsx-props-no-spreading */
import React, { FC } from 'react';
import { useDropzone } from 'react-dropzone';
import "./SettingFile.css";

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
      <div {...getRootProps(({className: 'dropzone'}))}>
        <input {...getInputProps()} />
        <p>送付するPDFファイルを置いてください。</p>
      </div>
    </>
  );
};

export default SettingFile;
