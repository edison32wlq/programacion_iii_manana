const productos = ['💻 Laptop', '📱 Smartphone', '🎧 Audífonos', '⌚ Smartwatch'];

export default function EmojiList() {
  return (
    <ul>
      {productos.map((producto, index) => (
        <li key={index}>{producto}</li>
      ))}
    </ul>
  );
}