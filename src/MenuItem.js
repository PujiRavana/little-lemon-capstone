const MenuItem = (props) => {
  const { imageName, title, price, description } = props;
  return (
    <div className="menu-item">
      <img className="menu-item-image" src={require(`./assets/${imageName}.jpg`)} alt="title"/>
      <div className="title-header">
        <h3>{title}</h3>
        <h4 className="item-price">{`$${price}`}</h4>
      </div>
      <p>{description}</p>
      <h4>Order a Delivery</h4>
    </div>

  );
}

export default MenuItem;
