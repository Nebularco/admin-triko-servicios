import LinearProgress from "@mui/material/LinearProgress/LinearProgress";
import LogoTriko from "./assets/app-logo.png";

interface Props {}

const Loading = (props: Props) => {
  return (
    <>
      <div className="ipl-progress-indicator" id="ipl-progress-indicator">
        <LinearProgress color="secondary" />
        <div className="insp-logo-frame">
          <img
            src={LogoTriko}
            alt="Logo"
            className="insp-logo-frame-img"
            height={112}
            width={112}
          />
        </div>
      </div>
    </>
  );
};

export default Loading;
