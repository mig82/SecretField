/**
* Slide up the whole component into position to make it visible.
*/
define(function () {

	const doNothing = ()=>{};
	const steps = {
		100: {
			"top": "0%",
			"stepConfig": {
				"timingFunction": kony.anim.EASE_IN_OUT
			}
		}
	};

	const config = {
		"duration": 0.5,
		"iterationCount": 1,
		"delay": 0.25,
		"fillMode": kony.anim.FILL_MODE_FORWARDS
	};

	function slideIn(topFlex){

		try{
			var animation = kony.ui.createAnimation(steps);
			topFlex.animate(animation, config, {
				animationStart: doNothing,
				animationEnd: doNothing
			});
		}
		catch(e){
			kony.print(`Problem animating:\n\t${e}`);
		}
	}

    return slideIn;
});