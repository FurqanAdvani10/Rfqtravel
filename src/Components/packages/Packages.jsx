import { useNavigate } from 'react-router-dom'
import { data } from './data'
import './packages.css'
import { FaRegStar } from 'react-icons/fa6'

const Packages = () => {

    const navigate = useNavigate()

    return (
        <div className='courses-card-container section-padding'>
            <div className='container'>
            <div className='row'>
                    <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-12'>
                            <div className="hajj-packages heading-with-sub">
                                <h6 className="p-0 m-0">PACKAGES</h6>
                                <h3 className="p-0 m-0">Previous Hajj Packages 2024</h3>
                            </div>
                    </div>
                </div>
                <div className='row g-4 justify-content-center row-cols-xl-3 row-cols-md-2 row-cols-1'>
                    {data.slice(0, 3).map((program, index) => (
                        <div className='col' key={index}>
                            <div className='course-card' onClick={() => navigate('/hajj') }>
                                <div className='course-card-body'>
                                    <div className='course-card-img'>
                                        <img
                                            src={require(`../../Assets/${program?.image}`)}
                                            alt={program.name}
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className='course-content'>
                                        <div class="course-reiew">
                                            <div className='ratting'>
                                                <span>
                                                    <i className="icofont-ui-rating">
                                                    <FaRegStar />
                                                    </i>
                                                    <i className="icofont-ui-rating">
                                                    <FaRegStar />
                                                    </i>
                                                    <i className="icofont-ui-rating">
                                                    <FaRegStar />
                                                    </i>
                                                    <i className="icofont-ui-rating">
                                                    <FaRegStar />
                                                    </i>
                                                    <i className="icofont-ui-rating">
                                                    <FaRegStar />
                                                    </i>
                                                </span>
                                            </div>
                                            <div className='ratting-count'>
                                                <h6 className='p-0 m-0'> 03 reviews</h6>
                                            </div>
                                        </div>
                                        <div className='course-card-title'>
                                            <h3 className='m-0 p-0'>{program.name}</h3>
                                            <p className='m-0 p-0'>{program.description}</p>
                                           
                                        </div>
                                        <div className='card-price'>
                                        <h4 className='p-0 m-0'>{program?.sharing_price}</h4>
                                        </div>
                                        <div class="course-footer">
                                            <div class="course-btn">
                                                <a class="lab-btn-text" onClick={() => navigate(`/details/${program?.id}`)}>View More <i class="icofont-external-link"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Packages
