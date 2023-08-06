'use client';

import { Gerar } from '@/components/icons/Gerar';

export function NewRecommendation() {
  function handleNewRecommendation() {
    location.reload();
  }

  return (
    <button
      className="flex items-center gap-2 py-2 px-4 rounded-md bg-button-recommendation text-white"
      onClick={() => handleNewRecommendation()}>
      <p>Nova Recomendação</p>
      <Gerar />
    </button>
  );
}
