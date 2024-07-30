import { ITeamProps } from '~/modules';

function TeamCard({
 title,
 text,
 img,
 linkText = 'Link out here >',
 url = '#',
}: ITeamProps) {
 return (
  <li className="flex items-center gap-[32px] max-[640px]:flex-col max-[640px]:gap-[16px]">
   <img
    className="flex shrink-0 w-full max-w-[220px] aspect-square object-cover max-[640px]:max-w-none"
    src={img}
    alt=""
    loading="lazy"
   />
   <div className="flex flex-col">
    <span className="text-[24px] font-700 mb-[16px]">{title}</span>
    <p className="text-[14px] mb-[16px]">{text}</p>
    <a href={url} className="text-[14px] font-600 text-[var(--t-1b54dd)]">
     {linkText}
    </a>
   </div>
  </li>
 );
}

export default TeamCard;
