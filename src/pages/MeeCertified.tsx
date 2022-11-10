import { MaxW } from 'src/components/MaxW';
import MeeCertifiedMarkIcon from '../assets/meeCertifiedMark.svg';

export const MeeCertifiedPage: React.FC = () => (
  <MaxW>
    <div className="max-w-256 mx-auto pt-5 md:pt-48 pb-48 px-5 md:px-0 text-[#111827]">
      <div className="flex flex-col md:flex-row items-center justify-center pb-11 gap-5">
        <img className="h-20" alt="mee certified mark" src={MeeCertifiedMarkIcon} />
        <h1 className="text-center text-7xl font-bold">Mee Certified</h1>
      </div>

      <p className="pb-5">
        Apps or websites offered by service providers that are interoperable with
        the Mee agent software. In addition, the Mee user’s information involved in
        data sharing connections is subject to the terms of a valid Human
        Information License agreement.
      </p>
    </div>
  </MaxW>
);
