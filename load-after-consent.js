document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll('[stu03-csl-element="consent-container"]');
	if (consentLoaders.length > 0) {
		consentLoaders.forEach((consentLoader) => {
			const contentType = consentLoader.getAttribute("stu03-csl-type");
			const content = document.querySelector(
				'[stu03-csl-element="consent-content"]'
			);
			if (!content) {
				return;
			}
			const notice = document.querySelector(
				'[stu03-csl-element="consent-notice"]'
			);
			if (!notice) {
				return;
			}
			const consentButton = document.querySelector(
				'[stu03-csl-element="consent-button"]'
			);
			if (!consentButton) {
				return;
			}

			consentButton.addEventListener("click", () => {
				notice.style.display = "none";
				content.style.display = "block";
				if (contentType === "iframe") {
					const contentSource = consentLoader.getAttribute("stu03-csl-source");
					const contentWidth =
						consentLoader.getAttribute("stu03-csl-width") || "100%";
					const contentHeight =
						consentLoader.getAttribute("stu03-csl-height") || "100%";
					const iframe = document.createElement("iframe");

					iframe.src = contentSource;
					iframe.width = contentWidth;
					iframe.height = contentHeight;
					iframe.style.border = 0;
					container.appendChild(iframe);
				}
			});
		});
	}
});
