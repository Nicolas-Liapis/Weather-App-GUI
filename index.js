// import preact
import { h, render, Component } from 'preact';
// import stylesheets for ipad & button
import style from './style';
import style_iphone from '../button/style_iphone';
// import jquery for API calls
import $ from 'jquery';
// import the Button component
import Button from '../button';

export default class Iphone extends Component {
//var Iphone = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
		// temperature state
		this.state.temp = "";
		// button display state
		this.setState({ display: true });
	}

	// a call to fetch weather data via wunderground
	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url = "http://api.wunderground.com/api/d06d0f67dc28c6fa/conditions/hourly10day/forecast10day/q/UK/London.json";
		
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, hide the button
		this.setState({ display: false });
	}

	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;
		
		// display all weather data
		/*
		
		<div class={style.conditions}>{ this.state.hour3 }</div>
					
					<div class={style.conditions}>{ this.state.temp2 }</div>
					<div class={style.conditions}>{ this.state.temp3 }</div>
					<div class={style.conditions}>{ this.state.wind1 }</div>
					<div class={style.conditions}>{ this.state.wind2}</div>
					<div class={style.conditions}>{ this.state.wind3 }</div>
		
		
		*/
		
		return (
			<div class={ style.container }>
				<div class={ style.header }>
					<div class={style.conditions}>{ this.state.date }</div>
					
						<div class={style.conditions}>{ this.state.hour1}
							
							<div class={style.conditions}>{ this.state.temp1 }C</div>
							<div class={style.conditions}>{ this.state.wind1 }Kmph</div>
							<div class={style.conditions}>{ this.state.firstF }</div>
						
						</div>
					
					
						<div class={style.conditions}>{ this.state.hour2}
							
							<div class={style.conditions}>{ this.state.temp2 }C</div>
							<div class={style.conditions}>{ this.state.wind2 }Kmph</div>
							<div class={style.conditions}>{ this.state.secondF }</div>
					
						</div>
							
						<div class={style.conditions}>{ this.state.hour3}
							
							<div class={style.conditions}>{ this.state.temp3 }C</div>
							<div class={style.conditions}>{ this.state.wind3 }Kmph</div>
							<div class={style.conditions}>{ this.state.thirdF }</div>
					
						</div>	
					
						<div class={style.conditions}>{ this.state.DayOne }
					
							<div class={style.conditions}>{ this.state.icon1D }</div>
							<div class={style.conditions}>{ this.state.icon1N }</div>
						
						</div>
				
						<div class={style.conditions}>{ this.state.Daytwo }
				
							<div class={style.conditions}>{ this.state.icon2D }</div>
							<div class={style.conditions}>{ this.state.icon2N }</div>
					
						</div>
				
					
				
						<div class={style.conditions}>{ this.state.DayThree }
				
							<div class={style.conditions}>{ this.state.icon3D }</div>
							<div class={style.conditions}>{ this.state.icon3N }</div>
							
						</div>
					
						<div class={style.conditions}>{ this.state.DayFour }
				
							<div class={style.conditions}>{ this.state.icon4D }</div>
							<div class={style.conditions}>{ this.state.icon4N }</div>
					
						</div>
				
				
					
				
						<div class={style.conditions}>{ this.state.DayFive }
				
							<div class={style.conditions}>{ this.state.icon5D }</div>
							<div class={style.conditions}>{ this.state.icon5N }</div>
							
						</div>
				
					
				
						<div class={style.conditions}>{ this.state.DaySix }
				
							<div class={style.conditions}>{ this.state.icon6D }</div>
							<div class={style.conditions}>{ this.state.icon6N }</div>
					
						</div>
					
						<div class={style.conditions}>{ this.state.DaySeven }
				
							<div class={style.conditions}>{ this.state.icon7D }</div>
							<div class={style.conditions}>{ this.state.icon7N }</div>
						
						</div>
				
				
					</div>
				
			
				
				
				
				
				
				
				<div class={ style.details }></div>
				<div class= { style_iphone.container }> 
					{ this.state.display ? <Button class={ style_iphone.button } clickFunction={ this.fetchWeatherData }/ > : null }
				</div>
				
				
				
			</div>
		);
	}

	parseResponse = (parsed_json) => {
		var dateR= parsed_json['current_observation']['observation_time_rfc822'];
		// getting the hours from API
	 	
		var hourlyData = parsed_json['hourly_forecast'];
		var firstHour = hourlyData[0]['FCTTIME']['civil'];
		var secondHour = hourlyData[1]['FCTTIME']['civil'];
		var thirdHour = hourlyData[2]['FCTTIME']['civil'];
		
		// getting the hourly temperature 
		
		var firsttemp = hourlyData[0]['temp']['metric'];
		var secondtemp = hourlyData[1]['temp']['metric'];
		var thirdtemp = hourlyData[2]['temp']['metric'];
		
		//getting the hourly wind speed 
		
		var firstwind = hourlyData[0]['wspd']['metric'];
		var secondwind = hourlyData[1]['wspd']['metric'];
		var thirdwind = hourlyData[2]['wspd']['metric'];
		
		// getting the hourly forecast 
		var firstF = hourlyData[0]['icon'];
		var secondF = hourlyData[1]['icon'];
		var thirdF = hourlyData[2]['icon'];
		
		
		
		//getting the name of the day period 
		
		var SevenDays = parsed_json['forecast']['txt_forecast']['forecastday'];
		var Dayname1 = SevenDays[0]['title'];
		var Dayname2 = SevenDays[2]['title'];
		var Dayname3 = SevenDays[4]['title'];
		var Dayname4 = SevenDays[6]['title'];
		var Dayname5 = SevenDays[8]['title'];
		var Dayname6 = SevenDays[10]['title'];
		var Dayname7 = SevenDays[12]['title'];
		
		
		// forecast 7 days 
		var icon1D = SevenDays[0]['icon'];// morning 
		var icon1N = SevenDays [1]['icon']; // evening/night 
		var icon2D = SevenDays[2]['icon'];// morning 
		var icon2N = SevenDays [3]['icon'];
		var icon3D = SevenDays[4]['icon'];// morning 
		var icon3N = SevenDays [5]['icon'];
		var icon4D = SevenDays[6]['icon'];// morning 
		var icon4N = SevenDays [7]['icon'];
		var icon5D = SevenDays[8]['icon'];// morning 
		var icon5N = SevenDays [9]['icon'];
		var icon6D = SevenDays[10]['icon'];// morning 
		var icon6N = SevenDays [11]['icon'];
		var icon7D = SevenDays[12]['icon'];// morning 
		var icon7N = SevenDays [13]['icon'];
	
	
	
	
	
		this.setState({
			date : dateR,
			
			// 3h time
			hour1:firstHour,
			hour2:secondHour,
			hour3:thirdHour,
			
			// 3h temperature prediction
			temp1:firsttemp, 
			temp2:secondtemp,
			temp3: thirdtemp,
			
			// 3h wind prediction
			wind1:firstwind, 
			wind2:secondwind,
			wind3: thirdwind,
				
			// 3h forecast
				
			firstF	: firstF,
			secondF    : secondF,
			thirdF    : thirdF,
				
				
			// name of the 7 consecutive days  	
			DayOne	: Dayname1,
			Daytwo  : Dayname2,
		    DayThree: Dayname3,
		    DayFour : Dayname4,
		    DayFive : Dayname5, 
		    DaySix  : Dayname6,
		    DaySeven : Dayname7,
			
			
			// two times forecast for the 7 days 
			
			 
			
			icon1D : icon1D,
			icon1N : icon1N, 
			icon2D : icon2D, 
			icon2N : icon2N,
			icon3D : icon3D,  
			icon3N :  icon3N, 
			icon4D : icon4D,  
			icon4N : icon4N, 
			icon5D : icon5D,  
			icon5N : icon5N,
			icon6D : icon6D,
			icon6N : icon6N,
			icon7D : icon7D,  
			icon7N : icon7N, 
			
			
			
			
			
			
			//icon1 :icon,
		});      
	}
}