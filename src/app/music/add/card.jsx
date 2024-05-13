/**
 * @name SongCard
 * @file card.tsx
 * @description add song card component
 */
'use client';

// Modules
import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import { RiAddLine } from '@remixicon/react';
import { useAuthentication } from '@/core/contexts/authentication';
// Contexts
import { useTheme } from '@/core/contexts/theme';

// Components
import Tab from '@/core/components/tab';
import SongForm from './form';
import AlbumForm from './album-form';
import Dropzone from '@/core/components/dropzone';
import Input from '@/core/components/input';
import ErrorHandler from '@/core/components/error';
import { assoc, isEmpty, set } from 'ramda';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const SongCard = () => {
  const { currentUser } = useAuthentication();
  const { replaceClassName } = useTheme();
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const { register, handleSubmit, setValue, control, watch, formState } =
    useForm({});

  const { errors } = formState;
  // Data for tab list view
  const tabs = [
    {
      id: 'music',
      name: 'Add Music',
    },
    {
      id: 'album',
      name: 'Add Album',
    },
  ];

  /**
   *
   * Handle form `onSubmit` event
   * @param data
   */
  const submitForm = (data) => {
    //console.log('data', data);
    //console.log('formData', formData);
  };

  const logErrors = (errors) => {
    //console.log(errors);
  };

  /**
   *
   * Handle dropzone `onDrop` event
   */

  const handleFormChange = (e) => {
    if (!isEmpty(e.target.name)) {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]:
          e.target.type === 'checkbox' ? e.target.checked : e.target.value,
      }));
    }
  };

  const handleFormSubmit = (type) => () => {
    //console.log('formData', formData);

    axios
      .post(`/api/${type}/add`, assoc('userId', currentUser._id, formData))
      .then((response) => {
        //console.log('response', response);
        router.push('/music');
      })
      .catch((error) => {
        //console.log('error', error);
        alert('Error adding music, please fill in all fields');
      });
  };

  //console.log('formData', formData);

  return (
    <div className='card'>
      <div className='card-header pb-0'>
        <Tab id='add_music'>
          {tabs.map((tab, index) => (
            <li key={tab.id} className='nav-item' role='presentation'>
              <button
                className={classNames('nav-link', index === 0 && 'active')}
                id={tab.id}
                data-bs-toggle='tab'
                data-bs-target={'#' + tab.id + '_pane'}
                type='button'
                role='tab'
                aria-controls={tab.id + '_pane'}
                aria-selected={index === 0 ? true : false}
                onClick={() => setFormData({})}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </Tab>
      </div>
      <div className='card-body'>
        <div className='tab-content' id='add_music_content'>
          <div
            className='tab-pane fade show active'
            id='music_pane'
            role='tabpanel'
            aria-labelledby='music'
            tabIndex={0}
          >
            <SongForm
              attachmentId='song_file_1'
              onChange={handleFormChange}
              onFormSubmit={handleFormSubmit('songs')}
              data={formData}
            />
          </div>
          <div
            className='tab-pane fade'
            id='album_pane'
            role='tabpanel'
            aria-labelledby='album'
            tabIndex={0}
          >
            <AlbumForm
              attachmentId='song_file_2'
              onChange={handleFormChange}
              data={formData}
              onFormSubmit={handleFormSubmit('albums')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

SongCard.displayName = 'SongCard';
export default SongCard;
