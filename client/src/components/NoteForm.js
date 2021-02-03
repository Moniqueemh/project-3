import { useState, useEffect } from 'react';
import axios from 'axios';
let mounted = false;
const NoteForm = (props) => {
    // const { didSubmit } = props;
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [students, setStudent] = useState([]); /// get students state
    const [studentId, setStudentId] = useState([]); /// get students state

    const handleSubmit = event => {
        event.preventDefault();
        submitNote().then(() => {
            window.location.reload();

        });


    };
    const submitNote = async () => {
        await axios.post('/api/notes', { title: title, body: body, StudentId: studentId, TeacherId: props.teacherId });
        setBody('');
        setTitle('');
        // didSubmit();
    };

    const fetchStudent = async () => {
        await axios.get('/api/student').then((res) => {
            setStudent(res.data);
        });
    };
    mounted = true;
    useEffect(() => {
        fetchStudent();
    }, [mounted]);
    return (
        <div>
            <h2>Note Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    name='title'
                    placeholder='title'
                    type='text'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <br />
                <label htmlFor="body">Body:</label>
                <textarea
                    name='body'
                    placeholder='body'
                    value={body}
                    onChange={event => setBody(event.target.value)}
                />
                <br />
                <select value={studentId} onChange={event => setStudentId(event.target.value)} name="studentId" id="student">
                    <option>... اختر </option>

                    {
                        students.map(student => {
                            //    return <div key={element.id}>
                            //         <label></label>
                            //         <h1></h1>
                            //     </div>
                            return <option key={student.id} value={student.id}>{student.name}</option>;
                        })
                    }

                </select>

                <button type='submit'>Save Note</button>
            </form>
        </div>
    );
};

export default NoteForm;