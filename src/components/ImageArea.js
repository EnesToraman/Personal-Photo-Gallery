import React from 'react';
import { useFirestore } from '../hooks/useFirestore';
import { Row, Col } from 'react-bootstrap';

export const ImageArea = () => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className="img-grid">
            <Row>
                {docs && docs.map(doc => (
                    <Col xs={4} className="img-wrap">
                        <img className="image-area-img" key={doc.id} src={doc.url} alt="uploaded pic" />
                    </Col>
                ))}
            </Row>
        </div>
    )
}
