export default function tesla(req, res) {
  res
    .status(200)
    .redirect(
      "https://wa.me/6283832736223?text=Hi%2C%20saya%20tertarik%20dengan%20program%20'Tesla%20Kids'%20dari%20bimbel%20Anda.%20Bisa%20diskusi%20lebih%20lanjut%3F"
    );
}
