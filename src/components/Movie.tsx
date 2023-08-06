import Image from 'next/image';

import { PlayButton } from '@/components/PlayButton';
import { Star } from '@/components/icons/Star';
import { Clock } from '@/components/icons/Clock';
import { CalendarBlank } from '@/components/icons/CalendarBlank';
import { MovieType } from '@/@Types/Movie';

interface MovieProps {
  content: MovieType;
}

export function Movie({ content }: MovieProps) {
  return (
    <div className="flex flex-col gap-2 text-white max-w-[194px]">
      <div className="flex items-center justify-between">
        <span className="max-w-[140px] text-ellipsis line-clamp-1 text-xl leading-5 font-medium">
          {content.title}
        </span>

        <div className="flex items-center">
          <Star />
          <p className="text-yellow-banana font-semibold">4.9</p>
        </div>
      </div>

      <div className="h-72 w-48">
        <Image
          src={'https://image.tmdb.org/t/p/w500' + content.image}
          alt="poster image"
          width={194}
          height={288}
          className="h-full w-full"
        />
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-1 text-gray-light text-xs">
          <Clock />
          <span>{content.time}</span>
        </div>

        <div className="flex items-center gap-1 text-gray-light text-xs">
          <CalendarBlank />
          <span>{content.year}</span>
        </div>
      </div>

      <PlayButton id={content.id} />
    </div>
  );
}
