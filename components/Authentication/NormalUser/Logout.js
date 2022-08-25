import React, { useState, memo } from "react";
import { Modal,  Button, Text } from "@nextui-org/react";

export default function Logout({ isOpen, onAction }) {
    const [visible, setVisible] = useState(isOpen);

    console.log(isOpen, "inside logout");


    const closeHandler = () => {
        setVisible(false);
        onAction('')
        console.log("closed");
    };
    return (
        <div>

            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <Text b id="modal-title" size={18}>
                        Are you want to Logout ?
                    </Text>
                </Modal.Header>
                <Modal.Body>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                        No
                    </Button>
                    <Button auto color={'secondary'} onClick={closeHandler}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
