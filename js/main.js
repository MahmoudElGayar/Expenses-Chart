let columns = document.querySelector(".days-columns").childNodes;

fetch("data.json")
	.then((value) => {
		let myData = value.json();
		return myData;
	})
	.then((myData) => {
		columns.forEach((column) => {
			column.addEventListener("mouseover", () => {
				for (let i = 0; i < myData.length; i++) {
					if (myData[i].day === column.className) {
						let div = document.createElement("div");
						let divText = document.createTextNode(`$${myData[i].amount}`);
						div.classList.add("num");
						div.style.zIndex = "9";
						div.appendChild(divText);
						column.appendChild(div);
						column.addEventListener("mouseout", () => {
							div.remove();
						});
					}
				}
			});
		});
	})
	.catch((err) => {
		console.log(err);
	});
