function Person(props) {
  const { firstName, lastName, email, img } = props;
  return (
    <div className="card">
      <img src={img} alt="" />
      <h2>
        {firstName} {lastName}
      </h2>

      <h3>{email}</h3>
    </div>
  );
}

export default Person;
