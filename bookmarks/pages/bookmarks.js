function render(bookmarks, el)
{
  var html = '';

  var fullLink = function(bookmark) {
    return '<a href="' + bookmark.url + '">' + bookmark.url + '</a>&nbsp;&nbsp;' + bookmark.desc;
  };

  var shortLink = function(bookmark) {
    return '<a href="' + bookmark.url + '">' + bookmark.desc + '</a>';
  };

  var subtitle = function(str) {
    str = str.substring(1);
    return '<h3>' + str + '</h3>';
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
      if (bookmarks[i].length > 0) {
        html += genLink(bookmarks[i][0]);
        for (var j = 1; j < bookmarks[i].length; j++) {
          html += '&nbsp;|&nbsp;';
          html += shortLink(bookmarks[i][j]);
        }
        html += '<br>';
      }
    } else if (typeof bookmarks[i] === 'string') {
      var text = bookmarks[i];
      if (text.charAt(0) == '=') {
        html += subtitle(text);
      } else if (text.charAt(0) == '-') {
        html += '<br>';
      }
    } else {
      html += genLink(bookmarks[i]);
      html += '<br>';
    }
  }

  el.innerHTML = html;
}
