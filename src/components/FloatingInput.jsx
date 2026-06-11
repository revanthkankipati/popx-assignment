function FloatingInput({ label, required, type, placeholder, value, onChange, error }) {
  return (
    <div className="input-group">
      <label>
        {label}
        {required && <span className="required">*</span>}
      </label>
      <input
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
}

export default FloatingInput;
