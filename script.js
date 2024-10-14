const privateUserBtn = /** @type {HTMLButtonElement} */ (
	document.getElementById("privateUserBtn")
);

const organizationBtn = /** @type {HTMLButtonElement} */ (
	document.getElementById("organizationBtn")
);

const privateFields = /** @type {HTMLElement} */ (
	document.getElementById("privateFields")
);

const organizationFields = /** @type {HTMLElement} */ (
	document.getElementById("organizationFields")
);

const userTypeInput = /** @type {HTMLInputElement} */ (
	document.getElementById("userType")
);

if (
	!privateUserBtn ||
	!organizationBtn ||
	!privateFields ||
	!organizationFields ||
	!userTypeInput
) {
	throw new Error("Invalid HTML structure");
}

function showPrivateFields() {
	privateFields.style.display = "block";
	privateFields
		.querySelectorAll("*")
		.forEach((el) => el.setAttribute("required", ""));

	organizationFields.style.display = "none";
	organizationFields
		.querySelectorAll("*")
		.forEach((el) => el.removeAttribute("required"));

	userTypeInput.value = "private";

	privateUserBtn.classList.add("active");
	organizationBtn.classList.remove("active");
}

function showOrganizationFields() {
	privateFields.style.display = "none";
	privateFields
		.querySelectorAll("*")
		.forEach((el) => el.removeAttribute("required"));

	organizationFields.style.display = "block";
	organizationFields
		.querySelectorAll("*")
		.forEach((el) => el.setAttribute("required", ""));

	userTypeInput.value = "organization";

	privateUserBtn.classList.remove("active");
	organizationBtn.classList.add("active");
}

/**
 * @param {MouseEvent} event
 */
function handlePrivateUserClick(event) {
	showPrivateFields();
}

/**
 * @param {MouseEvent} event
 */
function handleOrganizationClick(event) {
	showOrganizationFields();
}

privateUserBtn.addEventListener("click", handlePrivateUserClick);
organizationBtn.addEventListener("click", handleOrganizationClick);

showPrivateFields();
