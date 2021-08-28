import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Notes = ({ notes, onRemove }) => (
    <TransitionGroup component="ul" className="list-group">
        {notes.map((note) => (
            <CSSTransition 
                key={note.id}
                timeout={800}
                classNames={'note'}
            >
                <li className="note list-group-item">
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
            </CSSTransition>
        ))}
    </TransitionGroup>
)

export default Notes;