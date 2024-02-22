
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function ModalView() {
    const [openModal, setOpenModal] = useState(true);

    return (
        <div className="items-center text-center mx-auto">

                <Modal.Header>UPCOMING CLASS</Modal.Header>
            <Modal.Body>
                <div className="column upcoming-classes-wrapper pb-3">
                    <div className="d-flex flex-row justify-content-center align-items-center mb-3 booking-title"><img
                        className="job-card-logo-container" alt="college's avatar"
                        src="https://platform-backend-files.s3-ap-southeast-2.amazonaws.com/institutions/614a8db652d9c2e7b954eaa3/logo_2023_12_14_11:11:30"/>
                        <div><h3 className="pl-1">ReadyTeacherTest</h3><a target="blank"
                                                                          href="/NavigateToCollegeSharedProfile?id=614a8db652d9c2e7b954eaa3"><span
                            className="job-card-tag"><i aria-hidden="true" className="share large icon"></i>View Profile</span></a>
                        </div>
                    </div>
                    <div className="booking-details">
                        <p className="text-left card-content-classes">Booking for <strong>
                            <time dateTime="1708547400000">February 22, 2024</time>
                        </strong> to <strong>
                            <time dateTime="1708633800000">February 23, 2024</time>
                        </strong></p>
                        <p className="text-left card-content"><i aria-hidden="true" className="clock icon"></i>Arrive
                            at <strong>1:30 PM</strong> for <strong>1:30 PM</strong> start, ends <strong>3:30
                                PM</strong></p><p className="text-left card-content"><i aria-hidden="true"
                                                                                        className="map marker alternate icon"></i>ahihi
                        1, ahihi 2, melbourne, VIC</p><p className="text-left card-content"><span
                        className="job-list-label">Job</span>Beginner/Starter</p><p className="text-left card-content">
                        <span className="job-list-label">Mode</span>On Campus</p>
                        <div className="card-link-bottom text-center"><a className="card-content"
                                                                         href="/TeacherJobList#65d5aeaeee62355b42738ebc"><strong>View
                            Job Details &gt;&gt;</strong></a></div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button color="green" onClick={() => setOpenModal(false)}>I accept</Button>
                <Button color="red" onClick={() => setOpenModal(false)}>
                    Decline
                </Button>
            </Modal.Footer>
        </div>
    );
}