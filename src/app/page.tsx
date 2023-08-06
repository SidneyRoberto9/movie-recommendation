'use Client';
import { getMovies } from '@/lib/axios';
import { Movie } from '@/components/Movie';
import { Header } from '@/components/Header';
import { Container } from '@/components/Container';

export default async function Home() {
  const infos = await getMovies();

  return (
    <Container>
      <div className="flex flex-col max-w-[654px]">
        <Header />

        <section className="flex gap-9">
          {infos.map((movie) => (
            <Movie content={movie} />
          ))}
        </section>
      </div>
    </Container>
  );
}
