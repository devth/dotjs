$(function() {
  var $ri = $(".review-info");
  if ($ri.length === 1) {
    var search = $("h1, h2", $ri).text().replace(/(\r\n|\n|\r)/gm,"").replace(/\s+/g, " ").trim();
    if (search !== "" && search !== []) {
      $("body").prepend($("<div />")
        .html($("<div />")
          .html($("<a />")
            .attr("href", "spotify:search:'" + search + "'")
            .attr("style", "color: white;")
            .html("<b>" + search + "</b>" + " on Spotify"))
          .attr("style", "position: fixed; z-index: 2005999999; top: 0; right: 0; background: black; padding: 10px; color: white !important;")));
    }
  }
});
