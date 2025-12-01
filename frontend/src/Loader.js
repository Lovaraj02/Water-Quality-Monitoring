import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader-screen">
      <TailSpin
        height={60}
        width={60}
        color="#000"
        secondaryColor="#ccc"
        strokeWidth={4}
        visible={true}
        ariaLabel="oval-loading"
      />

      <p>Loading, please wait...</p>
    </div>
  );
}
