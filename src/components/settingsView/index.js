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
				<input class={style.homeField } type="text" name="home" placeholder={props.home} />

				{/* Add Work Address - Form text field input and label to top of container */}
				<div class={ style.workAddressLabel }>Work Address</div>
				<input class={style.workField } type="text" name="work" placeholder={props.work}/>
					
				{/* Add divider line for formatting */}
				<div class={ style.dividerLine1 }></div>

				{/* Add form inputs for AM commute time details - with placeholder values taken from props */}
				<div class={ style.amJourney }>
					
					{/* AM coomute start - section */}
					<div class={ style.journeyTitle } >AM Journey</div> {/* section title */}
					<div class={ style.startTime }> 
						<div class={ style.startTitle }>Starts</div>
						<div class={ style.timeSelector }>
							<input class={ style.hours } dir="rtl" type="number" name="amStartHours" placeholder={props.amStartHours} min="0" max="11" />
							:
							<input class={ style.minutes } type="number" name="amStartMinutes" placeholder={props.amStartMins} step="10" min="0" max="50" />
						</div>
					</div>

					{/* AM coomute end - section */}
					<div class={ style.endTime }> 
						<div class={ style.endTitle }>Ends</div> {/* section title */}
						<div class={ style.timeSelector }>
							<input class={ style.hours } dir="rtl" type="number" name="amEndHours" placeholder={props.pmStartHours} min="0" max="12" />
							:
							<input class={ style.minutes } type="number" name="amEndMinutes" placeholder={props.pmStartMins} step="10" min="0" max="50" />
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
							<input class={ style.hours } dir="rtl" type="number" name="pmStartHours" placeholder={props.pmEndHours} min="0" max="11" />
							:
							<input class={ style.minutes } type="number" name="pmStartMinutes" placeholder={props.pmEndMins} step="10" min="0" max="50" />
						</div>
					</div>

					{/* PM coomute end - section */}
					<div class={ style.endTime }> 
						<div class={ style.endTitle }>Ends</div> {/* section title */}
						<div class={ style.timeSelector }>
							<input class={ style.hours } dir="rtl" type="number" name="pmEndHours" placeholder="19" min="0" max="12" />
							:
							<input class={ style.minutes } type="number" name="pmEndMinutes" placeholder="00" step="10" min="0" max="50" />
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
		console.log("Accept Changes");

		// If using a memory cache to store user data (instead of hard-coded values) we can use this form to update the user data cache - and therefore change the API reguest url.
		// (to do this need to restructure the render function to enclose form inputs in actual 'form' tags)
	}
	
}
