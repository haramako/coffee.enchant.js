;(function(){
  // convert class to coffee-script compatible
  function enchantToCoffeeClass(cls) {
    cls.prototype.constructor = cls.prototype.initialize;
    cls.__super__ = cls.prototype;
    return cls;
  }

  // switch enchant.Classs.create() function
  var oldEnchantClassCreate = enchant.Class.create;
  enchant.Class.create = function() {
    return enchantToCoffeeClass(oldEnchantClassCreate.apply(enchant.Class, arguments));
  };

  // convert enchant.js classes
  var classes = [ enchant.Class, enchant.Entity, enchant.Event, enchant.EventTarget, enchant.Game, enchant.Group,
                  enchant.Label, enchant.Map, enchant.Node, enchant.Scene, enchant.Sound, enchant.Sprite, enchant.Surface];
  for( var i = 0; i < classes.length; i++ ) enchantToCoffeeClass(classes[i]);

})();
