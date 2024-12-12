import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './details.css';
import { data } from '../../Components/packages/data';
import { PageWrapper } from '../../Components';
import Cloader from '../../Components/Loader/Cloader';

function Details() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the program dynamically based on the id
    const program = data.find(item => item.id === parseInt(id));

    // If no matching program is found, show a loader or a fallback UI
    if (!program) return <div><Cloader /></div>;

    return (
        <>
            {/* Page Wrapper Component */}
            <PageWrapper
                title={program.name}
                moveTo="Hajj Packages"
                subtitle="Details"
                navigatePath="/hajj"
            />

            {/* Main Container */}
            <div className="details-container section-padding">
                <div className='container'>

                    <div className="row align-items-center">
                        {/* Image Section */}
                        <div className="col-md-6 mb-4">
                            <img
                                src={require(`../../Assets/${program.package}`)}
                                alt={program.name}
                                className="img-fluid rounded shadow-lg border border-primary"
                            />
                        </div>

                        {/* Details Section */}
                        <div className="col-md-6">
                            <h2 className="mb-3 program-title">{program.name}</h2>
                            <p className="text-muted">{program.description}</p>

                            {/* Dynamic Details */}
                            <h4 className="mt-4 mb-3 text-secondary">Package Details:</h4>
                            <ul className="list-unstyled">
                                <li><strong>Days:</strong> {program.days}</li>
                                <li><strong>Maktab:</strong> {program.maktab}</li>
                                <li><strong>Airline:</strong> {program.airline}</li>
                                <li><strong>Sharing Price:</strong> {program.sharing_price}</li>
                                <li><strong>Triple Bed Price:</strong> {program.triple_bed_price}</li>
                                <li><strong>Double Bed Price:</strong> {program.double_bed_price}</li>
                                <li><strong>Payment Schedule:</strong> {program.payment_schedule}</li>
                                <li><strong>Food Included:</strong> {program.food_included}</li>
                            </ul>

                            {/* Features Section */}
                            {program.features?.length > 0 && (
                                <>
                                    <h4 className="mt-4 text-secondary">Features:</h4>
                                    <ul className="list-unstyled feature-list">
                                        {program.features.map((feature, index) => (
                                            <li key={index} className="mb-3 d-flex align-items-start">
                                                <i className="bi bi-check-circle-fill text-success me-2"></i>
                                                <span className="text-dark">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {/* Notes Section */}
                            {program.note?.length > 0 && (
                                <>
                                    <h4 className="mt-4 text-secondary">Important Notes:</h4>
                                    <ul className="list-unstyled note-list">
                                        {program.note.map((note, index) => (
                                            <li key={index} className="mb-2 d-flex align-items-start">
                                                <i className="bi bi-info-circle-fill text-warning me-2"></i>
                                                <span>{note}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Modules Section (if present) */}
                    {program.modules && (
                        <div className="row mt-5">
                            <h3 className="mb-4 module-title">Modules</h3>
                            {program.modules.map((module, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <div className="card module-card border-0 shadow-sm h-100">
                                        <div className="card-body">
                                            <h5 className="card-title text-primary">{module.name}</h5>
                                            <p className="card-text">
                                                <strong>Duration:</strong> {module.duration}
                                            </p>
                                            <p className="card-text text-muted">{module.description}</p>
                                            <ul className="list-unstyled mt-3">
                                                {module.topics.map((topic, i) => (
                                                    <li key={i} className="mb-2 d-flex align-items-start">
                                                        <i className="bi bi-arrow-right-circle-fill text-info me-2"></i>
                                                        <span>{topic}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </>
    );
}

export default Details;
