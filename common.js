function validatePace(pace){

}
function calculate(p,d){
		var msg = "";
		var pace = parseFloat(p);
		var dist = parseInt(d);
	//---------------------------
	var chk = validatePace(pace);
	if(chk != null) return chk	
	//---------------------------
		var min = dist * pace;
		var hour = 0;
		if(min > 60){
			hour = Math.floor(min / 60);          
			min = min % 60;
		}
	//---------------------------
		msg = "successfully calculated!"
		return {"status":1,"message":msg,"hour":hour,"min":min};
}