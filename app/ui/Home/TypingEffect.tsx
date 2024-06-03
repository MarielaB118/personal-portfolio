import { Typewriter, Cursor } from "nextjs-simple-typewriter";

export default function TypingEffect(){

    return(
        <div>I'm 
            <Typewriter
                words={[' a learner.', ' a developer.', ' an innovator.', ' Mariela.']}
            />
            <Cursor />
        </div>
    );
}