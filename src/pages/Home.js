import { Fragment, useContext, useEffect } from "react";
import Form from "../components/Form";
import Loader from "../components/Loader";
import Notes from "../components/Notes";
import { FirebaseContext } from "../context/firebase/firebaseContext";

const HomePage = () => {
    const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <Fragment>
            <div className="container pt-5 pb-5">
                <Form />
                <hr />
                {loading ? (
                    <Loader />
                ) : (
                    <Notes notes={notes} onRemove={removeNote} />
                )}
            </div>
        </Fragment>
    )
}

export default HomePage;