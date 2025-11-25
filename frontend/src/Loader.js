export default function Loader() {
  const images = [
    "/loader.png",
    "/l2.png",
    "/l3.png",
    "/l4.png"
  ];

  return (
    <div className="loader-screen">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Loading ${i}`}
          className="loader-img"
        />
      ))}

      <p>Loading, please wait...</p>
    </div>
  );
}
