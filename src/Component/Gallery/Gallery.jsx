function Gallery({gallery}) {
    return (
        <div>
            {gallery.map((item, index) => (
                <div key={index}>
                    <h2>{item.card.title}</h2>
                    <p>{item.card.discount}% de descuento</p>
                    <p>Precio: {item.card.price}</p>
                    {item.card.tag && <p>Tag: {item.card.tag}</p>}
                    <img src={item.card.img} alt={item.card.title} />
                </div>
            ))}
        </div>
    );
}

export default Gallery;