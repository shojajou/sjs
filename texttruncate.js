function truncateText(elements, toLines) {
    for (element of elements) {
        var strLen = element.innerText.length;

        var totalLines = Math.round(element.scrollHeight / parseInt($(element).css("line-height")));
        var charsPerLineAvg = Math.round(element.innerText.length / totalLines);

        var lines = Math.round(element.getClientRects()[0]["height"] / parseInt($(element).css("line-height")));
        var charsCountToShow = Math.round(lines * charsPerLineAvg);

        for (var i = charsCountToShow; i > 0; i--) {
            if (element.innerText[i] == ' ') {
                charsCountToShow = i
                break;
            }
        }

        element.innerText = element.innerText.substr(0, charsCountToShow);

        element.innerText = element.innerText + '...'

        var moreLinkEle = document.createElement("a");
        moreLinkEle.href = element.getAttribute("data-more-link-path");
        moreLinkEle.innerText = element.getAttribute("data-more-link-text")

        element.append(moreLinkEle);
    };
}