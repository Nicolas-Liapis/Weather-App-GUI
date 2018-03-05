// import preact
import { h, render, Component } from 'preact';

// import stylesheet
import style from './style.less';

//import components
import DoneButton from './doneButton';

export default class SettingsView extends Component {

	// render SettingsView component
	render(props, state) {

		// modify saved form values to show correct 24-hour clock representation ('04' instead of '4' etc) - form inputs parsed to Int when saving to storage in 'acceptChanges' function.
		var homeValue = props.home;
		var workValue = props.work;
		var amStartHoursValue = (props.amStartHours > 9) ? props.amStartHours : '0' + props.amStartHours ;
		var amStartMinsValue = (props.amStartMins > 9) ? props.amStartMins : '0' + props.amStartMins;
		var amEndHoursValue = (props.amEndHours > 9) ? props.amEndHours : '0' + props.amEndHours;
		var amEndMinsValue = (props.amEndMins > 9) ? props.amEndMins : '0' + props.amEndMins;
		var pmStartHoursValue = (props.pmStartHours > 9) ? props.pmStartHours : '0' + props.pmStartHours;
		var pmStartMinsValue = (props.pmStartMins > 9) ? props.pmStartMins : '0' + props.pmStartMins;
		var pmEndHoursValue = (props.pmEndHours > 9) ? props.pmEndHours : '0' + props.pmEndHours;
		var pmEndMinsValue = (props.pmEndMins > 9) ? props.pmEndMins : '0' + props.pmEndMins;

		return (
			<div class={style.settingsView}> {/* Add container */}

				{/* Add Home Address - Form text field input and label to top of container */}
				<div class={ style.homeAddressLabel }>Home Address</div>
				<select id="inputHome" class={style.homeField } type="text" name="home" >
					<option>Camden</option>
					<option>Wembley</option>
					<option>Shoreditch</option>
					<option>Southwark</option>
					<option>Chelsea</option>
					<option>Heathrow</option>
					<option>Ilford</option>
					<option>Enfield</option>
					<option>Edgware</option>
					<option>Holborn</option>
				</select>

				{/* Add Work Address - Form text field input and label to top of container */}
				<div class={ style.workAddressLabel }>Work Address</div>
				<select id="inputWork" class={style.workField } type="text" name="work">
					<option>Camden</option>
					<option>Wembley</option>
					<option>Shoreditch</option>
					<option>Southwark</option>
					<option>Chelsea</option>
					<option>Heathrow</option>
					<option>Ilford</option>
					<option>Enfield</option>
					<option>Edgware</option>
					<option>Holborn</option>
				</select>

				{/* Add divider line for formatting */}
				<div class={ style.dividerLine1 }></div>

				{/* Add form inputs for AM commute time details - with placeholder values taken from props */}
				<div class={ style.amJourney }>

					{/* AM coomute start - section */}
					<div class={ style.journeyTitle } >AM Journey</div> {/* section title */}
					<div class={ style.startTime }>
						<div class={ style.startTitle }>Starts</div>
						<div class={ style.timeSelector }>
							<input id="amHoursStart" class={ style.hours } dir="rtl" type="number" name="amStartHours" value={amStartHoursValue} min="0" max="23" />
							:
							<input id="amMinsStart" class={ style.minutes } type="number" name="amStartMinutes" value={amStartMinsValue} step="15" min="0" max="45" />
						</div>
					</div>

					{/* AM coomute end - section */}
					<div class={ style.endTime }>
						<div class={ style.endTitle }>Ends</div> {/* section title */}
						<div class={ style.timeSelector }>
							<input id="amHoursEnd" class={ style.hours } dir="rtl" type="number" name="amEndHours" value={amEndHoursValue} min="0" max="23" />
							:
							<input id="amMinsEnd" class={ style.minutes } type="number" name="amEndMinutes" value={amEndMinsValue} step="15" min="0" max="45" />
						</div>
					</div>
				</div>

				{/* Add form inputs for PM commute time details - with placeholder values taken from props */}
				<div class={ style.pmJourney }>

					{/* PM coomute start - section */}
					<div class={ style.journeyTitle } >PM Journey</div>
					<div class={ style.startTime }>
						<div class={ style.startTitle }>Starts</div> {/* section title */}
						<div class={ style.timeSelector }>
							<input id="pmHoursStart" class={ style.hours } dir="rtl" type="number" name="pmStartHours" value={pmStartHoursValue} min="0" max="23" />
							:
							<input id="pmMinsStart" class={ style.minutes } type="number" name="pmStartMinutes" value={pmStartMinsValue} step="15" min="0" max="45" />
						</div>
					</div>

					{/* PM coomute end - section */}
					<div class={ style.endTime }>
						<div class={ style.endTitle }>Ends</div> {/* section title */}
						<div class={ style.timeSelector }>
							<input id="pmHoursEnd" class={ style.hours } dir="rtl" type="number" name="pmEndHours" value={pmEndHoursValue} min="0" max="23" />
							:
							<input id="pmMinsEnd" class={ style.minutes } type="number" name="pmEndMinutes" value={pmEndMinsValue} step="15" min="0" max="45" />
						</div>
					</div>
				</div>

				{/* Add divider line for formatting */}
				<div class={ style.dividerLine2 }></div>

				{/* Add button to submit form */}
				< DoneButton clickFunction={this.acceptChanges} / >

			</div>
		);
	}


	// Function: save changes for home / work destinations and commute times
	acceptChanges = () => {

		alert("Would be good to check validity of start/end times here and not accept changes if invalid");

		//Saves Home and Work destinations
		let inputHome = document.getElementById('inputHome').value;
		localStorage.inputHome = inputHome;
		let inputWork = document.getElementById('inputWork').value;
		localStorage.inputWork = inputWork;
		//Saves am and pm start times
		let amHoursStart = document.getElementById('amHoursStart').value;
		localStorage.amHoursStart = parseInt(amHoursStart);
		let pmHoursStart = document.getElementById('pmHoursStart').value;
		localStorage.pmHoursStart = parseInt(pmHoursStart);
		let amMinsStart = document.getElementById('amMinsStart').value;
		localStorage.amMinsStart = parseInt(amMinsStart);
		let pmMinsStart = document.getElementById('pmMinsStart').value;
		localStorage.pmMinsStart = parseInt(pmMinsStart);
		//Saves am and pm end times
		let amHoursEnd = document.getElementById('amHoursEnd').value;
		localStorage.amHoursEnd = parseInt(amHoursEnd);
		let pmHoursEnd = document.getElementById('pmHoursEnd').value;
		localStorage.pmHoursEnd = parseInt(pmHoursEnd);
		let amMinsEnd = document.getElementById('amMinsEnd').value;
		localStorage.amMinsEnd = parseInt(amMinsEnd);
		let pmMinsEnd = document.getElementById('pmMinsEnd').value;
		localStorage.pmMinsEnd = parseInt(pmMinsEnd);


		window.location.reload(true);


		// If using a memory cache to store user data (instead of hard-coded values) we can use this form to update the user data cache - and therefore change the API reguest url.
		// (to do this need to restructure the render function to enclose form inputs in actual 'form' tags)
	}

}
