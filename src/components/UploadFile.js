import React, { useState } from 'react';


export const UploadFile = () => {
    const [file, setFile] = useState();
    const [error, setError] = useState();

    const types = ['image/png', 'image.jpeg']

    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setError('');
            setFile(selected);
        } else {
            setFile(null);
            setError('Please select an image file')
        }
    };

    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
}