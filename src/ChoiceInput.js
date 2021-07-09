function ChoiceInput(props) {
  return (
    <div className="form-check mb-3">
      <input
        className="form-check-input"
        type={props.type}
        _id={props._id}
        onChange={props.onChange}
        checked={props.checked}
        name={props.name}
        value={props.value}
        required={props.required}
      />
      <label htmlFor={props._id} className="form-check-label">
        {props.label}
      </label>
    </div>
  );
}

export default ChoiceInput;
