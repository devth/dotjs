$(function() {
  // Hide annoying dictionary icon that appears when selecting text
  $('head')
    .append($("<style type='text/css' />")
    .html("#nytd_selection_button_wordReference { display: none !important; }"));
});
