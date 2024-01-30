function Progressbar({ profitMargin }) {
  if (profitMargin >= 50) {
    return (
      <div
        className="h-3 w-full rounded-lg bg-neutral-gray-100"
        role="progressbar"
      >
        <div
          className="h-full w-full rounded-lg"
          style={{
            width: `${profitMargin}%`,
            backgroundColor: "var(--purple-color)",
          }}
        ></div>
      </div>
    );
  }
  if (profitMargin >= 45) {
    return (
      <div
        className="h-3 w-full rounded-lg bg-neutral-gray-100"
        role="progressbar"
      >
        <div
          className="h-full w-full rounded-lg"
          style={{
            width: `${profitMargin}%`,
            backgroundColor: "var(--blue-color)",
          }}
        ></div>
      </div>
    );
  }
  if (profitMargin > 25) {
    return (
      <div
        className="h-3 w-full rounded-lg bg-neutral-gray-100"
        role="progressbar"
      >
        <div
          className="h-full w-full rounded-lg"
          style={{
            width: `${profitMargin}%`,
            backgroundColor: "var(--orange-color)",
          }}
        ></div>
      </div>
    );
  }

  return (
    <div
      className="h-3 w-full rounded-lg bg-neutral-gray-100"
      role="progressbar"
    >
      <div
        className="h-full w-full rounded-lg"
        style={{
          width: `${profitMargin}%`,
          backgroundColor: "var(--error-color)",
        }}
      ></div>
    </div>
  );
}

export default Progressbar;
