function ButtonHome() {
  const buttonHome = document.querySelector('.ButtonHome');
  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      buttonHome?.classList.remove('visible');
    } else {
      buttonHome?.classList.add('visible');
    }
  });
  return (
    // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <a href="#nav">
      <button className="ButtonHome">
        <img src="images/icons8-acima-dentro-de-um-círculo-50.png" alt="Home" />
      </button>
    </a>
  );
}

export default ButtonHome;
