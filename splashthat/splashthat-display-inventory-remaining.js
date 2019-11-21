var currency = splash.server.constants.currency;
var tickets = splash.server._event.tickets;
//var title = $('.Event.Title .title').text().trim();
var title = splash.server._event.title;
var arrayLength = tickets.length;
var content = '<h3 style="border-bottom:1px solid #333; margin-bottom:10px;">' + title + '</h3>';
var contentClipboard = title + '\t';
contentClipboard += tickets.length + '\t';
contentClipboard += currency.code + '\t';
//contentClipboard += currency.name + '\t';
//contentClipboard += currency.symbol + '\t';
//contentClipboard += currency.exchangeRate + '\t';

if (tickets.length > 0) {
    for (var i = 0; i < arrayLength; i++) {
        if (tickets[i].quantitySold == tickets[i].quantity) {
            content += '<div style="opacity:0.5">';
        } else {
            content += '<div>';
        }
        content += tickets[i].quantitySold + ' / ' + tickets[i].quantity + ' sold';
        content += ' | ';
        content += '<strong>' + tickets[i].ticketName + '</strong>';
        content += '</div>';

        contentClipboard += tickets[i].ticketName + '\t';
        contentClipboard += tickets[i].price + '\t';
        contentClipboard += tickets[i].quantitySold + '\t';
        contentClipboard += tickets[i].quantity + '\t';
        //contentClipboard += '\t'; //profit
    }
} else {
    content += "\tError!";
    contentClipboard += '\tError!';
}
var output = '<div style="position:fixed; z-index:99999; bottom:10px; left:10px; padding:10px; color:#555; background:rgba(0, 0, 0, 0.9); border:5px solid #000; border-radius:5px; box-shadow:0 0 20px 10px rgba(255, 255, 255, 0.2)">' + content + '</div>'
$("body").append(output);

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
copyToClipboard(contentClipboard);
