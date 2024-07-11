function DetailsItem({ detailsParam, title, Component }) {
  return (
    <p className="flex justify-between font-medium">
      <i className="flex gap-2 items-center not-italic">
        <Component />
        <span>{title}</span>
      </i>
      <span>{title==='Price' ? `$`+ detailsParam:detailsParam}</span>
    </p>
  );
}

export default DetailsItem;
