import {Link, useLoaderData} from 'react-router-dom';
import {useEffect, useState} from "react";
import EventsList from "../components/EventsList";

const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Some event',
  },
  {
    id: 'e2',
    title: 'Another event',
  },
];

function EventsPage() {
    // const [isLoading, setIsLoading] = useState(false);
    // const [fetchEvent, setFetchEvent] = useState(null);
    // const [error, setError] = useState(null);
    //
    // useEffect(() => {
    //     const fetchEvent = async () => {
    //         setIsLoading(true);
    //         const response = await fetch('http://localhost:8080/events');
    //
    //         if(!response.ok){
    //             setError('Server Error');
    //         }else{
    //             const restData = await response.json();
    //             setFetchEvent(restData.events);
    //         }
    //         setIsLoading(false);
    //     }
    //     fetchEvent();
    // }, []);
    const events = useLoaderData();
  return (
    <>
      <div style={{textAlign: 'center'}}>
          {/*{isLoading && <p>Loading...</p>}*/}
          {/*{error && <p>{error}</p>}*/}
          {/*{!isLoading && fetchEvent && <EventsList events={fetchEvent}/> };*/}
          <EventsList events={events}/>
      </div>
    </>
  );
}
export default EventsPage;

export async function loader(){
    const response = await fetch('http://localhost:8080/events');

    if(!response.ok){
       throw new Response(JSON.stringify({message: 'Could not fetch events.'}),{
           status: 500,
       });
    }else{
        const restData = await response.json();
        return restData.events;
    }
}
