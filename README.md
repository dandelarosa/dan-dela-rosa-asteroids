# Customizable Asteroids

This is an Asteroids clone that can be whitelabeled for your own purposes.

# How to Customize the Game

The game takes in a file in the config folder named config.json - this can be created by duplicating config.example.json located in the same directory. The config file is a JSON object with two high-level keys: audio and images.

Custom assets are referenced by URL. As a best practice, put all of your assets in a folder called assets_xxx (xxx being the name of your mod) so that Git excludes them from source control.

# Using Custom Audio

The following sounds can be customized:
- `bullet`: The sound that plays when a bullet is fired from player's ship or UFO.
- `explosion`: The sound that plays when an object is destroyed.
- `death`: An additional sound that plays when the player's ship is destroyed.
- `kill`: An additional sound that plays when the player destroys an asteroid.
- `ufoDeath`: An additional sound that plays when the player destroys a UFO.
- `reward`: The sound that plays when the player gets an extra life.
- `gameOver`: The sound that plays on the game over screen.
- `replay`: An additional sound that plays when player restarts the game after a game over.
- `aggressiveUfo`: The music (or repeating sound) that plays when an aggressive UFO appears.
- `passiveUfo`: The music (or repeating sound) that plays when a passive UFO appears.

Various audio classes have been implemented:
- `SingleAudio`: A single instance of a sound.
  - `src`: The URL of the sound.
- `MultiAudio`: An object that allows a sound to be played multiple times at once.
  - `src`: The URL of the sound.
  - `numElements`: The number of instances of the sound that can be played at once.
- `ComboAudio`: An object that allows two different sounds to be played at the same time.
  - `srcs`: An array of the URLs of the sound files.
- `RouletteAudio`: An object that plays a random sound from a collection.
  - `srcs`: An array of the URLs of the sound files.

# Using Custom Images

The following images can be customized:
- `player`: The image of the player's ship.
- `bigAsteroid`: The image of a big asteroid.
- `mediumAsteroid`: The image of a medium asteroid.
- `smallAsteroid`: The image of a small asteroid.
- `aggressiveUfo`: The image of an aggressive UFO.
- `passiveUfo`: The image of a passive UFO.
- `gameOver`: The image that appears on the game over screen.

Various audio classes have been implemented:
- `SingleImageContainer`: A single instance of an image.
  - `src`: The URL of the image.
  - `offsetX`: The x-coordinate from which to draw the image.
  - `offsetY`: The y-coordinate from which to draw the image.
  - `width`: The width of the drawing area.
  - `height`: The height of the drawing area.
- `RouletteImageContainer`: An object that selects a random image from a collection.
  - `configs`: An array of configation objects for the images. They're structured the same way as the SingleImageContainer config objects, except the class name isn't necessary.

# Running Locally

On Google Chrome, some browser features won't work if you view index.html using the file:// protocol. The game needs to be accessed from a web server instead.

To run as a web server:
- Open a Terminal window
- Run the command: `python -m SimpleHTTPServer 8000`
- Open http://localhost:8000/ in your browser
