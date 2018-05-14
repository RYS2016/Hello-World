function getDegrees() {
		var degreeRequest = new XMLHttpRequest();
		degreeRequest.open("get", "degrees.json", true);
		
		degreeRequest.onreadystatechange = function () {
			if (degreeRequest.readyState === 4) {
				if (degreeRequest.status === 200) {
					var degreeData = JSON.parse(degreeRequest.responseText);
					var size = degreeData.degrees.length;
					var newData = ""; 
					newData += "<table border='15' align='center'>";

					for (i = 0; i < size; i++) {
						newData += "<tr><td>" + degreeData.degrees[i].degree.School + "</td>";
        				newData += "<td>" + degreeData.degrees[i].degree.Type + "</td>";
        				newData += "<td>" + degreeData.degrees[i].degree.Program + "</td>";
        				newData += "<td>" + degreeData.degrees[i].degree.Year + "</td></tr>";
					} 
						newData += "</table>"
											
					var insertPoint = document.getElementById("btn1");
					insertPoint.insertAdjacentHTML("afterend", newData);
					document.getElementById("btn1").style.display = "none";
				}
			}
		};

	degreeRequest.send();
}