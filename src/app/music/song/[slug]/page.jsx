// Components
import CoverInfo from '@/core/components/cover-info';
import Section from '@/view/layout/section';
import Comments from '@/core/components/comments';

// Utilities
import { getSongs } from '@/core/utils/helper';
import { ParamsTypes, SongTypes } from '@/core/types';

export default async function SongDetailsPage({ params }) {
  const songs = await getSongs();
  //console.log('slug', params.slug);
  const song = songs.find((item) => item.id === params.slug);
  //console.log('song', song);

  return (
    <>
      {/* Hero [[ Find at scss/framework/hero.scss ]] */}
      <div
        className='hero'
        style={{ backgroundImage: 'url(/images/banner/song.jpg)' }}
      />

      {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
      <div className='under-hero container'>
        <CoverInfo data={song} />

        <Section
          title='Related <span class="text-primary">Songs</span>'
          data={songs}
          card='track'
          slideView={5}
          navigation
          autoplay
        />
      </div>
    </>
  );
}
