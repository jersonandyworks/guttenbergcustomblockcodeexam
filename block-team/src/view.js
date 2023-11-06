document.addEventListener("DOMContentLoaded", function () {
	const buttons = document.querySelectorAll(".show-button-detail");
	let currentActiveButton = null;
	let currentActiveDetail = null;

	function toggleDetail(button) {
		const dataId = button.getAttribute("data-id");
		const elementId = "profile--detail--" + dataId;
		const detailElement = document.getElementById(elementId);

		if (detailElement) {
			if (
				detailElement.style.display === "none" ||
				detailElement.style.display === ""
			) {
				if (currentActiveButton && currentActiveDetail) {
					// Hide the currently active detail element and reset its button
					currentActiveDetail.style.display = "none";
					currentActiveButton.textContent = "View Details";
					currentActiveButton.classList.remove("active");
				}

				detailElement.style.display = "block";
				button.textContent = "Hide Details";
				button.classList.add("active");
				currentActiveButton = button;
				currentActiveDetail = detailElement;
			} else {
				detailElement.style.display = "none";
				button.textContent = "View Details";
				button.classList.remove("active");
				currentActiveButton = null;
				currentActiveDetail = null;
			}
		}
	}

	buttons.forEach(function (button) {
		button.addEventListener("click", function () {
			toggleDetail(button);
		});
	});
});
