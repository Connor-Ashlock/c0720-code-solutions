import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const shows = [
  {
    Naruto: "Naruto (Japanese: ナルト) is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts – the first set in Naruto's pre-teen years, and the second in his teens. The series is based on two one-shot manga by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable mention in Shueisha's monthly Hop Step Award the following year, and Naruto (1997)."
  },
  {
    'Fullmetal Alchemist: Brotherhood': "Fullmetal Alchemist: Brotherhood (Japanese: 鋼の錬金術師 FULLMETAL ALCHEMIST, Hepburn: Hagane no Renkinjutsushi: Furumetaru Arukemisuto) is a Japanese anime television series adapted from the Fullmetal Alchemist manga by Hiromu Arakawa. Produced by Bones, the series is directed by Yasuhiro Irie and written by Hiroshi Ōnogi. Fullmetal Alchemist: Brotherhood is the second anime television series based on Fullmetal Alchemist, the first being 2003's Fullmetal Alchemist. Unlike the previous adaptation, Brotherhood is an almost 1:1 adaptation directly following the original events of the manga. The series ran for 64 episodes on MBS–TBS from April 2009 to July 2010."
  },
  {
    'My Hero Academia': "My Hero Academia (Japanese: 僕のヒーローアカデミア, Hepburn: Boku no Hīrō Akademia) is a Japanese superhero manga series written and illustrated by Kōhei Horikoshi. It has been serialized in Weekly Shōnen Jump since July 2014, with its chapters additionally collected into 27 tankōbon volumes as of July 2020. The story follows Izuku Midoriya, a boy born without superpowers (called Quirks) in a world where they have become commonplace, but who still dreams of becoming a hero himself. He is scouted by All Might, Japan's greatest hero, who shares his Quirk with Midoriya after recognizing his potential, and later helps to enroll him in a prestigious high school for heroes in training."
  }
];

ReactDOM.render(
  <Accordion shows={shows} />,
  document.getElementById('root')
);
