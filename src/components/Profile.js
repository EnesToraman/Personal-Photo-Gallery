import React, { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { UploadFile } from "./UploadFile"
import { ImageArea } from "./ImageArea"
import { Button, Col, Row } from "react-bootstrap"

export const Profile = () => {
    const [error, setError] = useState("")
    const { logOut } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logOut()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
            <Row className="justify-content-between mt-4">
                <Col xs={3}>
                    <h3>MyGallery</h3>
                </Col>
                <Col xs={2} className="log-out-button">
                    <Button onClick={handleLogout}>Log out</Button>
                </Col>
            </Row>
            <Row className="text-center mt-4">
                <Col xs={12}>
                    <h2>Your Profile</h2>
                </Col>
            </Row>
            <Row className="text-center mt-2">
                <Col xs={12}>
                    <div>This is your private gallery, feel free to upload any picture you want.</div>
                </Col>
            </Row>
            {error && <div> {error} </div>}
            <UploadFile />
            <ImageArea />
        </>
    );
}