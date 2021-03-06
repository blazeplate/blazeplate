import * as React from "react";
import { Datatype, Attribute } from "@codotype/core";
import { Modal } from "react-bootstrap";

// // // //

export interface AttributeInput extends Attribute {
    datatype: Datatype | null;
}

/**
 * AttributeFormModal
 * @param props.show
 * @param props.children
 * @param props.onCancel
 */
export function AttributeFormModal(props: {
    show: boolean;
    disableSubmit: boolean;
    attributeInput: AttributeInput;
    children: React.ReactNode;
    errors: string[];
    onCancel: () => void;
    onSubmit: () => void;
}) {
    // Defines title based on props.isNew
    let title = "Update Attribute";
    if (props.attributeInput.id === "") {
        title = "Create Attribute";
    }

    return (
        <Modal size="lg" show={props.show} onHide={props.onCancel}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.children}</Modal.Body>
            <Modal.Footer>
                <div className="d-flex align-items-center justify-content-between flex-grow-1">
                    <div className="d-flex flex-grow-1">
                        <p className="mb-0 text-warning">{props.errors[0]}</p>
                    </div>
                    <div className="d-flex">
                        <button
                            className="btn btn-primary"
                            disabled={props.disableSubmit}
                            onClick={props.onSubmit}
                        >
                            {title}
                        </button>
                        <button
                            className="btn btn-light ml-2"
                            onClick={props.onCancel}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    );
}
