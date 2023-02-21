import star from './assets/starsolid.svg';
const TestimonialCard = (props) => {
  const { name, imageName, rating, comments } = props;

  const getRatingArray = () => {
    let ratingArray = [];

    for (let i = 0; i < rating; i++) {
      ratingArray.push(i);
    }
    return <div className="testmonial-rating">
      {ratingArray.map(rat => <img className="rating-star" key={rat} src={star} alt="star" />)}
    </div>;
  };

  return (
    <div className="testimonial-card">
      {getRatingArray()}
      <div className='testimonial-customer'>
        <img className="customer-image" src={require(`./assets/${imageName}.jpg`)} alt={name} />
        <span>{name}</span>
      </div>
      <p>{comments}</p>

    </div>
  );
};

export default TestimonialCard;
