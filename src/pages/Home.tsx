import Container from '~/components/Container';
import Button from '~/components/Button';
import TeamCard from '~/components/TeamCard';

function Home() {
 return (
  <>
   <section className="bg-[var(--b-1b54dd)] text-[var(--t-fff)]">
    <Container>
     <div className="flex flex-col text-center p-[32px_0]">
      <h1 className="text-[36px] font-700 mb-[32px]">I am Beyoncé always.</h1>
      <img
       className="flex w-full aspect-[1.777] object-cover mb-[32px]"
       src="/portfolio/works/dunder-mifflin/img/greet.png"
       alt=""
      />
      <h2 className="text-[24px] font-700 mb-[32px]">
       Fact: Bears eat beets. Bears. Beets.
       <br /> Battlestar Galactica.
      </h2>
      <p className="text-[14px] mb-[32px]">
       In the wild, there is no healthcare. In the wild healthcare is, 'Ow, I
       hurt my leg. I can't run. A lion eats me, and I'm dead.' Well, I'm not
       dead. I'm the lion. You're dead.
      </p>
      <Button />
     </div>
    </Container>
   </section>
   <div>
    <Container>
     <div className="flex flex-col gap-[32px] p-[32px_0]">
      <ul className="flex flex-col gap-[32px]">
       <TeamCard
        title="I live by one rule."
        text="No office romances, no way. Very messy, inappropriate… no. But, I live by another rule: Just do it… Nike."
        img="/portfolio/works/dunder-mifflin/img/team-1.png"
       />
       <TeamCard
        title="I work hard all day."
        text="I like knowing that there's going to be a break. Most days I just sit and wait for the break."
        img="/portfolio/works/dunder-mifflin/img/team-2.png"
       />
       <TeamCard
        title="I am fast."
        text="To give you a reference point. I'm somewhere between a snake and a mongoose. And a panther."
        img="/portfolio/works/dunder-mifflin/img/team-3.png"
       />
      </ul>
      <Button blue />
     </div>
    </Container>
   </div>
  </>
 );
}

export default Home;
