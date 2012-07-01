coffee.enchant.js
=================

[enchant.js](http://enchantjs.com/) のクラスをcoffee-script互換に変更するプラグインです。


使いかた
--------

enchant.js の**直後**に coffee.enchant.js をロードしてください。

その後、coffee-scriptのクラスでenchant.jsのクラスを継承することができます

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

どうやっているの
----------------

coffee-script のクラスコンストラクタは内部で、 `prototype.constructor` , `__super__` プロパティを持っています。

`enchant.Class.create`にモンキーパッチを当てることで、これらのプロパティを追加しています。
また、同時に既存のenchant.jsのクラスにもプロパティを追加しています。

ライセンス
----------

MITライセンス、もしくは、 GPLv3ライセンスで利用できます。

