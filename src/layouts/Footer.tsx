import Container from '~/components/Container';
import IconTwitter from '~/assets/img/svg/icon-twit.svg';
import IconFacebook from '~/assets/img/svg/icon-fb.svg';
import IconInstagram from '~/assets/img/svg/icon-insta.svg';
import DMI from '~/assets/img/svg/dmi.svg';

function Footer() {
 return (
  <footer className="bg-[var(--b-e8e8e8)]">
   <Container>
    <address className="flex flex-col items-center text-center not-italic p-[26px_0]">
     <div className="flex items-center gap-[32px] mb-[16px]">
      <img
       className="w-[18px] shrink-0 aspect-square"
       src={IconTwitter}
       alt=""
      />
      <img
       className="w-[18px] shrink-0 aspect-square"
       src={IconFacebook}
       alt=""
      />
      <img
       className="w-[18px] shrink-0 aspect-square"
       src={IconInstagram}
       alt=""
      />
     </div>
     <a href="mailto:dundermifflinpaper.com" className="text-[14px] mb-[8px]">
      dundermifflinpaper.com
     </a>
     <span className="text-[10px] text-center leading-[1.6] mb-[16px]">
      1725 Slough Avenue #200, Scranton, PA, 18540
      <br />© 2020 Bonnie Kate Wolf
     </span>
     <img className="" src={DMI} alt="" />
    </address>
   </Container>
  </footer>
 );
}

export default Footer;
