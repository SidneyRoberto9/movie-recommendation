'use client';
import { getVideoUrl } from '@/lib/axios';
import { Play } from '@/components/icons/Play';

interface PlayButton {
  id: string;
}

export function PlayButton({ id }: PlayButton) {
  async function handleOpen() {
    await getVideoUrl(id);
  }

  return (
    <button
      className="flex w-48 py-2 px-4 items-center justify-center gap-2 rounded bg-gray-light-500"
      onClick={() => handleOpen()}>
      <Play />
      <span>Assistir Trailer</span>
    </button>
  );
}
