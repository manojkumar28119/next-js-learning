import { Inter,Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const  lusitana = Lusitana({
    weight:['400','700'], // we can use font weight until 700 only 
    subsets:['latin'] // latin charecters
})