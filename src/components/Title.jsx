function Title({ isCollaped, toggleCollapse, title, expand }) {
  return (
    <div className="mb-4 flex w-full justify-between">
      <h2 className="text-[18px] font-semibold leading-[26px] text-stat-color">
        {title}
      </h2>

      {expand !== "expand" ? (
        <div className="flex h-[37px] items-center gap-[10px]">
          <span>Sort by:</span>

          <select className="rounded-[20px] border-2 border-border-color bg-transparent px-2 py-[3px] text-stat-color">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
      ) : (
        <button
          className={`${isCollaped ? "text-primary-color" : "text-error-color"} text-[18px] font-medium leading-[26px]`}
          onClick={toggleCollapse}
        >
          {isCollaped ? "See All" : "See Less"}
        </button>
      )}
    </div>
  );
}

export default Title;
