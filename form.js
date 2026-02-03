document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = this.nombre.value;
  const correo = this.correo.value;
  const whatsapp = this.whatsapp.value;
  const direccion = this.direccion.value;
  const servicio = this.servicio.value;
  const mensaje = this.mensaje.value;

  const texto = `Hola, soy ${nombre}.%0A📧 Correo: ${correo}%0A📱 WhatsApp: ${whatsapp}%0A📍 Dirección: ${direccion}%0A🛠️ Servicio: ${servicio}%0A✉️ Mensaje: ${mensaje}`;

  // Reemplaza con el número del taller en formato internacional
  const telefono = "584120348988"; 
  window.open(`https://wa.me/${telefono}?text=${texto}`, "_blank");
});