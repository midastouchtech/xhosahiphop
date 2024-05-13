/**
 * @name Dropzone
 * @file dropzone.tsx
 * @description dropzone component
 */
'use client';

import ProgressBar from 'react-bootstrap/ProgressBar';

// Modules
import PropTypes from 'prop-types';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import React, { useCallback } from 'react';
import { RiUploadCloud2Line } from '@remixicon/react';
import axios from 'axios';
import ShortUniqueId from 'short-unique-id';

const { randomUUID } = new ShortUniqueId({ length: 10 });
const propTypes = {
  /**
   * Dropzone title
   */
  title: PropTypes.string,

  /**
   * Dropzone information text
   */
  infoText: PropTypes.string,

  /**
   * Button label
   */
  label: PropTypes.string,

  /**
   * Set multiple file upload option
   */
  multiple: PropTypes.bool,

  /**
   * Dropzone `onChange` event
   */
  onChange: PropTypes.func,
};

const Dropzone = ({
  title = 'Drag & Drop or click to Upload',
  infoText = '540x320 (Max: 300KB)',
  label = 'Upload cover image',
  type = 'image',
  multiple,
  ...props
}) => {
  const [uploadedFile, setUploadedFile] = React.useState(null);
  const [progress, setProgress] = React.useState(0);
  const onDrop = useCallback(async (acceptedFiles) => {
    try {
      const formData = new FormData();
      const uniqueId = randomUUID();
      formData.append('file', acceptedFiles[0]);
      formData.append('upload_preset', 'objss5xh'); // Replace with your Cloudinary upload preset
      formData.append('asset_folder', `xhosahiphop/${type}/songs`); // Optional (folder name in Cloudinary)
      formData.append('public_id', `${uniqueId}`); // Optional (file name in Cloudinary)
      console.log(
        'uploading to type',
        type,
        `https://api.cloudinary.com/v1_1/namoota/${type}/upload`
      );
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/namoota/${type}/upload`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            console.log('percentCompleted', percentCompleted);
            setProgress(percentCompleted);
          },
        }
      );
      console.log('response', response.data);
      const {
        secure_url: fileUrl,
        duration,
        format,
        version,
        resource_type: resourceType,
        type: uploadType,
        width,
        height,
      } = response.data;
      props.onDrop({
        fileUrl,
        id: uniqueId,
        duration,
        format,
        version,
        resourceType,
        uploadType,
        width,
        height,
      });
      setUploadedFile(fileUrl);
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error);
    }
  }, []);

  const imageFileTypes = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];
  const videoFileTypes = ['.mp4', '.webm', '.ogg'];
  const audioFileTypes = [
    '.mp3',
    '.wav',
    '.ogg',
    '.flac',
    '.aac',
    '.wma',
    '.m4a',
    '.opus',
    '.webm',
    '.3gp',
    '.amr',
  ];

  const { getRootProps, getInputProps, open } = useDropzone({
    multiple,
    noClick: true,
    ...props,
    onDrop,
    accept:
      type === 'image'
        ? {
            'image/*': imageFileTypes,
          }
        : {
            'video/*': videoFileTypes,
            'audio/*': audioFileTypes,
          },
  });

  return (
    <div className='dropzone text-center' {...getRootProps()}>
      <input {...getInputProps({ onChange: props.onChange })} />
      <div className='dz-message'>
        <RiUploadCloud2Line className='text-gray' size={40} />
        <div className='fs-6 mt-2'>{title}</div>
        <div className='form-text mb-4'>{infoText}</div>
        <div className='form-text mb-4'>
          Accepted file types:{' '}
          {type === 'image'
            ? imageFileTypes.join(', ')
            : audioFileTypes.join(', ') + ', ' + videoFileTypes.join(', ')}
        </div>
        <button
          type='button'
          className='btn btn-light-primary mb-4'
          onClick={open}
        >
          {label}
        </button>
        <br />
        {progress > 0 && (
          <ProgressBar now={progress} animated label={`${progress}%`} />
        )}
        <br />
        {type === 'image' && uploadedFile && (
          <img
            src={uploadedFile}
            alt='Uploaded file'
            className='img-fluid mt-3'
          />
        )}
        {type !== 'image' && uploadedFile && (
          <a
            href={uploadedFile}
            target='_blank'
            rel='noreferrer'
            className='text-primary mt-3'
          >
            Upload complete - View file
          </a>
        )}
      </div>
    </div>
  );
};

Dropzone.propTypes = propTypes;
Dropzone.displayName = 'Dropzone';

export default Dropzone;
