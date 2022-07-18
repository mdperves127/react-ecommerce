import { Link } from 'react-router-dom';
import './Collection.css';
import collection1 from '../../../assets/collection/collection1.png';
import collection2 from '../../../assets/collection/collection2.png';
import collection3 from '../../../assets/collection/collection3.png';
import collection4 from '../../../assets/collection/collection4.png';
import collection5 from '../../../assets/collection/collection5.png';




const Collection  = () => {
    return(
        <div id="collections">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="collection">
                            <img className="img" src={collection1} alt={collection1} />
                            <div className="collection_detail">
                                <h4 className="collection_one">Outwear</h4>
                                <h2>New</h2>
                                <h4>Collection</h4>
                                <Link to="/shop">Shop now</Link>
                            </div>
                        </div>
                        <div className="collection">
                            <img  src={collection2} alt={collection2} />
                            <div className="collection_detail">
                                <h4 className="collection_one">Summer</h4>
                                <h2>Hot</h2>
                                <h4>Collection</h4>
                                <Link to="/shop">Shop now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="collection collection_middle">
                            <img  src={collection3} alt={collection3} />
                            <div className="collection_detail">
                                <h4 className="collection_two">40% OFfer</h4>
                                <h4>No Selected Models</h4>
                                <Link to="/shop">Shop now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="collection">
                            <img  src={collection4} alt={collection4} />
                            <div className="collection_detail">
                                <h2 className='collection_two_next'>New</h2>
                                <h4 className="collection_one collection_one_next">Arrivals</h4>
                                <Link to="/shop">Shop now</Link>
                            </div>
                        </div>
                        <div className="collection">
                            <img  src={collection5} alt={collection5} />
                            <div className="collection_detail">
                                <h2 className='collection_two_next'>Hot</h2>
                                <h4 className="collection_one collection_one_next">Offer</h4>
                                <Link to="/shop">Shop now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Collection;