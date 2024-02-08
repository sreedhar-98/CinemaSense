import React, { useRef} from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieList = ({title,movies}) => {
  //console.log(movies);
  const navRef = useRef();

  // const title = "Now Playing";
  // const movies = [
  //   {
  //     adult: false,
  //     backdrop_path: "/cnqwv5Uz3UW5f086IWbQKr3ksJr.jpg",
  //     genre_ids: [28, 12, 14],
  //     id: 572802,
  //     original_language: "en",
  //     original_title: "Aquaman and the Lost Kingdom",
  //     overview:
  //       "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
  //     popularity: 2392.899,
  //     poster_path: "/7lTnXOy0iNtBAdRP3TZvaKJ77F6.jpg",
  //     release_date: "2023-12-20",
  //     title: "Aquaman and the Lost Kingdom",
  //     video: false,
  //     vote_average: 6.992,
  //     vote_count: 1267,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
  //     genre_ids: [35, 10751, 14],
  //     id: 787699,
  //     original_language: "en",
  //     original_title: "Wonka",
  //     overview:
  //       "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
  //     popularity: 1989.417,
  //     poster_path: "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
  //     release_date: "2023-12-06",
  //     title: "Wonka",
  //     video: false,
  //     vote_average: 7.229,
  //     vote_count: 1721,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/meyhnvssZOPPjud4F1CjOb4snET.jpg",
  //     genre_ids: [16, 28, 12, 35, 10751],
  //     id: 940551,
  //     original_language: "en",
  //     original_title: "Migration",
  //     overview:
  //       "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
  //     popularity: 1356.633,
  //     poster_path: "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
  //     release_date: "2023-12-06",
  //     title: "Migration",
  //     video: false,
  //     vote_average: 7.757,
  //     vote_count: 434,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
  //     genre_ids: [28, 53],
  //     id: 866398,
  //     original_language: "en",
  //     original_title: "The Beekeeper",
  //     overview:
  //       "One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
  //     popularity: 1268.827,
  //     poster_path: "/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
  //     release_date: "2024-01-10",
  //     title: "The Beekeeper",
  //     video: false,
  //     vote_average: 7.346,
  //     vote_count: 428,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/unvtbkgxh47BewQ8pENvdOdme0r.jpg",
  //     genre_ids: [28, 18],
  //     id: 1212073,
  //     original_language: "de",
  //     original_title: "60 Minuten",
  //     overview:
  //       "Desperate to keep custody of his daughter, a mixed martial arts fighter abandons a big match and races across Berlin to attend her birthday party.",
  //     popularity: 899.318,
  //     poster_path: "/cND79ZWPFINDtkA8uwmQo1gnPPE.jpg",
  //     release_date: "2024-01-19",
  //     title: "Sixty Minutes",
  //     video: false,
  //     vote_average: 6.966,
  //     vote_count: 193,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/pWsD91G2R1Da3AKM3ymr3UoIfRb.jpg",
  //     genre_ids: [28, 878, 18],
  //     id: 933131,
  //     original_language: "ko",
  //     original_title: "황야",
  //     overview:
  //       "After a deadly earthquake turns Seoul into a lawless badland, a fearless huntsman springs into action to rescue a teenager abducted by a mad doctor.",
  //     popularity: 869.719,
  //     poster_path: "/zVMyvNowgbsBAL6O6esWfRpAcOb.jpg",
  //     release_date: "2024-01-26",
  //     title: "Badland Hunters",
  //     video: false,
  //     vote_average: 6.965,
  //     vote_count: 127,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/rz8GGX5Id2hCW1KzAIY4xwbQw1w.jpg",
  //     genre_ids: [28, 35, 80],
  //     id: 955916,
  //     original_language: "en",
  //     original_title: "Lift",
  //     overview:
  //       "An international heist crew, led by Cyrus Whitaker, race to lift $500 million in gold from a passenger plane at 40,000 feet.",
  //     popularity: 655.9,
  //     poster_path: "/gma8o1jWa6m0K1iJ9TzHIiFyTtI.jpg",
  //     release_date: "2024-01-10",
  //     title: "Lift",
  //     video: false,
  //     vote_average: 6.503,
  //     vote_count: 637,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/kWyQh9fCrgcMfhqZmqtp89Q0TrT.jpg",
  //     genre_ids: [35, 10749],
  //     id: 1072790,
  //     original_language: "en",
  //     original_title: "Anyone But You",
  //     overview:
  //       "Bea and Ben look like the perfect couple, but after an amazing first date something happens that turns their fiery hot attraction ice cold - until they find themselves unexpectedly thrust together at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
  //     popularity: 469.853,
  //     poster_path: "/yRt7MGBElkLQOYRvLTT1b3B1rcp.jpg",
  //     release_date: "2023-12-21",
  //     title: "Anyone But You",
  //     video: false,
  //     vote_average: 7.401,
  //     vote_count: 186,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
  //     genre_ids: [878, 10749, 35],
  //     id: 792307,
  //     original_language: "en",
  //     original_title: "Poor Things",
  //     overview:
  //       "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
  //     popularity: 461.645,
  //     poster_path: "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
  //     release_date: "2023-12-07",
  //     title: "Poor Things",
  //     video: false,
  //     vote_average: 8.169,
  //     vote_count: 742,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/rzz7TBviOvDgIeujt2h9GwxV0AJ.jpg",
  //     genre_ids: [18, 14],
  //     id: 852445,
  //     original_language: "fr",
  //     original_title: "Acide",
  //     overview:
  //       "During a heat wave, strange clouds start pouring down acid rain, wreaking devastation and panic throughout France. In a world teetering on the edge, a girl and her divorced parents must join forces to confront and try to escape this climate catastrophe.",
  //     popularity: 460.052,
  //     poster_path: "/91vF7SNB2tqsSultsmEn8tJYh4l.jpg",
  //     release_date: "2023-09-20",
  //     title: "Acid",
  //     video: false,
  //     vote_average: 5.816,
  //     vote_count: 79,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/a0GM57AnJtNi7lMOCamniiyV10W.jpg",
  //     genre_ids: [16, 12, 14],
  //     id: 508883,
  //     original_language: "ja",
  //     original_title: "君たちはどう生きるか",
  //     overview:
  //       "While the Second World War rages, the teenage Mahito, haunted by his mother's tragic death, is relocated from Tokyo to the serene rural home of his new stepmother Natsuko, a woman who bears a striking resemblance to the boy's mother. As he tries to adjust, this strange new world grows even stranger following the appearance of a persistent gray heron, who perplexes and bedevils Mahito, dubbing him the \"long-awaited one.\"",
  //     popularity: 418.909,
  //     poster_path: "/y9xS5NQTBnFjDoXhSFQeGxlmkoM.jpg",
  //     release_date: "2023-07-14",
  //     title: "The Boy and the Heron",
  //     video: false,
  //     vote_average: 7.464,
  //     vote_count: 896,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
  //     genre_ids: [18, 36],
  //     id: 872585,
  //     original_language: "en",
  //     original_title: "Oppenheimer",
  //     overview:
  //       "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
  //     popularity: 418.334,
  //     poster_path: "/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
  //     release_date: "2023-07-19",
  //     title: "Oppenheimer",
  //     video: false,
  //     vote_average: 8.118,
  //     vote_count: 6506,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/upDUDOlpGBPGwV6A4vs0y2Whzg0.jpg",
  //     genre_ids: [16, 28, 14, 12],
  //     id: 1230393,
  //     original_language: "ja",
  //     original_title: "MONSTERS 一百三情飛龍侍極",
  //     overview:
  //       "A samurai's path leads him to a young waitress whose hometown was destroyed by a dragon. He doesn't want any trouble — but it finds them anyway.",
  //     popularity: 376.574,
  //     poster_path: "/yG8QKnaiz7JoIMh3oxdm0JJN6IG.jpg",
  //     release_date: "2024-01-21",
  //     title: "Monsters 103 Mercies Dragon Damnation",
  //     video: false,
  //     vote_average: 8.225,
  //     vote_count: 40,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/dT1bXXEd7cfuVsB7CMvOKYiRZWl.jpg",
  //     genre_ids: [35],
  //     id: 1007826,
  //     original_language: "en",
  //     original_title: "The Underdoggs",
  //     overview:
  //       "Jaycen 'Two Js' Jennings is a washed-up former pro football star who has hit rock bottom. When sentenced to community service coaching the Underdoggs, an unruly pee-wee football team in his hometown, he sees it mostly as an opportunity to rebuild his public image. But in the process, he may just turn his life around and rediscover his love of the game.",
  //     popularity: 366.785,
  //     poster_path: "/wj1VRcVsh39nkxLkZP8tuGd96tc.jpg",
  //     release_date: "2024-01-25",
  //     title: "The Underdoggs",
  //     video: false,
  //     vote_average: 6.3,
  //     vote_count: 20,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/6OnoMgGFuZ921eV8v8yEyXoag19.jpg",
  //     genre_ids: [28, 53],
  //     id: 1211957,
  //     original_language: "en",
  //     original_title: "The Painter",
  //     overview:
  //       "An ex-CIA operative is thrown back into a dangerous world when a mysterious woman from his past resurfaces. Now exposed and targeted by a relentless killer and a rogue black ops program, he must rely on skills he thought he left behind in a high-stakes game of survival.",
  //     popularity: 333.344,
  //     poster_path: "/UZ0ydgbXtnrq8xZCI5lHVXVcH9.jpg",
  //     release_date: "2024-01-05",
  //     title: "The Painter",
  //     video: false,
  //     vote_average: 7.196,
  //     vote_count: 46,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/8te0oIAuUOxi03RbM1SfL3xUYHB.jpg",
  //     genre_ids: [35, 28, 80],
  //     id: 848538,
  //     original_language: "en",
  //     original_title: "Argylle",
  //     overview:
  //       "When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.",
  //     popularity: 318.466,
  //     poster_path: "/siduVKgOnABO4WH4lOwPQwaGwJp.jpg",
  //     release_date: "2024-01-31",
  //     title: "Argylle",
  //     video: false,
  //     vote_average: 7.144,
  //     vote_count: 52,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/ay0PJQZizDXk0pzhoGX4v7K9h7A.jpg",
  //     genre_ids: [28, 53],
  //     id: 1214314,
  //     original_language: "en",
  //     original_title: "One More Shot",
  //     overview:
  //       "Following the attack on the black site in Poland, Navy SEAL Jake Harris is ordered to escort terrorist suspect Amin Mansur to Washington D.C. for interrogation. Before the prisoner transfer process is complete, though, the airport is attacked by a group of heavily armed, well-trained mercenaries.",
  //     popularity: 294.009,
  //     poster_path: "/nQ1BQg4yMdlYSHvHZgwladzy7EF.jpg",
  //     release_date: "2024-01-12",
  //     title: "One More Shot",
  //     video: false,
  //     vote_average: 6.922,
  //     vote_count: 90,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
  //     genre_ids: [16, 10751, 10402, 14, 35],
  //     id: 901362,
  //     original_language: "en",
  //     original_title: "Trolls Band Together",
  //     overview:
  //       "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
  //     popularity: 291.567,
  //     poster_path: "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
  //     release_date: "2023-10-12",
  //     title: "Trolls Band Together",
  //     video: false,
  //     vote_average: 7.25,
  //     vote_count: 593,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/rVJfabCz1ViynQCEz54MRqdZig1.jpg",
  //     genre_ids: [16, 878, 28],
  //     id: 1155089,
  //     original_language: "en",
  //     original_title: "Justice League: Crisis on Infinite Earths Part One",
  //     overview:
  //       "Death is coming. Worse than death: oblivion. Not just for our Earth, but for everyone, everywhere, in every universe! Against this ultimate destruction, the mysterious Monitor has gathered the greatest team of Super Heroes ever assembled. But what can the combined might of Superman, Wonder Woman, Batman, The Flash, Green Lantern and hundreds of Super Heroes from multiple Earths even do to save all of reality from an unstoppable antimatter armageddon?!",
  //     popularity: 275.658,
  //     poster_path: "/zR6C66EDklgTPLHRSmmMt5878MR.jpg",
  //     release_date: "2024-01-09",
  //     title: "Justice League: Crisis on Infinite Earths Part One",
  //     video: false,
  //     vote_average: 7.71,
  //     vote_count: 143,
  //   },
  //   {
  //     adult: false,
  //     backdrop_path: "/gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg",
  //     genre_ids: [28, 12, 53, 80, 18],
  //     id: 891699,
  //     original_language: "en",
  //     original_title: "Silent Night",
  //     overview:
  //       "A tormented father witnesses his young son die when caught in a gang's crossfire on Christmas Eve. While recovering from a wound that costs him his voice, he makes vengeance his life's mission and embarks on a punishing training regimen in order to avenge his son's death.",
  //     popularity: 264.876,
  //     poster_path: "/nJCP1ZNTPKlZ7S0Kv3gbmuraAT4.jpg",
  //     release_date: "2023-11-30",
  //     title: "Silent Night",
  //     video: false,
  //     vote_average: 6.189,
  //     vote_count: 376,
  //   },
  // ];

console.log(navRef.current?.scrollLeft);
 const slide=(direction)=>{
  if(direction==='left'){
    if(navRef.current) {
      navRef.current.scrollLeft-=500;
      return navRef.current.scrollLeft;
    }
    else return 0;
  }
  else{
    if(navRef.current){
      navRef.current.scrollLeft+=500;
      return navRef.current.scrollLeft;
    }
    else return 0;

  }
 
 }

  return (
    <div className="relative w-11/12 h-[21rem] ml-4">
      <h1 className="mx-4 text-xl font-bold my-2 text-white">{title}</h1>
      <div className="flex gap-3 items-center h-full">
        {(
          <div className="">
            <MdChevronLeft size={50} color="white" onClick={() => slide('left')} />
          </div>
        )}
        <div
          className="h-full flex overflow-x-scroll p-2 scroll whitespace-nowrap scroll-smooth overscroll-auto [&::-webkit-scrollbar]:hidden"
          ref={navRef}
        >
          <div className="relative gap-2 flex flex-shrink-0">
            {movies?.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
        <div className="">
          <MdChevronRight size={50} color="white" onClick={() => slide('right')} />
        </div>
      </div>
    </div>
  );
};

export default MovieList;


