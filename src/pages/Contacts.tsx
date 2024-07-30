import Container from '~/components/Container';
import IconCalendar from '~/assets/img/svg/icon-calendar.svg';
import IconClock from '~/assets/img/svg/icon-clock.svg';
import IconLocation from '~/assets/img/svg/icon-location.svg';

function Contacts() {
 return (
  <section>
   <Container>
    <div className="flex flex-col p-[32px_0]">
     <h1 className="text-[26px] font-700 text-center mb-[32px]">
      I am Beyoncé always.
     </h1>
     <p className="text-[14px] text-center mb-[32px]">
      Do I need to be liked? Absolutely not. I like to be liked. I enjoy being
      liked. I have to be liked. But it's not like a compulsive need to be
      liked. Like my need to be praised.
     </p>
     <address className="self-center flex flex-col gap-[16px] w-full max-w-[320px] border-[2px] border-[var(--b-1b54dd)] not-italic p-[16px] mb-[32px]">
      <div className="flex items-start gap-[8px]">
       <img src={IconCalendar} className="" alt="" />
       <span className="text-[14px]">March 27-30, 2021</span>
      </div>
      <div className="flex items-start gap-[8px]">
       <img src={IconClock} className="" alt="" />
       <span className="text-[14px]">9-5 PST</span>
      </div>
      <div className="flex items-start gap-[8px]">
       <img src={IconLocation} className="" alt="" />
       <span className="text-[14px]">
        Dunder Mifflin, 1725 Slough Avenue, #200, Scranton, PA, 18540
       </span>
      </div>
     </address>
     <span className="text-center mb-[8px]">Add to your calendar:</span>
     <p className="flex justify-center text-[14px] font-600 gap-[5px] text-center text-[var(--t-1b54dd)]">
      <a href="#" className="">
       Outlook
      </a>
      -
      <a href="#" className="">
       Google
      </a>
      -
      <a href="#" className="">
       Yahoo
      </a>
      -
      <a href="#" className="">
       Outlook.com
      </a>
      -
      <a href="#" className="">
       Apple Calendar
      </a>
     </p>
    </div>
   </Container>
  </section>
 );
}

export default Contacts;
