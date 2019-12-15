//Spiel konfigurieren
var config = {
  //Technischer Typ AUTO = Wählt Automatisch, WEBGL = Nutzt WebGL, CANVAS = Nutzt ein Canvas
  type: Phaser.AUTO,
  //Breite des Spiels
  width: 800,
  //Höhe des Spiels
  height: 600,
  //Physic zum spiel hinzufügen
  physics: {
    //Typ der Physic
    default: "arcade", 
    //Eigenschaften der Phsic
    arcade: {
      //Schwerkraft im spiel, wohin Fallen Objekte
      gravity: {
        y: 200 //Y Sagt das objekte mit 200 nach "unten" fallen
      },
      debug: false //Wenn debug: true dann wird ein Kasten und die Schwerkraft mit einem grünen strich angezeigt
    }
  },
  //Definiert die Szene die wir sehen
  scene: {
    //Welche Funktion wird zum Laden verwendet
    preload: preload,
    //Welche Funktion wird zum erstellen verwendet
    create: create,
    //Welche Funktion wird zum regelmäßigen Update verwendet == GameLoop
    update: update
  }
};

//neues Spiel erzeugen
var game = new Phaser.Game(config);

//Lädt zu anfang des Spiels
function preload() {
  this.load.image("yoda", "yoda.png"); //Bild Laden und bennenen
}

//Beim erstellen des Spiels
function create() {
  //Bestimmt die Größe der Welt, also die Ränder an denen gestoppt werden soll
  this.physics.world.setBounds(0, 0, 800, 600);
  //Fügt ein neues Bild mit Physikalischen Eigenschaften hinzu und speichert es in der variable img
  let img = this.physics.add.image(400, 300, "yoda");
  //Aktiviert die Kollision, d.h. man sagt dem Bild das es an den Rändern der Welt stoppen soll
  img.setCollideWorldBounds(true);
}

//Widerholt aufgerufen -> Spielschleife / Spiellogik
function update() {}
