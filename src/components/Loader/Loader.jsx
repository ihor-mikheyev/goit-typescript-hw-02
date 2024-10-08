import { Vortex } from "react-loader-spinner";
import "./Loader.module.css"

export default function Loader() {
    return (
     <div>
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
            />
            <b>We are loading great images</b>
     </div>
  );
}
