// import preact
import { h, render, Component } from 'preact';

// import stylesheet
import style from './style';

// import jquery for API calls
import $ from 'jquery';

// import components
import NavBar from '../navBar';
import DayView from '../dayView';
import WeekView from '../weekView';
import SettingsView from '../settingsView';
import SwipeButton from './swipeButton';
import SettingsButton from './settingsButton';

export default class Iphone_Container extends Component {

	// a constructor with initial set states
	constructor(props){
		super(props);

		// initialise default nav bar title
		this.state.navBarTitle = "Weather App";

		// initialise default classnames for dynamic divs
		this.state.dayViewClassName = style.dayViewCentre;
		this.state.weekViewClassName = style.weekViewRight;
		this.state.navIndicatorClassName = style.navIndicatorLeft;
		this.state.settingsViewClassName = style.settingsViewOff;
		this.state.settingsButtonClassName = style.settingsButtonOn;
		this.state.settingsBackTextClassName = style.settingsBackTextOff;
		this.state.settingsBackButtonClassName = style.settingsBackButtonOff;
		this.state.buttonLeftClassName = style.buttonLeftOff;
		this.state.arrowLeftClassName = style.arrowLeftOff;
		this.state.buttonRightClassName = style.buttonRightOn;
		this.state.arrowRightClassName = style.arrowRightOn;
	}

	// fetch data once component is mounted
	componentDidMount() {
		this.fetchUserData();
		this.fetchWeatherData();
	}

	
	// the main render method for the iphone container component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		// const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		

		// display all weather data
		return (
			<div class={ style.container }>

					{/*  add NavBar (title-bar) to top of iphone screen container */}
				< NavBar navBarTitle={this.state.navBarTitle} />

					{/* add Day View container with props values from API parsed response */}
				<div className={this.state.dayViewClassName}>
					< DayView day={this.state.today} date={this.state.date} amTemperature={this.state.amTemperature} amConditions={this.state.amConditions} amUmbrellaOn={this.state.amUmbrellaOn} amCoatOn={this.state.amCoatOn} amSunglassesOn={this.state.amSunglassesOn} amTime1={this.state.amTime1} amIcon1={this.state.amIcon1} amPop1={this.state.amPop1} amWind1={this.state.amWind1} amTemp1={this.state.amTemp1} amTime2={this.state.amTime2} amIcon2={this.state.amIcon2} amPop2={this.state.amPop2} amWind2={this.state.amWind2} amTemp2={this.state.amTemp2} amTime3={this.state.amTime3} amIcon3={this.state.amIcon3} amPop3={this.state.amPop3} amWind3={this.state.amWind3} amTemp3={this.state.amTemp3}  pmTemperature={this.state.pmTemperature} pmConditions={this.state.pmConditions} pmUmbrellaOn={this.state.pmUmbrellaOn} pmCoatOn={this.state.pmCoatOn} pmSunglassesOn={this.state.pmSunglassesOn} pmTime1={this.state.pmTime1} pmIcon1={this.state.pmIcon1} pmPop1={this.state.pmPop1} pmWind1={this.state.pmWind1} pmTemp1={this.state.pmTemp1} pmTime2={this.state.pmTime2} pmIcon2={this.state.pmIcon2} pmPop2={this.state.pmPop2} pmWind2={this.state.pmWind2} pmTemp2={this.state.pmTemp2} pmTime3={this.state.pmTime3} pmIcon3={this.state.pmIcon3} pmPop3={this.state.pmPop3} pmWind3={this.state.pmWind3} pmTemp3={this.state.pmTemp3} pmTime2={this.state.pmTime2} pmPop2={this.state.pmPop2} pmWind2={this.state.pmWind2} pmTemp2={this.state.pmTemp2} />
				</div>

					{/* add Week View container with props values from API parsed response (default CSS style positions it off screen right) */}
				<div className={this.state.weekViewClassName}>
					< WeekView date={this.state.date} today={this.state.today} todayAM={this.state.amConditions} todayPM={this.state.pmConditions} day2={this.state.day2} day2AM={this.state.day2AM} day2PM={this.state.day2PM} day3={this.state.day3} day3AM={this.state.day3AM} day3PM={this.state.day3PM} day4={this.state.day4} day4AM={this.state.day4AM} day4PM={this.state.day4PM} day5={this.state.day5} day5AM={this.state.day5AM} day5PM={this.state.day5PM} day6={this.state.day6} day6AM={this.state.day6AM} day6PM={this.state.day6PM} day7={this.state.day7} day7AM={this.state.day7AM} day7PM={this.state.day7PM} />
				</div>

					{/* add navigation indicator symbols at bottom of screen - to signify more content to left/right of screen */}
				<div className={this.state.navIndicatorClassName}></div>

					{/* add container to show settings page with props values from saved user data (default CSS style has zero opactiy) */}
				<div className={this.state.settingsViewClassName}>
					< SettingsView home={this.state.home} work={this.state.work} amStartHours={this.state.amStartHours} amStartMins={this.state.amStartMins} amEndHours={this.state.amEndHours} amEndMins={this.state.amEndMins} pmStartHours={this.state.pmStartHours} pmStartMins={this.state.pmStartMins} pmEndHours={this.state.pmEndHours} pmEndMins={this.state.pmEndMins} / >
				</div>

					{/* add 'Back' button to toggle-off opacity of Setting View container (Default CSS style has opacity set to zero) */}
				<div className={this.state.settingsBackButtonClassName}> 
					< SettingsButton clickFunction={this.toggleSettingsView} / >
				</div>
				<div className={this.state.settingsBackTextClassName}>Back</div>

					{/* add 'user-symbol' button to toggle-on opacity of Setting View container */}
				<div className={this.state.settingsButtonClassName}>
					< SettingsButton clickFunction={this.toggleSettingsView} / >
				</div>
				
					{/* add screen-left button to transition to Day View */}
				<div class={this.state.buttonLeftClassName}>
					< SwipeButton clickFunction={ this.swipeRight } / >
				</div>
				<div class={this.state.arrowLeftClassName}></div>
	
					{/* add screen-right button to transition to Week View (default CSS style has zero opacity) */}
				<div class={this.state.buttonRightClassName}>
					< SwipeButton clickFunction={ this.swipeLeft }/ >
				</div>
				<div class={this.state.arrowRightClassName}></div>

					{/* add masks for overflow conents (off sides of iphone screen) */}
				<div class={style.maskLeft}></div>
				<div class={style.maskRight}></div>
				<div class={style.maskBottom}></div>
			</div>
		);
	}

	// ----- Data retrieval functions -----

	// Function: gets saved user data - home/work destinations and journey times
	fetchUserData = () => {

		// user data currently hard-coded. Would be good to be loading this from a cache instead - so that we can use the settings page to update the cache values.
		this.setState({
			home : "Ealing Broadway",
			work : "Westminster",
			amStartHours : "08",
			amStartMins : "10",
			amEndHours : "09",
			amEndMins : "30",
			pmStartHours : "17",
			pmStartMins : "40",
			pmEndHours : "19",
			pmEndMins : "00"
		})			
	}

	// Function: gets weather data from API, using user data 
	fetchWeatherData = (home, work) => {
		
		// Insert API calls here...

		// extract relevant data values from returned API data
		this.parseResponse({}); // doesn't pass in any retrieved data yet - data values are hard coded in the parseResponse function

		// Currently the parseResponse function is creating both the AM and PM data in one execution.
		// if possible need to set up 2 API calls (one for home/work) and parse both responses. 

	}

	// Function: parses API response data and extracts relevant data 
	parseResponse = (parsed_json) => {
		// var day = parsed_json['current_observation']['temp_c'];
		// var date = parsed_json['current_observation']['temp_c'];

		// var amTemperature = parsed_json['current_observation']['temp_c'];
		// var amConditions = parsed_json['current_observation']['weather'];
		
		// var amTime1 = parsed_json['current_observation']['weather'];
		// var amPop1 = parsed_json[]
		// var amWind1 = parsed_json[]
		// var amTemp1 = parsed_json[]

		// var amTime2 = parsed_json[]
		// var amPop2 = parsed_json[]
		// var amWind2 = parsed_json[]
		// var amTemp2 = parsed_json[]
		
		// var amTime3 = parsed_json[]
		// var amPop3 = parsed_json[]
		// var amWind3 = parsed_json[]
		// var amTemp3 = parsed_json[]
		
		// var amTime2 = parsed_json[]
		// var amPop2 = parsed_json[]
		// var amWind2 = parsed_json[]
		// var amTemp2 = parsed_json[]

		// var pmTemperature = parsed_json[]
		// var pmConditions = parsed_json[]

		// var pmPop1 = parsed_json[]
		// var pmWind1 = parsed_json[]
		// var pmTemp1 = parsed_json[]

		// var pmTime2 = parsed_json[]
		// var pmPop2 = parsed_json[]
		// var pmWind2 = parsed_json[]
		// var pmTemp2 = parsed_json[]
		
		// var pmTime3 = parsed_json[]
		// var pmPop3 = parsed_json[]
		// var pmWind3 = parsed_json[]
		// var pmTemp3 = parsed_json[]
		
		// var pmTime2 = parsed_json[]
		// var pmPop2 = parsed_json[]
		// var pmWind2 = parsed_json[]
		// var pmTemp2 = parsed_json[]



		// set states for fields so they could be rendered later on
		this.setState({

			today : "Wednesday",
			date : "28 March 2018",

			// initialise values for AM weather details
			amTemperature : 7,
			amConditions : "mostlycloudy",

				// set flags for accessory icons to be on or off. Need to add some logical rules to set these
			amUmbrellaOn : false,
			amCoatOn : true,
			amSunglassesOn : true,

				// am - hour 1 details
			amTime1 : '8am',
			amIcon1 : 'partlycloudy',
			amPop1 : 0,
			amWind1 : 5,
			amTemp1 : 7,

				// am - hour 2 details
			amTime2 : '9am',
			amIcon2 : 'partlycloudy',
			amPop2 : 0,
			amWind2 : 6,
			amTemp2 : 8,

				// am - hour 3 details
			amTime3 : '10am',
			amIcon3 : 'partlycloudy',
			amPop3 : 10,
			amWind3 : 6,
			amTemp3 : 8,

			// -------------------------

			// initialise values for PM weather details
			pmTemperature : 5,
			pmConditions : 'rain',

				// set flags for accessory icons to be on or off. Need to add some logical rules to set these
			pmUmbrellaOn : true,
			pmCoatOn : true,
			pmSunglassesOn : false,

				// pm - hour 1 details
			pmTime1 : '5pm',
			pmIcon1 : 'chancerain',
			pmPop1 : 60,
			pmWind1 : 3,
			pmTemp1 : 9,

				// pm - hour 2 details
			pmTime2 : '6pm',
			pmIcon2 : 'rain',
			pmPop2 : 90,
			pmWind2 : 4,
			pmTemp2 : 7,

				// pm - hour 3 details
			pmTime3 : '7pm',
			pmIcon3 : 'rain',
			pmPop3 : 90,
			pmWind3 : 4,
			pmTemp3 : 6,


			day2 : "Thursday",
			day2AM : "mostlycloudy",
			day2PM : "cloudy",

			day3 : "Friday",
			day3AM : "cloudy",
			day3PM : "chancerain",			

			day4 : "Saturday",
			day4AM : "rain",
			day4PM : "rain",

			day5 : "Sunday",
			day5AM : "cloudy",
			day5PM : "partlycloudy",

			day6 : "Monday",
			day6AM : "rain",
			day6PM : "clear",

			day7 : "Tuesday",
			day7AM : "clear",
			day7PM : "clear",

		});      
	}

	// ----- Navigation functions -----

	// Function: transition to Week View container (triggered by swipe-left gesture or screen-right navigation button)
	swipeLeft = () => {
		// move Day View container off screen-left, move Week View container to centre from screen-right
		this.setState({dayViewClassName: style.dayViewLeft});
		this.setState({weekViewClassName: style.weekViewCentre});
		this.setState({navIndicatorClassName: style.navIndicatorRight});
		this.setState({buttonRightClassName: style.buttonRightOff});
		this.setState({arrowRightClassName: style.arrowRightOff});
		this.setState({buttonLeftClassName: style.buttonLeftOn});
		this.setState({arrowLeftClassName: style.arrowLeftOn});
	}

	// Function: transition to Day View container (triggered by swipe-right gesture or screen-left navigation button)
	swipeRight = () => {
		// move Week View container off screen-right, move Day View container to centre from screen-left
		this.setState({dayViewClassName: style.dayViewCentre});
		this.setState({weekViewClassName: style.weekViewRight});
		this.setState({navIndicatorClassName: style.navIndicatorLeft});
		this.setState({buttonLeftClassName: style.buttonLeftOff});
		this.setState({arrowLeftClassName: style.arrowLeftOff});
		this.setState({buttonRightClassName: style.buttonRightOn});
		this.setState({arrowRightClassName: style.arrowRightOn});
	}

	// Function: show / hide Settings View container - triggered from the user-symbol button oin the NavBar
	toggleSettingsView = () => {
		if (this.state.settingsViewClassName == style.settingsViewOff) { 
			// show Settings View, change navBar title, show the 'Back' button and hide the user-symbol button
			this.setState({navBarTitle : "Settings"});
			this.setState({settingsViewClassName: style.settingsViewOn});
			this.setState({settingsButtonClassName: style.settingsButtonOff});
			this.setState({settingsBackTextClassName: style.settingsBackTextOn});
			this.setState({settingsBackButtonClassName: style.settingsBackButtonOn});
		} else { 
			// hide Settings View, navBar title, hide the 'Back' button and show the user-symbol button
			this.setState({navBarTitle : "Weather App"});
			this.setState({settingsViewClassName: style.settingsViewOff});
			this.setState({settingsButtonClassName: style.settingsButtonOn});
			this.setState({settingsBackTextClassName: style.settingsBackTextOff});
			this.setState({settingsBackButtonClassName: style.settingsBackButtonOff});
		}
	}


}