define(function() {

	const EYE_OPEN = "\uF06E";
	const EYE_CLOSED = "\uF070";

	return {
		toggleButton: function (button){
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
		},

		postShow: function(){
			this.view.showButton.onTouchEnd = this.toggleButton;
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