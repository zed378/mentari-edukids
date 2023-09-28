export default function maps(req, res) {
  res.send(
    ` <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.728612102124!2d112.69677148507947!3d-7.271691852705866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fdcbb3ba1bcd%3A0xfa89021604c23b3e!2sMasjid%20An-Nur!5e0!3m2!1sen!2sid!4v1695899194779!5m2!1sen!2sid"
      width="600"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>`
  );
}
