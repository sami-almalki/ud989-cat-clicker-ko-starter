var initialCats = [
  {
    'clickCount': 0,
    'name': 'Catty',
    'imgSrc': 'img/22252709_010df3379e_z.jpg',
    'nickName': [ {name: 'catty'}, {name: 'cute cat'}]
  },
  {
    'clickCount': 0,
    'name': 'Kitty',
    'imgSrc': 'img/434164568_fea0ad4013_z.jpg',
    'nickName': [ {name: 'kitty'}, {name: 'cute kitty'}]
  },
  {
    'clickCount': 0,
    'name': 'Kitten',
    'imgSrc': 'img/1413379559_412a540d29_z.jpg',
    'nickName': [ {name: 'kitten'}, {name: 'cute kitten'}]
  },
  {
    'clickCount': 0,
    'name': 'Cutie',
    'imgSrc': 'img/4154543904_6e2428c421_z.jpg',
    'nickName': [ {name: 'cutie'}, {name: 'cute cutie'}]
  }
]

var Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nickName = ko.observableArray(data.nickName);

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

var ViewModel = function() {
  self = this;

  this.catList = ko.observableArray([]);
  initialCats.forEach(function (catItem) {
    self.catList.push( new Cat(catItem) );
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat);
  };
}

ko.applyBindings(new ViewModel);
