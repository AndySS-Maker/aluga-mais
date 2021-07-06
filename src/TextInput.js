function TextInput(props) {
    return (
      <div className="form-group mb-3">
        <label htmlFor={props.id}>{props.label}</label>
        <input
          _id={props._id}
          type={props.type}
          className="form-control"
          onChange={props.onChange}
          value={props.value}
          name={props.name}
          required={props.required}
        />
      </div>
    );
  }
  
  export default TextInput;
  