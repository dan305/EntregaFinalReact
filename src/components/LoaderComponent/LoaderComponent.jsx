import { tailspin } from 'ldrs'
export const LoaderComponent = () => {
  tailspin.register()
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
      }}
    >
  <l-tailspin
  size="40"
  stroke="5"
  speed="0.9" 
  color="black" 
    ></l-tailspin>
    </div>
  );
};

