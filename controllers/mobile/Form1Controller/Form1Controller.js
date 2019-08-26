define(function(){
	return {
		postShow: function(){
			var secretFields = kony.ui.getComponents(this.view.mainFlex);
			kony.print(secretFields.length);
			this.view.toggleButton.onTouchEnd = () => {
				secretFields.forEach((sf) => {
					sf.toggle();
				});
			};
		},
		onNavigate: function(){
			this.view.postShow = this.postShow;
		}
	};
});
