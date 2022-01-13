var client = new WebTorrent()

// Sintel, a free, Creative Commons movie
var torrentId = 'magnet:?xt=urn:btih:1D53B654FA5031AECC5AC6DAB1F00F773E69B176&dn=Boogie%20Nights%20%281997%29%20%5bBluRay%5d%20%5b1080p%5d%20%5bYTS.AM%5d'

client.add(torrentId, function (torrent) {
  // Torrents can contain many files. Let's use the .mp4 file
  var file = torrent.files.find(function (file) {
    return file.name.endsWith('.mp4')
  })

  // Display the file by adding it to the DOM.
  // Supports video, audio, image files, and more!
  file.appendTo('body')
})