import React, {useLayoutEffect} from 'react';
import * as Tone from 'tone'



export const Button = ({}) => {

    let synth;


    const playNote = () => {
        synth.triggerAttackRelease("C2", "4n");
    };

    //play a middle 'C' for the duration of an 8th note


    useLayoutEffect(()=>{
        //create a synth and connect it to the main output (your speakers)
        synth = new Tone.Synth().toDestination();
    }, []);

    return (
        <button onClick={playNote}></button>
    )
}
