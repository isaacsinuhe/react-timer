import * as React from 'react';
import { TimerInput, Clock } from '../';
import './Timer.css';

type TimerProps = {};
type TimerState = {
    hours: number;
    minutes: number;
    seconds: number;
};
export class Timer extends React.Component<TimerProps, TimerState> {

    constructor (props: TimerProps) {
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    render () {
        return (
            <div className="Timer">
                <TimerInput/>
                <Clock 
                    hours={this.state.hours}
                    minutes={this.state.minutes}
                    seconds={this.state.seconds}
                />
            </div>
        );
    }
}