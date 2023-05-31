import { endAdventure, haveAdventures } from '../..';
import { askQuestion, clear, print } from '../ui/console';


interface GoHome {
	gohome?: WantToGoHomeToMum;
}
interface WantToGoHomeToMum {
	wantToGoHome?: string;
}

export function goHome(): void {
	clear(true);
	print('Wait... do I want to go home?');

	const decisionTime = tryToGoHome();

	// optional parameters can be accessed safely with the ?. operator
	// this will only return if every parameter in the whole chain is properly set...
	if (decisionTime.gohome?.wantToGoHome === 'Yes') {
		print(
			'CONGRATULATIONS! You successfully made it home to your Mum! 🥳'
		);

		return askQuestion(
			'Press ENTER to re-enter Wonderland! ',
			haveAdventures
		);
	} else {
		print('You are unable to make a decision! 😱');
		return endAdventure();
	}
}

function tryToGoHome(): GoHome {
	return {
				gohome: {
					wantToGoHome: 'Yes',
					},
		};
}
