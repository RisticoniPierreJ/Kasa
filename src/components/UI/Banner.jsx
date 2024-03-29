function Banner(props) {
    let showText = props.showText;
    const image = props.image;

    return (
        <>
            <div className="banner">
                <img
                    src={image}
                    alt="Paysage de la bannière"
                    className="banner_img"
                />
                {showText && (
                    <h1 className="banner_txt">Chez vous, partout et ailleurs</h1>
                )}
            </div>
        </>
    );
}

export default Banner;