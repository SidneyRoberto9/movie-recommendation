import axios from 'axios';

import { selectThreeVideos, minutesToHourMinutesAndSeconds } from '@/util/random-movies';
import { Popular } from '@/@Types/Popular';
import { MovieType } from '@/@Types/Movie';
import { MoreInfo } from '@/@Types/MoreInfo';

export async function getVideoUrl(id: string) {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/videos`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_TMDB_API_KEY,
    },
  };

  try {
    const { data } = await axios.request(options);

    const youtubeVideo = data.results.find((video: any) => video.type === 'Trailer');

    window.open(`https://www.youtube.com/watch?v=${youtubeVideo.key}`, '_blank');

    return data;
  } catch (error) {
    console.log(error);
  }

  return null;
}

export async function getMovies() {
  const moviesPopular = await getPopularMovies();

  const selectedMoviesId = selectThreeVideos(moviesPopular?.results || []);

  const moviesInfo = selectedMoviesId.map(async (movieId) => {
    const info = await getMoreInfo(movieId);

    if (info) {
      const movie: MovieType = {
        id: String(info.id),
        title: info.title,
        stars: Number(info.vote_average).toFixed(1),
        image: info.poster_path,
        time: minutesToHourMinutesAndSeconds(info.runtime),
        year: String(info.release_date).slice(0, 4),
      };

      return movie;
    }

    return {} as MovieType;
  });

  const infos = await Promise.all(moviesInfo);

  return infos;
}

async function getPopularMovies(): Promise<Popular | null> {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular',
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_TMDB_API_KEY,
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.log(error);
  }

  return null;
}

async function getMoreInfo(id: string): Promise<MoreInfo | null> {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/' + id,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_TMDB_API_KEY,
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.log(error);
  }

  return null;
}
