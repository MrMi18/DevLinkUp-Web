const Cards = (data) => {
    console.log(data)
  const { firstName, lastName, deignation } = data?.data;
  return (
    <div className="flex justify-center items-center">
      <div className="card card-compact bg-base-300 w-96 shadow-xl mt-2">
        <figure>
          <img
            className="rounded-sm"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH0U8GjYmI9TR8KiU8_8oebMzeY_2ufvB8A&s"
            alt="profile photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{deignation}</p>
          <div className="card-actions justify-end">
            <div className="flex mx-auto gap-3 ">
              <button className="btn btn-accent">Interest</button>
              <button className="btn btn-error">Ignore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
