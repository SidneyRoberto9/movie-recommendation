import { Result } from '@/@Types/Popular';

export function selectThreeVideos(results: Result[]) {
  const random = () => Math.floor(Math.random() * results.length);

  let selectedVideos = new Set<any>();

  while (selectedVideos.size < 3) {
    selectedVideos.add(results[random()].id);
  }

  return [...Array.from(selectedVideos)];
}

export function minutesToHourMinutesAndSeconds(minutes: number) {
  const date = new Date(0);
  date.setMinutes(minutes);
  return date.toISOString().slice(11, 19);
}
