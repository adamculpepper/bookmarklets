function uppercaseFirstCharacter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy"); // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

var scrapName = $('[itemprop="name"]').eq(0).text().trim();
var scrapLocationCity = $('[itemprop="locality"]').eq(0).text().trim();
var scrapLocationState = $('[itemprop="state-name"]').eq(0).text().trim();
var scrapHourlyRate = $('[itemprop="pricerange"]').eq(0).text().trim();
var scrapCoverLetter = $('[data-ng-if="application.coverLetter"]').eq(0).text().trim();
var scrapScreeningQuestion1 = $('[data-ng-if="application.screeningQuestions"]').eq(0).find('p').eq(1).text().trim();
var scrapScreeningQuestion2 = $('[data-ng-if="application.screeningQuestions"]').eq(1).find('p').eq(1).text().trim();
var scrapScreeningQuestion3 = $('[data-ng-if="application.screeningQuestions"]').eq(2).find('p').eq(1).text().trim();
var scrapApplicationLink = window.location.href;
var scrappedContent = scrapName + '	' + uppercaseFirstCharacter(scrapLocationCity) + ', ' + scrapLocationState + '	' + scrapHourlyRate + '	' + scrapCoverLetter + '	' + scrapScreeningQuestion1 + '	' + scrapScreeningQuestion2 + '	' + scrapScreeningQuestion3 + '	' + scrapApplicationLink;

console.warn(scrappedContent);
copyToClipboard(scrappedContent);
