import type { Client } from '../types';
import { getAssetPath } from '../utils/constants';

export const clients: Client[] = [
  {
    id: '1',
    name: 'Hexatron',
    logo: getAssetPath('/assets/images/hexatron.png'),
  },
  {
    id: '2',
    name: 'Revive Stones',
    logo: getAssetPath('/assets/images/Revive-Stones-300x250.png'),
  },
  {
    id: '3',
    name: 'TTK',
    logo: getAssetPath('/assets/images/ttkLogo.png'),
  },
  {
    id: '4',
    name: 'LanaSol',
    logo: getAssetPath('/assets/images/LanaSol.png'),
  },
  {
    id: '5',
    name: 'Megamax Services',
    logo: getAssetPath('/assets/images/megamax_services_logo.png'),
  },
  {
    id: '6',
    name: 'Elegant Energy',
    logo: getAssetPath('/assets/images/elegantEnergy.png'),
  },
  {
    id: '7',
    name: 'KPIGIL',
    logo: getAssetPath('/assets/images/KPIGIL-Logo.png'),
  },
  {
    id: '8',
    name: 'Pahal Solar',
    logo: getAssetPath('/assets/images/pahal-solar-logo.png'),
  },
];
