import Image from 'next/image';

import classes from './hero.module.css';

export default function Hero() {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/IMG_1135.JPG" 
            alt="Half an image of me, Kyle, with a dinosaur" 
            width={300} height={300} />
        </div>
        <h1>Hi, I'm Kyle</h1>
        <p>This is my web development blog</p>
    </section>
  );
}

