import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <section className="flex flex-col justify-center rounded-2xl bg-card shadow-card py-16 px-24 gap-9 relative before:content-[''] before:absolute before:bg-movie-body-back before:p-2 before:w-[102%] before:h-[102%] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-2xl before:z-[-1]">
      {children}
    </section>
  );
}
