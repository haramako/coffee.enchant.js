#
# Class-base example of enchant.js by coffee-script
#
# this program is same as enchant.js sample: https://github.com/wise9/enchant.js/blob/master/examples/beginner/hellobear/main.js
#

enchant()

game = undefined

class MyScene extends Scene
    constructor: ->
        super
        @backgroundColor = '#ddd'
        @kuma = new Kuma()
        @addChild @kuma


class Kuma extends Sprite
    constructor: ->
        super 20, 30
        @image = game.assets['bear.gif']
        @x = 0
        @y = 0

    onenterframe: ->
        @x += 1
        @frame = @age % 2 + 6

window.onload = ->
    game = new Game(320,320)
    game.fps = 15
    game.preload( 'bear.gif' )
    game.onload = ->
        scene = new MyScene()
        game.pushScene scene
    game.start()

