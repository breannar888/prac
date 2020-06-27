import React from 'react';
import './App.css';

function App() {
  return (
		<nav>
			<ul>
				<li class="current-menu-item"> <a href="">Home</a> </li>
				<li> <a href="">About</a></li>
				<li> <a href="">What is...</a>
					<ul>
						<li><a href="">ACAB</a></li>
						<li><a href="">Defund the Police</a></li>
						<li><a href="">Blue Wall of Silence</a></li>
						<li><a href="">Activist Burnout</a></li>
					</ul>
				</li>
				<li> <a href="">Common Arguments and How to Respond</a>
					<ul>
						<li><a href="">"Protests Are Violent"</a></li>
						<li><a href="">"Looting is Too Much"</a></li>
						<li><a href="">"Protests Don't Work"</a></li>
						<li><a href="">"Everyone is Treated Equal By Police"</a></li>
						<li><a href="">"Black People Commit More Crimes"</a></li>
					</ul>
				</li>
				<li> <a href="">Primary Sources</a>
					<ul>
						<li><a href="">Videos and Photos of Police Brutality</a></li>
						<li><a href="">Black Sentencing vs White Sentencing</a></li>
					</ul>
				</li>
				<li> <a href="">How to Support</a>
					<ul>
						<li><a href="">Donate</a></li>
						<li><a href="">Protest</a></li>
						<li><a href="">Watch</a></li>
						<li><a href="">Share</a></li>
					</ul>
				</li>
				<li> <a href="">Say Their Names</a></li>
				<li> <a href="">Mental Health</a></li>
				<li> <a href="">Contacts</a></li>
			</ul>
		</nav>
  );
}

export default App;
