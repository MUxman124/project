import "../styles/DiscoverSingle.scss";
const DiscoverSingle = ({data}) => {
    return (
        <div className="container">
            <div className="discover-single">
                <img src={data.image} alt="" />
                <h6 >{data.title}</h6>
                <span >{data.tag}</span>
            </div>
        </div>
    )
}

export default DiscoverSingle