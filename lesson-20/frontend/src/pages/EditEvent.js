import EventForm from "../components/EventForm";
import {useRouteLoaderData} from "react-router-dom";

function EditEventPage() {
  const eventData = useRouteLoaderData('event-detail').event;

  return <EventForm event={eventData}/>;
}

export default EditEventPage;
