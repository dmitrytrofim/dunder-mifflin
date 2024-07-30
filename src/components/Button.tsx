import { ILinkProps } from '~/modules';

function Button({
 link = '#',
 mes = 'CTA Text',
 blue,
 borderBlue,
}: ILinkProps) {
 return (
  <a
   href={link}
   className={`flex items-center justify-center font-600 mx-auto box-border p-[12px_24px] rounded-[2px] self-center ${
    blue
     ? 'bg-[var(--b-1b54dd)] text-[var(--t-fff)]'
     : 'bg-[var(--b-fff)] text-[var(--t-000)]'
   } ${borderBlue ? 'border-[1px] border-[var(--b-1b54dd)]' : ''}`}
  >
   {mes}
  </a>
 );
}

export default Button;
