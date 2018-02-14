import * as React from 'react';
import './TimerInput.css';

type TimerInputProps = {};

export const TimerInput: React.SFC<TimerInputProps> = (props) => {
    return (
        <div className="TimerInput">
            <input step={1} className="hours" type="number"/>
            <input step={1} className="minutes" type="number"/>
            <input step={1} className="seconds" type="number"/>
        </div>
    );
};