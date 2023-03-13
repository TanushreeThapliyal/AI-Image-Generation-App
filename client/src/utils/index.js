// Create diff functions to use

import FileSaver from 'file-saver';
import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompt){
    const randomIndex=Math.floor(Math.random() * 
    surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    // to not get same random prompt again

    if(randomPrompt===prompt) return getRandomPrompt(prompt)

    return randomPrompt;
}

export async function downloadImage(id,photo){
    FileSaver.saveAs(photo,`download-${id}.jpg`);

}
 