/**
 *
 * @file helper.ts
 * @description helper functions to get data from json files.
 */

// Modules
import path from 'path';
import { promises as fs } from 'fs';

// Utilities
import { SUCCESSFUL } from '../constants/codes';
import {
  ALBUMS,
  ARTISTS,
  ARTIST_ALBUMS,
  SINGLE_ARTIST,
  EVENTS,
  GENRES,
  PLANS,
  PLAYLISTS,
  RADIO,
  SONGS,
} from '../constants/api-urls';
import {
  AlbumTypes,
  ArtistTypes,
  EventTypes,
  GenreTypes,
  PlanTypes,
  PlaylistTypes,
  RadioTypes,
  SongTypes,
} from '../types';

// Local func.
import albumToLocal from '../local/album';
import artistToLocal from '../local/artist';
import eventToLocal from '../local/event';
import genreToLocal from '../local/genre';
import playlistToLocal from '../local/playlist';
import planToLocal from '../local/plan';
import radioToLocal from '../local/radio';
import songToLocal from '../local/song';
import axios from 'axios';

/**
 * Base api func. to read mock json file.
 * @param url
 * @returns
 */
async function base(url, data) {
  console.log('apiUrl =>', `${process.env.NEXT_PUBLIC_SITE_URL}${url}`);

  return axios
    .get(`${process.env.NEXT_PUBLIC_SITE_URL}${url}`, {
      params: data,
    })
    .then((response) => {
      console.log('response=>', response.data);
      return response.data.data;
    })
    .catch((error) => {
      console.error('error', error);
      return [];
    });
}

/**
 * Get albums data from json file
 * @returns
 */
export async function getAlbums() {
  //console.log('getAlbums =>', ALBUMS);
  const response = await base(ALBUMS);
  //console.log('getAlbums response =>', response);
  const data = response.map((item) => {
    return albumToLocal(item);
  });
  return data;
}

/**
 * Get artists data from json file
 * @returns
 */
export async function getArtists() {
  //console.log('getArtists =>', ARTISTS);
  const response = await base(ARTISTS);
  const data = response.map((item) => {
    return artistToLocal(item);
  });
  return data;
}

export async function getArtistByUsername(username) {
  const response = await base(`${SINGLE_ARTIST}/${username}`);
  const data = artistToLocal(response);
  return data;
}

export async function getArtistAlbums(username) {
  const data = await base(`${ARTIST_ALBUMS}/${username}`);
  const res = data.map((item) => {
    return albumToLocal(item);
  });
  return res;
}

/**
 * Get events data from json file
 * @returns
 */
export async function getEvents() {
  //console.log;
  const response = await base(EVENTS);
  const data = response.map((item) => {
    return eventToLocal(item);
  });
  return data;
}

/**
 * Get genre data from json file
 * @returns
 */
export async function getGenre() {
  const response = await base(GENRES);
  const data = response.map((item) => {
    return genreToLocal(item);
  });
  return data;
}

/**
 * Get plans data from json file
 * @returns
 */
export async function getPlans() {
  const response = await base(PLANS);
  const data = response.map((item) => {
    return planToLocal(item);
  });
  return data;
}

/**
 * Get playlist data from json file
 * @returns
 */
export async function getPlaylist() {
  console;
  const response = await base(PLAYLISTS);
  const data = response.map((item) => {
    return playlistToLocal(item);
  });
  return data;
}

/**
 * Get radio data from json file
 * @returns
 */
export async function getRadio() {
  const response = await base(RADIO);
  const data = response.map((item) => {
    return radioToLocal(item);
  });
  return data;
}

/**
 * Get songs data from json file
 * @returns
 */
export async function getSongs() {
  const response = await base(SONGS);
  const data = response.map((item) => {
    return songToLocal(item);
  });
  return data;
}
