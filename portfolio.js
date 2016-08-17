'use strict';
var qualities = [];

function Experience (opts) {
  this.type = opts.type;
  this.dates = opts.dates;
  this.description = opts.description;
  this.value = opts.value;
}
Experience.prototype.toHtml = function () {
  var $newSection = $('section.template').clone();

  $newSection.find('h1').text(this.type);
  $newSection.find('.dates').text(this.dates);
  $newSection.find('.description').text(this.description);
  $newSection.find('.value').text(this.value);
  $newSection.removeClass();
  return $newSection;
};
experience.forEach(function(currentExperience) {
  qualities.push(new Experience (currentExperience));
});
qualities.forEach(function(currentQuality) {
  $('body').append(currentQuality.toHtml());
});
