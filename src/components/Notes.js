const Notes = ({ notes, onRemove }) => (
    <ul className="list-group">
        {notes.map((note) => (
            <li 
                className="note list-group-item"
                key={note.id}
            >
                <div>
                    <strong>{note.title}</strong>
                    <small>{note.date}</small>
                </div>
                <button 
                    type="button" 
                    className="btn btn-danger btn-sm"
                    onClick={() => onRemove(note.id)}
                >&times;</button>
            </li>
        ))}
    </ul>
)

export default Notes;