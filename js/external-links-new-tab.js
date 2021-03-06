// Reference: http://fraktar.com/markdown-redcarpet-target-blank/

function externalLinksToNewTabs () {
  // Don't open our own site's links in new tabs
  var host = location.hostname
  // Grab and loop over all <a> elements
  var allLinks = document.querySelectorAll('a')
  for (var i = 0; i < allLinks.length; ++i) {
    // if links are external and not empty
    if (allLinks[i].hostname !== host && allLinks[i].hostname !== '') {
      allLinks[i].target = '_blank'
    }
  }
}


window.onload = function() {
  externalLinksToNewTabs();
};
