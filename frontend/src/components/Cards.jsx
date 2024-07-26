import PropTypes from 'prop-types';

function Cards({ item }) {
  return (
    <div className="mt-6 mb-6 p-3">
      <div className="card bg-base-100 shadow-xl w-93 hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img src={item.image} alt={item.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions flex justify-between">
            <div className="badge badge-outline font-bold mt-3">
              rs. <del>{item.price}</del>
            </div>
            <button
              className="px-2 py-1 border-[2px] rounded-full cursor-pointer hover:bg-pink-500 hover:text-white duration-200"
              role="button"
              aria-label={`Buy ${item.name}`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Cards.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Cards;
