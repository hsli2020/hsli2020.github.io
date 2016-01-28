function render(bookmarks, el)
{
  var html = '';

  var fullLink = function(bookmark) {
    return '<a href="' + bookmark.url + '">' + bookmark.url + '</a>&nbsp;&nbsp;' + bookmark.desc;
  };

  var shortLink = function(bookmark) {
    return '<a href="' + bookmark.url + '">' + bookmark.desc + '</a>';
  };

  var genLink = function(bookmark) {
    var c = bookmark.desc.charAt(0);
    if (c == ' ' || c == '#') {
      bookmark.desc = bookmark.desc.substring(1);
      return shortLink(bookmark);
    } else {
      return fullLink(bookmark);
    }
  };

  for (var i = 0; i < bookmarks.length; i++) {
    if (Array.isArray(bookmarks[i])) {
      html += genLink(bookmarks[i][0]);
      for (var j = 1; j < bookmarks[i].length; j++) {
        html += '&nbsp;|&nbsp;';
        html += shortLink(bookmarks[i][j]);
      }
      html += '<br>';
    } else {
      if (bookmarks[i].url.charAt(0) == '-') {
        html += '<br>';
      } else {
        html += genLink(bookmarks[i]);
        html += '<br>';
      }
    }
  }

  el.innerHTML = html;
}
