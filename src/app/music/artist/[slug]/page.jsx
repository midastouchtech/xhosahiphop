// Components
import CoverInfo from '@/core/components/cover-info';
import Section from '@/view/layout/section';
import Comments from '@/core/components/comments';
import TrackList from '@/core/components/list';

// Utilities
import { getArtistAlbums, getArtistByUsername } from '@/core/utils/helper';
import { ArtistTypes, ParamsTypes } from '@/core/types';
import { assoc } from 'ramda';

export default async function ArtistDetailsPage({ params }) {
  const albums = await getArtistAlbums(params.slug);
  const artist = await getArtistByUsername(params.slug);
  const updateArtist = assoc('totalAlbums', albums.length, artist);
  console.log('updateArtist', updateArtist);
  return (
    <>
      {/* Hero [[ Find at scss/framework/hero.scss ]] */}
      <div
        className='hero'
        style={{ backgroundImage: 'url(/images/banner/artists.jpg)' }}
      />

      {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
      <div className='under-hero container'>
        <CoverInfo data={updateArtist} />

        {/* Section [[ Find at scss/framework/section.scss ]] */}
        <div className='section'>
          <div className='section__head'>
            <h3 className='mb-0'>
              Top <span className='text-primary'>Songs</span>
            </h3>
          </div>

          {/* List [[ Find at scss/components/list.scss ]] */}
          <div className='list'>
            <div className='row'>
              {artist.songs.map((item, index) => (
                <div key={index} className='col-xl-6'>
                  <TrackList
                    data={item}
                    duration
                    dropdown
                    playlist
                    queue
                    play
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Section
          title='Top <span class="text-primary">Albums</span>'
          data={albums}
          card='album'
          slideView={5}
          navigation
          autoplay
        />

        <Comments id={artist.id} />
      </div>
    </>
  );
}
