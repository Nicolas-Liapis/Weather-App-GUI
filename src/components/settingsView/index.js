// import preact
import { h, render, Component } from 'preact';

// import stylesheet
import style from './style.less';

//import components
import DoneButton from './doneButton';

export default class SettingsView extends Component {


	// render SettingsView component
	render(props, state) {
		return (
			<div class={style.settingsView}> {/* Add container */}

				{/* Add Home Address - Form text field input and label to top of container */}
				<div class={ style.homeAddressLabel }>Home Address</div>
				<input id="inputHome" class={style.homeField } type="text" name="home" placeholder="Ealing" value={props.home} />

				{/* Add Work Address - Form text field input and label to top of container */}
				<div class={ style.workAddressLabel }>Work Address</div>
				<input id="inputWork" class={style.workField } type="text" name="work" placeholder="East Ham" value={props.work}/>

				{/* Add divider line for formatting */}
				<div class={ style.dividerLine1 }></div>

				{/* Add form inputs for AM commute time details - with placeholder values taken from props */}
				<div class={ style.amJourney }>

					{/* AM coomute start - section */}
					<div class={ style.journeyTitle } >AM Journey</div> {/* section title */}
					<div class={ style.startTime }>
						<div class={ style.startTitle }>Starts</div>
						<div class={ style.timeSelector }>
							<input id="amHoursStart" class={ style.hours } dir="rtl" type="number" name="amStartHours" value={props.amStartHours} min="0" max="11" />
							:
							<input id="amMinsStart" class={ style.minutes } type="number" name="amStartMinutes" value={props.amStartMins} step="10" min="0" max="50" />
						</div>
					</div>

					{/* AM coomute end - section */}
					<div class={ style.endTime }>
						<div class={ style.endTitle }>Ends</div> {/* section title */}
						<div class={ style.timeSelector }>
							<input id="amHoursEnd" class={ style.hours } dir="rtl" type="number" name="amEndHours" value={props.amEndHours} min="0" max="12" />
							:
							<input id="amMinsEnd" class={ style.minutes } type="number" name="amEndMinutes" value={props.amEndMins} step="10" min="0" max="50" />
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
							<input id="pmHoursStart" class={ style.hours } dir="rtl" type="number" name="pmStartHours" value={props.pmStartHours} min="0" max="11" />
							:
							<input id="pmMinsStart" class={ style.minutes } type="number" name="pmStartMinutes" value={props.pmStartMins} step="10" min="0" max="50" />
						</div>
					</div>

					{/* PM coomute end - section */}
					<div class={ style.endTime }>
						<div class={ style.endTitle }>Ends</div> {/* section title */}
						<div class={ style.timeSelector }>
							<input id="pmHoursEnd" class={ style.hours } dir="rtl" type="number" name="pmEndHours" value={props.pmStartMins} min="0" max="12" />
							:
							<input id="pmMinsEnd" class={ style.minutes } type="number" name="pmEndMinutes" value={props.pmEndMins} step="10" min="0" max="50" />
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
		
		//Saves Home and Work destinations
		let inputHome = document.getElementById('inputHome').value;
		localStorage.inputHome = inputHome;
		let inputWork = document.getElementById('inputWork').value;
		localStorage.inputWork = inputWork;
		//Saves am and pm start times
		let amHoursStart = document.getElementById('amHoursStart').value;
		localStorage.amHoursStart = amHoursStart;
		let pmHoursStart = document.getElementById('pmHoursStart').value;
		localStorage.pmHoursStart = pmHoursStart;
		let amMinsStart = document.getElementById('amMinsStart').value;
		localStorage.amMinsStart = amMinsStart;
		let pmMinsStart = document.getElementById('pmMinsStart').value;
		localStorage.pmMinsStart = pmMinsStart;
		//Saves am and pm end times
		let amHoursEnd = document.getElementById('amHoursEnd').value;
		localStorage.amHoursEnd = amHoursEnd;
		let pmHoursEnd = document.getElementById('pmHoursEnd').value;
		localStorage.pmHoursEnd = pmHoursEnd;
		let amMinsEnd = document.getElementById('amMinsEnd').value;
		localStorage.amMinsEnd = amMinsEnd;
		let pmMinsEnd = document.getElementById('pmMinsEnd').value;
		localStorage.pmMinsEnd = pmMinsEnd;



		// If using a memory cache to store user data (instead of hard-coded values) we can use this form to update the user data cache - and therefore change the API reguest url.
		// (to do this need to restructure the render function to enclose form inputs in actual 'form' tags)
	}

}
