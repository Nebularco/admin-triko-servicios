import "../../../styles/downloadButton/download.css";

interface Props {
    text: string
}

const DownloadButton = (props: Props) => {
    return (
        <button>
            {props.text}
        </button>
    )
}

export default DownloadButton;