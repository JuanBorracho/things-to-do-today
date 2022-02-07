const Footer = ({ list }) => {
  return (
    <footer className="footer">
      {list.length > 1 ? (
        <p>You have {list.length} things left to do today.</p>
      ) : list.length === 0 ? (
        <p>You have nothing left to do today</p>
      ) : (
        <p>You have {list.length} thing left to do today</p>
      )}
    </footer>
  );
};

export default Footer;
