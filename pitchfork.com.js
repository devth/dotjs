$(function() {
  // TODO - lookup album with XHR first http://developer.spotify.com/en/metadata-api/overview/
  //
  var $ri = $(".review-meta .info");
  if ($ri.length === 1) {
    // replace(/(\r\n|\n|\r)/gm," ").replace(/\s+/g, " ")
    var artist = $ri.find("h1:first").text().trim(),
        album = $ri.find("h2:first").text().trim(),
        search = "album:" + encodeURIComponent(album);
    if (search !== "") {
      $("body").prepend($("<div />")
        .html($("<div />")
          .html($("<a />")
            .attr("href", "spotify:search:'" + search + "'")
            .attr("style", "color: white;")
            .html("<b>" + album + "</b>" + " on Spotify"))
          .attr("style", "position: fixed; z-index: 2005999999; top: 0; right: 0; background: black; padding: 10px; color: white !important;")));
    } else {
      console.warn("Could not parse album", album, artist);
    }
  }
});
