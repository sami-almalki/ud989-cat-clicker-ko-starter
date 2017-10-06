var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.level = ko.computed(function() {
    if (this.clickCount() < 10) {
      return 'Newborn';
    } else if (this.clickCount() >= 10 && this.clickCount() < 110) {
      return 'Infant';
    } else if (this.clickCount() >= 110) {
      return 'teen';
    }
  }, this);
}

ko.applyBindings(new ViewModel);
