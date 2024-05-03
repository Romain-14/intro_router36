import { useParams } from "react-router-dom";

function Story() {
	const params = useParams();
	console.log(params);

	return (
        <h2>Story n°{params.id}</h2>
    );
}

export default Story;
