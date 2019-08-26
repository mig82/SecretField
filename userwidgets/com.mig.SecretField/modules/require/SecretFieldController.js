define(["./slideIn"], function(slideIn) {

	const EYE_OPEN = "\uF06E";
	const EYE_CLOSED = "\uF070";

	return {
		toggle: function(){
			var button = this.view.showButton;
			if(button.text === EYE_OPEN){
				button.text = EYE_CLOSED;
				this.view.textBox.secureTextEntry = false;
			}
			else{
				button.text = EYE_OPEN;
				this.view.textBox.secureTextEntry = true;
			}
		},

		preShow: function(){
			this.view.showButton.text = EYE_OPEN;
			this.view.topFlex.top = "100%";
		},

		postShow: function(){
			this.view.showButton.onTouchEnd = this.toggle;
			slideIn(this.view.topFlex);
		},

		onHide: function(){},

		constructor: function(/*baseConfig, layoutConfig, pspConfig*/) {
			this.view.preShow = this.preShow;
			this.view.postShow = this.postShow;
			this.view.onHide = this.onHide;
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		}
	};
});