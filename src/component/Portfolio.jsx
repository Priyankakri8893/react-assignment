const Portfolio= ({color, func}) => {
    return(
        <>
            <div className="background" style={color}>{func}</div>
        </>
    )
}

export default Portfolio;