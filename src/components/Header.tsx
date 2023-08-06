import Image from 'next/image';

import { NewRecommendation } from '@/components/NewRecommendation';
import Logo from '@/assets/Logo.png';

export function Header() {
  return (
    <header className="flex justify-between items-center mb-9">
      <Image src={Logo} alt="" />
      <NewRecommendation />
    </header>
  );
}
