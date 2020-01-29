import React from 'react';
import moment from 'moment';


export default class Countdown extends React.Component {
	state = {
		days:0,
		hours: 0,
		minutes: 0,
		seconds: 0
	}
	
	componentDidMount() {
		this.interval = setInterval(() => {
			const { timeTillDate, timeFormat } = this.props;
			const then = moment(timeTillDate, timeFormat)
			const now = moment()
			var d = moment.duration(then.diff(now));
			const hours = d.hours();
			const minutes = d.minutes();
			const seconds = d.seconds();
			this.setState({ days: parseInt(d.asDays()), hours, minutes, seconds });
		}, 1000);
	}

	componentWillUnmount() {
		if(this.interval) {
			clearInterval(this.interval);
		}
	}

	eArabic(x){
		return x.toLocaleString('ar-EG');
	}
	
	render() {
		const { days, hours, minutes, seconds } = this.state;
		const daysRadius = mapNumber(days, 0, 360, 0, 360);
		const hoursRadius = mapNumber(hours, 0, 24, 0, 360);
		const minutesRadius = mapNumber(minutes, 0, 60, 0, 360);
		const secondsRadius = mapNumber(seconds, 0, 60, 0, 360);
		// if(seconds==undefined) {
		// 	return null;
		// }
		return (
			<div>
				<div className='countdown-wrapper'>
					{days!=-1 && (
						
						<div className='countdown-item'>
							<SVGCircle radius={daysRadius} />
							{!this.props.en &&
								this.eArabic(days)
							}
							{this.props.en &&
								days
							}
							{!this.props.en &&
								<span>روز</span>
							}
							{this.props.en &&
								<span>days</span>
							}
							
						</div>
					)}
					{hours!=-1 && (
						<div className='countdown-item'>							
							<SVGCircle radius={hoursRadius} />
							{!this.props.en &&
								this.eArabic(hours)
							}
							{this.props.en &&
								hours
							} 
							{!this.props.en &&
								<span>ساعت</span>
							}
							{this.props.en &&
								<span>hours</span>
							}
						</div>
					)}
					{minutes!=-1 && (
						<div className='countdown-item'>
							<SVGCircle radius={minutesRadius} />
							{!this.props.en &&
								this.eArabic(minutes)
							}
							{this.props.en &&
								minutes
							}
							{!this.props.en &&
								<span>دقیقه</span>
							}
							{this.props.en &&
								<span>minutes</span>
							}
						</div>
					)}
					{seconds!=-1 && (
						<div className='countdown-item'>
							<SVGCircle radius={secondsRadius} />
							{!this.props.en &&
								this.eArabic(seconds)
							}
							{this.props.en &&
								seconds
							}
							{!this.props.en &&
								<span>ثانیه</span>
							}
							{this.props.en &&
								<span>seconds</span>
							}
						</div>
					)}
				</div>
			</div>
		);
	}
}

const SVGCircle = ({ radius }) => (
	<svg className='countdown-svg'>
		{window.innerWidth>1000 &&
			<path fill="none" stroke="#333" strokeWidth="4" d={describeArc(50, 50, 48, 0, radius)}/>
		}
		{window.innerWidth<=1000 && window.innerWidth>600 &&
			<path fill="none" stroke="#333" strokeWidth="4" d={describeArc(50, 50, 40, 0, radius)}/>
		}
		{window.innerWidth<=600 &&
			<path fill="none" stroke="#333" strokeWidth="3" d={describeArc(50, 50, 30, 0, radius)}/>
		}
	</svg>
);

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}