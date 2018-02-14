import * as React from 'react';
import './Clock.css';

type ClockProps = {
    hours: number;
    minutes: number;
    seconds: number;
};
export const Clock: React.SFC<ClockProps> = (props) => {
    return (
        <div className="Timer">
            <div className="cell hours">
                {props.hours < 10 ? '0' + props.hours : props.hours}
            </div>
            <div className="cell minutes">
                {props.minutes < 10 ? '0' + props.hours : props.minutes}
            </div>
            <div className="cell seconds">
                {props.hours < 10 ? '0' + props.hours : props.hours}
            </div>
        </div>
    );
};