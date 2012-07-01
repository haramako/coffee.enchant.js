coffee.enchant.js
=================

A plug-in for [enchant.js](http://enchantjs.com/) providing coffee-script compatible classes.


How To Use
----------

Load coffee.enchant.js **just** after enchant.js.

Then you can inherite enchant.js classes in coffee-script class.

<pre>
enchant()

class MySprite extends Sprite
	constructor: ->
		super( 30, 30 )
		@image = game.assets["bear.gif"]
	onenterframe: ->
		@x += 1
</pre>

See sample code.

How It Work
-----------

coffee-script class constructor has property `prototype.constructor` and `__super__`.

coffee.enchant.js add a monkey patch to `enchant.Class.create` made these propertyies. 
And add properties to enchant.js classes already existing.


License
-------

Dual licensed under the MIT or GPL Version 3 licenses.
