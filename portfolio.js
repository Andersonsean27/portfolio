'use strict';
function Experience (type, dates, description, value) {
  this.type = type;
  this.dates = dates;
  this.description = description;
  this.value = value;
}
Section.prototype.toHtml = function () {
  var $newSection = $('section.template').clone();

  $newSection.find('h1').text(this.type);
  $newSection.find('.dates').text(this.dates);
  $newSection.find('description').html(this.description);
  $newSection.find('.value').text(this.value);
  return $newSection;
};
